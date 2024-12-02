import { useEffect, useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Password } from "../PasswordsPage";

type onCreateOpts = {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

interface PasswordFormProps extends Omit<React.HTMLAttributes<HTMLFormElement>, "onSubmit"> {
    onSubmit?: (formData: Password, opts: onCreateOpts) => void;
    submitButtonText?: string;
    defaultValues?: Password;
}

export const PasswordForm: React.FC<PasswordFormProps> = ({
    onSubmit,
    submitButtonText,
    defaultValues,
    children,
    ...props
}) => {
    const [passwordForm, setPasswordForm] = useState<Password>(
        defaultValues || {
            password: "",
            service: "",
        },
    );
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordForm(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleCreatePassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(passwordForm, { setLoading: setIsLoading });
        }
    };

    useEffect(() => {
        defaultValues && setPasswordForm(defaultValues);
    }, [defaultValues]);

    return (
        <form className="flex flex-col gap-2" onSubmit={handleCreatePassword} {...props}>
            <div className="flex flex-row gap-2">
                <Input
                    name="service"
                    value={passwordForm.service}
                    placeholder="Сервис"
                    onChange={handleInputChange}
                />
                <Input
                    name="password"
                    value={passwordForm.password}
                    placeholder="Пароль"
                    onChange={handleInputChange}
                />
                <Button
                    type="submit"
                    className="ml-10"
                    disabled={
                        passwordForm.password === "" ||
                        passwordForm.service === "" ||
                        isLoading === true
                    }
                    isLoading={true}
                >
                    {submitButtonText || "создать новый пароль"}
                </Button>
            </div>
            {children}
        </form>
    );
};
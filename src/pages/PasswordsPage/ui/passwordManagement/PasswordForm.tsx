import { Password } from "pages/PasswordsPage/lib/contexts/passwordContext/lib/PasswordServiceContext";
import { useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

type onCreateOpts = {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface PasswordFormProps
    extends Omit<React.HTMLAttributes<HTMLFormElement>, "onSubmit" | "onChange"> {
    onSubmit?: (formData: Password, opts: onCreateOpts) => void;
    onChange?: (password: Partial<Password>) => void;
    submitButtonText?: string;
    values: Password;
}

export const PasswordForm: React.FC<PasswordFormProps> = ({
    onSubmit,
    onChange,
    submitButtonText,
    values,
    children,
    ...props
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange({ [e.target.name]: e.target.value });
    };

    const handleCreatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(values, { setIsLoading });
        }
    };

    return (
        <form className="flex flex-col gap-2" onSubmit={handleCreatePassword} {...props}>
            <div className="flex flex-row gap-2">
                <Input
                    name="service"
                    value={values.service}
                    placeholder="Сервис"
                    onChange={handleInputChange}
                />
                <Input
                    name="password"
                    value={values.password}
                    placeholder="Пароль"
                    onChange={handleInputChange}
                />
                <Button
                    type="submit"
                    className="ml-10"
                    disabled={values.password === "" || values.service === "" || isLoading === true}
                    isLoading={isLoading}
                >
                    {submitButtonText || "создать новый пароль"}
                </Button>
            </div>
            {children}
        </form>
    );
};

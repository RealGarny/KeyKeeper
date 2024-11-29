import { useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { PasswordForm } from "./PasswordsPage";

type onCreateOpts = {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

interface CreatePasswordFormProps {
    onCreate?: (formData: PasswordForm, opts: onCreateOpts) => void;
}

export const CreatePasswordForm: React.FC<CreatePasswordFormProps> = ({ onCreate }) => {
    const [passwordForm, setPasswordForm] = useState<PasswordForm>({ password: "", service: "" });
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
        if (onCreate) {
            onCreate(passwordForm, { setLoading: setIsLoading });
        }
    };

    return (
        <form className="flex flex-row gap-2" onSubmit={handleCreatePassword}>
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
            >
                создать новый пароль
            </Button>
        </form>
    );
};

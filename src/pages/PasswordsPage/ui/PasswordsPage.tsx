import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface PasswordsPageProps extends React.ComponentProps<"div"> {}

const PasswordsPage = ({ className }: PasswordsPageProps) => {
    const [passwords, setPasswords] = useState<any[]>([]);
    const [passwordForm, setPasswordForm] = useState<any>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setPasswordForm((prev: any) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    useEffect(() => {}, []);

    const handleCreatePassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPasswords(prev => {
            return [passwordForm, ...prev];
        });
    };

    return (
        <div>
            <p className="text-4xl">Сервисы-пароли</p>
            <form className="flex flex-row gap-2" onSubmit={handleCreatePassword}>
                <Input
                    name="service"
                    value={passwordForm.service}
                    placeholder="Сервис"
                    onChange={handleInputChange}
                />
                <div className="group/passwordInput relative w-full">
                    <Input
                        name="password"
                        value={passwordForm.passord}
                        placeholder="Пароль"
                        type="password"
                        onChange={handleInputChange}
                    />
                    <Button className="group-hover/passwordInput:visible  invisible absolute top-0 right-0 h-full">
                        скопировать
                    </Button>
                </div>
                <Button type="submit" className="ml-10">
                    создать новый пароль
                </Button>
            </form>
            <div>
                {passwords.map((password: any) => {
                    return (
                        <div>
                            <p>{password.service}</p>
                            <p>{password.password}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PasswordsPage;

import { useEffect, useState } from "react";
import { CreatePasswordForm } from "./CreatePasswordForm";
import { PasswordList } from "./PasswordList";

interface PasswordsPageProps extends React.ComponentProps<"div"> {}
export type PasswordForm = {
    password: string;
    service: string;
};

export type PasswordsEntry = {
    id: number;
} & PasswordForm;

const PasswordsPage = ({ className }: PasswordsPageProps) => {
    const [passwords, setPasswords] = useState<PasswordsEntry[]>([]);

    useEffect(() => {
        const pwds = localStorage.getItem("ServPwds");
        pwds && setPasswords(JSON.parse(pwds));
    }, []);

    const handlePasswordCreate: React.ComponentProps<
        typeof CreatePasswordForm
    >["onCreate"] = async (formData, { setLoading }) => {
        setLoading(true);
        try {
            const response = await handleSendToAPI();
            setPasswords(prev => {
                const newData = [
                    {
                        id: prev.length + 1,
                        ...formData,
                    },
                    ...prev,
                ];
                localStorage.setItem("ServPwds", JSON.stringify(newData));
                setLoading(false);
                return newData;
            });
            console.log("data sent");
        } catch (e: any) {
            console.log(e.data.message);
            setLoading(false);
        }
    };

    const handleSendToAPI = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve(true);
                }
                reject({ data: { message: "Сервис временно недоступен" } });
            }, 2000);
        });
    };

    return (
        <div className="px-3 max-w-5xl flex gap-5 flex-col mx-auto">
            <p className="text-4xl">Сервисы-пароли</p>
            <div className="flex flex-col gap-3">
                <CreatePasswordForm onCreate={handlePasswordCreate} />
                <PasswordList passwords={passwords} />
            </div>
        </div>
    );
};

export default PasswordsPage;

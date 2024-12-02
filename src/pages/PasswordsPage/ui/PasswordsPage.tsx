import { useEffect, useState } from "react";
import { PasswordForm } from "./passwordManagement/PasswordForm";
import { PasswordList } from "./PasswordList";
import { PasswordSettings } from "./passwordManagement/PasswordSettings";

interface PasswordsPageProps extends React.ComponentProps<"div"> {}
export type Password = {
    password: string;
    service: string;
};

export type PasswordsEntry = {
    id: number;
} & Password;

const PasswordsPage = ({ className }: PasswordsPageProps) => {
    const [passwords, setPasswords] = useState<PasswordsEntry[]>([]);

    useEffect(() => {
        const pwds = localStorage.getItem("ServPwds");
        pwds && setPasswords(JSON.parse(pwds));
    }, []);

    const handlePasswordCreate: React.ComponentProps<typeof PasswordForm>["onSubmit"] = async (
        formData,
        { setLoading },
    ) => {
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

    const handleChangePassword = async (id: number, values: Partial<PasswordsEntry>) => {
        if (values.id) {
            delete values["id"];
        }
        const updatedPasswords = passwords.map(entry =>
            id === entry.id ? { ...entry, ...values } : entry,
        );
        try {
            await handleSendToAPI();
            setPasswords(updatedPasswords);
            return true;
        } catch (e) {
            console.log("error");
            return false;
        }
    };

    const handleDeletePassword = (id: number) => {
        //se
    };

    return (
        <div className="px-3 max-w-5xl flex gap-5 flex-col mx-auto">
            <p className="text-4xl">Сервисы-пароли</p>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4 p-6">
                    <PasswordSettings />
                </div>
                <PasswordList changePassword={handleChangePassword} passwords={passwords} />
            </div>
        </div>
    );
};

export default PasswordsPage;

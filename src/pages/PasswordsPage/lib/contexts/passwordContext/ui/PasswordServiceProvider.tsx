import { useAPI } from "app/hooks/useAPI";
import { useEffect, useState } from "react";
import {
    PasswordsEntry,
    PasswordServiceContext,
    PasswordServiceContextValues,
} from "../lib/PasswordServiceContext";

interface PasswordServiceProviderProps {
    children?: React.ReactNode;
}

export const PasswordServiceProvider: React.FC<PasswordServiceProviderProps> = ({ children }) => {
    const [passwords, setPasswords] = useState<PasswordServiceContextValues["passwords"]>([]);
    const { handleSendToAPI } = useAPI();

    const handleChangePassword: PasswordServiceContextValues["handleChangePassword"] = async (
        id: number,
        values: Partial<PasswordsEntry>,
    ) => {
        if (values.id) {
            delete values["id"];
        }
        const updatedPasswords = passwords.map(entry =>
            id === entry.id ? { ...entry, ...values } : entry,
        );
        const response = await handleSendToAPI();
        setPasswords(updatedPasswords);

        return { mesage: "done" };
    };

    const handlePasswordCreate: PasswordServiceContextValues["handlePasswordCreate"] =
        async formData => {
            const response = await handleSendToAPI();
            setPasswords(prev => {
                const newData = [
                    {
                        ...formData,
                        id: prev.length + 1,
                    },
                    ...prev,
                ];
                localStorage.setItem("ServPwds", JSON.stringify(newData));
                return newData;
            });
            return { mesage: "done" };
        };

    useEffect(() => {
        const pwds = localStorage.getItem("ServPwds");
        pwds && setPasswords(JSON.parse(pwds));
    }, []);

    const value = {
        handleChangePassword,
        handlePasswordCreate,
        passwords,
    };

    return (
        <PasswordServiceContext.Provider value={value}>{children}</PasswordServiceContext.Provider>
    );
};

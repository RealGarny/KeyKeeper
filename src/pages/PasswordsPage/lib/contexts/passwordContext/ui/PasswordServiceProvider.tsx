import { useAPI } from "app/hooks/useAPI";
import { useEffect, useState } from "react";
import {
    ApiResponse,
    PasswordsEntry,
    PasswordServiceContext,
    PasswordServiceContextValues,
} from "../lib/PasswordServiceContext";
import { useToast } from "shared/lib/useToast/useToast";

interface PasswordServiceProviderProps {
    children?: React.ReactNode;
}

export const PasswordServiceProvider: React.FC<PasswordServiceProviderProps> = ({ children }) => {
    const [passwords, setPasswords] = useState<PasswordServiceContextValues["passwords"]>([]);
    const { handleSendToAPI } = useAPI();
    const { toast } = useToast();

    const changePassword: PasswordServiceContextValues["changePassword"] = async (
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

        return { message: "done" };
    };

    const withApiResponse = (
        { title }: { title: string },
        cb: (...args: any) => ApiResponse,
    ): ((...args: any) => ApiResponse) => {
        const toastParams: Parameters<typeof toast>[0] = {
            title: title,
        };
        return async (...args) => {
            let result = { message: "" };
            try {
                const res = await cb(...args);
                toastParams.description = res.message;
                result = res;
            } catch (e: any) {
                toastParams.variant = "destructive";
                toastParams.description = e.message;
                result = e;
            }
            toast(toastParams);
            return result;
        };
    };

    const createPassword: PasswordServiceContextValues["createPassword"] = withApiResponse(
        { title: "Создание пароля" },
        async formData => {
            try {
                await handleSendToAPI();
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
                return { message: "Пароль успешно создан!" };
            } catch (e) {
                return { message: "Непредвиденная ошибка" };
            }
        },
    );

    const deletePassword: PasswordServiceContextValues["deletePassword"] = async id => {
        return { message: "" };
    };

    useEffect(() => {
        const pwds = localStorage.getItem("ServPwds");
        pwds && setPasswords(JSON.parse(pwds));
    }, []);

    const value = {
        changePassword,
        createPassword,
        deletePassword,
        passwords,
    };

    return (
        <PasswordServiceContext.Provider value={value}>{children}</PasswordServiceContext.Provider>
    );
};

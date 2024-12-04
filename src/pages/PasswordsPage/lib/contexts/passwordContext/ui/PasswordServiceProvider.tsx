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
    const [initialPasswords, setInitialPasswords] = useState<
        PasswordServiceContextValues["passwords"]
    >([]);
    const [passwords, setPasswords] = useState<PasswordServiceContextValues["passwords"]>([]);
    const { handleSendToAPI } = useAPI();
    const { toast } = useToast();

    const resetPasswordsList = () => {
        setPasswords(initialPasswords);
    };

    const changePasswordsList: PasswordServiceContextValues["changePasswordsList"] = cb => {
        setPasswords(cb);
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
                console.log("error");
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
                            id: prev[0] ? prev[0].id + 1 : 1,
                        },
                        ...prev,
                    ];
                    localStorage.setItem("ServPwds", JSON.stringify(newData));
                    return newData;
                });
                return { message: "Пароль успешно создан!" };
            } catch (e) {
                throw { message: "Непредвиденная ошибка" };
            }
        },
    );

    const changePassword: PasswordServiceContextValues["changePassword"] = withApiResponse(
        { title: "Редактирование пароля" },
        async (id: number, values: Partial<PasswordsEntry>) => {
            const entryToEdit = passwords.findIndex(password => password.id === id);
            if (entryToEdit === -1) return { message: "Элемент не был найден" };
            try {
                await handleSendToAPI();
                setPasswords(prev => {
                    prev[entryToEdit] = { ...prev[entryToEdit], ...values };

                    localStorage.setItem("ServPwds", JSON.stringify(prev));
                    return prev;
                });

                return { message: "done" };
            } catch (e) {
                throw { message: "Произошла ошибка. попробуйте позже." };
            }
        },
    );

    const deletePassword: PasswordServiceContextValues["deletePassword"] = withApiResponse(
        { title: "Удаление пароля" },
        async id => {
            try {
                await handleSendToAPI();
                setPasswords(prev => {
                    const newData = prev.filter(item => item.id === id);
                    localStorage.setItem("ServPwds", JSON.stringify(newData));
                    return newData;
                });
                return { message: "Пароль успешно удален!" };
            } catch (e) {
                throw { message: "Непредвиденная ошибка" };
            }
        },
    );

    useEffect(() => {
        const pwds = localStorage.getItem("ServPwds");
        if (pwds) {
            setPasswords(JSON.parse(pwds));
            setInitialPasswords(JSON.parse(pwds));
        }
    }, []);

    const value = {
        initialPasswords,
        resetPasswordsList,
        changePasswordsList,
        changePassword,
        createPassword,
        deletePassword,
        passwords,
    };

    return (
        <PasswordServiceContext.Provider value={value}>{children}</PasswordServiceContext.Provider>
    );
};

import { createContext, Dispatch } from "react";

export type Password = {
    password: string;
    service: string;
};

export type PasswordsEntry = {
    id: number;
} & Password;

export interface PasswordServiceContextValues {
    handleChangePassword: (
        id: number,
        values: Partial<PasswordsEntry>,
    ) => Promise<{ mesage: string }>;
    handlePasswordCreate: (formData: Password) => Promise<{ mesage: string }>;
    passwords: PasswordsEntry[];
}

export const PasswordServiceContext = createContext<PasswordServiceContextValues | null>(null);

import { createContext, Dispatch } from "react";

export type Password = {
    password: string;
    service: string;
};

export type PasswordsEntry = {
    id: number;
} & Password;

export type ApiResponse = Promise<{ message: string }>;

export interface PasswordServiceContextValues {
    changePassword: (id: number, values: Partial<PasswordsEntry>) => ApiResponse;
    createPassword: (formData: Password) => ApiResponse;
    deletePassword: (id: number) => ApiResponse;
    passwords: PasswordsEntry[];
}

export const PasswordServiceContext = createContext<PasswordServiceContextValues | null>(null);

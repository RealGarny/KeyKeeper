import { useContext } from "react";
import { PasswordServiceContext } from "./PasswordServiceContext";

export const usePasswordService = () => {
    const context = useContext(PasswordServiceContext);
    if (!context) {
        throw new Error("Password Service context is being called outside the provider.");
    }
    return context;
};

import { useEffect, useState } from "react";
import { PasswordForm } from "./passwordManagement/PasswordForm";
import { PasswordList } from "./PasswordList";
import { PasswordSettings } from "./passwordManagement/PasswordSettings";
import { PasswordServiceProvider } from "../lib/contexts/passwordContext/ui/PasswordServiceProvider";
import { CreatePasswordForm } from "./passwordManagement/CreatePasswordForm";

interface PasswordsPageProps extends React.ComponentProps<"div"> {}

const PasswordsPage = ({ className }: PasswordsPageProps) => {
    const handleDeletePassword = (id: number) => {
        //se
    };

    return (
        <div className="px-3 max-w-5xl flex gap-5 flex-col mx-auto">
            <p className="text-4xl">Сервисы-пароли</p>
            <div className="flex flex-col gap-3">
                <PasswordServiceProvider>
                    <CreatePasswordForm />
                    <PasswordList />
                </PasswordServiceProvider>
            </div>
        </div>
    );
};

export default PasswordsPage;

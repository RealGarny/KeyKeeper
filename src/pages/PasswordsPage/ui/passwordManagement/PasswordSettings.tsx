import { useState } from "react";
import { PasswordsEntry } from "../PasswordsPage";
import { PasswordForm } from "./PasswordForm";
import { PasswordFormSettings } from "./PasswordGenerationSettings";

interface PasswordSettingsProps {
    initialValues?: PasswordsEntry;
    submitButtonText?: string;
}

export const PasswordSettings: React.FC<PasswordSettingsProps> = ({
    initialValues,
    submitButtonText,
}) => {
    const [settings, setSettings] = useState<any>(initialValues || {});

    const handlePasswordChange = (psw: string) => {
        console.log(psw);
        setSettings((prev: any) => {
            if (prev) {
                return { ...prev, password: psw };
            } else {
                return { password: psw };
            }
        });
    };

    return (
        <PasswordForm defaultValues={settings} submitButtonText={submitButtonText}>
            <PasswordFormSettings
                onChange={handlePasswordChange}
                password={settings.password}
            ></PasswordFormSettings>
        </PasswordForm>
    );
};

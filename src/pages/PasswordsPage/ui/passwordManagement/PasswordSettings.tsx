import { useState } from "react";
import { PasswordForm, PasswordFormProps } from "./PasswordForm";
import { PasswordFormSettings } from "./PasswordGenerationSettings";
import {
    Password,
    PasswordsEntry,
} from "pages/PasswordsPage/lib/contexts/passwordContext/lib/PasswordServiceContext";

interface PasswordSettingsProps {
    initialValues?: PasswordsEntry;
    submitButtonText?: string;
    onSubmit: React.ComponentProps<typeof PasswordForm>["onSubmit"];
}

export const PasswordSettings: React.FC<PasswordSettingsProps> = ({
    initialValues,
    onSubmit,
    submitButtonText,
}) => {
    const [settings, setSettings] = useState<Password>(
        initialValues || {
            password: "",
            service: "",
        },
    );

    const handlePasswordChange = (newKeys: Partial<PasswordsEntry>) => {
        setSettings((prev: any) => {
            if (prev) {
                return { ...prev, ...newKeys };
            } else {
                return newKeys;
            }
        });
    };

    return (
        <PasswordForm
            onSubmit={onSubmit}
            onChange={handlePasswordChange}
            values={settings}
            submitButtonText={submitButtonText}
        >
            <PasswordFormSettings
                onChange={handlePasswordChange}
                password={settings ? settings.password : undefined}
            ></PasswordFormSettings>
        </PasswordForm>
    );
};

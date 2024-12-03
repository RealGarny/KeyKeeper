import { useState } from "react";
import { PasswordForm, PasswordFormProps } from "./PasswordForm";
import { PasswordFormSettings } from "./PasswordGenerationSettings";
import {
    Password,
    PasswordsEntry,
} from "pages/PasswordsPage/lib/contexts/passwordContext/lib/PasswordServiceContext";

interface PasswordSettingsProps extends PasswordFormProps {
    initialValues?: PasswordsEntry;
    submitButtonText?: string;
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
        console.log(newKeys);
        setSettings((prev: any) => {
            if (prev) {
                return { ...prev, ...newKeys };
            } else {
                return newKeys;
            }
        });
    };

    console.log(settings);

    return (
        <PasswordForm
            onSubmit={onSubmit}
            defaultValues={settings}
            submitButtonText={submitButtonText}
        >
            <PasswordFormSettings
                onChange={handlePasswordChange}
                password={settings ? settings.password : undefined}
            ></PasswordFormSettings>
        </PasswordForm>
    );
};

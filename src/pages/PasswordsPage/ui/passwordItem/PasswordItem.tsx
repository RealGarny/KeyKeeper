import { Card, CardTitle } from "shared/ui/Card/Card";
import { useState } from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { PasswordsEntry } from "pages/PasswordsPage/lib/contexts/passwordContext/lib/PasswordServiceContext";
import { PasswordItemActions } from "./PasswordItemActions";
import { PasswordSettings } from "../passwordManagement/PasswordSettings";

type PasswordEventCallback = (password: PasswordsEntry) => void;
type EditFunction = React.ComponentProps<typeof PasswordSettings>["onSubmit"];

interface PasswordItemProps {
    password: PasswordsEntry;
    onDelete?: (id: number) => Promise<void>;
    onEditOpen?: PasswordEventCallback;
    onEditSave?: EditFunction;
    onEditClose?: PasswordEventCallback;
    onChange?: (values: Partial<PasswordsEntry>) => void;
}

export const PasswordItem: React.FC<PasswordItemProps> = ({
    password,
    onDelete,
    onEditClose,
    onEditOpen,
    onEditSave,
}) => {
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
    const handleDelete = () => {
        if (onDelete) {
            onDelete(password.id);
        }
    };

    const handleEditClick = () => {
        setIsEditOpen(prev => {
            if (prev) {
                onEditClose && onEditClose(password);
            } else {
                onEditOpen && onEditOpen(password);
            }
            return !prev;
        });
    };
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(password.password);
    };

    const handleEditSave: EditFunction = (password, opts) => {
        if (onEditSave) {
            onEditSave(password, opts);
        }
    };

    return (
        <Card className="flex flex-col gap-4 p-6">
            <TooltipProvider>
                <div className="flex flex-row justify-between w-full">
                    <CardTitle>
                        {password.id}. {password.service}
                    </CardTitle>
                    <PasswordItemActions
                        isEdit={isEditOpen}
                        onCopy={handleCopyToClipboard}
                        onDelete={handleDelete}
                        onEditOpen={handleEditClick}
                    />
                </div>
                {isEditOpen && (
                    <PasswordSettings
                        onSubmit={handleEditSave}
                        initialValues={password}
                        submitButtonText="Применить"
                    />
                )}
            </TooltipProvider>
        </Card>
    );
};

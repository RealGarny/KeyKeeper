import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "shared/ui/Card/Card";
import { PasswordsEntry } from "./PasswordsPage";
import { Button } from "shared/ui/Button/Button";
import { useState } from "react";
import { CreatePasswordForm } from "./CreatePasswordForm";

type PasswordEventCallback = (password: PasswordsEntry) => void;

interface PasswordItemProps {
    password: PasswordsEntry;
    onDelete?: PasswordEventCallback;
    onEditOpen?: PasswordEventCallback;
    onEditSave?: PasswordEventCallback;
    onEditClose?: PasswordEventCallback;
}

export const PasswordItem: React.FC<PasswordItemProps> = ({
    password,
    onDelete,
    onEditClose,
    onEditOpen,
    onEditSave,
}) => {
    const [isEditOpen, setIsEditOpen] = useState<boolean>(true);
    const handleDelete = () => {
        if (onDelete) {
            onDelete(password);
        }
    };

    const handleEditOpen = () => {
        if (onEditOpen) {
            onEditOpen(password);
        }
    };

    const handleEditSave = () => {
        if (onEditSave) {
            onEditSave(password);
        }
    };

    const handleEditClose = () => {
        if (onEditClose) {
            onEditClose(password);
        }
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(password.password);
    };

    return (
        <Card className="flex flex-col gap-4 p-6">
            <div className="flex flex-row justify-between w-full">
                <CardTitle>
                    {password.id}. {password.service}
                </CardTitle>
                <div className="flex gap-2">
                    <Button onClick={handleEditOpen}>edit</Button>
                    <Button onClick={handleCopyToClipboard}>copy</Button>
                    <Button onClick={handleDelete}>delete</Button>
                </div>
            </div>
            {isEditOpen && <CreatePasswordForm />}
        </Card>
    );
};

import { Card, CardTitle } from "shared/ui/Card/Card";
import { Button } from "shared/ui/Button/Button";
import { useState } from "react";
import { Clipboard, Pencil, PencilOff, Trash } from "lucide-react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "shared/ui/Tooltip/Tooltip";
import { PasswordSettings } from "./passwordManagement/PasswordSettings";
import { PasswordsEntry } from "../lib/contexts/passwordContext/lib/PasswordServiceContext";

type PasswordEventCallback = (password: PasswordsEntry) => void;

interface PasswordItemProps {
    password: PasswordsEntry;
    onDelete?: PasswordEventCallback;
    onEditOpen?: PasswordEventCallback;
    onEditSave?: PasswordEventCallback;
    onEditClose?: PasswordEventCallback;
    onChange?: (values: Partial<PasswordsEntry>) => void;
}

export const PasswordItem: React.FC<PasswordItemProps> = ({
    password,
    onDelete,
    onChange,
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

    const handleEditSave = () => {
        if (onEditSave) {
            onEditSave(password);
        }
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(password.password);
    };

    return (
        <Card className="flex flex-col gap-4 p-6">
            <TooltipProvider>
                <div className="flex flex-row justify-between w-full">
                    <CardTitle>
                        {password.id}. {password.service}
                    </CardTitle>
                    <div className="flex gap-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant={"ghost"} onClick={handleEditClick}>
                                    {isEditOpen ? <PencilOff /> : <Pencil />}
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                {isEditOpen ? "Отменить редактирование" : "Редактировать"}
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant={"ghost"} onClick={handleCopyToClipboard}>
                                    <Clipboard />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>скопировать</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant={"ghost"} onClick={handleDelete}>
                                    <Trash />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Удалить</TooltipContent>
                        </Tooltip>
                    </div>
                </div>
                {isEditOpen && (
                    <PasswordSettings initialValues={password} submitButtonText="Применить" />
                )}
            </TooltipProvider>
        </Card>
    );
};

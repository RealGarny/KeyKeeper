import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "shared/ui/AlertDialog/AlertDialog";
import { Button } from "shared/ui/Button/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "shared/ui/Tooltip/Tooltip";
import { Clipboard, Pencil, PencilOff, Trash } from "lucide-react";

interface PasswordItemActions {
    onEditOpen: () => void;
    onDelete: () => void;
    onCopy: () => void;
    isEdit: boolean;
}

export const PasswordItemActions: React.FC<PasswordItemActions> = ({
    onCopy,
    onDelete,
    onEditOpen,
    isEdit,
}) => {
    return (
        <div className="flex gap-2">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant={"ghost"} onClick={onEditOpen}>
                        {isEdit ? <PencilOff /> : <Pencil />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    {isEdit ? "Отменить редактирование" : "Редактировать"}
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant={"ghost"} onClick={onCopy}>
                        <Clipboard />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>скопировать</TooltipContent>
            </Tooltip>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant={"ghost"}>
                        <Trash />
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Удаление пароля</AlertDialogTitle>
                        <AlertDialogDescription>
                            Это действие невозможно отменить. Это приведет к безвозвратному удалению
                            вашего пароля.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Отменить</AlertDialogCancel>
                        <AlertDialogAction onClick={onDelete}>Подтвердить</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

import { PasswordsEntry } from "../lib/contexts/passwordContext/lib/PasswordServiceContext";
import { usePasswordService } from "../lib/contexts/passwordContext/lib/usePasswordService";
import { PasswordItem } from "./passwordItem/PasswordItem";

export const PasswordList: React.FC = () => {
    const { changePassword, deletePassword, passwords } = usePasswordService();

    const handleChangeItem: React.ComponentProps<typeof PasswordItem>["onEditSave"] = async (
        entry: Partial<PasswordsEntry>,
        { setIsLoading },
    ) => {
        if (!entry.id) return;
        setIsLoading(true);
        await changePassword(entry.id, entry);
        setIsLoading(false);
    };

    const handleDeleteItem = async (id: number) => {
        deletePassword(id);
    };

    return passwords.map((password: any) => {
        return (
            <PasswordItem
                onEditSave={handleChangeItem}
                onDelete={handleDeleteItem}
                key={password.id}
                password={password}
            />
        );
    });
};

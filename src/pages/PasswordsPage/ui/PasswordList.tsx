import { PasswordsEntry } from "../lib/contexts/passwordContext/lib/PasswordServiceContext";
import { usePasswordService } from "../lib/contexts/passwordContext/lib/usePasswordService";
import { PasswordItem } from "./PasswordItem";

export const PasswordList: React.FC = () => {
    const { changePassword, deletePassword, passwords } = usePasswordService();

    const handleItemChange = (entry: Partial<PasswordsEntry>) => {
        if (!entry.id) return;
        changePassword(entry.id, entry);
    };

    const handleDeleteItem = (id: number) => {
        deletePassword(id);
    };

    return passwords.map((password: any) => {
        return (
            <PasswordItem
                onChange={handleItemChange}
                /*onDelete={handleDeleteItem}*/ key={password.id}
                password={password}
            />
        );
    });
};

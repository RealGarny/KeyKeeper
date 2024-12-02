import { PasswordItem } from "./PasswordItem";
import { PasswordsEntry } from "./PasswordsPage";

interface PasswordListProps {
    passwords: PasswordsEntry[];
    changePassword: (id: number, values: Partial<PasswordsEntry>) => void;
}

export const PasswordList: React.FC<PasswordListProps> = ({ passwords, changePassword }) => {
    const handleItemChange = (entry: Partial<PasswordsEntry>) => {
        if (!entry.id) return;
        changePassword(entry.id, entry);
    };
    return passwords.map((password: any) => {
        return <PasswordItem onChange={handleItemChange} key={password.id} password={password} />;
    });
};

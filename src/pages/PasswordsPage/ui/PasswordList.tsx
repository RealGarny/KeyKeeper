import { PasswordItem } from "./PasswordItem";
import { PasswordsEntry } from "./PasswordsPage";

interface PasswordListProps {
    passwords: PasswordsEntry[];
}

export const PasswordList: React.FC<PasswordListProps> = ({ passwords }) => {
    return passwords.map((password: any) => {
        return <PasswordItem key={password.id} password={password} />;
    });
};

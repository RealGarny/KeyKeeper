import { PasswordsEntry } from "../lib/contexts/passwordContext/lib/PasswordServiceContext";
import { usePasswordService } from "../lib/contexts/passwordContext/lib/usePasswordService";
import { PasswordItem } from "./PasswordItem";

export const PasswordList: React.FC = () => {
    const { handleChangePassword, passwords } = usePasswordService();

    const handleItemChange = (entry: Partial<PasswordsEntry>) => {
        if (!entry.id) return;
        handleChangePassword(entry.id, entry);
    };
    return passwords.map((password: any) => {
        return <PasswordItem onChange={handleItemChange} key={password.id} password={password} />;
    });
};

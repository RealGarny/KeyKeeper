import { usePasswordService } from "pages/PasswordsPage/lib/contexts/passwordContext/lib/usePasswordService";
import { PasswordSettings } from "./PasswordSettings";

export const CreatePasswordForm = () => {
    const { createPassword } = usePasswordService();

    const handleSubmit: React.ComponentProps<typeof PasswordSettings>["onSubmit"] = async (
        p,
        { setIsLoading },
    ) => {
        setIsLoading(true);
        createPassword(p);
        setIsLoading(false);
    };

    return (
        <div className="flex flex-col gap-4 p-6">
            <PasswordSettings onSubmit={handleSubmit} />
        </div>
    );
};

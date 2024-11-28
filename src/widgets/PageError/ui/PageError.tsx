import { Button } from "shared/ui/Button/Button";

export const PageError = ({ className }: React.ComponentProps<"div">) => {
    const reloadPage = () => {
        location.reload();
    };

    return (
        <div>
            <p>Случилась непредвиденная ошибка</p>
            <Button onClick={reloadPage}>перезапустить страницу</Button>
        </div>
    );
};

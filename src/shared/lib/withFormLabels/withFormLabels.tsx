import { cn } from "shared/lib/cn/cn";

export interface withFormLabelsParams extends React.ComponentProps<"div"> {
    children: React.ReactNode;
    label?: {
        text: string;
        position: "before" | "after";
    };
    className?: string;
    disabled?: boolean;
}

export const WithFormLabels = ({
    children,
    label,
    className,
    disabled,
    ...props
}: withFormLabelsParams) => {
    return (
        <div className={cn("flex gap-2 flex-1 items-center", className)} {...props}>
            {label && label.position === "before" && (
                <p className={Boolean(disabled) ? "opacity-50" : ""}>{label.text}</p>
            )}
            {children}
            {label && label.position === "after" && (
                <p className={Boolean(disabled) ? "opacity-50" : ""}>{label.text}</p>
            )}
        </div>
    );
};

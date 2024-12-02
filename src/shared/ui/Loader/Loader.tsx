import { cn } from "shared/lib/cn/cn";
import * as cls from "./Loader.module.scss";

interface LoaderProps {
    className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className }) => {
    return <span className={cn(cls["loader"], "animate-spin", className)}></span>;
};

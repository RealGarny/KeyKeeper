import * as cls from "./PageLoader.module.scss";

interface PageLoaderProps extends React.ComponentProps<"div"> {}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return <span className={cls.loader}></span>;
};

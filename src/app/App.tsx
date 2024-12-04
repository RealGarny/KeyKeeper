import "./styles/index.scss";
import { AppRouter } from "./providers/Router";
import { Suspense } from "react";
import { Toaster } from "shared/ui/Toaster/Toaster";
const App: React.FC = () => {
    return (
        <div>
            <Suspense fallback={""}>
                <div className="content-page">
                    <AppRouter />
                </div>
                <Toaster />
            </Suspense>
        </div>
    );
};

export default App;

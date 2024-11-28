import "./styles/index.scss";
import { AppRouter } from "./providers/Router";
import { Suspense } from "react";
const App: React.FC = () => {
    return (
        <div>
            <Suspense fallback={""}>
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;

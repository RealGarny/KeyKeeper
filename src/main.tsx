import { createRoot } from "react-dom/client";
import App from "app/App";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

const root = createRoot(document.getElementById("root")!);

root.render(
    <BrowserRouter basename="/KeyKeeper/">
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </BrowserRouter>,
);

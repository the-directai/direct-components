import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorView } from "./lib";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <React.StrictMode>
        <ErrorView />
    </React.StrictMode>,
);

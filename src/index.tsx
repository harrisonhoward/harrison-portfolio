import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Entry point
import App from "./App";

// Resources
import "./core/ClassNameGenerator";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

import * as React from "react";
import ReactDOM from "react-dom/client";
// npm i react-router-dom 安装最新版，不用加版本号
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Demo from "./components/Demo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <Demo />
    </div>
);

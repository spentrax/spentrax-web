import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles.css";

import App from "./App";
import { LoaderProvider } from "./context/LoaderProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </React.StrictMode>
);
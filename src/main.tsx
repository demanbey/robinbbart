import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="font-serif h-dvh mx-auto">
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/landingpage.jpg')",
        }}
      >
        <App />
      </div>
    </div>
  </StrictMode>
);

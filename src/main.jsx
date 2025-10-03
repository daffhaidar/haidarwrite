import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { register as registerSW } from "./utils/serviceWorker.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Register service worker for caching and offline functionality
if (import.meta.env.PROD) {
  registerSW({
    onSuccess: () => {
      // App is cached and ready for offline use
    },
    onUpdate: () => {
      // New content available, please refresh
    },
  });
}

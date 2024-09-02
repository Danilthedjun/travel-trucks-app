import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Импортируем Provider из react-redux
import { PersistGate } from "redux-persist/integration/react"; // Импортируем PersistGate для redux-persist
import App from "./components/App/App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { store, persistor } from "./redux/store"; // Импортируем store и persistor

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* Оборачиваем приложение в Provider */}
      <PersistGate loading={null} persistor={persistor}>
        {" "}
        {/* Оборачиваем в PersistGate */}
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);

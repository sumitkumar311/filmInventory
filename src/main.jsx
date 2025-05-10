import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter as Router } from "react-router-dom";
import { store } from './store/store.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Provider store={store}>
    <Router >
      <App />
    </Router>
    </Provider>
  </StrictMode>
);

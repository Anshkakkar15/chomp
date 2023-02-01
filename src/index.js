import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/Global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Store } from "./Components/Context/Store";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "react-scroll-to-top";
import AutoScroll from "./Components/ScrollToTop/AutoScroll";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AutoScroll>
        <Store>
          <App />
          <Toaster containerStyle={{ zIndex: "99999" }} />
          <ScrollToTop smooth style={{ backgroundColor: "#35b8be" }} />
        </Store>
      </AutoScroll>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

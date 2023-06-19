import React from "react";
import ReactDOM from "react-dom/client";
// import StartRatting from "./StartRatting";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRatting message={["terrible", "bad", "okay", "good", "amazing"]} /> */}
  </React.StrictMode>
);

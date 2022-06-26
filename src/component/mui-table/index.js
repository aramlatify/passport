import React from "react";
import ReactDOM from "react-dom";
import A from "./A";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<A />, document.querySelector("#root"));
registerServiceWorker();

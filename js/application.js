// .keep
import "../scss/application.scss";
import "../index.html";

import { parallaxInit } from "./lib/parallax.js";

import Routes from "./router.jsx";
import ReactDOM from  "react-dom";

ReactDOM.render(Routes(), document.getElementById('root'));

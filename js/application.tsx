import "../css/application.css";
import AppRoutes from "./router";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")!);

root.render(AppRoutes());

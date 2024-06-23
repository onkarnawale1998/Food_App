import React from "react";
import { createRoot } from "react-dom/client";

const App = () => <h1>Hello this basic react template made with parcel ❤️🚀 </h1>;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
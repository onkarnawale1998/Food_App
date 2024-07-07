import React from "react";
import { createRoot } from "react-dom/client";

const App = () => (
  <h1>Hello this basic react template made with parcel ❤️🚀 </h1>
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
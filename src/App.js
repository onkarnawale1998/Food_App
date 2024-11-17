import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body />
  </div>;
}
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<AppLayout />);
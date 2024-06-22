import React from "react";
import ReactDOM from "react-dom/client";
// JavaScript Code
const heading = document.createElement("h1");
heading.textContent = "Hello World from JavaScript";
document.querySelector(".hello").appendChild(heading);

// React Code
const heading1 = React.createElement(
  "h1",
  { id: "title" },
  "Hello World from React"
); // heading1 is a react element/object not actual h1 element
const root = ReactDOM.createRoot(document.querySelector("#root"));

// if we haved div with multople children then do as follow
const parent = React.createElement("div", { id: "parent" }, [
    "Hello World from parent",
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello World from child 1"),
    React.createElement("h2", {}, "Hello World from child 1"),
    React.createElement("h3", {}, "Hello World from child 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello World from child 2"),
    React.createElement("h2", {}, "Hello World from child 2"),
    React.createElement("h3", {}, "Hello World from child 2"),
  ]),
]);
root.render([heading1, parent]);

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
root.render(heading1);

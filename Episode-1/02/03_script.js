/*
<div id="parent">
    <div id=child>
    <h1>I'm h1 tag</h1>
     </div>
</div>

*ReactElement is an Object => it converts to
HTML(then Browser understands and print)
*/

const parentDiv = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "I'm h1 tag"))
);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentDiv);
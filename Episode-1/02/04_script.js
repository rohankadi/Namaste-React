/*
<div id="parent">
      <div id=child>
            //siblings
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
       </div>
</div>


h1 and h2 are siblings so we have to write it in an array
*/

 const parentElem = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "I am H1 tag"), React.createElement("h2", {}, "I am H2 tag")]
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentElem);
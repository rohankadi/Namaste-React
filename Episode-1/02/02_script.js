const heading = React.createElement("h1", {id : "headerElem", xyz : "extra"}, "Hello from react js");

//create element is an 'Object' 
// console.log(heading) 

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(heading);

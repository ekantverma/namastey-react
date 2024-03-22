// Nested 
const parent = React.createElement("div", {id : "parent"},
               React.createElement("div", {id : "child"},[
               React.createElement("h1", {}, "Hii There 3rd H1"),
               React.createElement("h2", {}, "Hii There 3rd H2")]));

               console.log(parent);

const heading = React.createElement("h1", {id : "heading"}, "Hello React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 

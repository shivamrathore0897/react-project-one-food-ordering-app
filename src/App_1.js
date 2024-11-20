//? create HELLO WORLD using vanilla JS
/*
let heading = document.createElement("h1");
heading.innerHTML = "Hello World from JS";
document.getElementById("root").appendChild(heading);
*/

//? create HELLO WORLD using React CDNs
/*
let heading = React.createElement("h1", { id: "heading" }, "Hello World from React");
// console.log("🚀 ~ heading:", heading);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

//? lets create a nested html structure like this >
/*
     <div id="parent">
         <div id="children">
             <h1>I am h1 tag</h1>
             <h2>I am h2 tag</h2>
         </div>
     </div> 
*/

import React from "react";
import ReactDOM from "react-dom/client";

/*
 let parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "children" },
        [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")]));[]

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

// episode 3 --------------------------------

//? without jsx creating h1
/*
let heading = React.createElement("h1", { id: "heading" }, "Hello World from React without JSX");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

//? with jsx creating h1
/*
let JSXHeading = (
  <h1 className="heading-class" tabIndex="1">
    Hello World from React JSX
  </h1>
);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JSXHeading);
*/

//? React functional component

let HeadingComponent = () => {
  return (
    <p className="heading-class">Hello World from React Functional Component</p>
  );
};

let JSXHeading = (
  <h1 className="heading-class" tabIndex="1">
    Hello World from React JSX inside a Functional Component
    {<HeadingComponent />} - from inside a jsx element
  </h1>
);

// ?component Composition - a component inside an componet :-
let MainDivContainer = () => {
  return (
    <div id="container">
      <HeadingComponent />
      {<hr />}
      <HeadingComponent> </HeadingComponent>
      {<hr />}
      {HeadingComponent()} - calling just like a normal function
      {<hr />}
      <h2>{100 + 100}</h2>
      {<hr />}
      {JSXHeading}
      {<hr />}
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainDivContainer />);


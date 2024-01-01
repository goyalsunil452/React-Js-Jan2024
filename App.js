import React from 'react';   
/*
*Plain javascript does not understand the 
import that why we need provide type = "module" 
in index.html
*/
// import ReactDOM from 'react-dom';  this wont work as react changes the path
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div",{id:"parent", class:"parent-class"},
  [React.createElement("div",{id:'child1'},"inner div 1"),
  React.createElement("div",{id:'child1'},"inner div 2"),
  React.createElement("div",{id:'child1'},"inner div 3")]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
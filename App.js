const parent = React.createElement("div",{id:"parent", class:"parent-class"},
  [React.createElement("div",{id:'child1'},"inner div 1"),
  React.createElement("div",{id:'child1'},"inner div 2")]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
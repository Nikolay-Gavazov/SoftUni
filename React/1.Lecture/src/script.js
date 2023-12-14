import "../../node_modules/react/umd/react.production.min.js";
import "../../node_modules/react-dom/umd/react-dom.production.min.js";

const rootDom = document.getElementById("root");

const root = ReactDOM.createRoot(rootDom);

/* const reactHeading =  React.createElement('h1', {}, "Hello world");

const reactSecondHeading = React.createElement('h2', {}, "New World");

const header = React.createElement('header',{className: "header-element"}, reactHeading, reactSecondHeading); */

const Footer = () => {
  return React.createElement(
    "footer",
    { className: "site-footer" },
    React.createElement("p", {}, "All rights reserved")
  );
};

const body = (
  <div>
    <header className="site-header">
      <h1>Hello from JSX</h1>
      <h2>Tasdasfasf</h2>
      <p>asdasfasd</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </header>
    <Footer />
  </div>
);

root.render(body);

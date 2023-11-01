import "../../node_modules/react/umd/react.production.min.js";
import "../../node_modules/react-dom/umd/react-dom.production.min.js";

var rootDom = document.getElementById("root");

var root = ReactDOM.createRoot(rootDom);

/* const reactHeading =  React.createElement('h1', {}, "Hello world");

const reactSecondHeading = React.createElement('h2', {}, "New World");

const header = React.createElement('header',{className: "header-element"}, reactHeading, reactSecondHeading); */

var Footer = function Footer() {
    return React.createElement('footer', { className: "site-footer" }, React.createElement("p", {}, "All rights reserved"));
};

var body = React.createElement(
    "div",
    null,
    React.createElement(
        "header",
        { className: "site-header" },
        React.createElement(
            "h1",
            null,
            "Hello from JSX"
        ),
        React.createElement(
            "h2",
            null,
            "Tasdasfasf"
        ),
        React.createElement(
            "p",
            null,
            "asdasfasd"
        ),
        React.createElement(
            "ul",
            null,
            React.createElement(
                "li",
                null,
                "1"
            ),
            React.createElement(
                "li",
                null,
                "2"
            ),
            React.createElement(
                "li",
                null,
                "3"
            )
        )
    ),
    React.createElement(Footer, null)
);

root.render(body);
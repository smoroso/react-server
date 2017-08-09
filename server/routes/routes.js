const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Title = require("server/components/atoms/Title");

const routes = (app) => {
  app.get("/", (req, res) => {
    const html = ReactDOMServer.renderToString(React.createElement(Title));
    res.send(html);
  });
};

module.exports = routes;

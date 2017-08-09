const routes = (app) => {
  app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
  });
};

module.exports = routes;

const { createProducts, getProducts } = require("../controller/product");

module.exports = function (app) {
  app.get("/products", getProducts);
  app.post("/products", createProducts);
};
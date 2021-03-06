const db = require("../db/products.db");

exports.initialize = (app) => {
  app.post("/api/v2/stock/product", createProduct);
  app.put("/api/v2/stock/product", updateProduct);
  app.delete("/api/v2/stock/product/:id", deleteProduct);
  app.get("/api/v2/stock/product/keyword/:keyword", getProductByKeyword);
  app.get("/api/v2/stock/product/:id", getProductById);
  app.get("/api/v2/stock/product", getAllProduct);
};

const createProduct = async (req, res) => {
  try {
    let sendData = await db.createProduct(req.fields,req.files)
    .then((result) => {
      res.status(200).json(result);
      return;
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: `module error is ${err}`, obj: null });
    return;
  }
};

const updateProduct = async (req, res) => {
  try {
    let sendData = await db.updateProduct(req.fields,req.files)
    .then((result) => {
      res.status(200).json(result);
      return;
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: `module error is ${err}`, obj: null });
    return;
  }
}
const deleteProduct = async (req, res) => {
  try {
    let sendData = await db.deleteProduct(req.params)
    .then((result) => {
      res.status(200).json(result);
      return;
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: `module error is ${err}`, obj: null });
    return;
  }
}
const getProductByKeyword = async (req, res) => {
  try {
    let sendData = await db.getProductByKeyword(req.params)
    .then((result) => {
      res.status(200).json(result);
      return;
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: `module error is ${err}`, obj: null });
    return;
  }
}
const getProductById = async (req, res) => {
  try {
    let sendData = await db.getProductById(req.params)
    .then((result) => {
      res.status(200).json(result);
      return;
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: `module error is ${err}`, obj: null });
    return;
  }
}
const getAllProduct = async (req, res) => {
  try {
    let sendData = await db.getAllProduct()
    .then((result) => {
      res.status(200).json(result);
      return;
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: `module error is ${err}`, obj: null });
    return;
  }
}

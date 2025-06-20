// middleware/validateProduct.js

const validateProduct = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || typeof name !== "string") {
    return res
      .status(400)
      .json({ error: "Product name is required and must be a string." });
  }

  if (typeof price !== "number" || price <= 0) {
    return res
      .status(400)
      .json({ error: "Product price must be a positive number." });
  }

  // If validation passes
  next();
};

export default validateProduct;

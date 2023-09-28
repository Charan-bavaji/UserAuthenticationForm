const Products = require("../models/productModule");

const addProducts = async (req, res, next) => {
    const { name, prize, type } = req.body;

    if (!name || !prize || !type) {
        return res.status(401).json({ message: "Products Filds cannot be empty" });
    } else {
        try {
            const product = await Products.create({
                name,
                prize,
                type,
            })
            return res.status(201).json({ message: "New Product added", product });
        } catch (error) {
            res.status(400).json({ message: 'Cannot add Product', error });
        }
    }
}

const products = async (req, res, next) => {
    try {
        const allProducts = await Products.find({});
        res.status(201).json(allProducts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    addProducts,
    products,
}
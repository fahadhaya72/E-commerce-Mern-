const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}).sort({ createdAt: -1 });
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get single product
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Create product (Admin only)
const createProduct = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        console.log('Request body:', req.body);
        console.log('Uploaded file:', req.file);

        if (!req.file) {
            return res.status(400).json({ message: 'Image is required' });
        }

        const { name, price, description, category } = req.body;
        
        // Create a placeholder image URL for now (you can replace this with actual image storage)
        let imageUrl;
        if (req.file.buffer) {
            // For demo purposes, create a data URL or use a placeholder
            imageUrl = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
        } else {
            imageUrl = 'https://via.placeholder.com/300x300.png?text=Product+Image';
        }
        
        const product = new Product({
            name,
            price,
            image: imageUrl,
            description: description || '',
            category: category || 'general'
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update product (Admin only)
const updateProduct = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, price, description, category, inStock } = req.body;
        
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Update fields
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        product.category = category || product.category;
        product.inStock = inStock !== undefined ? inStock : product.inStock;
        
        if (req.file) {
            // Handle image update with fallback
            if (req.file.buffer) {
                product.image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
            } else {
                product.image = 'https://via.placeholder.com/300x300.png?text=Product+Image';
            }
        }

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete product (Admin only)
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.deleteOne();
        res.json({ message: 'Product removed' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};

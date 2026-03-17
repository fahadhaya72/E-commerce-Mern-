const express = require('express');
const multer = require('multer');
const { body } = require('express-validator');
const { 
    getProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct 
} = require('../controllers/productController');
const protect = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Fallback storage for when Cloudinary is not configured
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'), false);
        }
    }
});

// Validation rules
const productValidation = [
    body('name').trim().notEmpty().withMessage('Product name is required'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number')
];

// Public routes
router.get('/', getProducts);
router.get('/:id', getProductById);

// Admin only routes
router.post('/', protect, roleMiddleware(['admin']), upload.single('image'), productValidation, createProduct);
router.put('/:id', protect, roleMiddleware(['admin']), upload.single('image'), productValidation, updateProduct);
router.delete('/:id', protect, roleMiddleware(['admin']), deleteProduct);

module.exports = router;

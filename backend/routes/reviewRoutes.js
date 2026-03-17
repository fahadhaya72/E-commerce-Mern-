const express = require('express');
const { body } = require('express-validator');
const { createReview, getProductReviews, deleteReview } = require('../controllers/reviewController');
const protect = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Validation rules
const reviewValidation = [
    body('productId').notEmpty().withMessage('Product ID is required'),
    body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
    body('comment').trim().notEmpty().withMessage('Comment is required')
];

// Routes
router.post('/', protect, reviewValidation, createReview);
router.get('/:productId', getProductReviews);
router.delete('/:id', protect, deleteReview);

module.exports = router;

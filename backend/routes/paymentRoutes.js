const express = require('express');
const { body } = require('express-validator');
const { createOrder, verifyPayment, getPaymentDetails } = require('../controllers/paymentController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// Validation rules
const orderValidation = [
    body('amount').isFloat({ min: 1 }).withMessage('Amount must be greater than 0'),
    body('currency').optional().isLength({ min: 3, max: 3 }).withMessage('Currency must be 3 characters')
];

const verificationValidation = [
    body('razorpay_order_id').notEmpty().withMessage('Order ID is required'),
    body('razorpay_payment_id').notEmpty().withMessage('Payment ID is required'),
    body('razorpay_signature').notEmpty().withMessage('Signature is required')
];

// Routes
router.post('/create-order', protect, orderValidation, createOrder);
router.post('/verify', protect, verificationValidation, verifyPayment);
router.get('/payment/:paymentId', protect, getPaymentDetails);

module.exports = router;

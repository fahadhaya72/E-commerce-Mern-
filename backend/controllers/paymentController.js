const Razorpay = require('razorpay');
const crypto = require('crypto');
const { body, validationResult } = require('express-validator');

let razorpay;
try {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
} catch (error) {
  console.warn('Razorpay not configured. Payment features will be disabled.');
  razorpay = null;
}

// Create order
const createOrder = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        if (!razorpay) {
            return res.status(503).json({ message: 'Payment service not available' });
        }

        const { amount, currency = 'INR', receipt } = req.body;

        const options = {
            amount: amount * 100, // Razorpay expects amount in paise
            currency,
            receipt: receipt || `receipt_${Date.now()}`,
            payment_capture: 1,
        };

        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create order' });
    }
};

// Verify payment
const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        if (!process.env.RAZORPAY_KEY_SECRET) {
            return res.status(503).json({ message: 'Payment service not available' });
        }

        // Generate signature
        const body = razorpay_order_id + '|' + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');

        // Compare signatures
        if (razorpay_signature === expectedSignature) {
            // Payment is successful
            // Here you can save order details to database
            res.json({
                message: 'Payment verified successfully',
                order_id: razorpay_order_id,
                payment_id: razorpay_payment_id
            });
        } else {
            res.status(400).json({ message: 'Invalid signature' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Payment verification failed' });
    }
};

// Get payment details (optional)
const getPaymentDetails = async (req, res) => {
    try {
        const { paymentId } = req.params;
        
        if (!razorpay) {
            return res.status(503).json({ message: 'Payment service not available' });
        }
        
        const payment = await razorpay.payments.fetch(paymentId);
        res.json(payment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch payment details' });
    }
};

module.exports = {
    createOrder,
    verifyPayment,
    getPaymentDetails
};

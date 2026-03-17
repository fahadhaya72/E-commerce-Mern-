const express = require('express');
const { 
    getDashboardStats, 
    getUserCount, 
    getProductCount, 
    getReviewCount, 
    getRecentActivities 
} = require('../controllers/adminController');
const protect = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// All admin routes require authentication and admin role
router.use(protect);
router.use(roleMiddleware(['admin']));

// Dashboard statistics
router.get('/stats', getDashboardStats);
router.get('/users/count', getUserCount);
router.get('/products/count', getProductCount);
router.get('/reviews/count', getReviewCount);
router.get('/activities', getRecentActivities);

module.exports = router;

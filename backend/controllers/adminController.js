const User = require('../models/User');
const Product = require('../models/Product');
const Review = require('../models/Review');

// Get dashboard statistics
const getDashboardStats = async (req, res) => {
    try {
        // Get counts
        const totalProducts = await Product.countDocuments();
        const totalUsers = await User.countDocuments({ role: 'user' });
        const totalReviews = await Review.countDocuments();

        // Get recent activities (mock data for now)
        const recentActivities = [
            {
                type: 'order',
                message: 'New order received',
                time: '2 minutes ago',
                icon: '📦'
            },
            {
                type: 'product',
                message: 'Product uploaded',
                time: '1 hour ago',
                icon: '📤'
            },
            {
                type: 'review',
                message: 'New review posted',
                time: '3 hours ago',
                icon: '⭐'
            }
        ];

        res.json({
            stats: {
                totalProducts,
                totalUsers,
                totalReviews
            },
            recentActivities
        });
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get user count
const getUserCount = async (req, res) => {
    try {
        const count = await User.countDocuments({ role: 'user' });
        res.json({ count });
    } catch (error) {
        console.error('Error fetching user count:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get product count
const getProductCount = async (req, res) => {
    try {
        const count = await Product.countDocuments();
        res.json({ count });
    } catch (error) {
        console.error('Error fetching product count:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get review count
const getReviewCount = async (req, res) => {
    try {
        const count = await Review.countDocuments();
        res.json({ count });
    } catch (error) {
        console.error('Error fetching review count:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get recent activities
const getRecentActivities = async (req, res) => {
    try {
        const activities = [];
        
        // Get recent products
        const recentProducts = await Product.find({})
            .sort({ createdAt: -1 })
            .limit(5)
            .select('name createdAt');
        
        recentProducts.forEach(product => {
            activities.push({
                _id: `product-${product._id}`,
                type: 'product',
                message: `Product "${product.name}" uploaded`,
                time: formatTimeAgo(product.createdAt),
                icon: '�',
                color: 'blue',
                timestamp: product.createdAt
            });
        });

        // Get recent reviews
        const recentReviews = await Review.find({})
            .populate('user', 'name')
            .sort({ createdAt: -1 })
            .limit(5)
            .select('comment createdAt user');
        
        recentReviews.forEach(review => {
            activities.push({
                _id: `review-${review._id}`,
                type: 'review',
                message: `New review posted by ${review.user?.name || 'User'}`,
                time: formatTimeAgo(review.createdAt),
                icon: '⭐',
                color: 'yellow',
                timestamp: review.createdAt
            });
        });

        // Sort by timestamp and take the most recent
        activities.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        const recentActivities = activities.slice(0, 5);

        res.json(recentActivities);
    } catch (error) {
        console.error('Error fetching recent activities:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Helper function to format time ago
const formatTimeAgo = (date) => {
    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now - past) / 1000);
    
    if (diffInSeconds < 60) {
        return 'Just now';
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 604800) {
        const days = Math.floor(diffInSeconds / 86400);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
        return past.toLocaleDateString();
    }
};

module.exports = {
    getDashboardStats,
    getUserCount,
    getProductCount,
    getReviewCount,
    getRecentActivities
};

# 🚀 Quick Setup Guide

This guide will help you get the MERN E-Commerce application running in minutes.

## 📋 Prerequisites

- Node.js (v16 or higher) - [Download here](https://nodejs.org/)
- MongoDB (local installation or Atlas account) - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Git (optional, for cloning)

## ⚡ Quick Start

### 1. Install Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

### 2. Environment Setup

#### Backend Environment Variables
Create `backend/.env` file:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/ecommerce

# JWT
JWT_SECRET=your_super_secret_jwt_key_make_it_long_and_random

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Razorpay (for payments)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Server
PORT=5000
```

### 3. Get API Keys

#### Cloudinary Setup (Free)
1. Go to [Cloudinary](https://cloudinary.com/)
2. Sign up for free account
3. Go to Dashboard → Settings → API Security
4. Copy: Cloud name, API Key, API Secret

#### Razorpay Setup (Test Mode)
1. Go to [Razorpay](https://razorpay.com/)
2. Sign up for free account
3. Go to Dashboard → Settings → API Keys
4. Generate test keys and copy Key ID and Key Secret

### 4. Start the Application

#### Start Backend
```bash
cd backend
npm run dev
```
Server will run on: http://localhost:5000

#### Start Frontend
```bash
cd frontend
npm run dev
```
Frontend will run on: http://localhost:5173

## 🎯 Test the Application

### Create Admin Account
1. Go to http://localhost:5173/signup
2. Fill in details and select "Admin" as account type
3. After signup, you'll be redirected to admin dashboard

### Create Regular User Account
1. Go to http://localhost:5173/signup
2. Fill in details and select "Customer" as account type
3. After signup, you'll be redirected to shop

### Test Features
- **Admin**: Upload products, manage inventory
- **User**: Browse products, view details, make purchases
- **Both**: Leave reviews, manage profiles

## 🔧 Common Setup Issues

### MongoDB Connection Issues
```bash
# If using local MongoDB
# Make sure MongoDB service is running
sudo systemctl start mongod  # Linux
brew services start mongodb-community  # macOS

# Or use MongoDB Atlas (recommended for beginners)
# 1. Create free cluster on Atlas
# 2. Get connection string
# 3. Update MONGODB_URI in .env
```

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or change port in .env
PORT=5001
```

### Frontend Build Issues
```bash
# Clear cache and reinstall
cd frontend
rm -rf node_modules package-lock.json
npm install
```

## 📱 Default Test Data

You can create test products using the admin panel:

### Sample Product Data
```
Name: Laptop Pro
Price: 999.99
Category: electronics
Description: High-performance laptop for professionals
```

## 🎨 Customization

### Change Theme Colors
Edit `frontend/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Add New Categories
1. Update product schema in backend
2. Add to frontend category list in Shop.jsx
3. Update form options in UploadProduct.jsx

## 🚀 Deployment

### Backend Deployment (Heroku Example)
```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret
# ... set all other env variables

# Deploy
git push heroku main
```

### Frontend Deployment (Vercel Example)
```bash
# Install Vercel CLI
npm install -g vercel

# Build and deploy
cd frontend
vercel --prod
```

## 🆘 Need Help?

### Common Solutions
1. **Clear browser cache** - Sometimes old data causes issues
2. **Check console errors** - F12 for browser dev tools
3. **Restart servers** - Sometimes a simple restart fixes issues
4. **Check .env file** - Ensure all variables are set correctly

### Debug Mode
Add this to your backend `.env`:
```env
NODE_ENV=development
```

### Contact Support
- Check the main README.md for detailed documentation
- Open an issue on GitHub for specific problems

## 🎉 You're Ready!

Your MERN E-Commerce application is now running! Here's what you can do:

✅ **Admin Features**
- Upload products with images
- Manage product inventory
- View dashboard statistics

✅ **User Features**
- Browse and search products
- View detailed product information
- Make secure payments
- Leave reviews

✅ **Technical Features**
- JWT authentication
- Role-based access control
- Image upload to cloud
- Payment processing
- Responsive design
- Smooth animations

Happy coding! 🚀

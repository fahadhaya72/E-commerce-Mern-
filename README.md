# MERN E-Commerce Application

A production-ready e-commerce web application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## 🚀 Features

### Authentication System
- User registration and login
- JWT-based authentication
- Role-based access control (Admin/User)
- Password hashing with bcrypt

### Admin Features
- Dashboard with statistics
- Product management (CRUD operations)
- Image upload with Cloudinary integration
- Product listings with search and filters

### User Features
- Product browsing and shopping
- Product details page
- Review system with ratings
- Secure payment integration with Razorpay

### Technical Features
- Responsive design with Tailwind CSS
- Smooth animations with Anime.js
- Form validation with React Hook Form + Zod
- Toast notifications
- RESTful API architecture
- MongoDB database with Mongoose ODM

## 📁 Project Structure

```
E-commerce/
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── cloudinary.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── reviewController.js
│   │   └── paymentController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Review.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── reviewRoutes.js
│   │   └── paymentRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   ├── utils/
│   │   └── generateToken.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── pages/
│   │   │   ├── Landing.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Admin/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── UploadProduct.jsx
│   │   │   │   └── ManageProducts.jsx
│   │   │   └── User/
│   │   │       ├── Shop.jsx
│   │   │       └── ProductDetails.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── index.html
└── README.md
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Cloudinary** - Cloud image storage
- **Razorpay** - Payment gateway
- **express-validator** - Input validation

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Styling framework
- **Anime.js** - Animation library
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Axios** - HTTP client
- **React Hot Toast** - Notifications

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/fahadhaya72/E-commerce-Mern-.git
cd E-commerce
```

### 2. Backend Setup

```bash
cd backend
npm install
```

#### Environment Variables
Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key_here_make_it_long_and_secure
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
PORT=5000
```

#### Start Backend Server
```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

#### Start Frontend Development Server
```bash
npm run dev
```

## 🔧 Configuration

### MongoDB Setup
1. Install MongoDB locally or create a free MongoDB Atlas account
2. Get your connection string
3. Update `MONGODB_URI` in your `.env` file

### Cloudinary Setup
1. Create a free Cloudinary account
2. Get your cloud name, API key, and API secret
3. Update the Cloudinary variables in your `.env` file

### Razorpay Setup
1. Create a Razorpay account
2. Get your key ID and key secret
3. Update the Razorpay variables in your `.env` file
4. Add the Razorpay script to your `public/index.html`:

```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

## 📱 Usage

### Admin Access
- **Email**: `#`
- **Password**: `#`
- Go to http://localhost:5174/login and use these credentials
- Access admin dashboard at `/admin/dashboard`
- Upload products, manage inventory, and view statistics

### User Access
1. Sign up as a regular user (default role)
2. Browse products at `/shop`
3. View product details and make purchases
4. Leave reviews for purchased products

## 🔄 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Reviews
- `POST /api/reviews` - Create review
- `GET /api/reviews/:productId` - Get product reviews
- `DELETE /api/reviews/:id` - Delete review

### Payments
- `POST /api/payment/create-order` - Create Razorpay order
- `POST /api/payment/verify` - Verify payment

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Component-specific styles are inline using Tailwind classes

### Animations
- Anime.js animations are implemented in individual components
- Modify animation parameters in component useEffect hooks

## 🚀 Deployment

### Backend Deployment
1. Set environment variables on your hosting platform
2. Build and deploy the Node.js application
3. Ensure MongoDB is accessible from your deployment

### Frontend Deployment
1. Build the React application: `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Configure environment variables if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check your MongoDB URI in `.env`
   - Ensure MongoDB is running
   - Verify network connectivity

2. **Image Upload Issues**
   - Verify Cloudinary credentials
   - Check Cloudinary API limits

3. **Payment Issues**
   - Verify Razorpay credentials
   - Check Razorpay test mode settings

4. **Frontend Build Issues**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility

## 📞 Support

For support and questions, please open an issue in the repository.

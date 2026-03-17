# Crafter Tannu - E-Commerce Platform

A modern, production-ready e-commerce platform built with the MERN stack. Features a complete shopping experience with admin dashboard, secure payments, and responsive design.

## 🌟 Key Features

### User Experience
- **Seamless Authentication** - Secure login/registration with JWT tokens
- **Intuitive Shopping Interface** - Browse products with advanced filtering and search
- **Interactive Product Gallery** - Detailed product views with image galleries
- **Customer Reviews** - Rating and review system for purchased products
- **Secure Checkout** - Integrated payment processing with Razorpay

### Administrative Tools
- **Comprehensive Dashboard** - Real-time analytics and business insights
- **Product Management** - Full CRUD operations for inventory control
- **Cloud Storage Integration** - Image uploads via Cloudinary
- **Order Management** - Track and manage customer orders

### Technical Excellence
- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern Animations** - Smooth transitions using Anime.js
- **Form Validation** - Robust validation with React Hook Form + Zod
- **Real-time Notifications** - Toast notifications for user feedback
- **RESTful Architecture** - Scalable API design with Express.js

## 🏗️ Architecture Overview

* Clean architecture
* Scalable backend
* Modern UI/UX
* Real-world deployment

---

## 🏗️ Tech Stack

### 🔹 Frontend

* React (Vite)
* Tailwind CSS
* ShadCN UI
* Anime.js
* Axios
* React Router DOM
* React Hook Form + Zod
* React Hot Toast

### 🔹 Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* bcryptjs
* multer + Cloudinary
* Razorpay
* express-validator
* morgan

### 🔹 Database

* MongoDB Atlas

---

## 🔐 Features

### 👤 Authentication

* JWT-based Login & Signup
* Password hashing (bcrypt)
* Role-based access (Admin/User)

---

### 🛠️ Admin Panel

* Upload products with image + price
* Cloudinary image storage
* Manage products (Edit/Delete)
* Separate dashboard UI

---

### 🛍️ User Features

* Browse products
* Product detail view
* Buy products via Razorpay
* Add reviews & ratings

---

### 💳 Payment Integration

* Razorpay order creation
* Secure payment verification
* Success & failure handling

---

## 📂 Project Structure
>>>>>>> f1f913a44e5bf9e572152ac3cf45e3a95a4906bc

### Backend Infrastructure
```
<<<<<<< HEAD
backend/
├── controllers/     # Business logic handlers
├── models/         # MongoDB data schemas
├── routes/         # API endpoint definitions
├── middleware/     # Authentication & validation
├── utils/          # Utility functions
└── server.js       # Application entry point
```

### Frontend Architecture
```
frontend/
├── components/      # Reusable UI components
├── pages/          # Route-based page components
├── services/       # API integration layer
├── context/        # React state management
└── hooks/          # Custom React hooks
```

## 🛠️ Technology Stack

### Backend Technologies
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - Stateless authentication
- **bcryptjs** - Secure password hashing
- **Multer** - Multipart form data handling
- **Cloudinary** - Cloud-based image storage
- **Razorpay** - Payment gateway integration

### Frontend Technologies
- **React 18** - Component-based UI library
- **Vite** - Fast development build tool
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Anime.js** - JavaScript animation library
- **React Hook Form** - Performance-optimized forms
- **Zod** - TypeScript-first schema validation
- **Axios** - Promise-based HTTP client

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- MongoDB (local instance or Atlas cluster)
- Cloudinary account for image storage
- Razorpay account for payment processing

### Installation Process

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd E-commerce
   ```

2. **Backend configuration**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Configure environment variables
   npm run dev
   ```

3. **Frontend setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## 🔧 Configuration Guide

### Environment Variables
Create a `.env` file in the backend directory with:

```env
# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# Authentication
JWT_SECRET=your_secure_jwt_secret_key_minimum_32_characters

# Cloud Storage
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Payment Gateway
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key

# Server Configuration
PORT=5000
```

### Third-Party Services Setup

**MongoDB Atlas**
1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Configure IP whitelist for your deployment environment
3. Update connection string in environment variables

**Cloudinary**
1. Register at [Cloudinary](https://cloudinary.com)
2. Obtain cloud name, API key, and secret
3. Configure in environment variables

**Razorpay**
1. Create account at [Razorpay](https://razorpay.com)
2. Generate test mode API keys
3. Include Razorpay checkout script in frontend

## � API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User authentication
- `GET /api/auth/profile` - Profile retrieval

### Product Management
- `GET /api/products` - Product listing with pagination
- `GET /api/products/:id` - Individual product details
- `POST /api/products` - Product creation (admin)
- `PUT /api/products/:id` - Product updates (admin)
- `DELETE /api/products/:id` - Product deletion (admin)

### Review System
- `POST /api/reviews` - Submit product review
- `GET /api/reviews/:productId` - Product reviews
- `DELETE /api/reviews/:id` - Review management

### Payment Processing
- `POST /api/payment/create-order` - Initialize payment
- `POST /api/payment/verify` - Payment verification

## 🚀 Deployment Guide

### Backend Deployment
1. **Environment Setup** - Configure all environment variables
2. **Database Access** - Ensure MongoDB accessibility from deployment
3. **Build Process** - Deploy Node.js application
4. **Health Checks** - Verify all endpoints are functional

### Frontend Deployment
1. **Build Optimization** - `npm run build` for production assets
2. **Static Hosting** - Deploy `dist` folder to hosting platform
3. **Environment Configuration** - Set production API endpoints
4. **Performance Testing** - Verify load times and responsiveness
=======
root/
 ├── backend/
 │    ├── config/
 │    ├── controllers/
 │    ├── models/
 │    ├── routes/
 │    ├── middleware/
 │    ├── utils/
 │    └── server.js
 │
 └── frontend/
      ├── src/
      │    ├── components/
      │    ├── pages/
      │    ├── services/
      │    ├── context/
      │    ├── hooks/
      │    ├── App.jsx
      │    └── main.jsx
```

---

## ⚙️ Environment Variables

### 🔹 Backend (.env)

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

---

### 🔹 Frontend (.env)

```
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY=your_key
```

---

## 🚀 Local Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/crafter-tannu.git
cd crafter-tannu
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌍 Deployment

### 🔹 Backend (Render)

* Create new Web Service
* Connect GitHub repo
* Add environment variables
* Start command:

```bash
npm start
```

---

### 🔹 Frontend (Vercel)

* Import project
* Set root to `/frontend`
* Add environment variables
* Deploy

---

### 🔹 Database (MongoDB Atlas)

* Create cluster
* Get connection string
* Add to `.env`

---

## 📸 Screenshots (Add Later)

* Landing Page
* Admin Dashboard
* Product Listing
* Payment Flow

---

## 🧪 Future Improvements

* 🔍 Search & Filters
* 📊 Admin Analytics Dashboard
* 🔔 Notifications System
* 📦 Order History
* 💬 Real-time chat support

---

## 🧠 What I Learned

* Building scalable REST APIs
* Secure authentication & authorization
* Payment gateway integration
* Full deployment pipeline
* Real-world debugging

---
>>>>>>> f1f913a44e5bf9e572152ac3cf45e3a95a4906bc

## 🎨 Customization Options

<<<<<<< HEAD
### Styling Configuration
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Component styling uses Tailwind utility classes

### Animation Customization
- Adjust Anime.js parameters in component hooks
- Modify transition timings and easing functions
- Add new animations to enhance user experience

## � Security Features

- **Password Encryption** - bcrypt hashing for secure storage
- **JWT Authentication** - Stateless session management
- **Role-Based Access** - Admin/user permission system
- **Input Validation** - Comprehensive form validation
- **CORS Configuration** - Cross-origin request security

## 📈 Performance Optimizations

- **Code Splitting** - Lazy loading for better initial load times
- **Image Optimization** - Cloudinary automatic optimization
- **Database Indexing** - Optimized MongoDB queries
- **Caching Strategy** - Efficient data retrieval patterns

## 🤝 Development Workflow

1. **Feature Development** - Create feature branches
2. **Testing Protocol** - Comprehensive testing before merging
3. **Code Review** - Peer review for quality assurance
4. **Deployment** - Automated CI/CD pipeline integration
=======
Pull requests are welcome. For major changes, open an issue first.


---

## 📜 License

This project is licensed under the MIT License - see LICENSE file for details.


## 🆘 Support & Troubleshooting

### Common Solutions
- **Database Connectivity** - Verify MongoDB URI and network access
- **Image Upload Issues** - Check Cloudinary credentials and limits
- **Payment Failures** - Verify Razorpay test mode configuration
- **Build Errors** - Clear dependencies and verify Node.js version

For technical support, please refer to the project documentation or open an issue in the repository.
=======
---

## 💬 Final Note

This is not just a CRUD project.
It’s a **complete full-stack system** designed to simulate real-world product architecture.

If you can understand and explain this project →
you’re already ahead of most developers at your level.


# 🚀 Crafter Tannu

### 🛒 Full-Stack MERN E-Commerce Platform

> A production-ready e-commerce web application built with modern technologies, secure authentication, admin control, and seamless payment integration.

---

## ⚡ Live Demo

🌐 Frontend: *Coming Soon*
🔗 Backend API: *Coming Soon*

---

## 🧠 Overview

**Crafter Tannu** is a full-stack e-commerce platform designed with real-world architecture.
It supports **role-based access (Admin/User)**, product management, secure authentication, and **Razorpay payment integration**.

This project focuses on:

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

```
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

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

---

## 📜 License

This project is licensed under the MIT License.

---

## 💬 Final Note

This is not just a CRUD project.
It’s a **complete full-stack system** designed to simulate real-world product architecture.

If you can understand and explain this project →
you’re already ahead of most developers at your level.

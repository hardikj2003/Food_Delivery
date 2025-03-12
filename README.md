# 🍔 Food Delivery Web Application

## 🚀 Overview
This is a modern food delivery web application that allows users to browse restaurants, add items to their cart, and place orders for home delivery. It includes authentication, a payment gateway, and an admin dashboard for restaurant management.

## 🛠️ Tech Stack
- **Frontend:** React.js, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT-based authentication
- **Payment Integration:** Stripe (or Razorpay, if applicable)

## 🔥 Features
- User authentication (Sign up, Login, Logout)
- Restaurant and menu browsing
- Add items to the cart and place an order
- Secure online payments
- Order tracking and history
- Admin panel for managing restaurants, menus, and orders

## 📦 Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v16+ recommended)
- MongoDB

### Steps to Run the Project
1. **Clone the repository**
   ```bash
   git clone https://github.com/hardikj2003/Food_Delivery.git
   cd Food_Delivery
   ```
2. **Install dependencies**
   ```bash
   npm install  # Install backend dependencies
   cd client && npm install  # Install frontend dependencies
   ```
3. **Set up environment variables**
   - Create a `.env` file in the root directory and add the required variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     STRIPE_SECRET_KEY=your_stripe_secret_key
     ```
4. **Run the backend server**
   ```bash
   npm run server
   ```
5. **Run the frontend**
   ```bash
   cd client
   npm run dev
   ```
6. **Visit the application**
   Open your browser and go to: `http://localhost:5173`

## 🎯 Future Enhancements
- AI-based food recommendations
- Live order tracking with real-time updates
- Wishlist and favorite restaurants feature
- Integration with delivery partners

---
**📧 Contact:** If you have any questions, reach out to hardikj2003@gmail.com  OR  https://www.linkedin.com/in/hardikj2003/

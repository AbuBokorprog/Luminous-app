# Luminous Beauty eCommerce Website

## Overview

Luminous Beauty is an eCommerce platform dedicated to beauty and cosmetic products. It offers a wide range of beauty products for users to browse and purchase online. The website provides various features such as user authentication, role-based dashboards, online payment processing, wishlist functionality, order history tracking, and a user guide section.

## Website Link

[Visit Luminous Beauty eCommerce Website](https://luminous-app.vercel.app/)

## Features

### User Authentication

- Users can securely sign up, log in, and log out of their accounts.

### Role-Based Dashboards

- Admins, managers, and users have separate dashboards with specific functionalities tailored to their roles.

### Product Listings

- Users can browse all available products and filter them by category.

### Online Payments

- Integration with a secure payment gateway allows users to make online payments for their purchases.

### Wishlist Functionality

- Users can add products to their wishlist for future purchases and remove them as needed.

### Order History Tracking

- Users can view their order history, including past purchases and order details.

### How it Works Section

- A dedicated section provides users with guidelines on how to navigate the website, place orders, and manage their accounts.

### Responsive Design

- The website is optimized for various devices, ensuring a seamless user experience across desktop, tablet, and mobile devices.

## Technologies Used

- **Next.js**: Frontend framework for building React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Swiper**: JavaScript library for image sliders and carousels.
- **Redux Toolkit**: State management library for React applications.
- **bcrypt**: Library for hashing passwords securely.
- **JWT**: JSON Web Token for user authentication and authorization.
- **Firebase**: Platform for building web and mobile applications, used for authentication.
- **MongoDB**: NoSQL database for storing product and user data.
- **Mongoose**: MongoDB object modeling library for Node.js.
- **React Hook Form**: Library for building forms with React.
- **React Icons**: Icon library for React components.
- **React Hot Toast**: Toast notification library for React applications.
- **React Redux**: Official React bindings for Redux state management.
- **SweetAlert**: Library for beautiful, responsive, and customizable alert dialogs.
- **Chart.js**: JavaScript library for creating interactive charts and graphs.
- **React Chart.js 2**: React wrapper for Chart.js, allowing easy integration with React applications.

## User Credentials

- **Admin**
  - Email: admin@gmail.com
  - Password: qwertyuiop
- **Manager**
  - Email: manager@gmail.com
  - Password: qwertyuiop
- **User**
  - Email: user@gmail.com
  - Password: qwertyuiop

## Getting Started

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies: `npm install`
3. Set up environment variables.
4. Run the development server: `npm run dev`
5. Access the website at `http://localhost:3000`

## File Structure

.
├── .next
├── app
│ ├── auth
│ ├── dashboard
│ ├── manage_cart
│ ├── about_us
│ ├── API
│ └── playground
├── product
├── product_category
├── error.js
├── favicon.ico
├── globals.css
├── layout.js
├── loading.js
├── not-found.js
├── components
│ ├── auth
│ ├── dashboard
│ ├── home
│ ├── productCategory
│ ├── shared
│ └── shopByConcern
│ ├── checkout.jsx
│ ├── loadingSpinner.jsx
│ ├── modal.jsx
│ └── tabs.jsx
├── models
├── node_modules
├── public
│ └── images
│ ├── next.svg
│ └── Vercel.svg
├── redux
│ └── feature
│ └── store.js
├── utils
│ ├── database
│ └── provider
├── .env
├── .eslintrc.json
├── .gitignore
├── firebase.config.js
├── jsconfig.json
├── middleware.js
├── next.config.js
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js

## How it Works

### Home Page Banner

- The home page features a banner showcasing special offers and product categories to entice users to explore further.

### Category Navigation

- Users can easily navigate to specific product categories via the navigation bar, which includes prominent category links.

### User Authentication

- Actions such as adding products to the wishlist or placing orders are only available to logged-in users. New users are prompted to log in or sign up before accessing these features.

### Dashboard Access

- Upon successful login, users are directed to their respective dashboards based on their roles (admin, manager, or user). Non-logged-in users cannot access dashboard features.

# ProFast
(link)-[https://6857d4645b22ba50d8bfdc95--prismatic-truffle-7c241e.netlify.app/]
</br>
--status: working

======= 


# 🚀 Zap Shift Resources

Welcome to **Zap Shift Resources!**  
A curated collection of tools, guides, and assets for developing robust parcel management systems.

---

## 📊 System Overview Table

| Role            | Key Responsibilities                                           | Earnings/Benefits             |
|-----------------|----------------------------------------------------------------|--------------------------------|
| Merchant        | - Book parcels<br>- Pay charges<br>- Track status<br>- Review service | - Real-time tracking<br>- Feedback opportunity |
| Admin           | - Assign agents<br>- Manage routing<br>- Oversee warehouses<br>- Monitor operations | - System control<br>- Operational oversight |
| Delivery Agent  | - Collect/Deliver parcels<br>- Update status<br>- OTP confirmation<br>- Warehouse handoff | - ৳20 per delivery               |

---

## 🛒 Pricing Structure

| Parcel Type    | Weight       | Within City | Outside City/District         |
|----------------|--------------|-------------|--------------------------------|
| Document       | Any          | ৳60         | ৳80                            |
| Non-Document   | Up to 3kg    | ৳110        | ৳150                           |
| Non-Document   | >3kg         | +৳40/kg     | +৳40/kg + ৳40 extra            |

---

## 🚚 Delivery Workflow

- Parcel booking
- Pickup by assigned rider
- Status updates and OTP confirmation
- Transfer to service center (if applicable)
- Last-mile delivery
- Real-time tracking available throughout

---

## 🗂️ Key Features

- Automated Pricing & Tracking
- Role-based Access & Workflow
- OTP-based Secure Delivery
- Nationwide Coverage (64 districts)
- Transparent Commission Structure

---

# ZAPSHIFT - Dashboard Requirements

## Overview

**ZAPSHIFT** is a home/office pickup parcel delivery system that streamlines booking, tracking, and delivery processes. It enhances efficiency and customer satisfaction with features like tracking, OTP-based secure delivery, and digital proof of delivery.

---

## User Roles

### 🧑‍💼 1. User
- Book parcels with detailed sender & receiver info.
- Pay delivery charges.
- Real-time parcel tracking.
- Provide service reviews.

### 🛠️ 2. Admin
- Assign riders and manage parcel routing.
- Oversee service centers and delivery statuses.
- Full system monitoring.

### 🚚 3. Rider
- Collect and deliver parcels.
- Update parcel statuses.
- Secure deliveries with OTP confirmation.

---

## Dashboard Layout

### Sidebar
- Logo, user info (name, image, email, role)
- Dynamic navigation based on user role
- Public navigation links (Home, Coverage)
- Logout button

### Pages (Right Panel)
- **User Home:** Parcel status stats, user info, pie chart
- **Tracking:** Parcel tracking notifications and details
- **Add Parcel:** Parcel booking form with calculated pricing
- **Parcel to Pay:** List of unpaid parcels with actions (Pay, Delete, View)
- **Parcel Details:** Detailed parcel view
- **Payment Page:** Integrated card payment system
- **Manage Parcels:** Search and manage all parcels with track/view buttons
- **Payment History:** List of all completed payments
- **Discussion:** Review system with update and delete functionality
- **User Settings:** Update profile info, rider-specific data

### Admin Pages
- **Admin Home:** Stats, charts, and payment notifications
- **Manage Users:** Role management with conditional buttons
- **Manage Riders:** Approve/reject riders based on status
- **Delivery Management:** Track and manage parcel delivery progress
- **Manage Parcel Delivery:** Step-by-step parcel routing management

### Rider Pages
- **Rider Home:** Rider stats, earnings, pie chart, and active tasks
- **Parcel to PickUp:** Manage pickups with OTP confirmation
- **Parcel to Delivery:** Manage deliveries with OTP confirmation

---

## Parcel Status Flow

- unpaid
- paid
- ready-to-pickup
- in-transit
- reached-service-center
- shipped
- ready-for-delivery
- delivered

---

## Key Functionalities

- Role-specific dashboards with dynamic navigation
- Step-by-step parcel management for Admin and Rider
- OTP-based delivery confirmation
- Commission tracking for Riders
- Real-time updates for all parcel statuses
- Review system with update and delete options
- Payment tracking with history and stats

---


---

# 📦 Project Packages & Versions

## Dependencies
- @tailwindcss/vite: ^4.1.10
- @tanstack/react-query: ^5.81.2
- aos: ^2.3.4
- axios: ^1.10.0
- dotenv: ^16.5.0
- firebase: ^11.9.1
- leaflet: ^1.9.4
- react: ^19.1.0
- react-dom: ^19.1.0
- react-fast-marquee: ^1.6.5
- react-hook-form: ^7.58.1
- react-icons: ^5.5.0
- react-leaflet: ^5.0.0
- react-responsive-carousel: ^3.2.23
- react-router: ^7.6.2
- sweetalert2: ^11.22.1
- swiper: ^11.2.8
- tailwindcss: ^4.1.10

## Dev Dependencies
- @eslint/js: ^9.25.0
- @types/react: ^19.1.2
- @types/react-dom: ^19.1.2
- @vitejs/plugin-react: ^4.4.1
- daisyui: ^5.0.43
- eslint: ^9.25.0
- eslint-plugin-react-hooks: ^5.2.0
- eslint-plugin-react-refresh: ^0.4.19
- globals: ^16.0.0
- vite: ^6.3.5

---

# 🛠️ Getting Started on Local Machine

## Prerequisites
- Node.js (v16 or higher) and npm must be installed. [Download Node.js](https://nodejs.org/)
- A Firebase project set up for authentication and hosting (optional for local development)
- A code editor like VS Code

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-github-username/zap-shift-client.git
cd zap-shift-client
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the project root with the following example:
```bash
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_API_URL=your-backend-api-url
```

### 4. Run the Development Server
```bash
npm run dev
```
The app will typically run at `http://localhost:5173`.

### 5. Build for Production (Optional)
```bash
npm run build
```
The production-ready files will be generated in the `dist` folder.

### 6. Run Production Build Locally (Optional)
```bash
npm run preview
```

---

## Notes
- Ensure your backend API is running and accessible via the `VITE_API_URL`.
- Firebase authentication providers (Email/Password & Google Sign-In) must be enabled in your Firebase console.
- For any issues, verify your environment variables and browser console errors.

---


=======

day 1 : Homepage design </br>
day 2 : handle form using react-hook-form and intregate map using rect-leaflet (register,login design and firebase intregation)</br>
day 3 :day 3 state handle using tanstack query and add parcel and dashboard with server    added .</br>
=======






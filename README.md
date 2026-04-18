#  HCMS - Hostel Complaint Management System
 
> A full-stack MERN web application for managing hostel operations, student grievances, tiffin bookings and staff coordination — deployed at [hcmhostel.vercel.app](https://hcmhostel.vercel.app/)
 
---

## 📌 Overview
 
HCM (Hostel Complaint Management) is a comprehensive digital platform designed to streamline day-to-day hostel operations. It bridges the gap between students, hostel staff, caretakers and wardens through a unified, role-based system — reducing manual effort and improving response time for issue resolution.
 
---

 
## 🚀 Live Demo
 
🔗 **[https://hcmhostel.vercel.app](https://hcmhostel.vercel.app/)**
 
---

## 🛠️ Tech Stack
 
| Layer       | Technology                          |
|-------------|--------------------------------------|
| Frontend    | React.js, Tailwind CSS / CSS Modules |
| Backend     | Node.js, Express.js                  |
| Database    | MongoDB (Mongoose ODM)               |
| Auth        | JWT (JSON Web Tokens)                |
| Deployment  | Vercel (Frontend), Render (Backend) |
 
---

 
## ✨ Features
 
### 👨‍🎓 Student Portal
- **Raise Complaints/Issues** — Students can submit daily hostel-related complaints (maintenance, cleanliness, water, electricity, etc.)
- **Track Issue Status** — Real-time updates on complaint resolution status
- **Tiffin Booking** — Subscribe or book daily tiffin/meal services
- **Milk Booking** — Manage daily milk subscription and delivery preferences
- **Profile Management** — View and update personal hostel details
### 🧑‍💼 Admin / Warden Panel
- **View All Student Issues** — Centralized dashboard to monitor and manage all raised complaints
- **Issue Assignment** — Assign complaints to relevant staff/caretakers
- **Status Management** — Update resolution status of issues
- **Student Management** — View all registered students and their details
- **Booking Overview** — Monitor tiffin and milk subscriptions across the hostel
### 🧹 Staff / Worker Panel
- **Block-Specific Issues** — Staff members see only the complaints raised from their assigned hostel block
- **Task Management** — Mark issues as in-progress or resolved
- **Efficient Workflow** — Focused view reduces clutter and increases accountability
### 🔐 Authentication & Authorization
- Role-based access control (Student / Warden / Caretaker / Staff)
- Secure login with JWT authentication
- Protected routes per user role
---
 
## 📂 Project Structure
 
```
HCM/
├── client/                   # React Frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Role-based page views (Student, Admin, Staff)
│   │   ├── context/          # Auth & global state
│   │   ├── services/         # API call handlers (axios)
│   │   └── App.jsx
│   └── package.json
│
├── server/                   # Express Backend
│   ├── controllers/          # Route logic handlers
│   ├── models/               # Mongoose schemas (User, Issue, Booking)
│   ├── routes/               # API route definitions
│   ├── middleware/            # Auth middleware (JWT verification)
│   └── server.js
│
└── README.md
```
 
---
 
## 🗄️ Database Models
 
- **User** — Student, Warden, Caretaker, Staff with role field
- **Issue/Complaint** — Title, description, category, block, status, assigned to, timestamps
- **TiffinBooking** — Student reference, meal type, subscription dates
- **MilkBooking** — Student reference, quantity, delivery schedule
---
 
## 🔗 API Endpoints (Sample)
 
| Method | Endpoint                  | Description                        | Access       |
|--------|---------------------------|------------------------------------|--------------|
| POST   | `/api/auth/login`         | Login for all user types           | Public       |
| POST   | `/api/auth/register`      | Student registration               | Public       |
| GET    | `/api/issues`             | Get all issues (admin view)        | Admin/Warden |
| POST   | `/api/issues`             | Raise a new issue                  | Student      |
| PATCH  | `/api/issues/:id/status`  | Update issue status                | Staff/Admin  |
| GET    | `/api/issues/block/:id`   | Get issues by block                | Staff        |
| POST   | `/api/bookings/tiffin`    | Book tiffin                        | Student      |
| POST   | `/api/bookings/milk`      | Book milk                          | Student      |
| GET    | `/api/bookings`           | View all bookings                  | Admin        |
 
---
 
## ⚙️ Getting Started
 
### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)
- npm or yarn
### Installation
 
```bash
# Clone the repository
git clone https://github.com/yourusername/hcm-hostel.git
cd hcm-hostel
 
# Setup Backend
cd server
npm install
cp .env.example .env     # Add your MONGO_URI and JWT_SECRET
npm start
 
# Setup Frontend
cd ../client
npm install
npm run dev
```
 
### Environment Variables (server/.env)
 
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```
 
---
 
## 🤝 Roles & Responsibilities Summary
 
| Role       | Capabilities                                               |
|------------|------------------------------------------------------------|
| Student    | Raise issues, book tiffin/milk, view own complaint status  |
| Warden     | View all complaints, assign to staff, update status        |
| Caretaker  | Monitor all issues, manage bookings                        |
| Staff      | View and resolve issues for their assigned block only      |
 
---
 
## 🌱 Future Enhancements
 
- 📱 Mobile app (React Native)
- 📧 Email/SMS notification on issue status change
- 📊 Analytics dashboard for hostel trends
- 💳 Online payment integration for mess fees
- 🗓️ Monthly attendance and meal tracking
---
 
## 👨‍💻 Author
 
**Amit Kumar**
- LinkedIn: [https://www.linkedin.com/in/amit-kumar-98210a314/](#)
- GitHub: [https://github.com/Amitkmr948](#)
- Email: kamit169104@gmail.com
---
 
## 📄 License
 
This project is licensed under the MIT License.
 
---
 
> ⭐ If you found this project helpful, please give it a star on GitHub!
 

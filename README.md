# ⚖️ LegalEase - Legal Job Portal

LegalEase is a modern legal recruitment platform that connects legal professionals with top law firms, corporate legal departments, and recruiters. The platform enables job seekers to discover career opportunities while helping employers find qualified legal talent efficiently.

## 🌐 Live Demo

Add your live website URL here:

```bash
https://your-live-site.com
```

---

## 📌 Features

### For Job Seekers

* Create and manage profiles
* Browse legal job opportunities
* Apply for jobs online
* Track application status
* Upload resumes and professional information
* Save favorite jobs

### For Recruiters

* Create recruiter accounts
* Post and manage job listings
* Review candidate applications
* Search and filter applicants
* Manage hiring workflows

### For Admin

* Manage users and recruiters
* Moderate job postings
* Monitor platform activity
* Manage featured jobs
* Control platform settings

---

## 🛠️ Tech Stack

### Frontend

* Next.js 15
* React 19
* Tailwind CSS
* HeroUI
* Framer Motion
* React Icons

### Backend

* Next.js API Routes
* MongoDB

### Authentication

* Better Auth / JWT Authentication

### Payments

* Stripe Integration

---

## 📂 Project Structure

```bash
src/
│
├── app/
│   ├── dashboard/
│   ├── jobs/
│   ├── recruiters/
│   ├── admin/
│   ├── login/
│   └── register/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── FeaturedJobs.jsx
│   ├── Testimonials.jsx
│   └── StatsSection.jsx
│
├── lib/
│   ├── auth.js
│   ├── db.js
│   └── stripe.js
│
├── models/
├── actions/
├── hooks/
└── utils/
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/legalease.git
```

### Navigate to Project

```bash
cd legalease
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_uri

BETTER_AUTH_SECRET=your_secret

BETTER_AUTH_URL=http://localhost:3000

STRIPE_SECRET_KEY=your_stripe_secret

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
```

### Run Development Server

```bash
npm run dev
```

Visit:

```bash
http://localhost:3000
```

---

## 📸 Main Pages

### Public Pages

* Home
* About
* Contact
* Jobs
* Job Details
* Recruiters
* Privacy Policy
* Terms & Conditions

### Dashboard Pages

#### Job Seeker Dashboard

* Profile Management
* Applied Jobs
* Saved Jobs
* Resume Upload

#### Recruiter Dashboard

* Post Job
* Manage Jobs
* View Applicants
* Company Profile

#### Admin Dashboard

* Manage Users
* Manage Recruiters
* Manage Jobs
* Analytics

---

## 🔒 Authentication & Authorization

Role-based access control:

### User Roles

* User
* Lawyer
* Admin

Protected routes ensure users only access features relevant to their role.

---

## 🎨 UI Features

* Fully Responsive Design
* Mobile-First Layout
* Dark Mode Support
* Modern Glassmorphism Effects
* Smooth Animations
* SEO Friendly
* Fast Performance

---

## 📈 Future Enhancements

* AI-powered job recommendations
* Resume parsing
* Real-time messaging
* Video interviews
* Advanced recruiter analytics
* Email notifications
* Multi-language support

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push to branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Developer

**Md. Ferdous Ahmed**

Frontend & MERN Stack Developer

* Portfolio: https://your-portfolio.com
* GitHub: https://github.com/yourusername
* LinkedIn: https://linkedin.com/in/yourprofile

---

⭐ If you like this project, consider giving it a star on GitHub.



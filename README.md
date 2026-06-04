🏨 Hotel Operations Management System
A modern, internal web application for hotel employees to manage cabins, bookings, guests, and daily operations. Built with a modular architecture, clean UI, and robust backend services.

https://img.shields.io/badge/React-19-0D9488?logo=react
https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase
https://img.shields.io/badge/Styled--Components-6-DB7093?logo=styled-components
https://img.shields.io/badge/Vite-5-646CFF?logo=vite
https://img.shields.io/badge/License-MIT-blue.svg

✨ Features
🔐 Authentication & User Management
Secure login for hotel employees (no self-registration).

Manager-only account creation with role-based access (Employee / Manager).

Profile management: update name, password, avatar.

🏠 Cabin Management
View all cabins with photos, capacity, pricing, and discounts.

Create, edit, or delete cabins; upload cabin photos.

📅 Booking Management
Create new bookings: select cabin, guest (existing or new), dates, guests, breakfast option.

View all bookings with powerful status filters (unconfirmed, checked-in, checked-out, cancelled).

Check-in: Confirm payment, optionally add breakfast (flat price).

Check-out: Mark guest departure with timestamp.

Soft delete: Cancel bookings (status cancelled) with dedicated view.

Automatic prevention of overlapping bookings for the same cabin.

Guest data: full name, email, nationality, national ID (encrypted), country flag.

📊 Operational Dashboard
Today’s arrivals & departures with one-click actions.

KPIs for last 7/30/90 days: bookings, sales, check-ins, occupancy rate.

Daily sales chart: total revenue & extras (breakfast).

Stay duration distribution chart.

Interactive, modern charting with tooltips.

⚙️ Application Settings
Configure global parameters: breakfast price, min/max nights per booking, max guests.

🧱 Architecture
The system follows a Modular Monolith with Vertical Slicing pattern, with a thin React frontend directly connected to Supabase services (PostgreSQL, Auth, Storage, Edge Functions).

Frontend: React SPA with feature-based modules.

Backend / Database: Supabase (managed PostgreSQL) with PostgREST auto-generated API.

Business Logic: Supabase Edge Functions for complex atomic operations (booking creation, check-in/out).

File Storage: Supabase Storage for avatars and cabin photos.

Authentication: Supabase Auth with Row‑Level Security (RLS).

For detailed architecture decisions, see ARCHITECTURE.md (coming soon).

🎨 Design System
A custom design token set built on Styled Components with a calm, professional palette:

Primary: Deep Teal (#0D9488) – trust, clarity.

Accent: Warm Gold (#F59E0B) – attention to key actions.

Typography: Inter (clean, legible).

Spacing: 4px base unit, consistent vertical rhythm.

Shadows: Soft, layered depth.

Tokens are defined in src/theme/theme.js and injected via a ThemeProvider.

🧪 Tech Stack
Layer	Technology
Frontend Framework	React 19
Routing	React Router v7
Styling	Styled Components v6
Server State	TanStack React Query v5
Forms	React Hook Form v7 + Zod
Notifications	react-hot-toast
Icons	react-icons
Charts	Recharts
Dates	date-fns v3 + react-datepicker
Backend & Database	Supabase (PostgreSQL, Auth, Storage, Edge Functions)
Build Tool	Vite
Version Control	Git & GitHub
🚀 Getting Started
Prerequisites
Node.js v18+ (v20 LTS recommended)

npm v9+ or yarn

A Supabase project (create one free)

Git

1. Clone the Repository
bash
git clone https://github.com/your-username/hotel-ops.git
cd hotel-ops
2. Install Dependencies
bash
npm install
3. Set Up Supabase
Go to your Supabase project dashboard.

Under Settings > API, note the Project URL and anon public key.

Create a .env file in the project root:

env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
Run the SQL migration script from supabase/migrations/20260604000000_init.sql in the Supabase SQL Editor to set up the database schema, roles, and Row‑Level Security (RLS) policies.

4. Run the Development Server
bash
npm run dev
Open http://localhost:5173 in your browser.

📂 Project Structure
text
hotel-ops/
├── public/               # Static assets
├── src/
│   ├── api/              # Supabase client and query/mutation hooks
│   ├── components/       # Shared UI components (Table, Modal, Button, etc.)
│   ├── context/          # AuthContext, SettingsContext (React Context API)
│   ├── features/         # Feature slices (vertical)
│   │   ├── auth/
│   │   ├── cabins/
│   │   ├── bookings/
│   │   ├── dashboard/
│   │   ├── settings/
│   │   └── users/
│   ├── hooks/            # Custom generic hooks
│   ├── layouts/          # AppLayout (sidebar + content)
│   ├── pages/            # Route-level page components
│   ├── theme/            # Design tokens, GlobalStyles, ThemeProvider
│   ├── utils/            # Helpers, constants, formatters
│   ├── App.jsx
│   └── main.jsx
├── supabase/             # Migrations & edge functions
│   ├── migrations/       # SQL migration files
│   └── functions/        # Deno Edge Functions
├── .env.example
├── .gitignore
├── package.json
└── README.md
🧭 Available Scripts
Command	Description
npm run dev	Start Vite development server with HMR
npm run build	Build for production
npm run preview	Preview the production build locally
npm run lint	Run ESLint
🔐 Security
All communication over HTTPS.

Passwords hashed with bcrypt (via Supabase Auth).

Row‑Level Security (RLS) policies restrict data access per role.

National ID stored encrypted at rest.

JWT tokens with short expiration, stored in HTTP‑only cookies (or localStorage – TBD).

🚢 Deployment
Frontend: Build with npm run build and deploy the dist/ folder to Vercel, Netlify, or Cloudflare Pages.

Backend: Supabase is fully managed; no additional deployment needed. For custom Edge Functions, deploy via Supabase CLI.

Environment Variables: Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your hosting provider.

Example deployment to Vercel:

bash
npm i -g vercel
vercel --prod
📖 Documentation
Architecture Overview (coming soon)

Design Tokens Reference

Database Schema

🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request.
For major changes, discuss first via GitHub Issues.

Fork the repository.

Create your feature branch (git checkout -b feature/amazing-feature).

Commit your changes (git commit -m 'Add some amazing feature').

Push to the branch (git push origin feature/amazing-feature).

Open a Pull Request.

📄 License
Distributed under the MIT License. See LICENSE for more information.

🙌 Acknowledgements
Supabase for the incredible backend platform.

React and Vite for the fast development experience.

All open-source libraries used in this project.

Built with ❤️ for hotel teams everywhere.

markdown
# 🏨 Hotel Operations Management System

A modern internal web application for hotel staff to efficiently manage cabins, bookings, guests, and daily operations.

Built with a modular architecture, a clean and responsive UI, and a robust backend powered by Supabase.

---

## 📌 Badges

![React](https://img.shields.io/badge/React-19-0D9488?logo=react)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase)
![Styled Components](https://img.shields.io/badge/Styled--Components-6-DB7093?logo=styled-components)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

---

# ✨ Features

## 🔐 Authentication & User Management

- Secure employee login (no public registration)
- Manager-only account creation
- Role-based access control (Manager / Employee)
- User profile management
  - Update full name
  - Change password
  - Upload avatar

---

## 🏠 Cabin Management

- View all cabins with:
  - Photos
  - Capacity
  - Pricing
  - Discounts
- Create new cabins
- Edit cabin information
- Delete cabins
- Upload and manage cabin images

---

## 📅 Booking Management

### Create Bookings

- Select cabin
- Choose existing guest or create a new one
- Pick check-in and check-out dates
- Specify guest count
- Add optional breakfast

### Manage Bookings

- View all bookings
- Filter by status:
  - Unconfirmed
  - Checked-in
  - Checked-out
  - Cancelled

### Check-in Process

- Confirm payment
- Optionally add breakfast

### Check-out Process

- Register guest departure
- Save checkout timestamp

### Cancellation

- Soft delete bookings
- Preserve booking history
- Dedicated cancelled bookings view

### Smart Validation

- Prevent overlapping reservations for the same cabin

### Guest Information

- Full name
- Email address
- Nationality
- Country flag
- Encrypted National ID

---

## 📊 Operational Dashboard

### Today's Operations

- Arrivals
- Departures
- One-click check-in/check-out actions

### Key Performance Indicators

Available for:

- Last 7 days
- Last 30 days
- Last 90 days

Metrics include:

- Total bookings
- Sales
- Check-ins
- Occupancy rate

### Analytics

- Daily revenue chart
- Breakfast sales tracking
- Stay duration distribution
- Interactive charts with tooltips

---

## ⚙️ Application Settings

Configure global hotel parameters:

- Breakfast price
- Minimum booking nights
- Maximum booking nights
- Maximum guests per booking

---

# 🧱 Architecture

The application follows a **Modular Monolith** architecture with a **Vertical Slicing** pattern.

```

React SPA
│
▼
Supabase Services
├── PostgreSQL
├── Auth
├── Storage
└── Edge Functions

```

### Frontend

- React Single Page Application
- Feature-based module organization

### Backend & Database

- Supabase
- PostgreSQL
- Auto-generated PostgREST API

### Business Logic

Implemented using Supabase Edge Functions:

- Booking creation
- Check-in
- Check-out
- Atomic operations

### Storage

- Cabin photos
- User avatars

### Authentication

- Supabase Auth
- Row-Level Security (RLS)

> Detailed architecture documentation will be available in `ARCHITECTURE.md`.

---

# 🎨 Design System

Custom design tokens built with Styled Components.

## Color Palette

| Token | Value | Purpose |
|--------|---------|----------|
| Primary | `#0D9488` | Trust & clarity |
| Accent | `#F59E0B` | Highlight important actions |

## Typography

- Inter

## Spacing

- 4px base unit
- Consistent vertical rhythm

## Shadows

- Soft layered elevation

Design tokens are defined in:

```

src/theme/theme.js

````

and provided globally through `ThemeProvider`.

---

# 🧪 Tech Stack

| Layer | Technology |
|---------|-----------------------------|
| Frontend Framework | React 19 |
| Routing | React Router v7 |
| Styling | Styled Components v6 |
| Server State | TanStack React Query v5 |
| Forms | React Hook Form v7 + Zod |
| Notifications | react-hot-toast |
| Icons | react-icons |
| Charts | Recharts |
| Date Utilities | date-fns v3 + react-datepicker |
| Backend | Supabase |
| Database | PostgreSQL |
| Authentication | Supabase Auth |
| File Storage | Supabase Storage |
| Serverless | Supabase Edge Functions |
| Build Tool | Vite |
| Version Control | Git & GitHub |

---

# 🚀 Getting Started

## Prerequisites

- Node.js v18+ (v20 LTS recommended)
- npm v9+ or Yarn
- Git
- A Supabase project

---

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/hotel-ops.git
cd hotel-ops
````

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Supabase

Create a `.env` file:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Then run the SQL migration:

```
supabase/migrations/20260604000000_init.sql
```

This will create:

* Database schema
* Roles
* Permissions
* Row-Level Security policies

---

## 4. Start Development Server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

# 📂 Project Structure

```text
hotel-ops/
├── public/
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── features/
│   │   ├── auth/
│   │   ├── cabins/
│   │   ├── bookings/
│   │   ├── dashboard/
│   │   ├── settings/
│   │   └── users/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── theme/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── supabase/
│   ├── migrations/
│   └── functions/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

# 🧭 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

---

# 🔐 Security

* HTTPS communication
* Password hashing via Supabase Auth
* Row-Level Security (RLS)
* Encrypted National IDs
* JWT authentication
* Short-lived access tokens

---

# 🚢 Deployment

## Frontend

```bash
npm run build
```

Deploy the `dist/` directory to:

* Vercel
* Netlify
* Cloudflare Pages

---

## Backend

Supabase is fully managed.

Deploy Edge Functions when needed:

```bash
supabase functions deploy
```

---

## Environment Variables

Configure:

```env
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

in your hosting provider.

---

## Example: Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

---

# 📖 Documentation

* Architecture Overview *(Coming Soon)*
* Design Tokens Reference
* Database Schema

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes.

```bash
git commit -m "Add some amazing feature"
```

4. Push your branch.

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request.

For major changes, please open an issue first for discussion.

---

# 📄 License

Distributed under the MIT License.

See the `LICENSE` file for more information.

---

# 🙌 Acknowledgements

* Supabase
* React
* Vite
* All open-source libraries used in this project

---

<div align="center">

**Built with ❤️ for hotel teams everywhere.**

</div>


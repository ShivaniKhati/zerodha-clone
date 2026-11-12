# Zerodha Clone: Full-Stack Trading Platform

A full-stack stock trading platform inspired by Zerodha. It has a marketing site, secure login/signup, and a trading dashboard where users place Buy/Sell orders and see portfolio holdings and charts.

**Live demo**
- Landing site: https://zerodha-frontend-56tq.onrender.com
- Dashboard: https://zerodha-dashboard-x0wa.onrender.com
- API: https://zerodha-clones-7rvl.onrender.com

> Hosted on Render's free tier, so the first request may take ~30–50 seconds to wake up.



## Features
- Signup / Login with **JWT** stored in an **HTTP-only cookie**; passwords hashed with **bcrypt**
- **Protected dashboard** routes using React Router and JWT-based authentication.
- Buy / Sell order windows with centralized state using **React Context API**
- Order-processing logic: updates holdings quantity and **weighted average price** in MongoDB; rejects selling more than owned
- Holdings visualised with **Chart.js** (bar and doughnut charts)
- Landing pages: Home, Products, Pricing, About, Support

## Tech Stack
| Layer | Tech |
|---|---|
| Landing site | React (Vite), React Router, Bootstrap, Jest + Testing Library |
| Dashboard | React (Vite), Context API, Chart.js, Material UI |
| Backend | Node.js, Express, Mongoose |
| Database | MongoDB |
| Auth | JWT, bcryptjs, cookie-parser |
| Deployment | Render |

## Architecture
```
frontend (landing + login/signup)  ──┐
                                     ├──► Express API ──► MongoDB
dashboard (orders, holdings, charts) ┘     (JWT cookie auth)
```

## Project Structure
```
backend/      Express API: routes, controllers, middlewares, models
frontend/     Landing pages + auth forms
dashboard/    Trading dashboard
```

## Run Locally
Prerequisites: Node.js 18+, a MongoDB connection string.

```bash
git clone https://github.com/ShivaniKhati/zerodha-clone.git
cd zerodha-clone
```

**Backend**
```bash
cd backend
npm install
# create .env with:
# MONGODB_URI=<your mongodb uri>
# TOKEN_KEY=<any long random string>
# PORT=3002
npm start
```

**Frontend**
```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
```

**Dashboard**
```bash
cd dashboard
npm install
npm run dev      # http://localhost:5174
```

## API Overview
| Method | Route | Description |
|---|---|---|
| POST | `/api/auth/signup` | Register user |
| POST | `/api/auth/login` | Login, sets HTTP-only cookie |
| POST | `/api/auth/logout` | Clears cookie |
| GET | `/api/protected` | Verifies session |
| POST | `/newOrder` | Place BUY/SELL order |
| GET | `/allHoldings` | List holdings |
| GET | `/allOrders` | List orders |
| GET | `/allPositions` | List positions |

## Roadmap
- [ ] Per-user holdings and orders with all data routes behind auth
- [ ] Server-side validation of order inputs
- [ ] AI portfolio assistant (LLM) for natural-language questions about holdings


## Author
**Shivani Khati**: [LinkedIn](https://www.linkedin.com/in/shivani-khati-74b58a2b3/) · [GitHub](https://github.com/ShivaniKhati)

# JobMatch AI Backend

Node.js backend API for the JobMatch AI platform with authentication and session management.

## Features

- **Session-based Authentication**: Secure login/logout with Express sessions
- **User Management**: Separate roles for applicants and recruiters
- **Security**: Helmet, rate limiting, CORS protection
- **Database**: MongoDB with Mongoose ODM
- **Validation**: Express-validator for input validation

## Quick Start

1. **Install dependencies**
```bash
npm install
```

2. **Set up environment**
```bash
cp .env.example .env
# Edit .env with your MongoDB URI and session secret
```

3. **Start MongoDB** (if running locally)
```bash
mongod
```

4. **Run the server**
```bash
npm run dev  # Development with nodemon
npm start    # Production
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/profile` - Get user profile (requires auth)

### Health Check
- `GET /api/health` - Server health status

## Environment Variables

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/jobmatch-ai
SESSION_SECRET=your-super-secret-session-key
CORS_ORIGIN=http://localhost:3000
```

## Project Structure

```
src/
├── config/
│   └── database.js      # MongoDB connection
├── controllers/
│   └── authController.js # Authentication logic
├── middleware/
│   └── auth.js          # Auth middleware
├── models/
│   └── User.js          # User model
├── routes/
│   └── auth.js          # Auth routes
└── server.js            # Main server file
```
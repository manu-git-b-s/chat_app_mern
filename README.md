# MERN Stack Chat Application

This is a full-stack chat application built using the MERN stack (MongoDB, Express, React, Node.js) along with additional libraries and tools like Chakra UI for UI components, Axios for API calls, React Router DOM for routing, React Scrollable Feed for handling message scrolling, JWT for authentication, and bcryptjs for password hashing. The application supports both one-to-one and group chat functionalities.

## Features

- **User Authentication**: Secure authentication using JWT and bcryptjs for password hashing.
- **One-to-One Chat**: Private messaging between two users.
- **Group Chat**: Chat functionality for multiple users in a single chat room.
- **Real-time Messaging**: Messages are updated in real-time.
- **Responsive Design**: User-friendly interface built with Chakra UI.
- **Message Scrolling**: Smooth scrolling for chat messages using React Scrollable Feed.

## Tech Stack

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Chakra UI**: Component library for building modern and accessible React apps.
- **Axios**: Promise-based HTTP client for making API calls.
- **React Router DOM**: Library for routing in React applications.
- **React Scrollable Feed**: Component for handling auto-scrolling of chat messages.

### Backend

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user data and messages.
- **JWT**: Library for JSON Web Token authentication.
- **bcryptjs**: Library for password hashing.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/mern-chat-app.git
   cd mern-chat-app
   ```

2. **Install dependencies for the backend:**

   ```bash
   cd backend
   npm install
   ```

3. **Install dependencies for the frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

### Configuration

1. **Backend Configuration:**

   - Create a `.env` file in the `backend` directory and add the following environment variables:
     ```env
     PORT=8080
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

2. **Frontend Configuration:**
   - Create a `.env` file in the `frontend` directory and add the following environment variable:
     ```env
     REACT_APP_API_URL=http://localhost:8080/api
     ```

### Running the Application

1. **Start the backend server:**

   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend development server:**

   ```bash
   cd frontend
   npm start
   ```

3. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Project Structure

```plaintext
mern-chat-app/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── config/
│   │   ├── animations/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   └── ...
│
├── .gitignore
├── README.md
└── ...
```

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/feature-name`).
6. Create a new Pull Request.

## Support

For any questions or issues, please open an issue on the GitHub repository or contact [manupriyan722@gmail.com].

## Deployed Netlify Link

[Chat App Project](https://chat-app-mern-hq5g.onrender.com)

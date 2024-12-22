// require('dotenv').config();
// const express = require('express');
// const connectDB = require('./config/db');
// const userRoutes = require('./routes/user');
// const postRoutes = require('./routes/post');

// connectDB();

// const app = express();
// app.use(express.json());

// //cors
// // app.use((req, res, next) => {
// //     res.header("Access-Control-Allow-Origin", "*"); 
// //     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
// //     res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization"); 
// //     next();
// // });
// const cors = require('cors');
// app.use(cors()); 

// // routes
// app.use('/api/users', userRoutes);
// app.use('/api/posts', postRoutes);

// app.get('/', (req, res) => {
//     res.send("Hello world");
// });

// // RUNRUNRUN
// const PORT = process.env.PORT || 5000;  
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// });

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const cors = require('cors');

// Connect to the database
connectDB();

const app = express();
app.use(express.json());

// CORS Configuration (allow all origins)
app.use(cors({
  origin: '*',  // Allow all origins (you can replace * with a specific domain for better security)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token', 'X-Requested-With'], // Allowed headers
  credentials: true  // Allow credentials
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Test route
app.get('/', (req, res) => {
  res.send("Hello world");
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

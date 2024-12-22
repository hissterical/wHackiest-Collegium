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
app.use(async (req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  next()
});

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


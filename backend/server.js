const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const colors = require('colors');
const path = require('path');

const connectDB = require('./config/db')

//connect to Database
connectDB();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello how are you" });
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));
app.use(errorHandler);

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../front-end/build')))

  app.get('*', (req, res) =>
    res.sendFile(__dirname, '../', 'front-end', 'build', 'index.html')
  )
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' })
  })
}
app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));

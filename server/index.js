const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
require("dotenv").config();

const DB_CONNECT = process.env.DB_CONNECT;

const app = express();

app.use(cors({
    origin: ["http://localhost:5173","http://localhost:5174"],
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
}));
app.use(express.json());
 
app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.get("/", (req, res) => res.json({msg: "Welcome to Course selling website"}));

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect(DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3000, () => console.log('Server running on port 3000'));

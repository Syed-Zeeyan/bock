// // import express, { urlencoded } from "express";
// // import cors from "cors";
// // import cookieParser from "cookie-parser";
// // import dotenv from "dotenv";
// // import connectDB from "./utils/db.js";
// // import userRoute from "./routes/user.route.js";
// // import postRoute from "./routes/post.route.js";
// // import messageRoute from "./routes/message.route.js";
// // dotenv.config({});

// // const app = express();

// // const PORT = process.env.PORT || 3000;

// // app.get("/", (_,res) => {
// //     return res.status(200).json({
// //         message:"I'm coming from backend",
// //         success:true
// //     })
// // })
// // app.use(express.json());
// // app.use(cookieParser());
// // app.use(urlencoded({extended:true}));
// // const corsOptions = {
// //     origin:'http://localhost:5173',
// //     credentials:true
// // }
// // app.use(cors(corsOptions));

// // app.use("/api/v1/user",userRoute);
// // app.use("/api/v1/post", postRoute);
// // app.use("/api/v1/message", messageRoute);



// // app.listen(PORT,()=>{
// //     connectDB();
// //     console.log(`Server listen at port ${PORT}`);
// // })


// import express, { urlencoded } from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";
// import connectDB from "./utils/db.js";
// import userRoute from "./routes/user.route.js";
// import postRoute from "./routes/post.route.js";
// import messageRoute from "./routes/message.route.js";
// import { app,server } from "./socket/socket.js";
// dotenv.config({});


// const PORT = process.env.PORT || 3000;

// app.get("/", (_, res) => {
//     return res.status(200).json({
//         message: "I'm coming from backend",
//         success: true
//     });
// });
// app.use(express.json());
// app.use(cookieParser());
// app.use(urlencoded({ extended: true }));

// const corsOptions = {
//     origin: ['http://localhost:5173', 'http://localhost:5174'],  // Allow both origins
//     credentials: true
// };
// app.use(cors(corsOptions));

// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/post", postRoute);
// app.use("/api/v1/message", messageRoute);

// server.listen(PORT, () => {
//     connectDB();
//     console.log(`Server listening at port ${PORT}`);
// });


import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./socket/socket.js";
import jwt from "jsonwebtoken";

dotenv.config();

// 🔹 Set PORT from environment variables
const PORT = process.env.PORT || 3000;

// 🔹 Middleware to log requests (for debugging)
app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next();
});

// 🔹 CORS Configuration (Allow EC2 & Localhost)
const corsOptions = {
    origin: [
        "http://localhost:5173",  // Local frontend
        "http://localhost:5174",
        "http://13.235.200.66:5173",  // Replace with actual EC2 public IP
       
    ],
    credentials: true
};
app.use(cors(corsOptions));

// 🔹 Middleware
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

// 🔹 Simple API Checkpoint
app.get("/", (_, res) => {
    return res.status(200).json({
        message: "I'm coming from backend",
        success: true
    });
});

// 🔹 Authentication Middleware (Optional)
const authenticateUser = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized - No Token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ success: false, message: "Forbidden - Invalid Token" });
    }
};

// 🔹 Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", authenticateUser, postRoute);  // Protected Route
app.use("/api/v1/message", authenticateUser, messageRoute);  // Protected Route

// 🔹 Start Server & Connect Database
server.listen(PORT, () => {
    connectDB();
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});

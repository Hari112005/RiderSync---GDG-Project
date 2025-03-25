const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

const SECRET_KEY = "myapp"; // Move to .env in production

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Dummy authentication (Replace with a real database check)
    if (username === "Harish" && password === "12345678") {
        const user = { id: 1, username };

        // Generate JWT
        const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });

        // Set JWT in HTTP-only Cookie
        res.cookie("token", token, {
            httpOnly: true, // Prevents JavaScript access (XSS protection)
            secure: process.env.NODE_ENV === "production", // HTTPS only in production
            sameSite: "Strict", // Prevents CSRF
            maxAge: 60 * 60 * 1000 // 1 hour expiration
        });

        return res.json({ message: "Login successful" });
    }
    return res.status(401).json({ message: "Invalid credentials" });
});
app.get('/user',(req,res)=>{
    return res.json(req.cookies.token)
})

// Fix the app.listen callback
app.listen(3000, () => {
    console.log("Server runs at port: 3000");
});

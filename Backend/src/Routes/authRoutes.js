import express from "express";
import { registerUser, loginUser } from "../Services/authServices.js";
const router = express.Router();
router.post("/register", async (req, res) => {
  const user = await registerUser(req.body);
  res.status(201).json(user);
});

router.post("/login", async (req, res) => {
  const data = await loginUser(req.body.email, req.body.password);
  if (!data) return res.status(401).json({ error: "Invalid credentials" });
  res.cookie('token',data.token,{maxAge:60*60*60,httpOnly:true});
  res.json(data);
});
router.get('/logout',(req,res)=>{
    res.clearCookie('token')
    res.send("Logged out successfully...!")
});

export default router;

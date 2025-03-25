import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/db.js";
const SECRET = process.env.JWT_SECRET;

export const registerUser = async (data) => {
  const { name, email, password, phone, role } = data;
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: { name, email, password: hashedPassword, phone, role },
  });
};

export const loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) return null;

  const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: "1s" });
  
  return token;
};

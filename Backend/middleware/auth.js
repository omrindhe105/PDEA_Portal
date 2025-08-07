const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { Teacher } = require("../models/studentSchema");

dotenv.config();

const auth = async (req, res, next) => {
  // Debug: Log incoming cookies and headers
  console.log('[AUTH] Incoming cookies:', req.cookies);
  console.log('[AUTH] Incoming headers:', req.headers);
  const authHeader = req.headers.authorization;
  const tokenFromHeader =
    authHeader && authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

  const tokenFromCookie = req.cookies?.token;

  const token = tokenFromHeader || tokenFromCookie;
  console.log('[AUTH] Token from header:', tokenFromHeader);
  console.log('[AUTH] Token from cookie:', tokenFromCookie);
  console.log('[AUTH] Using token:', token);

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('[AUTH] Decoded JWT:', decoded);
    const teacher = await Teacher.findById(decoded.id || decoded._id);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found." });
    }
    req.user = teacher;
    console.log('[AUTH] Attached user to req:', req.user);
    next();
  } catch (error) {
    console.error("[VERIFY TOKEN ERROR]", error.message);
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

module.exports = auth;

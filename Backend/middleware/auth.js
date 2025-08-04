// eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const jwt = require("jsonwebtoken");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const dotenv = require("dotenv");

dotenv.config();


if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not set in environment variables.");
}

const auth = (req, res, next) => {
  
  const authHeader = req.headers.authorization;
  const tokenFromHeader =
    authHeader && authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

 
  const tokenFromCookie = req.cookies && req.cookies.token;

 
  console.log("Token from header:", tokenFromHeader);
  console.log("Token from cookie:", tokenFromCookie);

  
  const token = tokenFromHeader || tokenFromCookie;

  if (!token) {
    return res.status(401).json({ message: "No token provided! Access denied." });
  }

  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    console.log("Decoded user:", req.user);
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

module.exports = auth;
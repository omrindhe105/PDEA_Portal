/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const jwt = require("jsonwebtoken");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const dotenv = require("dotenv");

dotenv.config();

// Validate that JWT_SECRET exists
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not set in environment variables.");
}

const auth = (req, res, next) => {
  // Get token from Authorization header (Bearer <token>)
  const authHeader = req.headers.authorization;
  const tokenFromHeader =
    authHeader && authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

  // Get token from cookie (requires cookie-parser middleware)
  const tokenFromCookie = req.cookies && req.cookies.token;

  // Log tokens for debugging
  console.log("Token from header:", tokenFromHeader);
  console.log("Token from cookie:", tokenFromCookie);

  // Use header token if available, otherwise fall back to cookie
  const token = tokenFromHeader || tokenFromCookie;

  if (!token) {
    return res.status(401).json({ message: "No token provided! Access denied." });
  }

  try {
    // Verify the token using JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    console.log("Decoded user:", req.user);
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

module.exports = auth;

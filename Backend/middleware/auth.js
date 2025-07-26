const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
 



dotenv.config();


const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const tokenFromHeader = authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;
  const tokenFromCookie = req.cookies && req.cookies.token;


console.log("Token from header:", tokenFromHeader);
  console.log("Token from cookie:", tokenFromCookie);           


  const token = tokenFromHeader || tokenFromCookie;

  if (!token) {
    return res.status(401).json({ message: "No token provided! Access denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
 module.exports  = auth;
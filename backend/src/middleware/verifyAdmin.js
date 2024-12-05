import jwt from "jsonwebtoken";

const verifyAdminToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    res.status(404).json({ message: "Access Denied. No token is provided" });
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(404).json({ message: "Invalid Token" });
    }
    req.user = user;
    next();
  });
};

export default verifyAdminToken;

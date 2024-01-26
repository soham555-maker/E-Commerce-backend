import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    req.logedin = false;
    return res.json({ success: false, message: "Unauthorized" });
  } else {
    jwt.verify(token, "secret_ecom", (err, data) => {
      if (err) {
        req.logedin = false;
        return res.json({ success: false, message: "Forbidden" });
      }else{
      req.user = data.user;
      req.logedin = true;}
    });
  }next();
};

export default authenticateToken;

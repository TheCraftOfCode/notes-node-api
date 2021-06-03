const ErrorResponse = require("../utils/ErrorResponse");
const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  // If token is sent through headers
  if (!req.headers.authorization)
    return next(new ErrorResponse("Access Denied - Token missing", 401));

  const token = req.headers.authorization.split(" ")[1];
  let user;

  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    next(new ErrorResponse("Access Denied - Invalid Token"));
  }

  req.user = user;
  next();
};

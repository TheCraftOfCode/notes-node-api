const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");
const ErrorResponse = require("../utils/ErrorResponse");

exports.registerUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return next(new ErrorResponse("User already registered", 400));

  const _user = new User(req.body);
  const createdUser = await _user.save();

  res
    .status(201)
    .send({ success: true, message: "User created successfully", createdUser });
});

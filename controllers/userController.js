const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");
const ErrorResponse = require("../utils/ErrorResponse");
const jwt = require("jsonwebtoken");

exports.registerUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return next(new ErrorResponse("User already registered", 400));

  const _user = new User(req.body);
  const createdUser = await _user.save();

  res
    .status(201)
    .send({
      success: true,
      message: "User created successfully",
      user: createdUser.email,
    });
});

exports.signIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new ErrorResponse("Login credentials Missing", 400));

  const user = await User.findOne({ email });
  if (!user) return next(new ErrorResponse("User not registered", 400));

  const isPasswordValid = user.comparePassword(req.body.password);
  if (!isPasswordValid)
    return next(new ErrorResponse("Password incorrect", 400));

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.status(200).send({
    token,
  });
});

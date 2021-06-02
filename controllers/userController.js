const { JsonWebTokenError } = require("jsonwebtoken");
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


exports.signIn = asyncHandler(async(req,res) => {
  User.findOne({email: req.body.email}),
  function(err,user) {
    if(err) throw err;
    if(!user || !user.comparePassword(req.body.password)) 
    return next(new ErrorResponse("Authentication failure", 401)); 
  }
  
  res
      .status(200)
      .send()
})
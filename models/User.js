const mongoose = require("mongoose");
const bcrpyt = require("bcrpyt");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [6, "Name must be atleast 6 characters"],
      required: [true, "Please provide a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minlength: [6, "Password must be atleast 6 characters long"],
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  const salt = await bcrpyt.genSalt(10);
  this.password = await bcrpyt.hash(this.password, salt);
});


UserSchema.methods.comparePassword = function(password) {
  return bcrpyt.compareSync(password,this.password)
}

const User = mongoose.model("User", UserSchema);

module.exports = User;


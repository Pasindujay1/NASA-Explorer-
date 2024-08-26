import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,

    required: [true, "email is required"],
  },

  password: {
    type: String,
    required: [true, "password is required"],
  },
});

const User = new mongoose.model("User", UserModel);

export default User;

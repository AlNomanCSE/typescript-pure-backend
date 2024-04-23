import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const usermodel = mongoose.model("user", UserSchema);

export default usermodel;

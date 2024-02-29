import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    id: { type: String, default: uuidv4 },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true }, 
  },
  { timestamps: true }
);


userSchema.pre("validate", function (next) {
  if (this.isModified("password") && this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Passwords must match");
  }
  next();
});

const modelName = mongoose.models.User || mongoose.model("User", userSchema);

export default modelName;

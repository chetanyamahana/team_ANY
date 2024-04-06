const mongoose = require("mongoose");

const MechanicSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

const Mechanic = mongoose.model("Mechanic", MechanicSchema);
module.exports = Mechanic;

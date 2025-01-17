const { default: mongoose } = require("mongoose");

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  pin: Number,
  city: String,
  district: String,
  state: String,
})

export const Form = mongoose.models?.Form || mongoose.model("Form", formSchema)
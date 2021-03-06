const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: {type: String, required: true},
  auth_id: {type: String, required: true},
  products:[{type:Schema.Types.ObjectId, ref:"Product"}]
})

const User = mongoose.model("User", userSchema);


module.exports = User;
const { model } = require("mongoose");
const bcrypt = require("bcryptjs");

const { UserSchema } = require("../schemas/UserSchema");

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const UserModel = new model("user", UserSchema);

module.exports = { UserModel };
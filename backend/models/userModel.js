const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   number: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   }
}, {
   timestamps: true
})

// encrypt password before saving
userSchema.pre('save', async function (next) {
   if (!this.isModified('password')) {
      return next();
   }

   const saltRounds = process.env.BCRYPT_SALT_ROUNDS ? parseInt(process.env.BCRYPT_SALT_ROUNDS) : 10;
   const salt = await bcrypt.genSalt(saltRounds)
   this.password = await bcrypt.hash(this.password, salt)
   next()
})

const User = mongoose.model('User', userSchema);

module.exports = User;
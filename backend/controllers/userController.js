const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler( async (req, res) => {
   const { name, email, number, password } = req.body;

   if(!name || !email || !number || !password) {
      res.status(400)
      throw new Error('Please fill all the fields')
   }
   if(password.length < 6) {
      res.status(400)
      throw new Error('Password must be atleast 6 characters long')
   }
   const emailExists = await User.findOne({   email   })  // check if user already exists  
   if(emailExists) {
      res.status(400)
      throw new Error('email already exists')
   }
   const numberExists   = await User   .findOne({ number })  // check if user already exists 
   if(numberExists) {
      res.status(400)
      throw new Error('user already exists')
   }
   User.create({ name, email, number, password }).then(user => {
      res.status(201).json(user)
   }).catch(err => {
      res.status(500)
      throw new Error('Server Error')
   })
   
})



module.exports = {
   registerUser
}


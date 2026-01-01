const express = require('express');
const router = express.Router();
const User = require('../models/User');


//user routes
//create user 
router.post("/", async (req,res)=>{

   const user =  new User(req.body);
   const saved = await user.save();
   res.status(201).json(saved)
})

//get all users
router.get('/',async(req,res)=>{
  const users =   await User.find();
  res.status(201).json(users)
})
//get one user - api/users/:id
router.get('/:id',async(req,res)=>{
  const users =   await User.findById(req.params.id);
  res.status(201).json(users)
})


//update user data - PUT /api/users/:id

router.put('/:id',async(req,res)=>{
  const users =   await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.status(201).json(users)
})

//delete user - delete /api/users/:id
router.delete('/:id',async(req,res)=>{
  const users =   await User.findByIdAndDelete(req.params.id);
  res.sendStatus(204)
})

module.exports = router;
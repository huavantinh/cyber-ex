
const User = require('../models/user');

const getUser = async(req, res) => {
let{id} = req.params

  let data = await User.findOne({
    where: {
      user_id: id
    }
  })

  console.log(data)

  // let data2 = await User.findOne()
  res.status(200).send(data)
  }

const createUser = (async(req, res) => {
    res.status(200).send("hello created")
})
const updateUser = ((req, res) => {
  res.status(200).send("hello updated")
})


 module.exports = {getUser,
    createUser, 
    updateUser, 
}

const asyncHandler = require('express-async-handler')

// @desc   Get user form
// @route  GET /api/userForm
// @access Private
const getUserForm = asyncHandler (async (req, res) => {
    res.status(200).json({message:'Get Form'})
})

// @desc   Set user form
// @route  POST /api/userForm
// @access Private
const setUserForm =  asyncHandler (async (req, res) => {

   if(!req.body.name){
    res.status(400)
    throw new Error('Name is required');
   }

    res.status(200).json({message:'Set Form'})
})

// @desc   Update user form
// @route  PUT /api/userForm/:id
// @access Private
const updateUserForm = asyncHandler (async (req, res) => {
    res.status(200).json({message:`Update Form ${req.params.id}`})
})

// @desc   Delete user form
// @route  DELETE /api/userForm/:id
// @access Private
const deleteUserForm = asyncHandler (async (req, res) => {
    res.status(200).json({message:`Delete Form ${req.params.id}`})
})


module.exports = {
    getUserForm,
    setUserForm,
    updateUserForm,
    deleteUserForm
}

const asyncHandler = require('express-async-handler')
const userForm = require('../models/userFormModel')

// @desc   Get user form
// @route  GET /api/userForm
// @access Private
const getUserForm = asyncHandler (async (req, res) => {
    const userForms = await userForm.find()
    res.status(200).json(userForms)
})

// @desc   Set user form
// @route  POST /api/userForm
// @access Private
const setUserForm =  asyncHandler (async (req, res) => {

   if(!req.body.name){
    res.status(400)
    throw new Error('Name is required');
   }

   const userFormToSet = await userForm.create({
    name: req.body.name,
    age: req.body.age,
   })

    res.status(200).json(userFormToSet)
})

// @desc   Update user form
// @route  PUT /api/userForm/:id
// @access Private
const updateUserForm = asyncHandler (async (req, res) => {
    const userFormToUpdate = await userForm.findByIdAndUpdate(req.params.id)

    if (!userFormToUpdate) {
        res.status(404)
        throw new Error('User form not found')
    }

    const updatedUserForm = await userForm.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedUserForm)
})

// @desc   Delete user form
// @route  DELETE /api/userForm/:id
// @access Private
const deleteUserForm = asyncHandler (async (req, res) => {

    const userFormToDelete = await userForm.findByIdAndUpdate(req.params.id)

    if (!userFormToDelete) {
        res.status(404)
        throw new Error('User form not found')
    }

    await userForm.findByIdAndDelete(req.params.id)

    res.status(200).json(userFormToDelete)
})


module.exports = {
    getUserForm,
    setUserForm,
    updateUserForm,
    deleteUserForm
}
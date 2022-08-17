const express = require('express')

const {
    getUserForm,
    setUserForm,
    updateUserForm,
    deleteUserForm
} = require('../controllers/userFormController'); 

const router =  express.Router();

router.route('/').get(getUserForm).post(setUserForm);

router.route('/:id').put(updateUserForm).delete(deleteUserForm);


module.exports = router;
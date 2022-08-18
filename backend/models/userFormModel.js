const mongoose = require('mongoose');

const userFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    age: {
        type: Number,
        required: [true, 'Age is required']
    }, 
},
{
    timestamps: true
}
);

module.exports = mongoose.model('form', userFormSchema);
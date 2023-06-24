const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {type: String, required: true},
        password: {type: String, required: true},
        userName: {type: String, required: true},
        userLastname: {type: String, required: true},
        adress: {type: String, required: true},
        shoes: [{type: Schema.Types.ObjectId, ref: 'shoes'}] // la ref: es el nombre de la colección en la DB de donde toma los id
    },{
        timestamps: true,
        collection: 'users'
    }
)

const User = mongoose.model('users', userSchema);

module.exports = User;

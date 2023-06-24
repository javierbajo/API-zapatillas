const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shoeSchema = new Schema(
    {
        shoeName: {type: String, required: true},
        type: {type: String, required: true},
        price: {type: Number, required: false},
        origin: {type: String, required: true},
        image: { type: String, required: false, default:""},
        description: { type: String, required: false, default:""}
    },{
        timestamps: true,
        collection: 'shoes'
    }
)

const Shoe = mongoose.model('shoes', shoeSchema);

module.exports = Shoe;
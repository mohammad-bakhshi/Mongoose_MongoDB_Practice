const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    type: String,
    title: String,
    description: String,
    shipping: Schema.Types.Mixed,
    pricing: Schema.Types.Mixed,
    details: Schema.Types.Mixed,
});


module.exports = mongoose.model('Product', ProductSchema);
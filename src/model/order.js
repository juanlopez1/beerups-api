const mongoose = require('mongoose');

const {Schema} = mongoose;
const {ObjectId} = Schema;

const OrderSchema = new Schema({
    _id: {type: ObjectId, required: true},
    canceled: {type: Boolean, default: false},
    modified: {type: Boolean, default: false},
    estimatedBeers: {type: Number},
    beers: {type: Number}
}, {collection: 'orders', timestamps: true});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;

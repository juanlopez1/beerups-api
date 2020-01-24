const mongoose = require('mongoose');

const {Schema} = mongoose;
const {ObjectId} = Schema;

const UserSchema = new Schema({
    _id: {type: ObjectId, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    disable: {type: Boolean, default: false}
}, {collection: 'meetups', timestamps: true});

const User = mongoose.model('User', UserSchema);

module.exports = User;

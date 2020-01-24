const mongoose = require('mongoose');

const {Schema} = mongoose;

const RoleSchema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true}
}, {collection: 'roles', timestamps: true});

const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;

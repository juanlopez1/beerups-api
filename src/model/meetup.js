const mongoose = require('mongoose');

const {Schema} = mongoose;
const {ObjectId} = Schema;

const MeetupSchema = new Schema({
    _id: {type: ObjectId},
    title: {type: String, required: true},
    description: {type: String},
    place: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    canceled: {type: Boolean, default: false},
    modified: {type: Boolean, default: false},
    creator: {type: ObjectId, required: true},
    participants: {type: Array, required: true},
    beers: {type: Number, required: true},
    boxes: {type: Number, required: true}
}, {collection: 'meetups', timestamps: true});

const Meetup = mongoose.model('Meetup', MeetupSchema);

module.exports = Meetup;

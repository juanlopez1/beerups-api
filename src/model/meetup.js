const mongoose = require('mongoose');

const {Schema} = mongoose;
const {ObjectId} = Schema;

const MeetupSchema = new Schema({
    _id: {type: ObjectId, required: true},
    order: {type: ObjectId, required: true},
    details: {
        title: {type: String, required: true},
        description: {type: String},
        place: {type: String},
        date: {type: Date, required: true},
        oldDate: {type: Date}
    },
    canceled: {type: Boolean, default: false},
    modified: {type: Boolean, default: false},
    creator: {type: ObjectId, required: true},
    participants: {type: Array, required: true}
}, {collection: 'meetups', timestamps: true});

const Meetup = mongoose.model('Meetup', MeetupSchema);

module.exports = Meetup;

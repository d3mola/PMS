const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            unique: true,
            required: [true, 'Name cannot be blank']
        },
        male: {
            type: Number,
            trim: true,
            min: 1,
            required: true
        },
        female: {
            type: Number,
            trim: true,
            required: true,
            min: 1
        },
        totalResidents: {
            type: Number,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;

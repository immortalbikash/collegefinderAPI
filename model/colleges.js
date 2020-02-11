const mongoose = require('mongoose');
const collegeSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required: true
    },
    collegeLocation: {
        type: String,
        required: true
    },
    collegeType: {
        type: String,
        required: true
    },
    collegeDescription: {
        type: String,
        required: true
    },
    collegeImage: {
        type: String, 
        required: true
    },
    collegeUrl: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('College', collegeSchema);
const mongoose = require('mongoose');

const preferencesSchema = new mongoose.Schema({
    categories: [{
        type: String
    }],
    sources: [{
        type: String
    }]
});

const Preferences = mongoose.model('Preferences', preferencesSchema);

module.exports = Preferences;
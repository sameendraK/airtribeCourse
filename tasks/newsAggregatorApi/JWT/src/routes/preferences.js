const preferencesModel = require('../models/preferencesModel.js');

const addPreferences = async (req, res) => {

    try {

        const { preferenceText } = req.body;

        const preference = new preferencesModel({
            preferenceText
        });

        await preference.save();

        res.status(201).json({
            message: 'Preference added successfully',
            preference
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};

module.exports = { addPreferences };
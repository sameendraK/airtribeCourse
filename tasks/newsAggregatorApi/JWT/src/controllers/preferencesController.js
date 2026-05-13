const User = require('../models/userModels.js');

const addPreferences = async (req, res) => {
    const { preferenceText } = req.body;
    const userId = req.user.id;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (!user.preferredCategories.includes(preferenceText)) {
            user.preferredCategories.push(preferenceText);
            await user.save();
        }
        res.status(200).json({ message: 'Preference added successfully', preferredCategories: user.preferredCategories });
    } catch (error) {
        res.status(500).json({ message: 'Error adding preference', error: error.message });
    }
};

module.exports = { addPreferences };
const User = require('../models/userModels.js');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hashedPassword => {
            const newUser = new User({ name, email, password: hashedPassword });
            return newUser.save();
        })
        .then(user => res.status(201).json({ message: 'User created successfully', user: user }));
}

module.exports = { createUser };
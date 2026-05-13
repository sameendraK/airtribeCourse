const router = require('express').Router();
const preferencesController = require('../controllers/preferencesController.js');
router.post('/preferences', preferencesController.addPreferences);

module.exports = router;
const express = require('express');
const { getAllContacts, createContact } = require('../controllers/contactController');

const router = express.Router();

router.route('/').get(getAllContacts).post(createContact);

module.exports = router;
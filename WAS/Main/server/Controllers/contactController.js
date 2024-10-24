const mongoose = require('mongoose');

const Contact = require('../Models/contactModel');
const QuickConsult = require('../Models/quickconsultModel');

const PostContact = async (req, res) => {
    const { name, email, phone, message } = req.body;
    const lang = req.body.lang || 'en';
    let collection;

    switch(lang) {
        case 'en':
            collection = mongoose.connection.collection('contacts_en');
            break;
        case 'fa':
            collection = mongoose.connection.collection('contacts_fa');
            break;
        default:
            return res.status(400).json({ message: 'Invalid language' });
    }

    try {
        await collection.insertOne({ name, email, phone, message });
        res.status(200).json({ message: 'Message received' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}

const PostQuickConsult = async (req, res) => {
    const { phone, requestType, email } = req.body;
    const lang = req.body.lang || 'en';
    let collection;

    switch(lang) {
        case 'en':
            collection = mongoose.connection.collection('quickconsult_en');
            break;
        case 'fa':
            collection = mongoose.connection.collection('quickconsult_fa');
            break;
        default:
            return res.status(400).json({ message: 'Invalid language' });
    }

    try {
        await collection.insertOne({ phone, requestType, email });
        res.status(200).json({ message: 'Request received' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    PostContact,
    PostQuickConsult
};

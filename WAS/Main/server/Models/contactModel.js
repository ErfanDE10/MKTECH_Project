const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'] 
  },
  phone: { 
    type: String, 
    match: [/^\d{10,15}$/, 'Phone number must be between 10 and 15 digits.'] 
  },
  message: { 
    type: String, 
    required: true 
  }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;

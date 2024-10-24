const mongoose = require('mongoose');


const quickConsultSchema = new mongoose.Schema({
  phone: { 
    type: String, 
    required: true, 
    match: [/^\d{10,15}$/, 'Phone number must be between 10 and 15 digits.'] 
  },
  requestType: { 
    type: String, 
    default: 'quick consultation' 
  },
  lang: { 
    type: String, 
    default: 'en' 
  }
}, { timestamps: true });

const QuickConsult = mongoose.model('QuickConsult', quickConsultSchema);
module.exports = QuickConsult;

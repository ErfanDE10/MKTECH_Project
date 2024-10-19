const mongoose = require('mongoose')

const quickConsultSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  requestType: { type: String, default: 'quick consultation' },  // Default request type
  lang: { type: String, default: 'en' }  // Default to English if not provided
}, { timestamps: true })

module.exports = mongoose.model('QuickConsult', quickConsultSchema)

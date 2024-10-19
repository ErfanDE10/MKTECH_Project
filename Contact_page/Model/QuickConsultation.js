const mongoose = require('mongoose')

const quickConsultSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  requestType: { type: String, default: 'quick consultation' }, 
  lang: { type: String, default: 'en' }  
}, { timestamps: true })

module.exports = mongoose.model('QuickConsult', quickConsultSchema)

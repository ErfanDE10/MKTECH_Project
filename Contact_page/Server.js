const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const ContactForm = require('./Model/contact')  
const QuickConsult = require('./Model/QuickConsultation')  

mongoose.connect('mongodb+srv://ERFAN:erfan123@nodecourse.uj3xb.mongodb.net/MKtec?retryWrites=true&w=majority&appName=Nodecourse', {
}).then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log('error connecting to MongoDB:', err)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body

        const newContact = new ContactForm({
            name,
            email,
            phone,
            message,
            lang: 'en'  
        })

        await newContact.save();  

        res.status(200).json({ message: 'contact form submitted successfully' })
    } catch (err) {
        console.error('error saving contact form:', err)
        res.status(500).json({ err: 'error submit contact form' })
    }
})

app.post('/api/quickconsult', async (req, res) => {
    try {
        const { name, email } = req.body

        const newConsultation = new QuickConsult({
            phone: email,  
            requestType: 'quick consultation',
            lang: 'en'  
        })

        await newConsultation.save();  

        res.status(200).json({ message: 'quick consultation submitted successfully' })
    } catch (err) {
        console.error('error saving quick consultation:', err)
        res.status(500).json({ err: 'error submitting quick consultation form' })
    }
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})

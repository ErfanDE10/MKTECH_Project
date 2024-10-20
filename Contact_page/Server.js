const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const ContactForm = require('./Model/contact')  
const QuickConsult = require('./Model/QuickConsultation')  

mongoose.connect('mongodb+srv://ERFAN:erfan123@nodecourse.uj3xb.mongodb.net/MKtec?retryWrites=true&w=majority&appName=Nodecourse', {
}).then(() => {
    console.log('connected to mongodb')
}).catch((err) => {
    console.log('error connecting to mongodb:', err)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// front with EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

// front with react 
// app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;
    let lang = req.body.lang || 'en';
    let collection;

    switch(lang) {
        case 'en':
            collection = mongoose.connection.collection('contacts_en');
            break;
        case 'fa':
            collection = mongoose.connection.collection('contacts_fa');
            break;
        default:
            return res.status(400).send('invalid language');
    }

    try {
        await collection.insertOne({ name, email, phone, message });
        res.status(200).send('message received');
    } catch (err) {
        console.log(err);
        res.status(500).send('server error');
    }
})

app.post('/api/quickconsult', async (req, res) => {
    const { phone, requestType, email } = req.body;
    let lang = req.body.lang || 'en';
    let collection;

    switch(lang) {
        case 'en':
            collection = mongoose.connection.collection('quickconsult_en');
            break;
        case 'fa':
            collection = mongoose.connection.collection('quickconsult_fa');
            break;
        default:
            return res.status(400).send('invalid language');
    }

    try {
        await collection.insertOne({ phone, requestType, email });
        res.status(200).send('request received');
    } catch (error) {
        console.log(error);
        res.status(500).send('server error');
    }
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})

const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./Config/db');
// const mainRoutes = require('./routes/mainRoutes');
// const productRoutes = require('./routes/productRoutes');
// const serviceRoutes = require('./routes/serviceRoutes');
// const blogRoutes = require('./routes/blogRoutes');
// const aboutRoutes = require('./routes/aboutRoutes');
// const errorHandler = require('./Utils/errorHandسler');
const contactRoutes = require('./routes/contactRoutes');
const quickconsultRoutes = require('./routes/quickconsultRoutes');

connectDB();

const app = express();
app.use(express.json());

// app.use('/', mainRoutes);
// app.use('/products', productRoutes);
// app.use('/service', serviceRoutes);
// app.use('/blog', blogRoutes);
// app.use('/about', aboutRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/quickconsult', quickconsultRoutes);

// app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

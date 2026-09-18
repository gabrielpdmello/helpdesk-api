const express = require('express');
const technicianRoutes = require('./routes/technicianRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const app = express();

app.use(express.json());

app.use('/tecnicos', technicianRoutes);
app.use('/categorias', categoryRoutes);

app.use(errorMiddleware);

module.exports = app;

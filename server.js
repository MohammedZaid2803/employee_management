const express = require('express');
const bodyParser = require('body-parser');
const employerRoutes = require('./routes/employerRoutes');
require('dotenv').config();

//db connection
require('./config/db.js')
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

//routes
app.use('/api', employerRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const errorHandler = require('./middleWares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// route middle ware
app.use('/api/users', userRoute);


app.use(errorHandler)
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log('DB Connected Successfully');
      app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
      });
}).catch(err => {
      console.log(err);
});
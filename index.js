const express=require('express');
const app=express();
const path = require('path');
const mongoose = require('mongoose');
const seedDb = require('./seed');
const methodoverride = require('method-override');



// mongoose.set('strictQuery',true);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodoverride('_method'));

const productsRoutes = require('./routes/productroutes');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => console.log('db connected'))
    .catch((err)=>console.log('error'));


// seedDb();



app.get('/', (req, res) => {
    res.send('connected');
})

app.use(productsRoutes);

app.listen(3000, () => {
    console.log('server started at port 3000');
})      
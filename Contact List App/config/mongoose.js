const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://divyansh:divyansh@cluster0.exyj1.mongodb.net/contact-list');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error'));

db.once('open',function(){
    console.log('Successfully connected to database');
});
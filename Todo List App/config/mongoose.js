// library required
const mongoose = require('mongoose');

// database connection made
mongoose.connect('mongodb+srv://divyansh:divyansh@cluster0.exyj1.mongodb.net/todo-list');

const db = mongoose.connection;

// checking for database connection
db.on('error',console.error.bind(console,'error!!'));

db.once('open',function(){
    console.log('Successfully connected to database');
});
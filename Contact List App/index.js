const express = require('express');
const path = require('path');
const port  = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList = [
    {
        name: "Divyansh",
        phone : "9310050667"
    },
    {
        name: "Tony Stark",
        phone: "9958258550"
    },
    {
        name: "Peter Parker",
        phone: "9891265402"
    }
];

app.get('/',function(req,res){
    
    Contact.find({},function(err,contacts){
        if(err){
            console.log('error!!');
            return;
        }

        return res.render('home',{
            title: 'My Contact List',
            contact_list: contacts
        });
    });

    // return res.render('home',{
    //     title: 'My Contact List',
    //     contact_list: contactList
    // });
});

app.get('/practice',function(req,res){
    return res.render('practice',{
        title: 'Lets play with EJS'
    });
});

app.post('/create-contact',function(req,res){

    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){
            console.log('error!!');
            return;
        }
        
        // console.log('******',newContact);
        return res.redirect('/');
    });

    // contactList.push(req.body);

    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });

    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);

    // return res.redirect('/');
});

app.get('/delete-contact/',function(req,res){
    // console.log(req.params);

    let id = req.query.id;

    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error!!');
        }
    });

    return res.redirect('/');

    // let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    // if(contactIndex != -1){
    //     contactList.splice(contactIndex,1);
    // }

    // return res.redirect('/');
});


app.listen(port,function(err){
    if(err){console.log(err)}

    console.log("Expres Server is up and running on port: ",port);
});
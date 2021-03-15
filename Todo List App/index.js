// libraries required
const express = require('express');
const path = require('path');
const port = 8000;

// using database and model
const db = require('./config/mongoose');
const Task = require('./models/task');

const app = express();

// setting view engine, views and static file paths
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

// month list to be used
var monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// rendering the home page
app.get('/',function(req,res){

    Task.find({},function(err,taskList){
        if(err){
            console.log('error!!');
            return;
        }

        return res.render('home',{
            title: 'ToDo Application',
            task_list: taskList,
            month_list: monthList
        });
    });

    // return res.render('home',{
    //     title: 'ToDo Application',
    //     task_list: taskList,
    //     month_list: monthList
    // });
});

// creating a new task
app.post('/createTask',function(req,res){

    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date,
        status: 'incomplete'
    },function(err){
        if(err){
            console.log('error!!');
            return;
        }

        return res.redirect('/');
    });

    // console.log(req.body);
    // taskList.push({
    //     description: req.body.description,
    //     category: req.body.category,
    //     date: req.body.date,
    //     status: 'incomplete'
    // });

    // return res.redirect('/');
});

// marking an existing task as completed
app.get('/complete-task/',function(req,res){

    let id = req.query.id;
    
    Task.findByIdAndUpdate(id, {status: 'completed'}, function(err){
        if(err){
            console.log('error!!');
            return;
        }

        return res.redirect('/');
    });
});

// deleting the completed tasks
app.get('/delete-tasks',function(req,res){
    
    Task.deleteMany({status : 'completed'},function(err){
        if(err){
            console.log('error!!');
        }

        return res.redirect('/');
    });
});

// checking server connection
app.listen(port,function(err){
    if(err){
        console.log(`Error!!! ${err}`);
    }

    console.log(`Express Server is up and running on port: ${port}`);
});
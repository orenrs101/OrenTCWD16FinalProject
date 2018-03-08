var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://orenrs:sumsum101@ds157538.mlab.com:57538/orentcwd16"); // - REPLACE

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//bodyParser
app.get('/api/getAllTodoItems', (req, res) => {
  TodoItem.find().then(todoItems => {
    res.json(todoItems);
  })
});

app.post('/api/saveItem', function (req, res) {
    TodoItem.create(req.body);
    res.send('Your item was saved: ' + JSON.stringify(req.body));
});

app.post('/api/deleteItem', function (req, res) {
  TodoItem.findById(req.body._id)
  .then(item => {
    console.log(req.body);
    item.remove();
    res.send('Your item was deleted :' + JSON.stringify(req.body));
  });
});

app.post('/api/deleteItem', function (req, res) {
  res.send('Your item was deleted: ' + JSON.stringify(req.body));
});

//mongoDB schema
var todoItemSchema = new mongoose.Schema({
  todoItem: String
});

var TodoItem = mongoose.model("TodoItem", todoItemSchema);



app.listen(3000, () => console.log('Your server app listening on port 3000!'));
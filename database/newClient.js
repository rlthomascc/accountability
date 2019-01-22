const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tattooAssistant/newClient');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB has connected');
});


let clientSchema = ({
  assign: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
});

let Client = mongoose.model('Client', clientSchema)


function save(e) {
  let obj = new Client({
    assign: e.assign,
    firstName: e.firstName,
    lastName: e.lastName,
    phoneNumber: e.phoneNumber,
  });
  obj.save();
  console.log('Data saved to MongoDB Database');
}



const funcs = {save, Client}
module.exports = funcs;
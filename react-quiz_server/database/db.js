const mongoose = require('mongoose');
function connectDb() {

    mongoose.set('strictQuery', false);
    mongoose.set('useCreateIndex', true);
    mongoose.connect('mongodb+srv://cluster0.6evf0.mongodb.net/?retryWrites=true&w=majority', {
        dbName: 'Login_Data_Base',
        user: 'Avijit07',
        pass: 'Avijit@1998',
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Connected with mongoDB...✔✔'))
        .catch((error) => console.log(error.message));

}

module.exports = connectDb;
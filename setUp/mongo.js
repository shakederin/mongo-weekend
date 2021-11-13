const data = require("./studentInfo");
const Student = require("./schema");
const Post = require("./schema")
const User = require("./schema")
const Comment = require("./schema")
const  Mongoose  = require("mongoose");
require("dotenv").config();

const connectionString = process.env.CONNENTIONSTRING;


Mongoose.connect(connectionString)
.then(()=>{
    console.log("DB connected")
})
.catch((error)=>{
    'error connecting to MongoDB:', error.message
});


/*************************ADD STUDENTS */


// Student.insertMany(data)
// .then(()=>{
//     console.log("add");
//         Mongoose.connection.close();
// })
// .catch((err)=>{
//     console.log(err);
// });

/**************************** */
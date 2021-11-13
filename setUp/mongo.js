const studentData = require("./data/studentInfo");
// const postsData = require("./data/postsData");
const usersData = require("./data/usersData");
const commentsData = require("./data/commentsData");
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


// Student.insertMany(studentData)
// .then(()=>{
//     console.log("add");
//         Mongoose.connection.close();
// })
// .catch((err)=>{
//     console.log(err);
// });

/*************************ADD PostS */

// Post.insertMany(postsData)
// .then(()=>{
//     console.log("add");
//     Mongoose.connection.close();
// })
// .catch((err)=>{
//     console.log(err);
// });



/*************************ADD UserS */

User.insertMany(usersData)
.then(()=>{
    console.log("add");
    Mongoose.connection.close();
})
.catch((err)=>{
    console.log(err);
});

/*************************ADD CommentS*/
const {Student, Post, User, Comment} = require("./schema");
const studentData = require("./data/studentInfo");
const usersData = require("./data/usersData");
const postsData = require("./data/postsData");
const commentsData = require("./data/commentsData");



// const connectionString = process.env.CONNENTIONSTRING;


// Mongoose.connect(connectionString)
// .then(()=>{
//     console.log("DB connected")
// })
// .catch((error)=>{
//     'error connecting to MongoDB:', error.message
// });


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
// })
// .catch((err)=>{
//     console.log(err);
// });



/*************************ADD UserS */

// User.insertMany(usersData)
// .then(()=>{
//     console.log("add users");
// })
// .catch((err)=>{
//     console.log(err);
// });

/*************************ADD CommentS*/

Comment.insertMany(commentsData)
.then(()=>{
    console.log("add comments");
})
.catch((err)=>{
    console.log(err);
});
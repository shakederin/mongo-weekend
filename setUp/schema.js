const Mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.CONNENTIONSTRING;


Mongoose.connect(connectionString)
.then(()=>{
    console.log("DB connected")
})
.catch((error)=>{
    'error connecting to MongoDB:', error.message
});


const StudentSchema = new Mongoose.Schema({
    name : String,
    surName : String,
    birth : String,
    phone : String,
    gender : String,
    courses : [String]
});

const Student = Mongoose.model("Student", StudentSchema);

const userSchema = new Mongoose.Schema({
    username : String,
    firstname : String,
    lastname : String
})

const User = Mongoose.model("User", userSchema);

const postsSchema = new Mongoose.Schema({
    username : String,
    title : String,
    body : String
})

const Post = Mongoose.model("Post", postsSchema);

const commentsSchema = new Mongoose.Schema({
    username : String,
    comment : String,
    post : String
})

const Comment = Mongoose.model("comment", commentsSchema);

module.exports = {
    Student,
    User,
    Post,
    Comment
}


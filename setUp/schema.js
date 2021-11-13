const Mongoose = require("mongoose");

const StudentSchema = new Mongoose.Schema({
    name : String,
    surName : String,
    birth : String,
    phone : String,
    gender : String,
    courses : [String]
});

const userSchema = new Mongoose.Schema({
    username : String,
    first_name : String,
    last_name : String
})

const postsSchema = new Mongoose.Schema({
    username : String,
    title : String,
    body : String
})

const commentsSchema = new Mongoose.Schema({
    username : String,
    comment : String,
    post : String
})

const Student = Mongoose.model("Student", StudentSchema);
const User = Mongoose.model("User", userSchema);
const Post = Mongoose.model("Post", postsSchema);
const Comment = Mongoose.model("comment", commentsSchema);

module.exports = {
    Student,
    User,
    Post,
    Comment
}
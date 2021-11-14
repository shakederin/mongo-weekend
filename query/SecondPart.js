const {Post, User, Comment, Question }= require("../setUp/schema");

async function findAllUsers(){
    const allUsers = await User.find({});
    return(allUsers);
}

// findAllUsers()                                              // find all users

async function findAllPosts(query){                                     
    const allPosts = await Post.find(query);                                            
    console.log(allPosts);
    return(allPosts);
}

// findAllPosts()                                             // find all posts     

// findAllPosts({username : "GoodGuyGreg"})                   // find all posts username = "GoodGuyGreg"                 

// findAllPosts({username : "ScumbagSteve"})                  // find all posts username = "ScumbagSteve"                           

async function findAllComments(query){
    const allComments = await Comment.find(query);
    console.log(allComments);
}

// findAllComments();                                        // find all comments                   

// findAllComments({username : "GoodGuyGreg"});              // find all comments username = "GoodGuyGreg"                        

// findAllComments({username : "ScumbagSteve"});             // find all comments username = "ScumbagSteve"                      




async function findAllPostsFromTitle(query){
    const allPosts = await Post.find({title : query}).distinct("_id");
    const postId = allPosts[0]._id.toString();
    const array = await findAllComments({post : postId})
    return(array);
}

// findAllPostsFromTitle("Reports a bug in your code")       //                                





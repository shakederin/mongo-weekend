const {Post, User, Comment }= require("../setUp/schema");

async function findAllUsers(){
    const allUsers = await User.find({});
    return(allUsers);
}

// findAllUsers()

async function findAllPosts(query){
    const allPosts = await Post.find(query);
    console.log(allPosts);
    return(allPosts);
}

// findAllPosts()

// findAllPosts({username : "GoodGuyGreg"})

// findAllPosts({username : "ScumbagSteve"})

async function findAllComments(query){
    const allComments = await Comment.find(query);
    console.log(allComments);
}

// findAllComments();

// findAllComments({username : "GoodGuyGreg"});

// findAllComments({username : "ScumbagSteve"});




async function findAllPostsFromTitle(query){
    const allPosts = await Post.find({title : query}).distinct("_id");
    const postId = allPosts[0]._id.toString();
    const array = await findAllComments({post : postId})
    return(array);
}

// findAllPostsFromTitle("Reports a bug in your code")
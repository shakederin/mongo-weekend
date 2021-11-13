const Mongoose = require("mongoose");
const Student = require("../setUp/schema");
require('dotenv').config()

const connectionString = process.env.CONNENTIONSTRING;


Mongoose.connect(connectionString).then(()=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log(err);
})

//*****************find  **************************/

async function getAllStudentsThat(query){
    const response = await Student.find(query)
    console.log(response);
}


// getAllStudentsThat({});                                         // find all
// getAllStudentsThat({name : "Ido"});                             // find name ido                                           
// getAllStudentsThat({courses  : "Law"});                         // find courses Law
// getAllStudentsThat({courses  : "Java", gender : "Female"});     // find courses Java and gender Female                 
// getAllStudentsThat({birth : {$gt : "1998/05/05"}});             // find birth bigger then 05/05/1998         
// getAllStudentsThat({phone : {$regex : /^054/}});                // find phone number starting      




//*****************update  **************************/

async function updateStudentInfo(query, course){
    const response = await Student.updateMany({name : query},{$push:{courses : course}})
    console.log(response);
}

// updateStudentInfo("Yahalom", "JavaScript")

async function updateStudentInfo(query, date){
    const response = await Student.updateMany({name : query},{$set:{birth  : date}})
    console.log(response);
}

// updateStudentInfo("Koren", "1998/12/02")




//******************text search **************************/

// getAllStudentsThat({name : {$regex : /o/}}); 
// getAllStudentsThat({surName : {$regex : /[h,y]/i}}); 




//******************delete **************************/

async function deleteStudentByName(query){
    const response = await Student.deleteOne({name : query})
    console.log(response);
}

async function deleteStudentByDate(query){
    const response = await Student.deleteOne({birth : query})
    console.log(response);
}

// deleteStudentByName("Ido");
// deleteStudentByDate("1998/04/02")

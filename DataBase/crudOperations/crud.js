import userModel  from '../model/userModel.js';


//CREATE
async function createUser(name,pswd){
   const i =  await userModel.create({userName:name,password:pswd});
   console.log(i);
    
}
//READ
async function findUserByName(name){
    const i = await userModel.find({userName: {$eq:name}});
    console.log(i);
}
//UPDATE
function updateUserPassword(){}
//DELETE
function deleteUser(){}
//EXISTS
async function userExists(username){
   const exists =  await userModel.exists({userName:username});
   return exists;
}

/*
userModel.create();
userModel.find();
userModel.updateMany();
userModel.deleteOne();
*/

const crud = {createUser,findUserByName,userExists}
export default crud;
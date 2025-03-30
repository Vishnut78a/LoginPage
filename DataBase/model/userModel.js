import mongooose from 'mongoose';

const userSchema = new mongooose.Schema({userName:String,password:String});

const userModel = mongooose.model("user",userSchema);

export default userModel;

import mongoose from 'mongoose';


const user= mongoose.Schema({
    
    username: String,
    googleId: String,
    thumbnail: String,
    email:String,
    
})

var User = mongoose.model('User', user);

export default User;
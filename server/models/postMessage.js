import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    text : String,
    name:String,
    date:Date,
}) 

const postSchema = mongoose.Schema({
    email: String,
    name: String,
    title: String,
    description: String,
    answer: String,
    isResolved:{type:Number, default:0},
    postTime: {
        type: Date,
        default: new Date(),
    },
    comments: [commentSchema]
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
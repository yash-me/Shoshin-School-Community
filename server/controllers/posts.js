import PostMessage from '../models/postMessage.js'
import mongoose from 'mongoose'

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    // const { title, message, selectedFile, creator, tags } = req.body;

    // const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    // try {
    //     await newPostMessage.save();

    //     res.status(201).json(newPostMessage );
    // } catch (error) {
    //     res.status(409).json({ message: error.message });
    // }


    const post  = req.body;

    const newPost  = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}


// export const commentPost = async (req, res) => {


//     const { id } = req.params;

//     //if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No doubt with id: ${id}`);

//     const comment  = req.body;
//     // const { comments } = req.body;

//     // console.log(req.body);

//     try {
//         const post = await PostMessage.findById(id);
        
//         post.comments.push(comment);
//         post.save();
//         res.status(200).json(post);
        
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

export const addComment = async (req, res) => {
    const { id} = req.params;

    const {comment} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);
    post.comments.push({text:comment.comment,name:comment.name,date:comment.date});

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { comments: post.comments }, { new: true });
    
    res.json(updatedPost);
}

export const isResolved = async (req, res) => {
    const { id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);
    

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { isResolved:1 }, { new: true });
    
    res.json(updatedPost);
}

// export const getEmail = async (req, res) => {
//     const user = req.user;
//     res.json(req.user);
// }


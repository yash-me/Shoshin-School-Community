import axios from 'axios';

// const url = 'http://localhost:5000/api';
// const urlEmail = '/auth/profile';

const url = 'https://shoshin-community.herokuapp.com/api';
const urlE = 'https://shoshin-community.herokuapp.com/auth/profile';

export const fetchPosts = () => axios.get(url);
export const getEmail = () => axios.get(urlE,  { withCredentials: true });
export const createPost = (newPost) => axios.post(url, newPost);
export const addComment = (id,comment) => axios.patch(`${url}/${id}/addComment`, comment);
export const isResolved = (id) => axios.patch(`${url}/${id}/isResolved`);

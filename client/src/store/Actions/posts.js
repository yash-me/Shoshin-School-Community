import * as api from '../../api/index';

export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
  
      dispatch({ type: 'FETCH_ALL', payload: data });
    } 
    catch (error) {
      console.log(error);
    }
  };

  export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const addComment = (id, comment) => async (dispatch) => {
    try {
      const { data } = await api.addComment(id, comment);
  
      dispatch({ type: 'ADD_COMMENT', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const isResolved = (id) => async (dispatch) => {
    try {
      const { data } = await api.isResolved(id);
  
      dispatch({ type: 'IS_RESOLVED', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };


  export const getEmail = () => async (dispatch) => {
    try {
      const { data } = await api.getEmail();
  
      dispatch({ type: 'GET_USER', payload: data });
    } 
    catch (error) {
      console.log(error);
    }
  };
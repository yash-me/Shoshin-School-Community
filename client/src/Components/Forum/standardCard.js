import React, {useState, useSelector}from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import BlockIcon from '@material-ui/icons/Block';
import { Divider } from '@material-ui/core';
import LongTextSnackbar from './Snackbar';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {addComment, isResolved} from '../../store/Actions/posts'
import Popover from '@material-ui/core/Popover';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:'20px',
    
    
    
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
    border:'1px solid #D2D5DA',
    
  },
  image: {
    width: 128,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  popover: {
    pointerEvents: 'none',
  },
  
}));

export default function StandardCard({post, currentId, setCurrentId, studentEmail, studentName}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const avatarColor = "#" + ((1<<24)*Math.random() | 0).toString(16);

  const [currentComment, setComment] = useState({comment:"",name:"",date:""});
  const date  = new Date();

  const resolve = (id,rEmail)=>{
      if(rEmail === studentEmail)
      dispatch(isResolved(id));
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = (event) => {
    event.preventDefault();
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  

  return (
    
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                   {post.title}
                </Typography>
                <Typography variant="h7" gutterBottom>
                  Description: {post.description}
                </Typography>

                {post.answer !== "" ? (<Typography variant="body2" gutterBottom>
                  Answer: {post.answer} <br/>
                  <div style={{color:'#757575'}}>
                    Answered By: {post.taName} ({moment(post.ansTime).fromNow()})
                  </div>
                </Typography>):(<Typography variant="body2" gutterBottom>
                  
                </Typography>)}
                

                <Typography  style={{float:'right'}} variant="body2" color="textSecondary">
                  Asked by: {post.name} ({moment(post.postTime).fromNow()})
                </Typography>
              </Grid>
              <Divider/>
              <Typography variant="body2" color="textSecondary">
                  {post.comments.length} Comment
                </Typography>



              <Grid item>
                
              

              {
                (post.comments.map(comment => (
                  
                  <LongTextSnackbar msg={comment.text} name={comment.name} cDate={comment.date} />
                ))) 
                

              }


            
              </Grid>  

              {/* <form autoComplete="off" noValidate > */}
                  <Grid item>
                  
                  <TextField
                    autoFocus
                    margin="dense"
                    id="mainInput"
                    label="Leave a comment"
                    type="text"
                    fullWidth
                    value={currentComment.comment}
                    onChange={(e)=>setComment({comment:e.target.value, name:studentName, date:date})}
                  />
                        
                        {
                          (studentEmail!== 'none' && studentEmail!= undefined)? (
                            <Button
                            
                                color="primary"
                                variant="contained"
                                className={classes.button}
                                style={{textTransform:'none',backgroundColor:'#2D974B'}}
                                onClick={()=>{ 
                                  dispatch(addComment(post._id, {comment:currentComment}));
                                  setComment({comment:"",name:"",date:""});
                                
                                }}
                                type="submit"
                                
                            >
                                Comment
                            </Button>
                          ):(
                            <div>
                              <Button
                              
                                  style={{backgroundColor:'#2D974B',textTransform:'none',color:'#FFFFFF'}}
                                  className={classes.button}
                                  
                                  // onClick={(e) => {
                                  //   e.preventDefault();
                                  //   window.location.href='/auth/google';
                                  //   }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://shoshin-community.herokuapp.com/auth/google';
                                    }}
                                  
                                  
                              >
                                  Signup for free
                              </Button>
                              <b> to join this conversation on community.</b> Already have an account? <a href="https://shoshin-community.herokuapp.com/auth/google">Sign in to comment</a>
                            </div>
                          )
                        }
                        
                        
                    
                  </Grid>
              {/* </form> */}


            </Grid>
            <Grid item>


                    {post.isResolved !== 0 ? (
                                      <Fab size="small" style={{textTransform:'none', backgroundColor:'#D63A49', color:'#FFFFFF'}}  variant="extended">
                                        <BlockIcon className={classes.extendedIcon} />
                                        Closed
                                      </Fab>
                                      
                                      )
                     : (
                       <div>
                        <Fab size="small" 
                        onClick={()=> resolve(post._id,post.email)} 
                        style={{textTransform:'none', backgroundColor:'#28A844', color:'#FFFFFF'}}
                        variant="extended"
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        >
                          <ErrorOutlineIcon className={classes.extendedIcon} />
                          Open
                        </Fab>
                        <Popover
                        id="mouse-over-popover"
                        className={classes.popover}
                        classes={{
                          paper: classes.paper,
                        }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                      >
                        <Typography>Click to Close the issue</Typography>
                      </Popover>
                      </div>
                        
                        ) }

                    
            </Grid>
            
          </Grid>
          
        </Grid>
      </Paper>
    </div>
  );
}

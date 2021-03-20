import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import dateformat from 'dateformat';




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  root1: {
    //maxWidth: 345,
    width: '900px',
    marginLeft: '50px',
    marginTop: '20px',
    borderRadius: '20px',
  },

  avatar: {
    //backgroundColor: red[500],
  },

  small: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
  },

  countText: {
    fontSize: "1px",
  }
}));

export default function LongTextSnackbar({msg,name,cDate}) {
  const classes = useStyles();

  //console.log(comments[0].text);
  

  var firstChar = "U";

  const avatarColor = "#" + ((1<<24)*Math.random() | 0).toString(16);

  if(name!== undefined){
     firstChar = name.charAt(0);
  }
  

  return (
    <div className={classes.root}>   
              
      {/* <SnackbarContent style={{ backgroundColor: '#e0e0e0', color: 'black' , marginBottom:'10px'}} message={msg} /> */}

      <Card className={classes.root1}>
      <CardHeader
        avatar={
          <Avatar aria-label="student" style={{backgroundColor : avatarColor}} className={clsx(classes.avatar,classes.small)}>
            {firstChar}
          </Avatar>
        }
        
        title={name + " commented on "+ dateformat(cDate, "dddd, mmmm dS, yyyy, h:MM TT")}
        
      />
      
      <CardContent>
        <Typography paragraph>{msg}</Typography>
        
      </CardContent>
      
    </Card>
       
    </div>
  );
}

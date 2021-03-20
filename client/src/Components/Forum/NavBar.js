import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom:'5rem',
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar({username, email}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:'#242A2F'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ForumIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Shoshin School Community
          </Typography>
          {/* {
              (email!== 'none' && email!= undefined)?
              (
                <Button style={{textTransform:'none'}} color="inherit" onClick={(e) => { e.preventDefault(); window.location.href='/auth/logout';}}>Logout {username}</Button>

              ):
              (
                <Button style={{textTransform:'none'}} color="inherit" onClick={(e) => { e.preventDefault(); window.location.href='/auth/google';}}>Login</Button>

              )
          } */}
          {
              (email!== 'none' && email!= undefined)?
              (
                <Button style={{textTransform:'none'}} color="inherit" onClick={(e) => { e.preventDefault(); window.location.href='https://shoshin-community.herokuapp.com/auth/logout';}}>Logout {username}</Button>

              ):
              (
                <Button style={{textTransform:'none'}} color="inherit" onClick={(e) => { e.preventDefault(); window.location.href='https://shoshin-community.herokuapp.com/auth/google';}}>Login</Button>

              )
          }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

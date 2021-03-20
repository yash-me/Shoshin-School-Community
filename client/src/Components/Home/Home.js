import React from "react";
import PropTypes from 'prop-types';
import { makeStyles} from '@material-ui/core/styles';
import GoogleButton from 'react-google-button'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Divider, Grid } from '@material-ui/core';
import classesBCK from "./home.module.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.background.paper,
                    
    width: 500,
  },
  centered: {
    position: "fixed",
    top: "50%",
    left: "50%",
    /* bring your own prefixes */
    transform: "translate(-50%, -50%)",
  },
  card: {
    
    //marginTop: "5rem",
    backgroundColor: "black",
    opacity: 0.7,
    // width: "500px",
    

    
  },
  tab: {
    
    //marginTop: "5rem",
    backgroundColor: "black",
    opacity: 0.5,
    // width: "500px",
    color: "white",
    

    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  // title: {
  //   fontSize: 14,
  // },
  pos: {
    marginBottom: 12,
  },
  box:{
    width: "600px",
  },
  root: {
    flexGrow: 1,
    backgroundColor: "#54282d",
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontSize: 20,
    marginBottom: "20px",
    fontFamily: "Source Sans Pro",
    

  },
  bar: {
    backgroundColor: "#192552",//"#421C33",  "#314c6e",
  },
  grid: {
      marginBottom: "30px",
      marginTop: "30px",
  },
  button: {
      justify: "center",
      width: "150px",
      height: "50px",
      //color: "black",
      fontSize: 16,
      
      textTransform: "none",
      color:'#16AFD7',
      borderColor: "#1c748d",
  },
  divider: {
    
    background: "grey",
},
  
}));



export default function FullWidthTabs() {
  const classes = useStyles();


  return (
  <Grid container direction="row" justify="center" spacing={6} className={classes.centered}>
      <Grid item xs={0} sm={3} lg={4} />
        <Grid item container xs = {12} sm={6} lg={4} spacing={2}>
          <Grid item sm={12}  className={classes.main} style={{backgroundColor:'#131B1F', opacity:'0.9'}}>
                                            
                <Card className={classes.card} style={{backgroundColor:'#131B1F', opacity:'0.9'}}>
                                                      
                    <CardContent >

                      <Grid container direction="column" justify="center" alignItems="center" className={classes.grid} >

                        <Grid item >

                            <Typography className={classes.title}  gutterBottom>
                              Click to Sign In
                            </Typography>
                            
                        </Grid>
                                                      
                        <Grid container item justify="center">     {/* SECOND GRID ITEM WITH FORM*/}
                          <GoogleButton
                              type="dark"
                              onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href='/auth/google';
                                  }}
                           />     
                        </Grid>
                            
                              
                      </Grid>
                      <Divider classes={{root: classes.divider}}/>  
                              
                      <Grid container direction="column" justify="center" alignItems="center" className={classes.grid}>

                        <Grid item>     

                            <Typography className={classes.title}  gutterBottom>
                                Signup or Login into the Forum!
                            </Typography>

                        </Grid>

                      </Grid>
                                          
                    </CardContent>                         
                </Card>
          </Grid> 
        </Grid>
      <Grid item xs={0} sm={3} lg={4}  />
           
  </Grid>
  );
}
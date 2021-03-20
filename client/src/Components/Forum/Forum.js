import React, {useEffect,useState} from "react"
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import StandardCard from "./standardCard"
import Nav from './NavBar';
import FormDialog from "./doubt";
import {useDispatch, useSelector} from 'react-redux';
import {getPosts, getEmail} from '../../store/Actions/posts';
import axios from 'axios';


const useStyles = makeStyles((theme)=>({

    grid:{
        width:'100%',
        margin:'0px',
        marginTop:'70px',
        
        
    }

}));


const Form = () => {
    
    const posts = useSelector((state)=> state.posts);
    const history = useHistory();
    const { email, username } = useSelector((state) => state.user);
    const [currentId, setCurrentId] = useState(null);


    /////////////////Google Login/////////////////////
    const [studentName, setStudentName] = useState("");
    const [studentEmail, setStudentEmail] = useState("");

    // const getFetchEmail = async () => {
    //     // const response = await fetch('https://shoshin-community.herokuapp.com/api/email');
    //     // const jsonData = await response.json();
    //     // console.log(jsonData);
    //     dispatch(getEmail());
    //      console.log("Email is:"+email+ " username:"+username);
    // };

    const dispatch = useDispatch();

    //////////////////////To fetch the user and update it to the redux store
    
    // console.log(email);

    useEffect(() => {
        setStudentEmail(email);
        setStudentName(username)
    }, [email]);

    const getData = ()=>{

        // dispatch(getEmail());
        // console.log("Email is:"+email+ " username:"+username);
        
    }

    useEffect(() => {
        dispatch(getEmail());
        dispatch(getPosts());
    }, [dispatch]);
    
    

        const classes = useStyles();
        return (
            <>

                {(studentEmail === "") ? '' : (

                <Container>
                    <Nav email={studentEmail} username={studentName} />           
                    {
                        (studentEmail!== 'none' && studentEmail!= undefined)?
                        (
                            <div>
                                
                                <FormDialog studentName={studentName} studentEmail={studentEmail} />
                                
                            </div>
                        ):
                        ''
                    }                       
                    {/* <button onClick={()=> getFetchEmail() } >get data</button> */}

                    <Grid container spacing={2} className={classes.grid} >

                        {
                            posts.map(post=>(

                                

                                <Grid item xs={12} md={12}> 
                                    <StandardCard post={post} studentEmail={studentEmail} currentId={currentId} studentName={studentName} setCurrentId={setCurrentId} />
                                </Grid>
                                
                            ))

                        }  

                    </Grid>

                </Container> 
                )}
                
                  
                
            </>
        );
    
}


export default Form;
import React, {useState, useEffect, useLayoutEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import classes from "./app.module.css";
import Home from "./Components/Home/Home";
import Forum from "./Components/Forum/Forum";
import { useDispatch, useSelector } from "react-redux";
import Nav from './Components/Forum/NavBar';
import { FormGroup } from "@material-ui/core";

const App = () => {
    
//     const { email, username } = useSelector((state) => state.user);
//     const [currentId, setCurrentId] = useState(null);


//     /////////////////Google Login/////////////////////
//     const [studentName, setStudentName] = useState("");
//     const [studentEmail, setStudentEmail] = useState("");

//     const dispatch = useDispatch();

//     //////////////////////To fetch the user and update it to the redux store
//     useLayoutEffect(() => {
//          fetch("/auth/profile")
//          //fetch("https://shoshin-community.herokuapp.com/auth/profile")
//             .then(res => res.json())
//             .then(res => dispatch({ type: 'GET_USER', payload: res }))
//             .catch(err => {
//                 console.log(err);
//             });
//     }, [dispatch]);
// console.log(email);

// useEffect(() => {
//     setStudentEmail(email);
//     setStudentName(username)
// }, [email]);
    

        return (

            <Router>
                
                <div className={classes.root} >
                
                <Switch>
                
                                    
                    <Route  path="/" component={Forum}/>
                </Switch>

                    
                </div>
            </Router>
            
        );
    
}
export default App;

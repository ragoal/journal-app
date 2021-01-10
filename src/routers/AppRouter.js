import React, { useEffect, useState } from 'react'
import { Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    
    const dispatch = useDispatch();

    const [checking, setCheking] = useState(true);
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    useEffect(() => {
        
        firebase.auth().onAuthStateChanged((user)=>{
            if (user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setCheking(false);
        })
        
    },[dispatch, setCheking, setIsLoggedIn])


    if (checking){
        return (
            <h1>Espere...</h1>
        )
    }
    
    return (
        
            <Router>
                <div>
                <Switch>
                    <PublicRoute isAuthenticated={isLoggedIn} path='/auth' component={AuthRouter}/>
                    <PrivateRoute isAuthenticated={isLoggedIn} exact path='/' component={JournalScreen}/>
                    <Redirect to='/auth/register'/>
                    
                </Switch>
                </div>
            </Router>
            
        
    )
}

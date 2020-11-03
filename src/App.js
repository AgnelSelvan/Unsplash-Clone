import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/styles/css/style.css";
import routes from './utils/routes/index';
import firebase from './config/firebase';
import Loading from "./components/Loading";
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import NotFound from "./screens/404";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        setIsLoading(true)
        firebase.auth().onAuthStateChanged((thisUser) => {
            if (thisUser) {
                setIsLoggedIn(true);
                setUser(thisUser)
            }
            else {
                setUser({})
                setIsLoggedIn(false);
            }
            setIsLoading(false);
        })
    }, [])
    return (
        isLoading ? <Loading /> : <Router>
            <AppContext.Provider value={[isLoggedIn, user]}>
                <Switch>
                    {
                        routes.map((route, index) => {
                            if (route.protected === 'guest') {
                                return <GuestRoute key={index} path={route.path} exact={route.exact} component={route.component} />
                            }
                            if (route.protected === 'auth') {
                                return <AuthRoute key={index} path={route.path} exact={route.exact} component={route.component} />
                            }
                            else {

                                return <Route key={index} path={route.path} exact={route.exact} component={route.component} />
                            }
                        })
                    }
                    <Route path="*"> <NotFound /></Route>
                </Switch>
            </AppContext.Provider>
        </Router>
    );
}


export default App;
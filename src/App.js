import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { createContext, useEffect, useState } from "react";
import Destination from "./Pages/Destination/Destination";
import { auth } from "./firebase/firebase";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
import Page404 from "./Components/Page404/Page404";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoggedInUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/destination">
            <Redirect to="/destination/bike" />
          </Route>
          <PrivetRoute path="/destination/:id">
            <Destination />
          </PrivetRoute>
          <Route to="*">
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

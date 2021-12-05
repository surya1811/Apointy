import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Githubs from "./components/Githubs";
import Details from "./components/Details";
import { initialState, reducer } from "./store/reducer";


export const AuthContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value=
    {
     {
        state,
        dispatch
      }
    }
    >
    <Router>
      <Switch>
          <Route path="/" exact component={Githubs}/> 
        <Route path="/login" exact component={Login}/>
        <Route path='/details' 
          render = {(props) => (
            <Details {...props} />
          )} />
           
        <Route path="/github" component={Githubs}/>
      </Switch>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;

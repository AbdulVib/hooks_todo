import React, { useReducer } from "react";
// import TodoApp from "./TodoApp";
//route
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppContext from "./context/context";
import reducer, { initialState } from "./reducers/reducer";

// import Navbar from './todo/Navbar'
// import Home from './todo/Home'
import TodoList from "./todo/Todolist";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <BrowserRouter>
        <AppContext.Provider value={{ state, dispatch }}>
          {/* <Navbar /> */}
          <Switch>
            {/* <Route path="/todo" component={ TodoList }/> */}
            <Route path="/" component={ TodoList }/>
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

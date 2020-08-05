import React from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from "./Page/Home";
import About from "./Page/About";
function App() {
  return (
      <React.Fragment>
        <Router>
          <Route path={'/'} component={Home} exact/>
          <Route path={'/about'} component={About}/>
        </Router>
      </React.Fragment>
  );
}
export default App;

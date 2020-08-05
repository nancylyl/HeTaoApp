import React from 'react';
import Home from './Home'
import DocIndex from './doc/index'
import DocHomeIndex from './doc/home/index'
import PatientIndex from './patient/index'
import PatientHomeIndex from './patient/home/index'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to={'/home'} />}></Route>
          <Route path="/Patient" exact render={() => <Redirect to={'/Patient/home/index'} />}
          ></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route
            exact
            path="/doc"
            render={() => (
              <DocIndex>
                <Route path="/doc/home/index" component={DocHomeIndex} />
              </DocIndex>
            )}
          >
          </Route>
          <Route
            path="/Patient"
            render={() => (
              <PatientIndex>
                <Route path="/Patient/home/index" component={PatientHomeIndex} />
              </PatientIndex>
            )}
          ></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

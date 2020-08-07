import React from 'react';
import Home from './pages/Home'
import DocIndex from './pages/Doc'
import DocHomeIndex from './pages/Doc/Home'
import PatientIndex from './pages/Patient'
import PatientHomeIndex from './pages/Patient/Home'
import PLogin from './pages/Patient/Login'
import Error from './components/Error'
import Dhome from './pages/Doc/Home/index';
import Patient from './pages/Doc/Patient/Patient';
import News from './pages/Doc/News/News';
import MyInfo from './pages/Doc/MyInfo/MyInfo';


import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to={'/home'} />}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/error" exact component={Error}></Route>
          <Route path="/plogin" exact component={PLogin}></Route>
          <Route path="/patient" exact render={() => <Redirect to={'/Patient/home/index'} />}></Route>
          <Route path="/doc" exact render={() => <Redirect to={'/doc/home/index'} />}></Route>

          <Route
            path="/doc"
            render={() => (
              <DocIndex>
                <Route path="/doc/home/index" exact component={DocHomeIndex} />

                {/* <Route path="/doc/patient" component={Patient}></Route>
                  <Route path="/doc/news" component={News}></Route>
                  <Route path="/doc/myInfo" component={MyInfo}></Route> */}
              </DocIndex>
            )}
          >
          </Route>
          <Route
            path="/patient"
            render={() => (
              <PatientIndex>
                <Route path="/patient/home/index" exact component={PatientHomeIndex} />

              </PatientIndex>
            )}
          ></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

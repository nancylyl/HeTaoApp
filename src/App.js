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


import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to={'/home'} />}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/error" exact component={Error}></Route>
          <Route path="/plogin" exact component={PLogin}></Route>
          <Route path="/Patient" exact render={() => <Redirect to={'/Patient/home/index'} />}></Route>
          <Route path="/Doc" exact render={() => <Redirect to={'/Doc/home/index'} />}></Route>
         
          <Route
            exact
            path="/Doc"
            render={() => (
              <DocIndex>
                <Route path="/Doc/home/index" exact component={DocHomeIndex} />

                  {/* <Route path="/doc/patient" component={Patient}></Route>
                  <Route path="/doc/news" component={News}></Route>
                  <Route path="/doc/myInfo" component={MyInfo}></Route> */}
              </DocIndex>
            )}
          >
          </Route>
          <Route
            path="/Patient"
            render={() => (
              <PatientIndex>
                <Route path="/Patient/home/index" exact component={PatientHomeIndex} />
              
              </PatientIndex>
            )}
          ></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;

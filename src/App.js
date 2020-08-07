import React from 'react';
import Home from './pages/Home'
import DocIndex from './pages/Doc'
import DocHomeIndex from './pages/Doc/Home'
import PatientIndex from './pages/Patient'
import PatientHomeIndex from './pages/Patient/Home'
import PatientPhoto from './pages/Patient/Photo'
import PatientBadFeel from './pages/Patient/BadFeel'
import PForgetPass from './components/Login/forgetPass'
import PLogin from './pages/Patient/Login'
import Error from './components/Error'
import Discuss from './pages/Doc/Home/discuss/Discuss'
import DiscussDetails from './pages/Doc/Home/discuss/DiscussDetails'
import JionDiscuss from './pages/Doc/Home/discuss/JionDiscuss';
// import Patient from './pages/Doc/Patient/Patient';
// import News from './pages/Doc/News/News';
// import MyInfo from './pages/Doc/MyInfo';


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
          <Route path="/PforgetPass" exact component={PForgetPass}></Route>

          <Route path="/patient" exact render={() => <Redirect to={'/Patient/home/index'} />}></Route>
          <Route path="/doc" exact render={() => <Redirect to={'/Doc/home/index'} />}></Route>
          <Route path="/doc/discuss" component={Discuss}></Route>
          <Route path="/doc/discussDetails" component={DiscussDetails}></Route>
          <Route path="/doc/jionDiscuss" component={JionDiscuss}></Route>
          
          <Route
            path="/doc"
            render={() => (
              <DocIndex>
                <Route path="/doc/home/index" exact component={DocHomeIndex} />
                {/* <Route path="/doc/patient" component={Patient}></Route>
                <Route path="/doc/news" component={News}></Route>
                <Route path="/doc/myInfo/index" component={MyInfo}></Route> */}
              </DocIndex>
            )}
          >
          </Route>
          <Route
            path="/patient"
            render={() => (
              <PatientIndex>
                <Route path="/patient/home/index" exact component={PatientHomeIndex} />
                <Route path="/patient/photo/index" exact component={PatientPhoto} />
                <Route path="/patient/badfeel/index" exact component={PatientBadFeel} />


              </PatientIndex>
            )}
          ></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

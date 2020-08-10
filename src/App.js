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
import PRecordLog from './pages/Patient/RecordLog'
import Error from './components/Error'
import Discuss from './pages/Doc/Home/discuss/Discuss'

import activities from './pages/Doc/Home/activities/activities'

import Patient from './pages/Doc/Patient/Patient';
import allPatient from './pages/Doc/Patient/allPatient';
import FocusonPatient from './pages/Doc/Patient/FocusonPatient';

import News from './pages/Doc/News/News';
import MyInfo from './pages/Doc/MyInfo';

import DiscussDetails from './pages/Doc/Home/discuss/DiscussDetails'

import DocMyPatient from './pages/Doc/MyPatient/'
import DocMyPatientDetail from './pages/Doc/MyPatient/Components/PatientDetail'
import JionDiscuss from './pages/Doc/Home/discuss/JionDiscuss';
// import Patient from './pages/Doc/Patient/Patient';
// import News from './pages/Doc/News/News';
// import MyInfo from './pages/Doc/MyInfo';



import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to={'/home'} />}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/error" exact component={Error}></Route>
          <Route path="/plogin" exact component={PLogin}></Route>
          <Route path="/PforgetPass/:flag" exact component={PForgetPass}></Route>


          <Route path="/patient" exact render={() => <Redirect to={'/Patient/home/index'} />}></Route>
          <Route path="/doc" exact render={() => <Redirect to={'/Doc/home/index'} />}></Route>
          <Route path="/doc/discuss" component={Discuss}></Route>

          <Route path="/doc/activities" component={activities}></Route>

          <Route path="/doc/discussDetails" component={DiscussDetails}></Route>


          <Route path="/doc/jionDiscuss" component={JionDiscuss}></Route>

          <Route path="/doc/allPatient" component={allPatient}></Route>
          <Route path="/doc/FocusonPatient" component={FocusonPatient}></Route>

          <Route
            path="/doc"
            render={() => (
              <DocIndex>
                <Route path="/doc/home/index" exact component={DocHomeIndex} />
                <Route path="/doc/patient" component={Patient}></Route>

                <Route path="/doc/news" component={News}></Route>

                <Route path="/doc/myInfo/index" component={MyInfo}></Route>

                <Route path="/doc/myInfo/index" component={MyInfo}></Route>

                <Route path="/doc/home/mypatient" exact component={DocMyPatient} />
                <Route path="/doc/home/mypatientdetail" exact component={DocMyPatientDetail} />

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
                <Route path="/patient/recordLog/index" exact component={PRecordLog} />

              </PatientIndex>
            )}
          ></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

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
import medicalRecord from './pages/Patient/medicalRecord/medicalRecord'
import PRecordLog from './pages/Patient/RecordLog'
import news from './pages/Patient/News/news'//患者消息

import Error from './components/Error'
import Discuss from './pages/Doc/Home/discuss/Discuss'

import Activities from './pages/Doc/Home/Activities'

import AddActivities from './pages/Doc/Home/Activities/Compontents/Add'
import DetailActivities from './pages/Doc/Home/Activities/Compontents/Detail'
import Patient from './pages/Doc/Patient/Patient';
import News from './pages/Doc/News/News';
import MyInfo from './pages/Doc/MyInfo';
import AccountInf from './pages/Doc/MyInfo/AccountInf'//账户信息
import Recharge from './pages/Doc/MyInfo/recharge'//账户充值信息
import Detail from './pages/Doc/MyInfo/detail'//账户明细信息
import rechargeS from './pages/Doc/MyInfo/rechargeS'//账户充值成功

import DiscussDetails from './pages/Doc/Home/discuss/DiscussDetails'

import DocMyPatient from './pages/Doc/MyPatient/'
import DocMyPatientDetail from './pages/Doc/MyPatient/Components/PatientDetail'//患者详情
import DocMyPatientPersonInfo from './pages/Doc/MyPatient/Components/PersonInfo'
import DocMyPatientRecordLogDetail from './pages/Doc/MyPatient/Components/PatientDetail/PatientRecordLogDetail'
import DocMyPatientList from './pages/Doc/MyPatient/Components/PatientList' //我的所有患者

import JionDiscuss from './pages/Doc/Home/discuss/JionDiscuss';
import StartDIscuss from './pages/Doc/Home/startDIscuss/StartDIscuss';
import Success from './pages/Doc/Home/startDIscuss/Success';

// import Patient from './pages/Doc/Patient/Patient';
// import News from './pages/Doc/News/News';
// import MyInfo from './pages/Doc/MyInfo';

import PatientMyPatientDetail from './pages/Patient/medicalRecord/comment'//患者详情
import PatientMyPatientRecordLogDetail from './pages/Patient/medicalRecord/comment/PatientRecordLogDetail'

import PatientMyinfo from './pages/Patient/myinfo'

import Userinfo from './pages/Patient/myinfo/123/userinfo'
import Diseaselog from './pages/Patient/myinfo/123/Diseaselog'
import Mydoctor from './pages/Patient/myinfo/123/mydoctor'

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/plogin/:flag" exact component={PLogin}></Route>
          <Route path="/" exact render={() => <Redirect to={'/home'} />}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/error" exact component={Error}></Route>

          <Route path="/PforgetPass/:flag" exact component={PForgetPass}></Route>


          <Route path="/patient" exact render={() => <Redirect to={'/patient/home/index'} />}></Route>

          <Route path="/doc" exact render={() => <Redirect to={'/Doc/home/index'} />}></Route>
          <Route path="/doc/discuss" component={Discuss}></Route>

          <Route path="/doc/discussDetails" component={DiscussDetails}></Route>
          <Route path="/doc/jionDiscuss" component={JionDiscuss}></Route>
          <Route path="/doc/startDiscuss" component={StartDIscuss}></Route>

          <Route path="/doc/success" component={Success}></Route>


          <Route path="/doc/MyInfo/AccountInf" component={AccountInf}></Route>
          <Route path="/doc/MyInfo/recharge" component={Recharge}></Route>
          <Route path="/doc/MyInfo/detail" component={Detail}></Route>
          <Route path="/doc/MyInfo/rechargeS" component={rechargeS}></Route>

          <Route
            path="/doc"
            render={() => (
              <DocIndex>
                <Route path="/doc/home/index" exact component={DocHomeIndex} />
                <Route path="/doc/patient" component={Patient}></Route>
                <Route path="/doc/news" component={News}></Route>
                <Route path="/doc/myInfo/index" component={MyInfo}></Route>
                <Route path="/doc/home/mypatient" exact component={DocMyPatient} />
                <Route path="/doc/activities" exact component={Activities}></Route>
                <Route path="/doc/activities/add" exact component={AddActivities}></Route>
                <Route path="/doc/activities/detail" exact component={DetailActivities}></Route>
                <Route path="/doc/home/mypatientdetail/:id" exact component={DocMyPatientDetail} />
                <Route path="/doc/home/mypatientRecordLogdetail/:id" exact component={DocMyPatientRecordLogDetail} />
                <Route path="/doc/home/mypatientpesoninfo/:uId" exact component={DocMyPatientPersonInfo} />
                <Route path="/doc/mypatient/components/patientlist/:flag" exact component={DocMyPatientList} />{/* 我的所有患者 */}
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

                <Route path="/patient/medicalRecord/:id" exact component={PatientMyPatientDetail} />
                <Route path="/patient/medicalRecord" exact component={medicalRecord}></Route>
                <Route path="/patient/news" component={news}></Route>

                <Route path="/patient/myinfo/index" exact component={PatientMyinfo} />
                <Route path="/patient/myinfo/123/userinfo" exact component={Userinfo} />
                <Route path="/patient/myinfo/123/Diseaselog" exact component={Diseaselog} />
                <Route path="/patient/myinfo/123/Mydoctor" exact component={Mydoctor} />
              </PatientIndex>
            )}
          ></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

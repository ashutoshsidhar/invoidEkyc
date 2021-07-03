import React from 'react';
import './App.css';
import Home from './home';
import { Route, Link } from 'react-router-dom'
import Aadhar from './aadhar';
import Otp from './otp';
import Pan from './pan';
import Digilocker from './digilocker';
import Manual from './manual';
import Complete from './complete';
import bgform from './images/try2.svg'

function App() {
  return (
    <div className="App " style={{
      backgroundImage: 'url('+bgform+')',
      backgroundSize: "cover",
      top: "0px",
      height: "100vh",
      width: "100vw",
      // overflow:"scroll"
      // color: "#f5f5f5"
    }}>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/aadhaar" component={Aadhar}></Route>
      <Route exact path="/Otp" component={Otp}></Route>
      <Route exact path="/Pan" component={Pan}></Route>
      <Route exact path="/digilocker" component={Digilocker}></Route>
      <Route exact path="/manual" component={Manual}></Route>
      <Route exact path="/complete" component={Complete}></Route>

    </div>
  );
}

export default App;

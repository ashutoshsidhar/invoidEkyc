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
import Circle from './components/circle/circle';
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
      <Route  to="/" component={Home}></Route>
      <Route  to="/aadhaar" component={Aadhar}></Route>
      <Route  to="/Otp" component={Otp}></Route>
      <Route  to="/Pan" component={Pan}></Route>
      <Route  to="/digilocker" component={Digilocker}></Route>
      <Route  to="/manual" component={Manual}></Route>
      <Route  to="/complete" component={Complete}></Route>
      <Link Classname="button" to="/"><Circle className="next"></Circle></Link>
      <Link Classname="button" to="/aadhaar"><Circle className="next"></Circle></Link>
      <Link Classname="button" to="/Pan"><Circle className="next"></Circle></Link>
      <Link Classname="button" to="/digilocker"><Circle className="next"></Circle></Link>
      <Link Classname="button" to="/Otp"><Circle className="next"></Circle></Link>
      <Link Classname="button" to="/manual"><Circle className="next"></Circle></Link>
      <Link Classname="button" to="/complete"><Circle className="next"></Circle></Link>
    </div>
  );
}

export default App;

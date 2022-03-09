import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './components/homepage/Homepage.js';
import Login from './components/login/Login.js';
import Preregister from './components/register/preRegister.js';
import RegisterCustomer from './components/register/RegisterCustomer.js';
import RegisterWorkshop from './components/register/RegisterWorkshop';
import CustomerProfile from './components/profiles/customerProfile.js';
import WorkshopProfile from './components/profiles/workshopProfile.js';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element = {<Homepage />}/>
              <Route path="/pre-register" element = {<Preregister />}/>
              <Route path = "/login" element = {<Login />}/>
              <Route path = "/register-customer" element = {<RegisterCustomer />}/>
              <Route path= "/register-workshop" element = {<RegisterWorkshop />} />
              <Route path= "/customer-profile" element = {<CustomerProfile/>}/>
              <Route path= "/workshop-profile" element = {<WorkshopProfile />}/>

          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

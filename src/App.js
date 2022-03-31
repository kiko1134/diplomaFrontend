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
import Logged from './components/homepage/homepage_logged';
import WorkshopPage from './components/homepage/workshopPage';
import Edit from './components/profiles/EditCustomerProfile';
import EditWorkshopProfile from './components/profiles/EditWorkshopProfile';
import AddService from './components/profiles/addServiceToWorkshop';
import SearchRes from './components/search/SearchResult';
import ServicesFromWorkshops from './components/profiles/getServicesFromWorkshops';
import UsersFavoriteServices from './components/profiles/getUserFavoriteServices';
import CreateReview from './components/review/createReview';
import GetReviews from './components/review/getReviews';
import SearchResWorkshop from './components/search/SearchResultWorkshop';
import EditWorkshopProf from "./components/profiles/EditWorkshopService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <ToastContainer />
          <Routes>
              <Route path="/" element = {<Homepage />}/>
              <Route path="/pre-register" element = {<Preregister />}/>
              <Route path = "/login" element = {<Login />}/>
              <Route path = "/register-customer" element = {<RegisterCustomer />}/>
              <Route path= "/register-workshop" element = {<RegisterWorkshop />} />
              <Route path= "/customer-profile" element = {<CustomerProfile/>}/>
              <Route path= "/workshop-profile" element = {<WorkshopProfile />}/>
              <Route path= "/logged" element = {<Logged />}/>
              <Route path= "/workshops" element = {<WorkshopPage />}/>
              <Route path= "/edit-customer" element = {<Edit/>}/>
              <Route path= "/edit-workshop" element = {<EditWorkshopProfile />}/>
              <Route path= "/add-service" element = {<AddService />}/>
              <Route path = "/search-service/:serviceId" element = {<SearchRes />}/>
              <Route path = "/search-service/workshop/:serviceId" element = {<SearchResWorkshop />}/>
              <Route path = "/services-from-workshop" element = {<ServicesFromWorkshops />}/>
              <Route path = "/update-workshop-service" element = {<EditWorkshopProf />}/>
              <Route path = "/customer-profile/favorite-services" element = {<UsersFavoriteServices />}/>
              <Route path= "/reviews/create" element = {<CreateReview />}/>
              <Route path= "/reviews" element = {<GetReviews />}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

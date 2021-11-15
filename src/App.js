import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Drones from './pages/Drones/Drones';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import AuthProvider from './contexts/AuthProvider';
import Footer from './components/Footer/Footer';
import PasswordReset from './pages/PasswordReset/PasswordReset';
import Details from './pages/Details/Details';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DashBoard from './pages/DashBoard/DashBoard';
import AdminPannel from './pages/AdminPannel/AdminPannel';

function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Router>
     <Header/>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/home">
         <Home/>
       </Route>
       <Route path="/about">
         <About/>
       </Route>
       <Route path="/contact">
         <Contact/>
       </Route>
       <Route path="/admin">
         <AdminPannel/>
       </Route>
       <Route exact path="/drones">
         <Drones/>
       </Route>
       <Route path="/drones/:id">
         <Details/>
       </Route>
       
       <PrivateRoute path="/dashboard">
         <DashBoard/>
       </PrivateRoute>
       <Route path="/login">
         <Login/>
       </Route>
       <Route path="/signup">
         <SignUp/>
       </Route>
       <Route path="/reset">
         <PasswordReset/>
       </Route>
       <Route path="*">
         <PageNotFound/>
       </Route>
     </Switch>
     <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;

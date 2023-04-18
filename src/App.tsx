import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './ui/components/surfaces/Header';
import Footer from './ui/components/surfaces/Footer';
import Home from './pages/home/index';
import ListMeteriologicalData from './pages/listMeteriologicalData';
import RegisterNewWheatherForecast from './pages/registerNewMeteriologicalData';


function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = '/list' element = {<ListMeteriologicalData/>} />
          <Route path ='register' element = {<RegisterNewWheatherForecast/>} />
        </Routes>
        <Footer/>
      </Router>
   );
}

export default App;

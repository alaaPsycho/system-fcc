import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './components/Details';
import Search from './components/Search';



function App() {

  return (
     
    <div className="App">
      <Router>

        <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path='/Details/:id' element={<Details/> }/>
          <Route path='/search/:type' element={<Search/> }/>

        </Routes>
      </Router>

     

    </div>
 
  );
}

export default App;

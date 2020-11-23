import Menu from './components/Menu';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProductList from './components/ProductList';


function App() {
  return (
    <Router>

    <div>
   
    <h1>Shop & User Management App</h1>
    
        <Menu/>
        <Route path="/products" component={ ProductList} />
     
    </div>
    </Router>
  );
}

export default App;

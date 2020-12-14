import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import Menu from "./components/Menu";
import EditProduct from "./components/EditProduct";
import "./style/menu.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products/edit/:id" component={EditProduct} />
        <div className="my-container">
          <h1 className="header">Shop & User Management App</h1>
          <div className="box">
            <div className="box-1 my-col">
              <Menu />
            </div>
            <div className="box-2">
              <Route path="/products" component={ProductList} />
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;

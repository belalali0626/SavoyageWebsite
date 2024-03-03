import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import SigninPage from "./pages/signin";
import Products from "./pages/products";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contactus" component={SigninPage} exact />
        <Route path="/products" component={Products} exact /> 
      </Switch>
    </Router>
  );
}

export default App;

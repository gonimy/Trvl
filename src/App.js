import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar";
import { Home } from "./components/pages/home";
import Join from "./components/pages/Join";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={Join} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}
//          <Route path='*' exact={true} component={NotFound} />
export default App;

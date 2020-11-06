import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Saved from "./components/Saved/Saved";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route path="/" component={Search} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Saved from "./components/Saved/Saved";
import Search from "./components/Search/Search";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route path="/" component={Search} />
        </Switch>
    </Router>
  );
}

export default App;

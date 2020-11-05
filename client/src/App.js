import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./components/Saved/Saved";
import Search from "./components/Search/Search";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Search} />
          <Route path="/" component={Saved} />
        </Switch>
    </Router>
  );
}

export default App;

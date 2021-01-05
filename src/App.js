import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import PokeHome from "./pokeHome";
import pokeDescription from "./pokeDescription";
//components

function App() {
  return (
    <Router>
      <Route path="/description/:id" component={pokeDescription}></Route>
      <Route path="/" exact component={PokeHome}></Route>
    </Router>
  );
}

export default App;

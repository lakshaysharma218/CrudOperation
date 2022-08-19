import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./Component/Pages/Home"
import About from "./Component/Pages/About"
import Contact from "./Component/Pages/Contact"
import PageNotFound from "./Component/Pages/PageNotFound"
import Navbar from "./Component/Layout/Navbar"
import Addusers from "./Component/Users/Addusers"
import Edituser from "./Component/Users/Edituser"
import { BrowserRouter , Route , Switch } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/addusers" component={Addusers}></Route>
        <Route exact path="/user/edit/:id" component={Edituser}></Route>
        <Route exact path="*" component={PageNotFound}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/components/Home";
import Navbar from "./pages/components/Navbar";
import AboutApp from "./pages/components/AboutApp";
import AboutAuthor from "./pages/components/AboutAuthor";
import ErrorPage from "./pages/components/Error/ErrorPage";
import DetailPage from "./pages/components/DetailPage";



function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/><br /><br /><br /><br />
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/about/about-app' component={AboutApp}></Route>
            <Route path='/about/about-author' component={AboutAuthor}></Route>
            <Route path='/profile/:nama' component={DetailPage}></Route>
            <Route component={ErrorPage}></Route>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

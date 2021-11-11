import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/components/Home";
import Navbar from "./pages/components/Navbar";
import AboutApp from "./pages/components/AboutApp";
import AboutAuthor from "./pages/components/AboutAuthor";
import ErrorPage from "./pages/components/Error/ErrorPage";
import DetailPage from "./pages/components/DetailPage";
import FormDaftar from "./pages/components/FormDaftar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistore } from "./store/store";





function App() {
  return (
    <>
    <Provider store={store}>
      <PersistGate loading ={null} persistor={persistore}> {/*kalo mau kasih loading taruh sini*/}
        <BrowserRouter>
            <Navbar/><br /><br /><br /><br />
            <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route path='/about/about-app' exact component={AboutApp}></Route>
              <Route path='/about/about-author' exact component={AboutAuthor}></Route>
              <Route path='/form' exact component={FormDaftar}></Route>
              <Route path='/profile/:id' exact component={DetailPage}></Route>
              <Route component={ErrorPage}></Route>
            </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    </>
  );
}

export default App;

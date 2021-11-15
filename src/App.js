// import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { PersistGate } from "redux-persist/es/integration/react";
import ContactUs from "./components/ContactUs/ContactUs";
import Result from "./components/ContactUs/Result";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
// import { persistore, store } from "./components/store/store";

function App() {
  return (
    <>
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistore}>

        </PersistGate>
      </Provider> */}
      <BrowserRouter>
          <Navbar/><br /><br /><br />
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/contact-us' exact component={ContactUs}></Route>
            <Route path='/news' exact component={News}></Route>
            <Route path='/result' exact component={Result}></Route>

            {/* <Route component={ErrorPage}></Route> */}
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

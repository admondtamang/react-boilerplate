import "./App.css";
import { Login } from "./pages";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

// import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Dashboard} />
        </Switch>
      </Router>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;

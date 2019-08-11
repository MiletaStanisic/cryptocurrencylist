import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";
import CryptocurrencyList from "./components/CryptocurrencyList";
import Settings from "./components/Settings";
import CryptocurrencyDetails from "./components/CryptocurrencyDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Header />
          <Switch>
            <Route exact path="/" component={CryptocurrencyList} />
          </Switch>
          <Switch>
            <Route exact path="/settings" component={Settings} />
          </Switch>
          <Switch>
            <Route
              exact
              path="/details/:id"
              component={CryptocurrencyDetails}
            />
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default App;

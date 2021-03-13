import React from "react";
import "./App.css";
import HomePage from "./components/pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopePage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./components/pages/sign-in-and-signup/sign-in-and-signup.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopePage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

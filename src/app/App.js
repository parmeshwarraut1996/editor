import React, { Component } from "react";
import Article from "../components/home/Article";
import { Provider } from "react-redux";
import store from "../store/store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Article />
      </Provider>
    );
  }
}
export default App;

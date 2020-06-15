import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"
import Main from "./components/main.js";
import 'semantic-ui-css/semantic.min.css'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducers";
// import reducer from "./reducers/reducers.js";
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


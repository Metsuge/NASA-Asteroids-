import "./styles/App.css";
import MainComponent from "./MainComponent";

import {Provider} from "react-redux";
import store from "../redux/store";

function App() {
  return (
    <Provider store={store}>
      <div id="main-app-div">
        <MainComponent></MainComponent>
      </div>
      <div id="stardust"></div>
      <div id="stars">
        <div id="one-star"></div>
      </div>
    </Provider>
  );
}

export default App;

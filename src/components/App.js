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
    </Provider>
  );
}

export default App;

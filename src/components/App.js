import "./styles/App.css";
import TodayInfo from "./TodayInfo";
import NextApproach from "./NextApproach";
import {Provider} from "react-redux";
import store from "../redux/store";

function App() {
  return (
    <Provider store={store}>
      <div id="main-app-div">
        APP
        <TodayInfo></TodayInfo>
        <NextApproach></NextApproach>
      </div>
    </Provider>
  );
}

export default App;

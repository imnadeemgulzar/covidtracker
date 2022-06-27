import { useState, useEffect } from "react";
import LoginPage from "./components/LoginPage";
import StatesPage from "./components/StatesPage";
import {Route , Routes} from "react-router-dom"
import DistrictPage from "./components/DistrictPage";
function App() {
  const [data, setData] = useState([]);
  const [distData, setDistData] = useState([]);
  const [login,setLogin] = useState(false);
  const getCovidData = async () => {
      const res = await fetch(
        "https://data.covid19india.org/v4/min/data.min.json"
      );
      const actualData = await res.json();
      setData(Object.entries(actualData).map((stateData) => stateData));
      setDistData(actualData);
    };
      useEffect(() => {
        getCovidData();
      }, []);
  return (
    <Routes>
      <Route path="/" exact element = {<LoginPage/>}/>
      <Route path="/StatesPage" exact element = {<StatesPage data = {data} setDistData={setDistData}/>}/>
      <Route path="/DistrictPage/:data" exact element = {<DistrictPage distData = {distData}/>} />
    </Routes>
  );
}

export default App;

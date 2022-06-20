import { Link } from "react-router-dom";
import StateCard from "./StateCard";
const StatesPage = (props) => {
    return (
      <>
      <h1 className="bg-orange-400 text-white px-8 py-2 font-bold text-4xl justify-center flex">
        Live Covid Tracker
      </h1>
      <div className="bg-stone-700 flex justify-around items-start flex-wrap">
        {props.data.map((item) => {
          return (
            <Link to = {"/DistrictPage"} onClick={() =>{
              props.setDistData(item.districts)
            }}>
              <StateCard stateCode = {item[0]} conf = {item[1].total.confirmed} dec={item[1].total.deceased} rec = {item[1].total.recovered}/>
             </Link>
          );
        })}
      </div>
    </>
  );
};

export default StatesPage;


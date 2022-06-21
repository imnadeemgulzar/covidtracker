import { Link } from "react-router-dom";
import StateCard from "./StateCard";
const StatesPage = (props) => {
  return (
    <>
      <h1 className="bg-zinc-500 text-white px-8 py-2 font-bold text-4xl justify-center flex">
        Live Covid Tracker - STATE DATA
      </h1>
      <div className="bg-stone-700 flex justify-center space-x-4 items-start flex-wrap">
        {props.data.map((item) => {
          return (
            <Link
              to={"/DistrictPage"}
              onClick={() => {
                props.setDistData(item[1]);
              }}
            >
              <StateCard
                stateCode={item[0]}
                conf={item[1].total.confirmed}
                dec={item[1].total.deceased}
                rec={item[1].total.recovered}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default StatesPage;

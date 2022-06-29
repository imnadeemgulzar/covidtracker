import { useState } from "react";
import { Link } from "react-router-dom";
import StateCard from "./StateCard";
const StatesPage = (props) => {
  const [searchItem,setSearchItem] = useState('')
  return (
    <>
    <div className="bg-zinc-500 flex flex-col space-y-2 px-4 py-2 sm:flex-row sm:justify-around">
      <h1 className="text-4xl font-bold text-white">
        Live Covid Tracker - STATE DATA
      </h1>
      <input placeholder="Search State" className="rounded-full px-10 py-2 outline-none text-sm text-slate-600 sm:px-16"
      onChange={(e) =>{setSearchItem(e.target.value)}}></input>
    </div>
      <div className="bg-stone-700 flex justify-center space-x-4 items-start flex-wrap">
        {props.data.filter(item => {
          if(searchItem === ""){
            return item
          }else if (item[0].toLowerCase().includes(searchItem.toLowerCase())){
            return item
          }
        }).map(item =>{
          return (
            <Link
              to={`/DistrictPage/${item[0]}`}
            >
              <StateCard
                stateCode={item[0]}
                conf={item[1].total.confirmed}
                dec={item[1].total.deceased}
                rec={item[1].total.recovered}
              />
            </Link>
          )
        })}
      </div>
    </>
  );
};

export default StatesPage;

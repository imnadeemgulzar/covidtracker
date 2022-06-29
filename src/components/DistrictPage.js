import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StateCard from "./StateCard";


const DistrictPage = (props) => {
  const [distList,setDistList] = useState([]);
  const {data} = useParams()
  useEffect(() =>{
   let selectDist = Object.entries(props.distData).find((distDetail) => distDetail[0] === data);
   if(selectDist)
   setDistList(selectDist[1].districts)
  },[data,props.distData])
  const [searchItem,setSearchItem] = useState("")
  return (
    <>
    <div className="bg-zinc-500 flex flex-col space-y-2 px-4 py-2 sm:flex-row sm:justify-around">
      <h1 className="text-4xl font-bold text-white">
        Live Covid Tracker - DISTRICT DATA
      </h1>
      <input placeholder="Search District" className="rounded-full px-10 py-2 sm:px-16 outline-none text-sm text-slate-600"
      onChange={(e) => setSearchItem(e.target.value)}></input>
      </div>
      <div className="bg-stone-700 text-white flex justify-around items-start flex-wrap">
        {Object.entries(distList).filter(([distName,distData]) =>{
          if(searchItem === ""){
            return distName
          }else if(distName.toLowerCase().includes(searchItem.toLowerCase())){
            return distName
          }
        }).map(([distName,distData]) =>{
          return (
            <StateCard
              distName = "District"
              stateCode={distName}
              conf={distData.total?.confirmed}
              dec={distData.total?.deceased}
              rec={distData.total?.recovered}
            />
          )
        })}
      </div>
    </>
  );
};
export default DistrictPage;

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
    <div className="bg-zinc-500  px-8 py-2 justify-around flex">
      <h1 className="text-4xl font-bold text-white">
        Live Covid Tracker - DISTRICT DATA
      </h1>
      <input placeholder="Search District" className="rounded-full px-16 outline-none text-sm text-slate-600"
      onChange={(e) => setSearchItem(e.target.value)}></input>
      </div>
      <div className="bg-stone-700 text-white flex justify-around items-start flex-wrap">
        {Object.entries(distList).filter(([k,v]) =>{
          if(searchItem === ""){
            return k
          }else if(k.toLowerCase().includes(searchItem.toLowerCase())){
            return k
          }
        }).map(([k,v]) =>{
          return (
            <StateCard
              distName = "District"
              stateCode={k}
              conf={v.total?.confirmed}
              dec={v.total?.deceased}
              rec={v.total?.recovered}
            />
          )
        })}
      </div>
    </>
  );
};
export default DistrictPage;

import React from "react";
import StateCard from "./StateCard";

const DistrictPage = (props) => {
  return (
    <>
      <div className="bg-stone-700 flex justify-around items-start flex-wrap">
        {Object.entries(props.distData).map((el) =>{
          return (
          <StateCard stateCode={""} conf={""} dec={""} rec={""} key={""} />
          );
        })}
      </div>
    </>
  );
};
export default DistrictPage;

import React from "react";
import StateCard from "./StateCard";

const DistrictPage = (props) => {
  return (
    <>
      <h1 className="bg-zinc-500 text-white px-8 py-2 font-bold text-4xl justify-center flex">
        Live Covid Tracker - DISTRICT DATA
      </h1>
      <div className="bg-stone-700 flex justify-around items-start flex-wrap">
        {Object.entries(props.distData.districts).map((distDetail) => {
          return (
            <StateCard
              distName = "District"
              confName = "Confirm"
              decName = "deceased"
              recName = "Recovered"
              stateCode={distDetail[0]}
              conf={distDetail[1].total.confirmed}
              dec={distDetail[1].total.deceased}
              rec={distDetail[1].total.recovered}
            />
          );
        })}
      </div>
    </>
  );
};
export default DistrictPage;

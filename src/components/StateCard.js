import { useState } from "react"

const StateCard = (props) =>{
    const [dist,setDist] = useState()
    return(
        <div className="bg-zinc-100 text-black rounded-lg m-2 text-2xl h-fit w-fit">
        <h2 className="border-black border-b-2 p-4">
          StateCode :
          <span className="bg-stone-700 text-white rounded-md py-1 px-3">
            {props.stateCode}
          </span>
        </h2>
        <div className="flex flex-col justify-center items-center space-x-3 space-y-3 p-2">
          <p>
            confirmed :
            <span className="bg-stone-700 text-white rounded-md px-3">
              {props.conf}
            </span>
          </p>
          <p>
            deceased :
            <span className="bg-stone-700 text-white rounded-md px-3">
              {props.dec}
            </span>
          </p>
          <p>
            recovered :
            <span className="bg-stone-700 text-white rounded-md px-3">
              {props.rec}
            </span>
          </p>
        </div>
      </div>

    )
}

export default StateCard

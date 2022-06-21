const StateCard = (props) => {
  const details = [
    { text: "Confirmed", bg: "bg-red-600", val: props.conf },
    { text: "Deceased", bg: "bg-blue-600", val: props.dec },
    { text: "Recovered", bg: "bg-green-600", val: props.rec },
  ];
  return (
    <div className="text-black my-4 text-2xl h-fit w-96 capitalize">
      <h2 className="border-black border-b-2 p-4 rounded-t-2xl bg-green-200 flex justify-around">
        StateCode :
        <span className="bg-stone-700 text-white rounded-md py-1 px-10">
          {props.stateCode}
        </span>
      </h2>
      <div className="flex flex-col justify-center items-center space-x-3 space-y-3 p-2 bg-slate-300">
        {details.map((item) => {
          return (
            <p>
              {item.text}
              <span className={`${item.bg} text-white rounded-md px-3 ml-20`}>
                {item.val}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default StateCard;

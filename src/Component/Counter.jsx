import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

const initValue = 1;
const reducerfn = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  } else if (action.type === "decrement") {
    return state - 1;
  }
  return (initValue = 1);
};

const Counter = () => {
  const [state, dispatcher] = useReducer(reducerfn, initValue);

  const incrementHandler = () => {
    dispatcher({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatcher({ type: "decrement" });
  };

  return (
    <div className=" text-white flex justify-center items-center  m-10  ">
      <div className="bg-blue-500 py-8 px-9 top-5 rounded-md">
        <button onClick={incrementHandler}>+</button>
      </div>
      <span className="text-white bg-blue-500 px-9 py-8 rounded-md font-bold">
        {state}
      </span>
      <div className="bg-blue-500 px-9 py-8 rounded-md">
        <button
          className="text-bold font-nunito font-bold "
          onClick={decrementHandler}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;

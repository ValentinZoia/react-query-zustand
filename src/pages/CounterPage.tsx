import React from "react";
import useCounterStore from "../store/counterStore";

export default function CounterPage() {
  const count = useCounterStore((state) => state.count);
  const incrementCount = useCounterStore((state) => state.incrementCount);
  const decrementCount = useCounterStore((state) => state.decrementCount);
  const resetCount = useCounterStore((state) => state.resetCount)
  
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1>Count: {count}</h1>
      <div className="flex gap-4">
        <button className="bg-blue-500 p-2 rounded-lg" onClick={incrementCount}>
          +
        </button>
        <button className="bg-blue-500 p-2 rounded-lg" onClick={decrementCount}>
          -
        </button>
        <button className="bg-blue-500 p-2 rounded-lg" onClick={resetCount}>
          0
        </button>

      </div>
    </div>
  );
}

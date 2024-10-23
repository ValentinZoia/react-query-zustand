// create nos permite cerar un estado
import {create} from "zustand";

//save state in local storage
import { persist } from "zustand/middleware";


//definimos el tipo de estado
type CounterState = {
    count: number
    incrementCount: () => void
    decrementCount: () => void
    resetCount: () => void
}



const useCounterStore = create(persist<CounterState>((set) => ({
    count:0,
    incrementCount: () => set((state) => ({count: state.count + 1})),
    decrementCount: () => set((state) => ({count: state.count - 1})),
    resetCount: () => set({count: 0}),
}),{
    name: "counter"
}));

export default useCounterStore
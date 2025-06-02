import {useReducer} from "react";

type CounterState = {
    count: number;
    lastAction: string;
    time: string;
}

type Action =
    | {type: "Increase"}
    | {type: "Decrease"}
    | {type: "Reset"};

const initialState: CounterState = {
    count: 0,
    lastAction: "",
    time: "",
}

const getCurrentTime = () => new Date().toLocaleTimeString();

function reducer(state: CounterState, action: Action): CounterState {
    switch (action.type) {
        case "Increase":
            return{
                count: state.count + 1,
                lastAction: "Increase",
                time:  getCurrentTime(),
            };
        case "Decrease":
            return state.count > 0 ? {
                count: state.count - 1,
                lastAction: "Decrease",
                time:  getCurrentTime(),
            }: state;
        case "Reset": return {
            count: initialState.count,
            lastAction: "Reset",
            time:  getCurrentTime(),
        };
        default: return state;
    }
}

export const useCounterWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increase = () => dispatch({ type: "Increase" });
    const decrease = () => dispatch({ type: "Decrease" });
    const reset = () => dispatch({ type: "Reset" });

    return {
        count : state.count,
        lastAction: state.lastAction,
        time : state.time,
        increase,
        decrease,
        reset,
    }

}
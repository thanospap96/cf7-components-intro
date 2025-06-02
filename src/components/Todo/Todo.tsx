
import { useReducer} from "react";
//ToDo: Create a function with userReducer
import TodoForm from "./TodoForm.tsx";
import TodoList from "./TodoList.tsx";

type TodoProps = {
    id: number;
    text: string;
}

type Action =
    | {type: "ADD"; payload: string}
    | {type: "DELETE"; payload: number};

const todoReducer = (state:TodoProps[], action: Action): TodoProps[] => {

    switch (action.type) {
        case "ADD":
          const newTodo: TodoProps = {
              id: Date.now(),
              text: action.payload,
           }
        return [...state, newTodo];

        case "DELETE":
            return state.filter(todo => todo.id !== action.payload)

        default:
            return state;
    }
}

const Todo = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    console.log(todos);


    return (
        <>
            <div className="max-w-sm mx-auto p-4">
                <h1 className="text-center text-2xl mb-4">To-Do List</h1>
                <TodoForm dispatch={dispatch}/>
                <TodoList todos={todos} dispatch={dispatch}/>
            </div>
        </>
    )
}

export default Todo;
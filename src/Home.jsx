import { useState } from "react";
import Create from "./Create";
import './Home.css';

export default function Home() {
    const [todos, setTodos] = useState([])

    const onAdd = (todo) => {
        setTodos([...todos, todo])
    }
    const onRemove = (index) => {
        setTodos(todos.filter((_, i) => i !== index))
    }

    return <div className="todolist">
        <h2>ToDo List</h2>
        <Create onAdd={onAdd} />
        <div className="list">
            {
            todos.length === 0 ? <div>
                <h3>No records</h3>
            </div> :
                todos.map((todo, i) => (
                    <div key={todo}>{todo}
                    <button className="remove" onClick={() => onRemove(i)}>Remove</button>
                    </div>
                ))
        }
        </div>
    </div>
}
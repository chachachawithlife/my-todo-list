import { useState } from "react"

export default function Create({onAdd}) {
    const [todo, setTodo] = useState('')

    const onAddTodo = () => {
        onAdd(todo)
        setTodo('')
    }

    return <div>
        <input type="text" name="todo" id="todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="button" onClick={onAddTodo}>Add</button>
    </div>
}
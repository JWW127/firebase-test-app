import { useState } from 'react'
import { Button, Form } from "react-bootstrap";
import { getDatabase, ref, push } from 'firebase/database'

//import firbase config
import firebaseApp from '../firebase'

const TodoForm = () => {
    const db = getDatabase(firebaseApp)

    const [title, setTitle] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    
    const addTodo = () => {
        const todoRef = ref(db, "/todos")
        const todo = {
            title,
            done: false,
        }
            push(todoRef, todo)
    }

  return (
    <Form>
      <Form.Control onChange={handleChange} />
      <Button type="submit" onClick={addTodo}>
        submit
      </Button>
    </Form>
  );
};

export default TodoForm

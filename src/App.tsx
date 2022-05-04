import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App p1">
        <TodoList />
        <TodoForm />  
    </div>
  );
}

export default App;

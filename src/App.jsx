import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardTodo from './component/CardTodo';
import FormAddTodo from './component/FormAddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    status: ''
  });

  const handleInputChangeNewTodo = event => {
    
    const {name, value} = event.target;

    setNewTodo({...newTodo, [name]: value});
  }

  const handleInputChangeAddedTodo = (event, id) => {

    const {name, value} = event.target;

    const newList = todos.map((todo) => {
      if(todo.id === id) {
        const updateTodo = {
          ...todo, [name]: value
        };

        return updateTodo;
      }

      return todo;
    });

    console.log(newList);

    //setTodos({...todos, newList});
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      title: newTodo.title,
      description: newTodo.description,
      status: newTodo.status, 
      id: todos.length + 1}]);

    setNewTodo({
      title: "",
      description: "",
      status: ""
    })
  }

  return (
    <div className="App">
      <h1 className='text-5xl uppercase font-thin'>Gestionnaire de tâches</h1>
      <FormAddTodo newTodo={newTodo} handleChange={handleInputChangeNewTodo} AddNewTodo={addTodo} />

      <div className='container mt-10'>
        <div className='grid grid-cols-4 gap-5'>
        {
          todos.map((todo) => {
            return(
              <CardTodo todo={todo} key={todo.id} updateTodo={handleInputChangeAddedTodo} />
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default App

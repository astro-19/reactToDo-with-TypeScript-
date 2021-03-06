import React from 'react';
import {ToDo} from "../model";
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
    todos: ToDo[];
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}: Props) => {
  return <div className="todos">
      {todos.map((todo) =>(
          <SingleTodo 
          todo={todo} 
          key={todo.id} 
          todos={todos}
          setTodos={setTodos}
          />
      ))}
  </div>;
};

export default TodoList;

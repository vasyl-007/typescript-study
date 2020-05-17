import React from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void; // the same  ? means that is not required parameter (function), but in this case it is required
  onRemove: (id: number) => void; // the same an arrow function
  
  //   onToggle?(id: number): void; // the same  ? means that is not required parameter (function), but in this case it is required
  //   onRemove?: (id: number) => void; // the same an arrow function
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onRemove,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} />
              <span>{todo.title}</span>
              <i className="material-icons red-text">delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

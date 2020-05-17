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
  if (todos.length === 0) {
    return <p className="center">There are now tasks yet</p>;
  }
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
              <input
                type="checkbox"
                checked={todo.completed}
                // onChange={() => {
                //   onToggle(todo.id);
                // }}
                onChange={onToggle.bind(null, todo.id)} // return new function and will not invoce it
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => {
                  // callback this is one method to invoke func
                  onRemove(todo.id);
                }}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

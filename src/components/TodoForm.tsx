import React, { useState, useRef } from "react";

export const TodoForm: React.FC<{ onAdd(title: string): void }> = (props) => {
  // const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  // };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(ref.current!.value);
      ref.current!.value = "";
      // console.log(title);
      // setTitle("")
    }
  };
  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Input task you want"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Input new task
      </label>
    </div>
  );
};

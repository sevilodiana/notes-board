import React from "react";
import "./inputfield.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <div>
      <form className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="input"
          placeholder="Enter a task"
          className="input__box"
        />
        <button className="button__task" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;

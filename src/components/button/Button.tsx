import React, { FormEvent, FC } from "react";
import "./button.css";
import { BsPlusLg } from "react-icons/bs";

interface ButtonProps {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: FormEvent) => void;
}

const Button: FC<ButtonProps> = ({ note, setNote, handleAdd }) => {
  return (
    <button className="button__note" onClick={handleAdd}>
      <a>
        <BsPlusLg className="button__icon" />
      </a>
      New note
    </button>
  );
};

export default Button;

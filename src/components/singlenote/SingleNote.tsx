import React, { FC, useState } from "react";
import { Note } from "../../model";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import "./singlenote.css";
import { Draggable } from "react-beautiful-dnd";

interface SingleNoteProps {
  note: Note;
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const SingleNote: FC<SingleNoteProps> = ({ note, notes, setNotes }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editNoteTitle, setEditNoteTitle] = useState<string>(note.title);
  const [editNoteText, setEditNoteText] = useState<string>(note.text);

  // const handleDone = (id: number) => {
  //   setNotes(
  //     notes.map((note) =>
  //       note.id === id ? { ...note, isDone: !note.isDone } : note
  //     )
  //   );
  // };

  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, title: editNoteTitle, text: editNoteText }
          : note
      )
    );
    setEdit(false);
  };

  return (
    <form className="notes__single" onSubmit={(e) => handleEdit(e, note.id)}>
      {edit ? (
        <section>
          <input
            autoFocus
            type="text"
            placeholder="Title"
            value={editNoteTitle}
            onChange={(e) => setEditNoteTitle(e.target.value)}
            className="notes__single-title-area"
          />

          <textarea
            rows={7}
            placeholder="Write note details..."
            value={editNoteText}
            onChange={(e) => setEditNoteText(e.target.value)}
            className="notes__single-text-area"
          ></textarea>
          <button className="notes__save">Save</button>
        </section>
      ) : (
        <section>
          <div className="notes__title-container">
            <span className="notes__single-title">{note.title}</span>
          </div>

          <span className="notes__single-text">{note.text}</span>
        </section>
      )}

      <div className="notes__icons">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !note.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <BiEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(note.id)}>
          <AiFillDelete />
        </span>
        {/* <span className="icon" onClick={() => handleDone(note.id)}>
          <MdDone />
        </span> */}
      </div>
    </form>
  );
};

export default SingleNote;

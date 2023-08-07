import React, { FC } from "react";
import "./notelist.css";
import { Note } from "../../model";
import SingleNote from "../singlenote/SingleNote";
import { Droppable } from "react-beautiful-dnd";

interface NoteListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteList: FC<NoteListProps> = ({ notes, setNotes }) => {
  return (
    <div className="notes__container">
      <div className="notes">
        {notes.map((note) => (
          <SingleNote
            note={note}
            key={note.id}
            notes={notes}
            setNotes={setNotes}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;

import { FC, FormEvent, useEffect, useState } from "react";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import NoteList from "./components/notelist/NoteList";
import { Note } from "./model";
interface AppProps {}

const App: FC<AppProps> = ({}) => {
  const [note, setNote] = useState<string>("asd");
  const [notes, setNotes] = useState<Note[]>(
    JSON.parse(localStorage.getItem("notes")!) || []
  );


  const handleAdd = (e: FormEvent) => {
    e.preventDefault();

    setNotes([
      { id: Date.now(), title: "", text: "", isDone: false },
      ...notes,
    ]);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
      <>
        <Header />
        {/* <InputField todo={todo} setTodo={setTodo} /> */}
        <Button note={note} setNote={setNote} handleAdd={(e) => handleAdd(e)} />
        <NoteList notes={notes} setNotes={setNotes} />
      </>
  );
};

export default App;

import { useState } from "react";
import "./App.css";
import EditPage from "./components/Header/Edit/EditPage";
import Header from "./components/Header/Header";

function App() {
  const [isEdit, setEdit] = useState(false);
  return (
    <div className="App">
      {isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />}
    </div>
  );
}

export default App;

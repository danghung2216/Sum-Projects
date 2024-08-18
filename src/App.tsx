import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Page/Navigation/Navigation";
import TodoList from "./Page/To-Do-List/TodoList";
import ManegeUser from "./Page/ManegeUser/ManegeUser";
import HomePage from "./Page/Homepage/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/manageUser" element={<ManegeUser />} />
        <Route path="/to-do-list" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Quiz from "./Quiz/Quiz";
import Counter from "./Counter/Counter";
import Layout from "./Pages/Layout";

function App() {
  return (
    <BrowserRouter basename="/test-react">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/quiz' element={<Quiz />}/>
          <Route path='/counter' element={<Counter />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

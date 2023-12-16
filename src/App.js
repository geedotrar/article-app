import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import AddArticle from "./pages/AddArticle";
import UpdateArticle from "./pages/UpdateArticle";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/article/add" element={<AddArticle />}></Route>
          <Route path="/article/edit/:id" element={<UpdateArticle />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

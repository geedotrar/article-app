import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavArticle from "./NavArticle";

const FormAddArticle = () => {
  const navigate = useNavigate();
  const [newArticle, setArticle] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({
      ...newArticle,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://api-trials.x5.com.au/api/articles", newArticle, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/");
    } catch (error) {
      console.error("Error adding article:", error.message);
    }
  };

  return (
    <div>
      <NavArticle />
      <div className="m-4 p-6 bg-white">
        <h2 className="text-2xl font-bold">Add</h2>
        <hr className="border-gray-300 border-1" />

        <form onSubmit={handleSubmit}>
          <div className="mb-4 pt-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              name="title"
              value={newArticle.title}
              onChange={handleChange}
              type="text"
              placeholder="input title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
            <textarea
              name="content"
              value={newArticle.content}
              onChange={handleChange}
              type="text"
              placeholder="input content"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddArticle;

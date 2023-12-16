import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavArticle from "./NavArticle";

const FormUpdateArticle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [article, setArticle] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    const getArticleById = async () => {
      try {
        const response = await axios.get(`https://api-trials.x5.com.au/api/articles/${id}`);
        setArticle(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getArticleById();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://api-trials.x5.com.au/api/articles/${id}`, article);
      navigate("/");
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <NavArticle />
      <div className="m-4 p-6 bg-white">
        <h2 className="text-2xl font-bold">Edit #{id}_article</h2>
        <hr className="border-gray-300 border-1" />

        <form onSubmit={handleUpdate}>
          <div className="mb-4 pt-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              value={article.title}
              onChange={handleChange}
              name="title"
              type="text"
              placeholder="input title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
            <textarea
              value={article.content}
              onChange={handleChange}
              name="content"
              type="text"
              placeholder="input content"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
              required
            />
          </div>

          <div className="flex items-center">
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline">
              Save
            </button>
            <Link to={"/"} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUpdateArticle;

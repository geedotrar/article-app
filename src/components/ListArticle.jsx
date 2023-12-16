import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteArticle from "./DeleteArticle";
import NavArticle from "./NavArticle";

const ListArticle = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [size, setSize] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, [currentPage, size, search]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api-trials.x5.com.au/api/articles`, {
        params: {
          search: search,
          page: currentPage + 1,
          page_size: size,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formatDate = (date) =>
    new Date(date)
      .toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .replace(/,/g, "");

  const handleDelete = async (articleId) => {
    try {
      await axios.delete(`https://api-trials.x5.com.au/api/articles/${articleId}`);
      setData((prevData) => ({
        data: {
          ...prevData.data,
          articles: prevData.data.articles.filter((article) => article.id !== articleId),
        },
      }));
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    setCurrentPage(0);
  };

  return (
    <div>
      <NavArticle />
      <div className="m-4 p-6 bg-white min-h-[650px] ">
        <div className="flex mb-4">
          <input type="text" placeholder="Search by title" value={search} onChange={handleSearchChange} className="px-4 py-2 border border-gray-300 mr-2 rounded-lg" />
          <div className="flex items-end justify-end ml-auto">
            <Link to={"/article/add"} className="px-4 py-2 bg-green-600 text-white rounded font">
              + Add
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 table-fixed text-center">
            <thead>
              <tr className="py-2 px-4 border-b text-green-600" style={{ backgroundColor: "#EEF7EF" }}>
                <th className="py-2 px-4 border-r">Date</th>
                <th className="py-2 px-4 border-r">Title</th>
                <th className="py-2 px-4 border-r">Content</th>
                <th className="py-2 px-4 border-r">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.data &&
                data.data.articles &&
                data.data.articles.map((article, index) => (
                  <tr key={article.id}>
                    <td className="py-2 px-4 border-b border-r">{formatDate(article.created_at)}</td>
                    <td className="py-2 px-4 border-b border-r">{article.title}</td>
                    <td className="py-2 px-4 border-b border-r">{article.content}</td>
                    <td className="py-2 px-4 border-b border-r">
                      <div className="flex items-center justify-center">
                        <Link to={`/article/edit/${article.id}`}>
                          <FaEdit size={25} className="edit-icon" />
                        </Link>
                        <DeleteArticle article={article} onDelete={handleDelete} />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <Pagination totalPage={data.data?.page_info?.last_page || 1} size={size} setSize={setSize} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </div>
  );
};
export default ListArticle;

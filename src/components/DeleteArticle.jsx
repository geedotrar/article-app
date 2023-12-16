import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteArticle = ({ article, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsOpen(true);
  };

  const handleCancelClick = () => {
    setIsOpen(false);
  };

  const confirmDelete = () => {
    onDelete(article.id);
    setIsOpen(false);
  };

  return (
    <div>
      <RiDeleteBin6Line onClick={handleDeleteClick} size={25} className="delete-icon" />
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-60 confirm-dialog">
          <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
            <div className="opacity-25 w-full h-full absolute z-10 inset-0"></div>
            <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
              <div className="md:flex items-center h-28">
                <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto bg-gray-200">
                  <RiDeleteBin6Line size={25} className="text-red-500" />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                  <p className="font-bold text-lg">Delete Article</p>
                  <p className="text-sm  mt-1">Are you sure you want to delete it? You can’t undo this action.</p>
                </div>
              </div>
              <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                <button onClick={confirmDelete} className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg font-semibold text-sm md:ml-2 md:order-2">
                  Delete
                </button>
                <button onClick={handleCancelClick} className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteArticle;

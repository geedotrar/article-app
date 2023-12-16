import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ totalPage, setSize, size, setCurrentPage, currentPage }) => {
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setSize(newSize);
    setCurrentPage(0);
  };

  const showArrow = currentPage === totalPage - 1;

  return (
    <div>
      <div className="flex  justify-end ml-auto items-center pt-10">
        <span className="mx-4">Show</span>
        <select onChange={handleSizeChange} value={size} className="button-page cursor-pointer">
          {[...Array(6)].map((_, index) => (
            <option key={index + 5} value={index + 5} className="bg-white cursor-pointer">
              {index + 5}
            </option>
          ))}
        </select>
        <span className="mx-4">entries</span>

        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={totalPage}
          previousLabel="<"
          containerClassName="flex gap-4 justify-center"
          renderOnZeroPageCount={null}
          activeLinkClassName="button-page button-page-active"
          nextLinkClassName={`button-page button-page-arrow ${showArrow ? "hidden" : ""}`}
          pageLinkClassName="button-page"
          previousLinkClassName={`button-page button-page-arrow ${currentPage === 0 ? "hidden" : ""}`}
        />
      </div>
    </div>
  );
};

export default Pagination;

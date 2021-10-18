import { useState } from "react";
import "./Pagination.css";

const Pagination = () => {
  const [page, setPage] = useState(1);

  const increment = () => {
    if (page < 16) {
      setPage(page + 1);
    }
  };

  const decrement = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="pageNumbers">
      <div
        className={`pageNumber__item ${page === 1 ? " disabled" : ""}`}
        onClick={decrement}
      >
        «
      </div>
      <div className="pageNumber__item">{page}</div>
      <div className="pageNumber__item">{page + 1}</div>
      <div className="pageNumber__item">{page + 2}</div>
      <div className="pageNumber__item">{page + 3}</div>
      <div className="pageNumber__item">{page + 4}</div>
      <div
        className={`pageNumber__item ${page === 16 ? " disabled" : ""}`}
        onClick={increment}
      >
        »
      </div>
    </div>
  );
};

export default Pagination;

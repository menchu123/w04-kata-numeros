import { useState } from "react";
import "./Pagination.css";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [giantNumber, setGiantNumber] = useState("");

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

  const renderGiantNumber = (page) => {
    setGiantNumber(page.target.textContent);
  };

  return (
    <>
      <div className="pageNumbers">
        <div
          className={`pageNumber__item ${page === 1 ? " disabled" : ""}`}
          onClick={decrement}
        >
          «
        </div>
        <div
          className="pageNumber__item"
          onClick={(page) => renderGiantNumber(page)}
        >
          {page}
        </div>
        <div
          className="pageNumber__item"
          onClick={(page) => renderGiantNumber(page)}
        >
          {page + 1}
        </div>
        <div
          className="pageNumber__item"
          onClick={(page) => renderGiantNumber(page)}
        >
          {page + 2}
        </div>
        <div
          className="pageNumber__item"
          onClick={(page) => renderGiantNumber(page)}
        >
          {page + 3}
        </div>
        <div
          className="pageNumber__item"
          onClick={(page) => renderGiantNumber(page)}
        >
          {page + 4}
        </div>
        <div
          className={`pageNumber__item ${page === 16 ? " disabled" : ""}`}
          onClick={increment}
        >
          »
        </div>
      </div>
      <div className="giantNumber">{giantNumber}</div>
    </>
  );
};

export default Pagination;

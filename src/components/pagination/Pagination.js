import { useState } from "react";

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
      <div className="button" onClick={decrement}>
        «
      </div>
      <div className="pageNumber">{page}</div>
      <div className="pageNumber">{page + 1}</div>
      <div className="pageNumber">{page + 2}</div>
      <div className="pageNumber">{page + 3}</div>
      <div className="pageNumber">{page + 4}</div>
      <div className="button" onClick={increment}>
        »
      </div>
    </div>
  );
};

export default Pagination;

import "./App.css";
import Pagination from "./components/pagination/Pagination.js";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const [giantNumber, setGiantNumber] = useState("");
  const numberArray = new Array(5).fill(page);

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
        <Pagination
          className={`pageNumber__item ${page === 1 ? " disabled" : ""}`}
          text="«"
          actionOnClick={decrement}
        />

        {numberArray.map((page, i) => (
          <Pagination
            className={"pageNumber__item"}
            text={page + i}
            actionOnClick={(page) => renderGiantNumber(page)}
          />
        ))}

        <Pagination
          className={`pageNumber__item ${page === 16 ? " disabled" : ""}`}
          text="»"
          actionOnClick={increment}
        />
      </div>
      <div className="giantNumber">{giantNumber}</div>
    </>
  );
}

export default App;

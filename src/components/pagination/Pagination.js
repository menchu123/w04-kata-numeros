import "./Pagination.css";

const Pagination = ({ className, text, actionOnClick }) => {
  return (
    <div className={className} onClick={actionOnClick}>
      {text}
    </div>
  );
};

export default Pagination;

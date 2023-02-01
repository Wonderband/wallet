import React from 'react';
import css from './Pagination.module.scss';

const Pagination = ({ setPageNum, pageNum, pageQtt }) => {
  const pagesArray = Array.from({ length: pageQtt }, (_, i) => i + 1);

  const increaseNum = () => {
    // if (pageNum === pageQtt) return;
    setPageNum(pageNum + 1);
  };
  const decreaseNum = () => {
    // if (pageNum === 1) return;
    setPageNum(pageNum - 1);
  };
  const changePage = e => {
    const pageNum = Number(e.target.dataset.pagenum);
    setPageNum(pageNum);
  };
  return (
    <div className={css.DivButtons}>
      <button
        className={css.Button}
        hidden={pageNum === 1}
        onClick={decreaseNum}
      >
        -
      </button>
      {pagesArray.map(pageNum => (
        <button
          key={pageNum}
          className={css.Button}
          data-pagenum={pageNum}
          onClick={changePage}
        >
          {pageNum}
        </button>
      ))}
      <button
        hidden={pageNum === pageQtt}
        className={css.Button}
        onClick={increaseNum}
      >
        +
      </button>
    </div>
  );
};

export default Pagination;

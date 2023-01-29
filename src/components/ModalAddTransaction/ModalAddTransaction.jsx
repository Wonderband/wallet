import { useState } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'redux/finance/financeOperations';
import { closeModal } from 'redux/global/globalSlice';
import { selectCategories } from 'redux/selectors';
import css from './ModalAddTransaction.module.css';

export const ModalAddTransaction = () => {
  const [typeSelector, setTypeSelector] = useState('expense');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
  };

  const clickOnBackdropHandler = e => {
    if (e.target === e.currentTarget) dispatch(closeModal());
  };

  const onEscapeHandler = e => {
    if (e.code === 'Escape') dispatch(closeModal());
  };

  useEffect(() => {
    const backdrop = document.querySelector('#modalBackdrop');
    backdrop.addEventListener('click', clickOnBackdropHandler);
    document.addEventListener('keydown', onEscapeHandler);
  }, [
    () => {
      const backdrop = document.querySelector('#modalBackdrop');
      backdrop.removeEventListener('click', clickOnBackdropHandler);
      document.removeEventListener('keydown', onEscapeHandler);
    },
    // clickOnBackdropHandler,
    // onEscapeHandler,
  ]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const categoriesList = useSelector(selectCategories);

  const showCategoriesList = () => {
    return categoriesList.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });
  };

  const changeFormHandle = e => {
    console.log(e.target['name']);
    if (e.target['name'] === 'type') setTypeSelector(e.target['value']);
    console.log(typeSelector);
  };
  return createPortal(
    <div className={css.modalBackdrop} id="modalBackdrop">
      <section className={css.modalSection} id="myModal">
        {/* <span className={css.close}>&times;</span> */}
        <h2>Add transaction</h2>
        <form
          className={css.modalForm}
          id="modalForm"
          onChange={changeFormHandle}
        >
          <label>
            <input type="radio" name="type" value="income" />
            Income
          </label>
          <label>
            <input type="radio" name="type" value="expense" defaultChecked />
            Expense
          </label>

          {typeSelector === 'expense' && (
            <label>
              <select id="categories" name="categories">
                <option disabled>Select a category</option>
                {showCategoriesList()}
              </select>
            </label>
          )}

          <label>
            <input
              type="number"
              name="amount"
              min="0.01"
              step="0.01"
              // value="0"
            />
          </label>
          <label>
            <input type="date" name="date" max="2023-01-31" />
          </label>
          <label>
            <textarea name="comment" placeholder="Comment"></textarea>
          </label>
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
          <button type="button">Cancel</button>
        </form>
      </section>
      ,
    </div>,
    document.querySelector('#root')
  );
};

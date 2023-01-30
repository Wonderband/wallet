import { useState } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  createTransaction,
  getCategories,
} from 'redux/finance/financeOperations';
import { closeModal } from 'redux/global/globalSlice';
import { selectCategories } from 'redux/selectors';
import css from './ModalAddTransaction.module.css';

export const ModalAddTransaction = () => {
  const [typeSelector, setTypeSelector] = useState('EXPENSE');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(null);
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const transactionData = {
      transactionDate: date,
      type: typeSelector,
      categoryId:
        typeSelector === 'EXPENSE'
          ? expenseCategory
          : '063f1132-ba5d-42b4-951d-44011ca46262',
      comment: comment,
      amount:
        typeSelector === 'EXPENSE'
          ? parseFloat(amount) * -1
          : parseFloat(amount),
    };
    // console.log(transactionData);
    dispatch(createTransaction(transactionData));
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
    return categoriesList
      .filter(item => item.name !== 'Income')
      .map(item => {
        return (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        );
      });
  };

  const changeFormHandle = e => {
    // console.log(e.target['name']);
    if (e.target['name'] === 'type') setTypeSelector(e.target['value']);
    if (e.target['name'] === 'categories')
      setExpenseCategory(e.target['value']);
    if (e.target['name'] === 'amount') setAmount(e.target['value']);
    if (e.target['name'] === 'date') setDate(e.target['value']);
    if (e.target['name'] === 'comment') setComment(e.target['value']);
    // console.log(e.target['value']);
  };
  return createPortal(
    <div className={css.modalBackdrop} id="modalBackdrop">
      <section className={css.modalSection} id="myModal">
        {/* <span className={css.close}>&times;</span> */}
        <h2>Add transaction</h2>
        <form className={css.modalForm} onChange={changeFormHandle}>
          <label>
            <input type="radio" name="type" value="INCOME" />
            Income
          </label>
          <label>
            <input type="radio" name="type" value="EXPENSE" defaultChecked />
            Expense
          </label>

          {typeSelector === 'EXPENSE' && (
            <label>
              <select name="categories" required>
                <option checked>Select a category</option>
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
              required
            />
          </label>
          <label>
            <input type="date" name="date" max="2023-01-31" required />
          </label>
          <label>
            <textarea name="comment" placeholder="Comment"></textarea>
          </label>
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </form>
      </section>
      ,
    </div>,
    document.querySelector('#root')
  );
};

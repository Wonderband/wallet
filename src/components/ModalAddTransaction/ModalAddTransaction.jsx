import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { getCategories } from 'redux/finance/financeOperations';

import css from './ModalAddTransaction.module.css';

export const ModalAddTransaction = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getCategories());
  };

  return createPortal(
    // <div className={css.modalBackdrop}>
    <section className={css.modalSection} id="myModal">
      {/* <span className={css.close}>&times;</span> */}
      <h2>Add transaction</h2>
      <form className={css.modalForm} action="">
        <label>
          <input type="radio" name="type" value="income" checked />
          Income
        </label>
        <label>
          <input type="radio" name="type" value="Expense" />
          Expense
        </label>

        <label>
          <select id="size" name="size">
            <option value="" disabled selected>
              Select a category
            </option>
            <option value="xs">Extra Small</option>
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
          </select>
        </label>

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
    </section>,
    // </div>,
    document.querySelector('#root')
  );
};

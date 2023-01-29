import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'redux/finance/financeOperations';
import { closeModal } from 'redux/global/globalSlice';
import { selectIsModalOpen } from 'redux/selectors';
import css from './ModalAddTransaction.module.css';

export const ModalAddTransaction = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getCategories());
  };

  const clickOnBackdropHandler = e => {
    if (e.target === e.currentTarget) dispatch(closeModal());
  };

  const onEscapeHandler = e => {
    console.log(e.code);
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
  ]);

  return createPortal(
    <div className={css.modalBackdrop} id="modalBackdrop">
      <section className={css.modalSection} id="myModal">
        {/* <span className={css.close}>&times;</span> */}
        <h2>Add transaction</h2>
        <form className={css.modalForm} action="">
          <label>
            <input type="radio" name="type" value="income" defaultChecked />
            Income
          </label>
          <label>
            <input type="radio" name="type" value="Expense" />
            Expense
          </label>

          <label>
            <select id="size" name="size">
              <option value="" disabled defaultChecked>
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
      </section>
      ,
    </div>,
    document.querySelector('#root')
  );
};

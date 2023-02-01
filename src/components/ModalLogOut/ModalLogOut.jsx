import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeLogOutModal } from 'redux/global/globalSlice';
import { logOut } from 'redux/session/sessionOperations';
import css from './ModalLogOut.module.scss';

export const ModalLogOut = () => {
  const dispatch = useDispatch();

  const clickOnBackdropHandler = e => {
    if (e.target === e.currentTarget) dispatch(closeLogOutModal());
  };

  const onLogOut = () => {
    dispatch(logOut());
    dispatch(closeLogOutModal());
  };

  useEffect(() => {
    const closeModal = e => {
      if (e.code === 'Escape') {
        dispatch(closeLogOutModal());
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [dispatch]);
  
  return createPortal(
      <div className={css.modalBackdrop} onClick={clickOnBackdropHandler}>
        <section className={css.modalSection}>
          <h2 className={css.modalTitle}>Are you sure?</h2>
            <button type='button' className={css.modalYesBtn} onClick={onLogOut}>Yes</button>
            <button type='button' className={css.modalCancelBtn} onClick={() => {dispatch(closeLogOutModal())}}>Cancel</button>
        </section>
      </div>, document.querySelector('#modal')
  );
};

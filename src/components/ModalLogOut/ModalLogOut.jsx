import { useDispatch } from 'react-redux';
import { closeLogOutModal } from 'redux/global/globalSlice';
import css from './ModalLogOut.module.scss';

export const ModalLogOut = () => {
  const dispatch = useDispatch();

  const clickOnBackdropHandler = e => {
    if (e.target === e.currentTarget) dispatch(closeLogOutModal());
  };

  const logOut = () => {
    dispatch(closeLogOutModal());
  };

  return (
    
    <div className={css.modalBackdrop} onClick={clickOnBackdropHandler}>
      <section className={css.modalSection}>
        <h2 className={css.modalTitle}>Are you sure?</h2>
          <button type='button' className={css.modalYesBtn} onClick={logOut}>Yes</button>
          <button type='button' className={css.modalCancelBtn} onClick={() => {dispatch(closeLogOutModal())}}>Cancel</button>
      </section>
    </div>
  );
};

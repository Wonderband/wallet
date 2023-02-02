import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/global/globalSlice';
import { selectCategories } from 'redux/selectors';
import css from './ModalAddTransaction.module.scss';
import * as yup from 'yup';
import 'react-datetime/css/react-datetime.css';
import { SelectField } from './SelectField';
import {
  createTransaction,
  editTransaction,
  getCategories,
} from 'redux/finance/financeOperations';

export const ModalAddTransaction = ({ transaction, closeEditModal }) => {
  const dispatch = useDispatch();

  const clickOnBackdropHandler = e => {
    if (e.target === e.currentTarget) {
      closeEditModal ? closeEditModal() : dispatch(closeModal());
    }
  };

  const onEscapeHandler = e => {
    if (e.code === 'Escape') {
      closeEditModal ? closeEditModal() : dispatch(closeModal());
    }
  };


  useEffect(() => {
    document.addEventListener('keydown', onEscapeHandler);

    return () => {
      document.removeEventListener('keydown', onEscapeHandler);
    }
  }, []);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categoriesList = useSelector(selectCategories);

  let newCategoriesList = [];
  for (let i of categoriesList) {
    if (i.name === 'Income') continue;
    newCategoriesList.push({
      label: i.name,
      value: i.id,
    });
  };

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

  const getParseNewDate = () => {
    const today = new Date();
    let output = `${today.getFullYear()}-${
      today.getMonth() + 1 > 9
        ? today.getMonth() + 1
        : '0' + (today.getMonth() + 1).toString()
    }-${
      today.getDate() > 9 ? today.getDate() : '0' + today.getDate().toString()
    }`;
    return output;
  };

  let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;
  const commonStringValidator = yup
    .number()
    .positive()
    .test(
      'is-decimal',
      'The amount should be a decimal with maximum two digits after comma',
      val => {
        if (val !== undefined) {
          return patternTwoDigisAfterComma.test(val);
        }
        return true;
      }
    )
    .required('Please input the amount');

  const validation = yup.object().shape({
    type: yup.string(),
    categoryId: yup.string(), //.required('Please, select the category'),
    amount: commonStringValidator, //yup.number().positive().required('Please input the amount'),
    transactionDate: yup.string().required('Please, enter the date'),
  });

  const handleSubmit = values => {
    closeEditModal && closeEditModal();

    const id = transaction?.id;

    if (values.type === 'EXPENSE') {
      values.amount *= -1;
    } else {
      values.categoryId = '063f1132-ba5d-42b4-951d-44011ca46262';
    }

    dispatch(
      transaction
        ? editTransaction({ id, ...values })
        : createTransaction(values)
    );
  };

  const defaultAmount =
    transaction?.type === 'EXPENSE'
      ? transaction?.amount * -1
      : transaction?.amount;

  const defaultCategory = categoriesList.find(
    el => el.id === transaction?.categoryId
  )?.name;

  return createPortal(
    <div className={css.modalBackdrop} id="modalBackdrop" onClick={clickOnBackdropHandler}>
      <section className={css.modalSection} id="myModal">
        <h2 className={css.title}>Add transaction</h2>
        <span
          className={css.close}
          onClick={() => {
            closeEditModal ? closeEditModal() : dispatch(closeModal());
          }}
        ></span>
        <Formik
          initialValues={{
            type: transaction?.type || 'EXPENSE',
            categoryId: defaultCategory || '',
            amount: defaultAmount || '',
            transactionDate: transaction?.transactionDate || getParseNewDate(),
            comment: transaction?.comment || '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validation}
        >
          {({ values }) => (
            <Form className={css.modalForm}>
              <div className={css.radioDiv}>
                <span
                  className={css.spanLabel}
                  style={values.type === 'INCOME' ? { color: '#24CCA7' } : {}}
                >
                  Income
                </span>
                <div className={css.toggler}>
                  <label
                    className={`${css.radioLabel1} ${
                      values.type === 'EXPENSE' && css.transparent
                    }`}
                  >
                    <Field
                      type="radio"
                      name="type"
                      value="INCOME"
                      className={css.hidden}
                    />
                  </label>
                  <label
                    className={`${css.radioLabel2} ${
                      values.type === 'INCOME' && css.transparent
                    }`}
                  >
                    <Field
                      type="radio"
                      name="type"
                      value="EXPENSE"
                      className={css.hidden}
                    />
                  </label>
                </div>
                <span
                  className={css.spanLabel}
                  style={values.type === 'EXPENSE' ? { color: '#FF6596' } : {}}
                >
                  Expense
                </span>
              </div>
              <div className={css.inputs}>
                {values.type === 'EXPENSE' && (
                  <label className={css.selector}>
                    {
                      <Field
                        name="categoryId"
                        component={SelectField}
                        options={newCategoriesList}
                        required
                      />
                    }
                  </label>
                )}
                <ErrorMessage name="categoryId" />
                <div className={css.amountDate}>
                  <label>
                    <Field
                      type="number"
                      name="amount"
                      step="0.01"
                      placeholder="0.00"
                      className={css.selectOption}
                    />
                    <ErrorMessage
                      render={msg => (
                        <div className={css.errorValidation}>{msg}</div>
                      )}
                      name="amount"
                    />
                  </label>

                  <label>
                    <Field
                      className={css.selectOption}
                      type="date"
                      name="transactionDate"
                      value={values.transactionDate}
                    />
                  </label>
                  <ErrorMessage
                    render={msg => (
                      <div className={css.errorValidation}>{msg}</div>
                    )}
                    name="transactionDate"
                  />
                </div>

                <label>
                  <Field
                    as="textarea"
                    name="comment"
                    placeholder="Comment"
                    className={css.commentArea}
                  />
                </label>
              </div>
              <button className={css.addButton} type="submit">
                {transaction ? 'EDIT' : 'ADD'}
              </button>
              <button
                className={css.cancelButton}
                type="button"
                onClick={() => {
                  closeEditModal ? closeEditModal() : dispatch(closeModal());
                }}
              >
                Cancel
              </button>
            </Form>
          )}
        </Formik>
      </section>
      ,
    </div>,
    document.querySelector('#modal')
  );
};

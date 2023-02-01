import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  createTransaction,
  getCategories,
} from 'redux/finance/financeOperations';
import { closeModal } from 'redux/global/globalSlice';
import { selectCategories } from 'redux/selectors';
import css from './ModalAddTransaction.module.scss';
import * as yup from 'yup';
import 'react-datetime/css/react-datetime.css';
import { SelectField } from './SelectField';

export const ModalAddTransaction = () => {
  const dispatch = useDispatch();

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

  let newCategoriesList = [];
  for (let i of categoriesList) {
    if (i.name === 'Income') continue;
    newCategoriesList.push({
      label: i.name,
      value: i.id,
    });
  }

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
        if (val != undefined) {
          return patternTwoDigisAfterComma.test(val);
        }
        return true;
      }
    )
    .required('Please input the amount');

  const validation = yup.object().shape({
    type: yup.string(),
    categoryId: yup.string(),
    amount: commonStringValidator,
    transactionDate: yup.string().required('Please, enter the date'),
  });

  const handleSubmit = (values, actions) => {
    let { type, categoryId, amount, transactionDate, comment } = values;
    if (type === 'EXPENSE') amount *= -1;
    else categoryId = '063f1132-ba5d-42b4-951d-44011ca46262';
    dispatch(
      createTransaction({ type, categoryId, amount, transactionDate, comment })
    );
  };

  return createPortal(
    <div className={css.modalBackdrop} id="modalBackdrop">
      <section className={css.modalSection} id="myModal">
        <h2 className={css.title}>Add transaction</h2>
        <span
          className={css.close}
          onClick={() => {
            dispatch(closeModal());
          }}
        ></span>
        <Formik
          initialValues={{
            type: 'EXPENSE',
            categoryId: '',
            amount: '',
            transactionDate: getParseNewDate(),
            comment: '',
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
                ADD
              </button>
              <button
                className={css.cancelButton}
                type="button"
                onClick={() => {
                  dispatch(closeModal());
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

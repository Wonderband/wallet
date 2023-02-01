import { useEffect, useState } from 'react';
import { getCurrencies } from '../../services/currencyAPI';
import { Loader } from '../Loader/Loader';
import s from './Currency.module.css';

const CURRENCIES = 'currencies';
const MS_PER_HOUR = 3600000;

export const Currency = () => {
  const [currencies, setCurrencies] = useState(() => {
    const data = JSON.parse(localStorage.getItem(CURRENCIES));
    return data || null;
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCurrencies();
        setCurrencies(data);
        localStorage.setItem(CURRENCIES, JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    };

    let shouldFetchData = true;
    if (currencies) {
      shouldFetchData = Date.now() - currencies[0].date > MS_PER_HOUR;
    }

    if (!currencies || shouldFetchData) {
      getData();
    }
  }, []);

  return (
    <div className={s.container}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          {!currencies ? (
            <Loader />
          ) : (
            currencies.map(obj => (
              <tr key={obj.currency}>
                <td>{obj.currency}</td>
                <td>{obj.rateBuy.toFixed(2)}</td>
                <td>{obj.rateSell.toFixed(2)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

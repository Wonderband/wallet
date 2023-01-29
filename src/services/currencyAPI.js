import axios from 'axios';

const BASE_URL = 'https://api.monobank.ua';

const currency = axios.create({
  baseURL: BASE_URL,
});

export const getCurrencies = async () => {
  const response = await currency.get('/bank/currency');
  const date = Date.now()
  const usd = {
    currency: 'USD',
    ...response.data.find(
      el => el.currencyCodeA === 840 && el.currencyCodeB === 980
    ),
    date
  };
  const eur = {
    currency: 'EUR',
    ...response.data.find(
      el => el.currencyCodeA === 978 && el.currencyCodeB === 980
    ),
    date
  };
  return [usd, eur];
};

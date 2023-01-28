import MONTHS from '../../constants/months';
import { YEARS } from '../../constants/lastFiveYears';

export const Table = () => {
  const handleChange = e => {
    console.log(e.target.value);
  };

  return (
    <div>
      <label>
        <select onChange={handleChange}>
          {MONTHS.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        <select onChange={handleChange}>
          {YEARS.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

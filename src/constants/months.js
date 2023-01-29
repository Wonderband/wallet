const monthsArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let date = new Date();
let currentMonth = date.getMonth();
const MONTHS = [];

for (let i = 0; i < monthsArray.length; i++) {
  if (currentMonth === 12) {
    currentMonth = 0;
  }
  MONTHS.push(monthsArray[currentMonth]);
  currentMonth++;
}

const monthOptions = MONTHS.map((item, index) => ({
  value: index + 1,
  label: MONTHS[index],
}));

export default monthOptions;

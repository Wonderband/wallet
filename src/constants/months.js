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

const monthOptions = monthsArray.map((item, index) => ({
  value: index + 1,
  label: monthsArray[index],
}));

export default monthOptions;

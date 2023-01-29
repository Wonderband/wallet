let today = new Date();
let year = today.getFullYear();

const YEARS = [year, year - 1, year - 2, year - 3, year - 4];

const yearsOptions = [];
for (let i = 0; i < YEARS.length; i++) {
  yearsOptions.push({ value: YEARS[i], label: YEARS[i].toString() });
}
export default yearsOptions;

export const selectStyles = {
  container: provided => ({
    ...provided,
    width: '100%',
  }),
  control: provided => ({
    ...provided,
    border: '1px solid #000000',
    borderRadius: 30,
    height: 50,
    width: '100%',
    minHeight: 50,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': {
      border: '1px solid #000000',
      boxShadow: 'none',
    },
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  valueContainer: provided => ({
    ...provided,
    height: 50,
    padding: '0 0 0 20px',
    alignItems: 'center',
    textTransform: 'capitalize',
  }),
  input: provided => ({
    ...provided,
    height: 50,
    padding: '0 0 0 10px',
    margin: 0,
  }),
  placeholder: provided => ({
    ...provided,
    color: '#bdbdbd',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#000000',
    margin: 0,
    fontSize: 16,
    lineHeight: 1,
    fontFamily: 'Circe, sans-serif',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#000000',
    '&:hover': {
      color: '#000000',
    },
  }),

  menu: provided => ({
    ...provided,
    background: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    borderRadius: 20,
    overflow: 'hidden',
  }),

  menuList: provided => ({
    ...provided,
    background: 'transparent',
    borderRadius: 20,
    cursor: 'pointer',
  }),

  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    background: isFocused || isSelected ? '#ffffff' : 'transparent',
    color: isFocused || isSelected ? '#4A56E2' : '#000000',
    cursor: 'pointer',
    padding: '14px 20px',
    fontSize: 16,
    lineHeight: 1,
    fontFamily: 'Circe, sans-serif',
    textTransform: 'capitalize',
  }),
};

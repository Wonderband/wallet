import { after } from 'lodash';

export const selectInputStyles = {
  container: provided => ({
    ...provided,
    width: '100%',
  }),
  control: provided => ({
    ...provided,
    border: 'none',
    borderBottom: '1px solid #E0E0E0',
    borderRadius: 0,
    width: '100%',
    // minHeight: 50,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': {
      // border: '1px solid #000000',
      boxShadow: 'none',
    },
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  valueContainer: provided => ({
    ...provided,
    height: 40,
    padding: 0,
    alignItems: 'center',
    textTransform: 'capitalize',
  }),
  input: provided => ({
    ...provided,
    display: 'block',
    height: 1,
    padding: '0 0 0 10px',
    margin: 0,
  }),

  placeholder: provided => ({
    ...provided,
    color: '#bdbdbd',
    fontFamily: 'Circe, sans-serif',
    fontSize: 18,
    gridArea: 0,
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
    // width: 18,
    // height: 9,
    '&:hover': {
      // transform: 'rotate(0.5turn)',
      color: '#000000',
    },
    // '&:blur': {
    //   // transform: 'rotate(0.5turn)',
    //   color: 'orange',
    // },
  }),

  menu: provided => ({
    ...provided,
    background: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(25px)',
    borderRadius: 20,
    overflow: 'hidden',
    // maxHeight: '157px',
  }),

  menuList: provided => ({
    ...provided,
    background: 'transparent',
    borderRadius: 20,
    cursor: 'pointer',
    // height: 280,
    maxHeight: 280,
    scrollbarWidth: 'none',
    // overflowY: 'scroll',
  }),

  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    background: isFocused || isSelected ? '#ffffff' : 'transparent',
    color: isFocused || isSelected ? '#FF6596' : '#000000',
    cursor: 'pointer',
    padding: '14px 20px',
    fontSize: 16,
    lineHeight: 1,
    fontFamily: 'Circe, sans-serif',
    textTransform: 'capitalize',
  }),
};

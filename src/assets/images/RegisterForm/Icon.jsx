import sprite from './sprite.svg';

export default function Icon({ className, name, width, height }) {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`${sprite}#${name}`}></use>
    </svg>
  );
}

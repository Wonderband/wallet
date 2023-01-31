import { register540w, register900w } from './png';
import { registerWebP540w, registerWebP900w } from './webp';

export default function RegisterImage() {
  return (
    <picture>
      <source
        media="(min-width: 1280px)"
        type="image/webp"
        srcSet={`${registerWebP900w}`}
        width="452"
      />
      <source
        media="(min-width: 1280px)"
        type="image/png"
        srcSet={`${register900w}`}
        width="452"
      />
      <source
        media="(min-width: 768px)"
        type="image/webp"
        srcSet={`${registerWebP540w}`}
        width="274"
      />
      <source
        media="(min-width: 768px)"
        type="image/png"
        srcSet={`${register540w}`}
        width="274"
      />
      <img src={register540w} alt="Wallet APP on mobile phone" />
    </picture>
  );
}

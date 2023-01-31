import { login540w, login900w } from './png';
import { loginWebP540w, loginWebP900w } from './webp';

export default function LoginImage() {
  return (
    <picture>
      <source
        media="(min-width: 1280px)"
        type="image/webp"
        srcSet={`${loginWebP900w}`}
        width="435"
      />
      <source
        media="(min-width: 1280px)"
        type="image/png"
        srcSet={`${login900w}`}
        width="435"
      />
      <source
        media="(min-width: 768px)"
        type="image/webp"
        srcSet={`${loginWebP540w}`}
        width="260"
      />
      <source
        media="(min-width: 768px)"
        type="image/png"
        srcSet={`${login540w}`}
        width="260"
      />
      <img src={login540w} alt="Wallet APP on mobile phone" />
    </picture>
  );
}

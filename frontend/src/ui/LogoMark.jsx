import { BRAND } from '../data.js';

// NOTE: Once you upload your actual logo to public/logo.png,
// replace this component's contents with:
//   return <img src="/logo.png" alt="Sri Krishna PG" style={{ width: size, height: size }} />;
export default function LogoMark({ size = 44 }) {
  return (
    <div style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs>
          <radialGradient id="lgBg" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor={BRAND.tealLight} />
            <stop offset="100%" stopColor={BRAND.navy} />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#lgBg)" />
        <circle cx="50" cy="50" r="46" fill="none" stroke={BRAND.gold} strokeWidth="2" />
        <text
          x="50" y="58"
          textAnchor="middle"
          fontFamily="Fraunces, serif"
          fontSize="34"
          fontWeight="700"
          fill={BRAND.gold}
        >
          SK
        </text>
      </svg>
    </div>
  );
}

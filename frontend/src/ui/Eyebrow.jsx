import { BRAND } from '../data.js';

export function PeacockEye({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="10" ry="7" fill={BRAND.teal} opacity="0.15" />
      <ellipse cx="12" cy="12" rx="7" ry="5" fill={BRAND.teal} opacity="0.35" />
      <ellipse cx="12" cy="12" rx="4" ry="3" fill={BRAND.navy} />
      <ellipse cx="12" cy="12" rx="2" ry="1.5" fill={BRAND.gold} />
    </svg>
  );
}

export default function Eyebrow({ children, centered = true }) {
  return (
    <div className="eyebrow" style={centered ? {} : { justifyContent: 'flex-start' }}>
      <PeacockEye />
      <span>{children}</span>
      <PeacockEye />
    </div>
  );
}

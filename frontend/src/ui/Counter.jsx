import { useEffect, useState } from 'react';
import { useReveal } from './Reveal.jsx';

export default function Counter({ end, suffix = '', duration = 1400 }) {
  const [ref, visible] = useReveal();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const startTime = performance.now();
    const tick = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible, end, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

import { useCountUp } from "../hooks/useCountUp";

function CounterItem({ target, suffixClass = "", label }) {
  const { count, elementRef } = useCountUp(target);
  const className = ["count-text", suffixClass].filter(Boolean).join(" ");

  return (
    <div className="counter-item counter-text-wrap" ref={elementRef}>
      <span className={className}>{count}</span>
      <span className="counter-title">{label}</span>
    </div>
  );
}

export default CounterItem;

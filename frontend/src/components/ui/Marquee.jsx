// src/components/ui/Marquee.jsx
export default function Marquee({ items, className = '' }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee-wrapper overflow-hidden ${className}`}>
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-5">
            <span className="label" style={{ color: 'var(--muted)' }}>{item}</span>
            <span style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

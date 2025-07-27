'use client';

interface StatCounterProps {
  value: string;
  label: string;
}

const StatCounter = ({ value, label }: StatCounterProps) => {
  return (
    <div className="transform transition-transform duration-300 hover:scale-105">
      <h3 className="text-4xl font-bold mb-2">{value}</h3>
      <p>{label}</p>
    </div>
  );
};

export default StatCounter;

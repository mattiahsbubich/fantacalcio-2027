interface StatCardProps {
  label: string;
  value: string;
  helper: string;
}

function StatCard({ label, value, helper }: StatCardProps) {
  return (
    <article className="stat-card">
      <p>{label}</p>
      <strong>{value}</strong>
      <span>{helper}</span>
    </article>
  );
}

export default StatCard;

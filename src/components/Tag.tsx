interface TagProps {
  label: string;
  color?: string;
}

export function Tag({ label, color = "#5B8FFF" }: TagProps) {
  return (
    <span
      className="inline-block text-xs font-semibold px-2 py-0.5 rounded tracking-wide"
      style={{ background: `${color}22`, color }}
    >
      {label}
    </span>
  );
}

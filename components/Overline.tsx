export default function Overline({
  label,
  centered = false,
  dark = false,
  className = "",
}: {
  label: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}) {
  const color = dark ? "#C9A78F" : "#6F4234";
  const rule = <div className="h-px w-16" style={{ background: color }} />;
  return (
    <div className={`flex items-center gap-[18px] ${className}`}>
      {rule}
      <div className="font-sans text-[14px] tracking-[5px]" style={{ color }}>
        {label}
      </div>
      {centered && rule}
    </div>
  );
}

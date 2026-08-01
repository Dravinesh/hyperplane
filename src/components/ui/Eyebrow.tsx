import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--hp-accent-secondary)]",
        className
      )}
    >
      <span className="h-px w-6 bg-[var(--hp-accent-secondary)]/60" />
      {children}
    </span>
  );
}

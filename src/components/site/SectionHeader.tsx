import type { ReactNode } from "react";

export function SectionHeader({
  label,
  title,
  className,
  align = "left",
}: {
  label: string;
  title: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className ?? ""}`}>
      <div className="section-label">{label}</div>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

export function PageHeader({
  label,
  title,
  intro,
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <header className="bg-cream px-6 pb-12 pt-36 md:px-16 md:pb-16 md:pt-44">
      <div className="mx-auto max-w-5xl">
        <div className="section-label">{label}</div>
        <h1 className="font-display text-[clamp(2.6rem,5vw,4.4rem)] font-light leading-[1.05] text-forest">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-[0.95rem] leading-[1.85] text-ink-mid">{intro}</p>
        )}
      </div>
    </header>
  );
}

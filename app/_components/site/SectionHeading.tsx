import { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-[12px] tracking-[0.35em] text-neutral-muted/80">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-cormorant text-4xl leading-[1.05] text-[#FBF9F5] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <div className="mt-5 text-[15px] leading-7 text-neutral-muted">{description}</div>
      ) : null}

    </div>
  );
}


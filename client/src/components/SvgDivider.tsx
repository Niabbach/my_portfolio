interface SvgDividerProps {
  variant?: "wave" | "curve" | "blob";
  flip?: boolean;
  className?: string;
}

export function SvgDivider({
  variant = "wave",
  flip = false,
  className = "",
}: SvgDividerProps) {
  const baseClass = `w-full h-24 ${flip ? "scale-y-[-1]" : ""} ${className}`;

  if (variant === "wave") {
    return (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={baseClass}
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (variant === "curve") {
    return (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={baseClass}
      >
        <path
          d="M0,80 Q600,20 1200,80 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={baseClass}
    >
      <path
        d="M0,60 Q150,20 300,40 T600,50 T900,40 T1200,60 L1200,120 L0,120 Z"
        fill="currentColor"
      />
    </svg>
  );
}

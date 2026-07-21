import type { CSSProperties, ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  style?: CSSProperties;
}

export function InteractiveCard({
                                  children,
                                  onClick,
                                  href,
                                  className = "",
                                  style,
                                }: InteractiveCardProps) {
  const classes = `
    card-interactive
    group
    w-full
    rounded-xl
    border
    bg-white
    transition-all
    duration-200
    text-left
    ${className}
  `;

  if (href) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
            style={style}
        >
          {children}
        </a>
    );
  }

  return (
      <button
          onClick={onClick}
          className={classes}
          style={style}
      >
        {children}
      </button>
  );
}
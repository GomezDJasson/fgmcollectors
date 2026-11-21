import type { SVGProps } from "react";

export type SocialNetwork =
  | "Instagram"
  | "Facebook"
  | "TikTok"
  | "X"
  | "YouTube"
  | "Threads"
  | "Telegram";

const brandColors: Record<SocialNetwork, string> = {
  Instagram: "#E4405F",
  Facebook: "#1877F2",
  TikTok: "#ffffff",
  X: "#ffffff",
  YouTube: "#FF0033",
  Threads: "#ffffff",
  Telegram: "#26A5E4",
};

function SocialIcon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: SocialNetwork }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    ...props,
  };

  return (
    <svg {...common} style={{ color: brandColors[name], ...props.style }}>
      {name === "Instagram" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="18" cy="6" r="0.8" fill="currentColor" stroke="none" />
        </>
      )}
      {name === "Facebook" && (
        <path
          fill="currentColor"
          stroke="none"
          d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.4Z"
        />
      )}
      {name === "TikTok" && (
        <path
          fill="currentColor"
          stroke="none"
          d="M19.6 8.4a6.8 6.8 0 0 1-4.2-1.5v7.2a5.7 5.7 0 1 1-5-5.7v3.6a2.2 2.2 0 1 0 1.5 2.1V2.5h3.5c.2 2.1 1.8 3.8 4.2 4.1v1.8Z"
        />
      )}
      {name === "X" && (
        <path
          fill="currentColor"
          stroke="none"
          d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.7 5.6 22H2.4l7.3-8.4L1.9 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z"
        />
      )}
      {name === "YouTube" && (
        <>
          <rect x="2.2" y="5" width="19.6" height="14" rx="4" fill="currentColor" stroke="none" />
          <path d="m10 9 5.5 3-5.5 3V9Z" fill="#100d18" stroke="none" />
        </>
      )}
      {name === "Threads" && (
        <path d="M17.8 9.1c-.5-3.5-2.6-5.4-5.9-5.4-4.1 0-6.7 3-6.7 8.1 0 5.1 2.5 8.5 6.8 8.5 3.4 0 5.6-1.9 5.6-4.7 0-2.4-1.7-3.9-4.2-3.9-2.1 0-3.4 1-3.4 2.6 0 1.3 1 2.2 2.4 2.2 2.4 0 3.9-2.1 3.9-5.1 0-3.2-1.5-5.1-4.2-5.1" />
      )}
      {name === "Telegram" && (
        <path
          fill="currentColor"
          stroke="none"
          d="m22 3-3.2 18c-.2 1.3-.9 1.6-1.9 1l-5.3-3.9-2.6 2.5c-.3.3-.5.5-1 .5l.4-5.4L18.2 7c.4-.4-.1-.6-.6-.3L6.4 13.6 1.2 12c-1.1-.3-1.1-1.1.2-1.6L21 2.8c.9-.3 1.6.2 1 1.2Z"
        />
      )}
    </svg>
  );
}

export default SocialIcon;

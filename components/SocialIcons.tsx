export const SOCIAL_LINKS = {
  Instagram: "https://instagram.com/studiobrinch",
  Facebook: "https://www.facebook.com/profile.php?id=61559842635438",
  LinkedIn: "https://www.linkedin.com/company/studio-brinch",
  Pinterest: "https://dk.pinterest.com/studiobrinch/",
} as const;

const ICONS: Record<keyof typeof SOCIAL_LINKS, React.ReactNode> = {
  Instagram: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21.9v-8.4h2.8l.42-3.27H13.5V8.15c0-.95.26-1.6 1.62-1.6h1.73v-2.9c-.3-.04-1.33-.13-2.53-.13-2.5 0-4.2 1.53-4.2 4.33v2.42H7.3v3.27h2.82v8.36a10 10 0 0 0 3.38 0z" />
    </svg>
  ),
  LinkedIn: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.4 8.1h4.2V23H.4zM8.2 8.1h4v2h.06c.56-1.06 1.93-2.18 3.97-2.18 4.25 0 5.03 2.8 5.03 6.44V23h-4.2v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V23H8.2z" />
    </svg>
  ),
  Pinterest: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.31-.09-.79-.17-2 .03-2.87.19-.78 1.2-5.07 1.2-5.07s-.3-.61-.3-1.51c0-1.42.82-2.48 1.85-2.48.87 0 1.29.65 1.29 1.44 0 .87-.56 2.18-.85 3.4-.24 1.02.51 1.85 1.51 1.85 1.81 0 3.2-1.91 3.2-4.66 0-2.44-1.75-4.14-4.25-4.14-2.9 0-4.6 2.17-4.6 4.42 0 .87.34 1.81.76 2.32.08.1.09.19.07.29l-.29 1.16c-.04.19-.15.23-.34.14-1.25-.58-2.03-2.41-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.47 0 6.16 2.47 6.16 5.77 0 3.45-2.17 6.22-5.19 6.22-1.01 0-1.97-.53-2.29-1.15l-.62 2.37c-.23.87-.84 1.96-1.25 2.63.94.29 1.94.45 2.98.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
};

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {(Object.keys(ICONS) as (keyof typeof ICONS)[]).map((name) => (
        <a
          key={name}
          href={SOCIAL_LINKS[name]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="flex"
        >
          {ICONS[name]}
        </a>
      ))}
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';

type Theme = 'system' | 'light' | 'dark';

function apply(theme: Theme) {
  if (theme === 'system') {
    localStorage.removeItem('theme');
    document.documentElement.removeAttribute('data-theme');
  } else {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
}

const OPTIONS: { value: Theme; label: string; Icon: () => React.ReactElement }[] = [
  { value: 'system', label: 'System theme', Icon: MonitorIcon },
  { value: 'light', label: 'Light theme', Icon: SunIcon },
  { value: 'dark', label: 'Dark theme', Icon: MoonIcon },
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');

  // Sync with the stored preference after mount. SSR + first client render both
  // start from 'system', so there's no hydration mismatch.
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') setTheme(stored);
  }, []);

  const select = (next: Theme) => {
    setTheme(next);
    apply(next);
  };

  return (
    <div
      role="group"
      aria-label="Theme"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-1 rounded-full border border-border bg-surface p-1 shadow-lg shadow-black/10"
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            onClick={() => select(value)}
            aria-label={label}
            aria-pressed={active}
            title={label}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
              active
                ? 'bg-primary text-primary-contrast'
                : 'text-muted hover:bg-surface-hover hover:text-foreground'
            }`}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
}

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-[18px] w-[18px]',
};

function SunIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

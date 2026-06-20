'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ExternalLinkIcon from './ExternalLinkIcon';

const navigation = [
  { name: '👩🏼‍💻 About', href: '/' },
  { name: '📝 Blog', href: '/blog' },
  { name: '🎬 Videos', href: '/videos' },
  { name: '📣 Talks / Workshops', href: '/talks' },
  { name: '🎙️ Podcasts', href: '/podcasts' },
];

const social = [
  { name: 'GitHub', href: 'https://github.com/javabster' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/abby-mitchell' },
  { name: 'Instagram', href: 'https://www.instagram.com/oss_abby/' },
  { name: 'Threads', href: 'https://www.threads.com/@oss_abby' },
  { name: 'X / Twitter', href: 'https://twitter.com/javabster' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile drawer whenever the route changes (e.g. after a nav tap).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll and allow Escape to dismiss while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const navLinks = (onNavigate?: () => void) =>
    navigation.map((item) => {
      const isActive =
        item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
      return (
        <Link
          key={item.name}
          href={item.href}
          onClick={onNavigate}
          aria-current={isActive ? 'page' : undefined}
          className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
            isActive
              ? 'bg-brand-active text-brand-active-foreground'
              : 'text-brand-foreground/80 hover:bg-brand-hover hover:text-brand-foreground'
          }`}
        >
          {item.name}
        </Link>
      );
    });

  const socialLinks = (
    <div className="flex flex-col gap-2.5 text-sm">
      {social.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-brand-muted transition-colors hover:text-brand-accent"
        >
          {link.name}
          <ExternalLinkIcon className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile top bar — replaces the rail below the lg breakpoint. */}
      <header className="lg:hidden sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-brand-border bg-brand px-4 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/profile.jpg"
            alt="Abby Mitchell"
            width={40}
            height={40}
            priority
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-brand-accent ring-offset-2 ring-offset-brand"
          />
          <span className="truncate text-base font-bold tracking-tight text-brand-accent">
            Abby Mitchell
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-brand-foreground transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {/* Mobile slide-in nav drawer. */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute inset-y-0 left-0 flex w-72 max-w-[80%] flex-col bg-brand shadow-xl">
            <div className="flex items-start justify-between p-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/profile.jpg"
                  alt="Abby Mitchell"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-accent ring-offset-2 ring-offset-brand"
                />
                <div>
                  <p className="text-base font-bold tracking-tight text-brand-accent">
                    Abby Mitchell
                  </p>
                  <p className="text-xs text-brand-muted">Developer Advocate @ Meta</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-brand-foreground transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="px-4 space-y-1">{navLinks(() => setOpen(false))}</nav>

            <div className="mt-auto p-6">
              <div className="border-t border-brand-border pt-6">{socialLinks}</div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop rail. */}
      <aside className="hidden lg:flex w-64 flex-col sticky top-0 h-screen shrink-0 bg-brand border-r border-brand-border">
        <div className="p-8">
          <Image
            src="/profile.jpg"
            alt="Abby Mitchell"
            width={80}
            height={80}
            priority
            className="mb-4 h-20 w-20 rounded-full object-cover ring-2 ring-brand-accent ring-offset-2 ring-offset-brand"
          />
          <h1 className="text-2xl font-bold tracking-tight text-brand-accent">
            Abby Mitchell
          </h1>
          <p className="mt-1 text-sm text-brand-muted">Developer Advocate @ Meta</p>
        </div>

        <nav className="px-4 space-y-1">{navLinks()}</nav>

        <div className="mt-auto p-8">
          <div className="border-t border-brand-border pt-6">{socialLinks}</div>
        </div>
      </aside>
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

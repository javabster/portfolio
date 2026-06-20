'use client';

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

  return (
    <aside className="flex w-64 flex-col sticky top-0 h-screen shrink-0 bg-brand border-r border-brand-border">
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
        <p className="mt-1 text-sm text-brand-muted">
          Developer Advocate @ Meta
        </p>
      </div>

      <nav className="px-4 space-y-1">
        {navigation.map((item) => {
          const isActive = item.href === '/'
            ? pathname === '/'
            : pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
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
        })}
      </nav>

      <div className="mt-auto p-8">
        <div className="border-t border-brand-border pt-6">
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
        </div>
      </div>
    </aside>
  );
}

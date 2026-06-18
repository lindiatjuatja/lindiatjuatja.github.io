'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'About', href: '/' },
  { label: 'Publications', href: '/publications' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="mb-10">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" className="text-lg font-medium text-black dark:text-white">
            Lindia Tjuatja
          </Link>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">/ˈlɪndia ˈtʃuatʃa/</p>
        </div>
        <nav className="flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? 'text-zinc-900 dark:text-zinc-100'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

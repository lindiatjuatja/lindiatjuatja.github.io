'use client'
import { motion } from 'motion/react'
import { PUBLICATIONS, SOCIAL_LINKS } from '../data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const years = [...new Set(PUBLICATIONS.map((p) => p.year))].sort((a, b) => b - a)

export default function Publications() {
  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={VARIANTS_SECTION}
        transition={{ duration: 0.3 }}
        className="text-sm text-zinc-500 dark:text-zinc-400"
      >
        For a more up-to-date list of publications, see my{' '}
        <a
          href={SOCIAL_LINKS.find((s) => s.label === 'Google Scholar')?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-900 underline decoration-zinc-300 underline-offset-2 dark:text-zinc-100 dark:decoration-zinc-600"
        >
          Google Scholar
        </a>
        .
      </motion.p>

      {years.map((year) => (
        <motion.section
          key={year}
          variants={VARIANTS_SECTION}
          transition={{ duration: 0.3 }}
        >
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            {year}
          </h3>
          <div className="space-y-6">
            {PUBLICATIONS.filter((p) => p.year === year).map((pub) => (
              <div key={pub.id} className="space-y-1">
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-300 underline-offset-2 dark:decoration-zinc-600"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {pub.authors.split('Lindia Tjuatja').map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
                          Lindia Tjuatja
                        </strong>
                      )}
                    </span>
                  ))}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {pub.venue}
                  {pub.code && (
                    <>
                      {' · '}
                      <a
                        href={pub.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-zinc-300 underline-offset-2 dark:decoration-zinc-600"
                      >
                        code
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      ))}
    </motion.main>
  )
}

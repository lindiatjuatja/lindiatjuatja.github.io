'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import { NEWS, SOCIAL_LINKS, EMAIL } from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = { duration: 0.3 }

export default function Home() {
  return (
    <motion.main
      className="space-y-16"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Bio + profile pic */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between"
      >
        <div className="flex-1 space-y-4 text-zinc-600 dark:text-zinc-400">
          <p>
            Hi! I&apos;m Lindia, a final-year PhD student at CMU&apos;s{' '}
            <a
              className="text-zinc-900 underline decoration-zinc-300 underline-offset-2 dark:text-zinc-100 dark:decoration-zinc-600"
              href="https://www.lti.cs.cmu.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Language Technologies Institute
            </a>{' '}
            advised by{' '}
            <a
              className="text-zinc-900 underline decoration-zinc-300 underline-offset-2 dark:text-zinc-100 dark:decoration-zinc-600"
              href="http://www.phontron.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Graham Neubig
            </a>
            . I am also a frequent visitor at NYU with{' '}
            <a
              className="text-zinc-900 underline decoration-zinc-300 underline-offset-2 dark:text-zinc-100 dark:decoration-zinc-600"
              href="https://tallinzen.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tal Linzen
            </a>
            .{' '}
            <strong className="font-medium text-zinc-900 dark:text-zinc-100">
              In Fall 2027, I will be an assistant professor at UT Austin Linguistics, joining the{' '}
              <a
                className="underline decoration-zinc-300 underline-offset-2 dark:decoration-zinc-600"
                href="https://sites.utexas.edu/compling/"
                target="_blank"
                rel="noopener noreferrer"
              >
                computational linguistics faculty
              </a>
              {' '}and broader{' '}
              <a
                className="underline decoration-zinc-300 underline-offset-2 dark:decoration-zinc-600"
                href="https://www.nlp.utexas.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NLP community
              </a>
              .
            </strong>
          </p>
          <p>
            My research largely centers around understanding how language models learn and represent linguistic structure, how this influences their behavior, and how this can inform our knowledge of human language processing.
            These interests manifest in work across {' '}
            <strong className="font-medium text-zinc-900 dark:text-zinc-100">evaluation</strong>{' '}
            and{' '}
            <strong className="font-medium text-zinc-900 dark:text-zinc-100">interpretability</strong>{' '}
            of large language models, especially with respect to when, where, and how they may be similar or different to humans. 
            From an applications angle, 
            I also work on applying these models and other NLP techniques to create tools for supporting underrepresented and endangered languages.
          </p>
          <p className="text-sm">
            <a
              className="text-zinc-900 underline decoration-zinc-300 underline-offset-2 dark:text-zinc-100 dark:decoration-zinc-600"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
            {' · '}
            {SOCIAL_LINKS.map((s, i) => (
              <span key={s.label}>
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 underline decoration-zinc-300 underline-offset-2 dark:text-zinc-100 dark:decoration-zinc-600"
                >
                  {s.label}
                </a>
                {i < SOCIAL_LINKS.length - 1 && ' · '}
              </span>
            ))}
          </p>
        </div>

        <div className="shrink-0 sm:ml-8">
          <Image
            src="/prof_pic.jpg"
            alt="Lindia Tjuatja"
            width={160}
            height={160}
            className="rounded-xl object-cover"
            priority
          />
        </div>
      </motion.section>

      {/* News */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          News
        </h3>
        <div className="space-y-3">
          {NEWS.map((item) => (
            <div key={item.id} className="flex gap-4 text-sm">
              <span className="w-20 shrink-0 text-zinc-400 dark:text-zinc-500">
                {item.date}
              </span>
              <p
                className="text-zinc-600 dark:text-zinc-400"
                dangerouslySetInnerHTML={{ __html: item.html }}
              />
            </div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}

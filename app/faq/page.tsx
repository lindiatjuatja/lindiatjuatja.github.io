'use client'
import { motion } from 'motion/react'
import { ReactNode } from 'react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const LAST_UPDATED = 'August 29, 2026'

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-zinc-300 underline-offset-2 dark:decoration-zinc-600"
    >
      {children}
    </a>
  )
}

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: 'Are you recruiting PhD students at UT? How do I apply?',
    a: (
      <>
        I am recruiting students in UT Linguistics to start in Fall 2027. More
        information can be found{' '}
        <A href="https://liberalarts.utexas.edu/linguistics/graduate-programs/how-to-apply.html">
          here
        </A>
        . Note that the deadline for linguistics is earlier than that of CS. I
        will not be advising students in CS, but can collaborate with CS PhD
        students whose interests or projects align with my interests.
      </>
    ),
  },
  {
    q: 'Do I need a degree in linguistics to apply?',
    a: (
      <>
        Not necessarily, but you should feel a) comfortable and (at the very
        least) b) willing to take graduate-level courses in linguistics.
        Information about required courses can be found{' '}
        <A href="https://liberalarts.utexas.edu/linguistics/graduate-programs/">
          here
        </A>
        .
      </>
    ),
  },
  {
    q: 'Should I email you (or other faculty members) to ask about admissions, visits, potential internship opportunities, etc.?',
    a: (
      <>
        I highly recommend taking a look at{' '}
        <A href="https://talkingtorobots.com/FAQ.html">
          Yonatan Bisk&rsquo;s advice
        </A>
        . He&rsquo;s written a much more comprehensive and fun answer to this
        than I ever could. I will, however, add one thing: please use your own
        words (i.e., please don&rsquo;t copy-paste chatbot text). I (among many
        others) greatly value authentic curiosity and interest. Feeding my
        website/papers into a chatbot creates text that is a) devoid of this
        authenticity and b) more similar to other chatbot-generated mail I
        receive in my inbox. Both of these lead to me being incredibly unlikely to reply
        to you, so it&rsquo;s in your best interest to reach out as yourself!
      </>
    ),
  },
  {
    q: 'How do I pronounce your last name and where is it from?',
    a: (
      <>
        <span className="block">
          Swap the &ldquo;tj&rdquo; for &ldquo;ch&rdquo; (or for the
          IPA-inclined: /ˈlɪndia ˈtʃuatʃa/).
        </span>
        <span className="mt-3 block">
          My last name is the Indonesian word for &ldquo;weather&rdquo;, which is
          now spelled <em>cuaca</em> (the change from tj &gt; c happened in the{' '}
          <A href="https://en.wikipedia.org/wiki/Indonesian%E2%80%93Malaysian_orthography_reform_of_1972">
            Indonesian-Malaysian orthography change of 1972
          </A>
          ). My grandfather adopted this word as our last name after immigrating
          to Indonesia from China, as Chinese last names were illegal at the time
          and the first syllable sounds like the Hokkien pronunciation of{' '}
          <A href="https://en.wikipedia.org/wiki/Chua">our Chinese last name</A>.
        </span>
      </>
    ),
  },
]

export default function FAQ() {
  return (
    <motion.main
      className="space-y-8"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={VARIANTS_SECTION}
        transition={{ duration: 0.3 }}
        className="text-sm text-zinc-400 dark:text-zinc-500"
      >
        Last updated: {LAST_UPDATED}
      </motion.p>

      {FAQS.map((item) => (
        <motion.section
          key={item.q}
          variants={VARIANTS_SECTION}
          transition={{ duration: 0.3 }}
          className="space-y-1"
        >
          <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
            {item.q}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {item.a}
          </p>
        </motion.section>
      ))}
    </motion.main>
  )
}

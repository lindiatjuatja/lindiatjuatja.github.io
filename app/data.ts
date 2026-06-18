type Publication = {
  title: string
  authors: string
  venue: string
  year: number
  link?: string
  code?: string
  id: string
}

type NewsItem = {
  date: string
  html: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PUBLICATIONS: Publication[] = [
  {
    title: 'BehaviorBox: Automated Discovery of Fine-Grained Performance Differences Between Language Models',
    authors: 'Lindia Tjuatja, Graham Neubig',
    venue: 'ACL',
    year: 2025,
    link: 'https://aclanthology.org/2025.acl-long.923/',
    code: 'https://github.com/lindiatjuatja/BehaviorBox',
    id: 'pub-acl2025',
  },
  {
    title: 'What Goes Into a LM Acceptability Judgment? Rethinking the Impact of Frequency and Length',
    authors: 'Lindia Tjuatja Graham Neubig, Tal Linzen, Sophie Hao',
    venue: 'NAACL',
    year: 2025,
    link: 'https://aclanthology.org/2025.naacl-long.109/',
    code: 'https://github.com/lindiatjuatja/morcela',
    id: 'pub-naacl2025',
  },
  {
    title: 'GlossLM: A Massively Multilingual Corpus and Pretrained Model for Interlinear Glossed Text',
    authors: 'Michael Ginn*, Lindia Tjuatja*, Taiqi He, Enora Rice, Graham Neubig, Alexis Palmer, Lori Levin',
    venue: 'EMNLP',
    year: 2024,
    link: 'https://aclanthology.org/2024.emnlp-main.683/',
    code: 'https://github.com/lecs-lab/polygloss/tree/frozen/glosslm-v1',
    id: 'pub-emnlp2024-glosslm',
  },
  {
    title: 'Do LLMs Exhibit Human-like Response Biases? A Case Study in Survey Design',
    authors: 'Lindia Tjuatja*, Valerie Chen*, Tongshuang Wu, Ameet Talwalkwar, Graham Neubig',
    venue: 'TACL',
    year: 2024,
    link: 'https://aclanthology.org/2024.tacl-1.28/',
    code: 'https://github.com/lindiatjuatja/biasmonkey',
    id: 'pub-tacl2024',
  },
  {
    title: 'SigMoreFun Submission to the SIGMORPHON Shared Task on Interlinear Glossing',
    authors: 'Taiqi He*, Lindia Tjuatja*, Nathaniel Robinson, Shinji Watanabe, David R. Mortensen, Graham Neubig, Lori Levin',
    venue: 'SIGMORPHON',
    year: 2023,
    link: 'https://aclanthology.org/2023.sigmorphon-1.22/',
    id: 'pub-sigmorphon2023',
  },
  {
    title: 'Syntax and Semantics Meet in the "Middle": Probing the Syntax-Semantics Interface of LMs Through Agentivity',
    authors: 'Lindia Tjuatja, Emmy Liu, Lori Levin, Graham Neubig',
    venue: '*SEM',
    year: 2023,
    link: 'https://aclanthology.org/2023.starsem-1.14/',
    code: 'https://github.com/lindiatjuatja/lm_sem',
    id: 'pub-sem2023',
  },
  {
    title: 'Explorations in Transfer Learning for OCR Post-Correction',
    authors: 'Lindia Tjuatja, Shruti Rijhwani, Graham Neubig',
    venue: 'WiNLP',
    year: 2021,
    id: 'pub-winlp2021',
  },
]

export const NEWS: NewsItem[] = [
  {
    date: 'Sep 2025',
    html: 'Gave a talk at the <a href="https://www.linguistics.pitt.edu/event/lindia-tjuatja-cmu-language-technologies-institute-linguistic-judgments-language-models" target="_blank" rel="noopener noreferrer" class="underline">University of Pittsburgh Linguistics Colloquium</a> on Linguistic Judgments of Language Models (<a href="https://drive.google.com/file/d/1-hoL9k1eIk84LjK9x7xeZSLSat45_lhg/view?usp=share_link" target="_blank" rel="noopener noreferrer" class="underline">slides</a>).',
    id: 'news-2025-09',
  },
  {
    date: 'Jul 2025',
    html: 'Presented <a href="https://aclanthology.org/2025.acl-long.923/" target="_blank" rel="noopener noreferrer" class="underline">BehaviorBox</a> at ACL in Vienna!',
    id: 'news-2025-07',
  },
  {
    date: 'Jan 2025',
    html: '<a href="https://arxiv.org/abs/2411.02528" target="_blank" rel="noopener noreferrer" class="underline">What Goes Into a LM Acceptability Judgment?</a> accepted to NAACL 2025.',
    id: 'news-2025-01',
  },
  {
    date: 'Nov 2024',
    html: 'Presented two papers at EMNLP in Miami: <a href="https://aclanthology.org/2024.tacl-1.28/" target="_blank" rel="noopener noreferrer" class="underline">Do LLMs Exhibit Human-like Response Biases?</a> and <a href="https://aclanthology.org/2024.emnlp-main.683/" target="_blank" rel="noopener noreferrer" class="underline">GlossLM</a>.',
    id: 'news-2024-11',
  },
  {
    date: 'May 2023',
    html: '<a href="https://aclanthology.org/2023.starsem-1.14/" target="_blank" rel="noopener noreferrer" class="underline">Syntax and Semantics Meet in the Middle</a> accepted to *SEM @ ACL 2023.',
    id: 'news-2023-05',
  },
  {
    date: 'Jan 2023',
    html: 'Presented work on verb class constraints on the English dispositional middle at the LSA Annual Meeting in Denver.',
    id: 'news-2023-01',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Twitter',
    link: 'https://twitter.com/lltjuatja',
  },
  {
    label: 'Google Scholar',
    link: 'https://scholar.google.com/citations?user=0Vz8NDEAAAAJ',
  },
]

export const EMAIL = 'lindiat@andrew.cmu.edu'
export const CV_URL = '/Lindia_Tjuatja_CV.pdf'

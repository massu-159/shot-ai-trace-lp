import type { Faq } from '../types'

// en/index.html の FAQPage（構造化データ）と一字一句同一に保つこと。
export const faqs: Faq[] = [
  {
    question: 'What videos can I use?',
    answer:
      'Swing videos recorded with sound, including the sound of the strike. Both portrait and landscape are supported. Videos can be up to 60 seconds long and 600 MB, in HD to 4K quality.',
  },
  {
    question: 'Can I use videos shot in landscape?',
    answer:
      'Yes. Landscape videos have been supported since version 1.2. You can analyze, edit, and save them just like portrait videos.',
  },
  {
    question: 'Does analysis need an internet connection?',
    answer: 'Analysis runs entirely on your device. Your video is never uploaded to a server.',
  },
  {
    question: 'How much can I do for free?',
    answer:
      'You can use every feature, and your first 5 saves are free. A save is counted only when it succeeds.',
  },
  {
    question: 'Does it work with shaky or zoomed-in videos?',
    answer:
      'Camera shake and zoom are corrected automatically, so the trace sticks to the scenery. You can use videos shot handheld.',
  },
  {
    question: 'Will my HDR videos change color?',
    answer:
      'HDR videos are saved with their colors intact. They won’t look washed out or faded.',
  },
  {
    question: 'Does the trace follow my shot shape (draw or fade)?',
    answer:
      'Choose your shot shape (Curves left or Curves right) the first time, and it’s applied to the first trace after analysis. You can adjust the curve and height in the editor at any time.',
  },
  {
    question: 'How do I cancel the subscription?',
    answer:
      'You can cancel anytime in your App Store or Google Play subscription settings. On the App Store, canceling at least 24 hours before the end of the current period stops automatic renewal. On Google Play, you won’t be renewed or charged after you cancel.',
  },
]

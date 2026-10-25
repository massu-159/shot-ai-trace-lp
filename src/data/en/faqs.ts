import type { Faq } from '../types'

// en/index.html の FAQPage（構造化データ）と一字一句同一に保つこと。
export const faqs: Faq[] = [
  {
    question: 'What kind of videos work?',
    answer:
      'Swing videos recorded with sound, so the strike can be heard. Vertical and horizontal both work. Videos can be up to 60 seconds long and 600 MB, in HD to 4K quality.',
  },
  {
    question: 'Can I use videos shot horizontally (landscape)?',
    answer:
      'Yes. Landscape videos have been supported since version 1.2. Analyze, edit, and save them just like vertical ones.',
  },
  {
    question: 'Does analysis need an internet connection?',
    answer: 'Analysis runs entirely on your device. Your video is never uploaded to a server.',
  },
  {
    question: 'How much can I do for free?',
    answer:
      'Every feature is unlocked, and your first 5 saves are free. A save only counts when it succeeds.',
  },
  {
    question: 'What about shaky or zoomed-in videos?',
    answer:
      'No problem. Camera shake and zoom are corrected automatically, so the trace sticks to the scenery. Handheld footage is totally fine.',
  },
  {
    question: 'Will my HDR videos change color?',
    answer:
      'No. HDR videos are saved with their colors intact, so they won’t look washed out or faded.',
  },
  {
    question: 'Does the trace match my shot shape (draw or fade)?',
    answer:
      'Pick your shot shape (Curves left or Curves right) the first time, and it’s applied to your first trace after analysis. You can adjust the curve and height in the editor anytime.',
  },
  {
    question: 'How do I cancel the subscription?',
    answer:
      'You can cancel anytime in your App Store or Google Play subscription settings. On the App Store, canceling at least 24 hours before the end of the current period stops automatic renewal. On Google Play, you won’t be renewed or charged after you cancel.',
  },
]

import type { Feature } from '../types'

export const features: Feature[] = [
  {
    complaint: 'Common complaint: The trace misses the ball',
    headline: ['AI hears the strike', 'and pinpoints impact.'],
    body: 'Instead of relying on the picture alone, it finds the moment of impact from the sound of the strike and traces from there. You can fine-tune the trace in the editor before saving.',
    mobileComplaint: '✕ The trace misses the ball',
    mobileAnswer: '→ AI finds impact from the sound of the strike',
  },
  {
    complaint: 'Common complaint: Shaky video ruins the trace',
    headline: ['Camera shake, corrected.', 'Handheld shots stay on track.'],
    body: 'Camera shake and zoom are corrected automatically, so the trace sticks to the scenery. Works with videos shot handheld.',
    mobileComplaint: '✕ Shaky video ruins the trace',
    mobileAnswer: '→ Shake is corrected automatically. Shoot handheld',
  },
  {
    complaint: 'Common complaint: Useless until you pay',
    headline: ['Every feature, free for 5 saves.', 'Buy only once you’re sold.'],
    body: 'Every plan has the same features. The only difference is how many videos you can save. Try it free, then choose Lifetime or the lighter Monthly plan.',
    mobileComplaint: '✕ Useless until you pay',
    mobileAnswer: '→ Every feature free for 5 saves. Buy when you’re sold',
  },
]

import type { Feature } from '../types'

export const features: Feature[] = [
  {
    complaint: 'Sound familiar? The trace misses the ball',
    headline: ['It hears the strike', 'and nails impact.'],
    body: 'Instead of guessing from the picture alone, it finds the exact moment of impact from the sound of the strike and traces from there. Fine-tune the trace in the editor before you save.',
    mobileComplaint: '✕ The trace misses the ball',
    mobileAnswer: '→ It hears the strike and nails impact',
  },
  {
    complaint: 'Sound familiar? Shaky video wrecks the trace',
    headline: ['Shaky hands? No problem.', 'The trace stays locked in.'],
    body: 'Camera shake and zoom are corrected automatically, so the trace sticks to the scenery. Just shoot handheld.',
    mobileComplaint: '✕ Shaky video wrecks the trace',
    mobileAnswer: '→ Shake gets corrected. Shoot handheld',
  },
  {
    complaint: 'Sound familiar? It’s all behind a paywall',
    headline: ['Every feature, free for 5 saves.', 'Pay only once you’re sold.'],
    body: 'Every plan gets the same features. The only difference is how many videos you can save. Try it free, then go Lifetime or pick the lighter Monthly plan.',
    mobileComplaint: '✕ It’s all behind a paywall',
    mobileAnswer: '→ All features, 5 free saves. Then decide',
  },
]

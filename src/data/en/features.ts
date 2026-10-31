import type { Feature } from '../types'

export const features: Feature[] = [
  {
    complaint: 'Sound familiar? You have to tap the ball first',
    headline: ['No tapping.', 'It hears the strike and goes.'],
    body: 'There’s no marking the ball. The AI finds impact from the sound of the strike, spots the ball, and draws the trace from there. Want to tweak it? Fix it in the editor before you save.',
    mobileComplaint: '✕ You have to tap the ball first',
    mobileAnswer: '→ No tapping. It hears the strike and goes',
  },
  {
    complaint: 'Sound familiar? It only works on a tripod',
    headline: ['Pan it. Zoom it.', 'The trace stays put.'],
    body: 'Follow the ball with your phone or zoom in. Camera movement is tracked automatically, so the trace stays pinned to the scenery. Just shoot handheld.',
    mobileComplaint: '✕ It only works on a tripod',
    mobileAnswer: '→ Pan, zoom, shoot handheld',
  },
  {
    complaint: 'Sound familiar? It’s all behind a paywall',
    headline: ['Every feature, free for 5 saves.', 'Pay only once you’re sold.'],
    body: 'Every plan gets the same features. The only difference is how many videos you can save. Try it free, then go Lifetime or pick the lighter Monthly plan.',
    mobileComplaint: '✕ It’s all behind a paywall',
    mobileAnswer: '→ All features, 5 free saves. Then decide',
  },
]

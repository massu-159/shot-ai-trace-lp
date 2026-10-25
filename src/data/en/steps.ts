import type { Step } from '../types'

export const steps: Step[] = [
  {
    label: 'STEP 01',
    title: 'Pick a video',
    body: 'Choose a swing video from your Camera Roll / Gallery (portrait or landscape). It needs to be 60 seconds or shorter, with sound.',
  },
  {
    label: 'STEP 02',
    title: 'AI traces the ball flight',
    body: 'It detects impact from the sound of the strike and draws the trace automatically. Adjust the trace’s shape and color in the editor.',
  },
  {
    label: 'STEP 03',
    title: 'Save and share',
    body: 'Saves in the original HD to 4K quality. A save is counted only when it succeeds.',
  },
]

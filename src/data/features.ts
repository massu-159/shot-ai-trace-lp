export type Feature = {
  complaint: string
  headline: [string, string]
  body: string
  mobileComplaint: string
  mobileAnswer: string
}

export const features: Feature[] = [
  {
    complaint: 'よくある不満：弾道の検出が外れる',
    headline: ['打球音のAI検出で、', 'インパクトを正確に特定。'],
    body: '映像だけに頼らず、打球音からインパクトの瞬間を割り出してトレース。書き出し前に編集画面で微調整もできます。',
    mobileComplaint: '✕ 弾道の検出が外れる',
    mobileAnswer: '→ 打球音のAI検出でインパクトを正確に特定',
  },
  {
    complaint: 'よくある不満：三脚で固定しないと使えない',
    headline: ['手ぶれを自動補正。', '手持ち撮影でもずれない。'],
    body: '撮影時の手ぶれやズームを自動で補正し、弾道線が景色に張り付くように追従。三脚なしの手持ち撮影でも使えます。',
    mobileComplaint: '✕ 三脚で固定しないと使えない',
    mobileAnswer: '→ 手ぶれ自動補正。手持ち撮影OK',
  },
  {
    complaint: 'よくある不満：課金しないとまともに使えない',
    headline: ['無料でも全機能を5回。', '納得してから買い切り¥3,000。'],
    body: '機能はどのプランでも全部同じで、差は書き出し回数だけ。無料で試して納得してから、買い切りか月¥300の軽いプランを選べます。',
    mobileComplaint: '✕ 課金しないとまともに使えない',
    mobileAnswer: '→ 無料でも全機能を5回。納得してから購入',
  },
]

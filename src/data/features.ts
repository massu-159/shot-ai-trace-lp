export type Feature = {
  complaint: string
  headline: [string, string]
  body: string
  mobileComplaint: string
  mobileAnswer: string
}

export const features: Feature[] = [
  {
    complaint: 'よくある不満：サブスク必須で割高',
    headline: ['買い切り¥3,000で無制限。', '無料でも5回試せる。'],
    body: '月¥300の軽いプランも用意。機能はどのプランでも全部同じ。差は書き出し回数だけです。',
    mobileComplaint: '✕ サブスク必須で割高',
    mobileAnswer: '→ 買い切り¥3,000で無制限。無料でも5回',
  },
  {
    complaint: 'よくある不満：弾道の検出が外れる',
    headline: ['打球音のAI検出で、', 'インパクトを正確に特定。'],
    body: '映像だけに頼らず、打球音からインパクトの瞬間を割り出してトレース。書き出し前に編集画面で微調整もできます。',
    mobileComplaint: '✕ 弾道の検出が外れる',
    mobileAnswer: '→ 打球音のAI検出でインパクトを正確に特定',
  },
  {
    complaint: 'よくある不満：アップロードが遅い・不安',
    headline: ['解析は端末の中だけ。', '動画はどこにも送らない。'],
    body: 'サーバーへのアップロードなしで数秒で解析完了。電波の悪いコースでも待ちません。',
    mobileComplaint: '✕ アップロードが遅い・不安',
    mobileAnswer: '→ 端末内で数秒。動画は外に出ない',
  },
]

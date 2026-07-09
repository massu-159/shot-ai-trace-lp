export type Step = {
  label: string
  title: string
  body: string
}

export const steps: Step[] = [
  {
    label: 'STEP 01',
    title: '動画を選ぶ',
    body: 'カメラロールから縦向きのスイング動画を選択。30秒以内・音声付きが条件です。',
  },
  {
    label: 'STEP 02',
    title: 'AIが弾道をトレース',
    body: '打球音からインパクトを検出し、弾道線を自動描画。線の形や色は編集画面で調整できます。',
  },
  {
    label: 'STEP 03',
    title: '保存して、SNSへ',
    body: 'HD〜4Kの高画質のまま書き出し。回数を消費するのは書き出しに成功したときだけ。',
  },
]

# Shot AI Trace LP

ゴルフ弾道トレースアプリ「Shot AI Trace」のランディングページ。

公開URL: https://massu-159.github.io/shot-ai-trace-lp/

## 技術構成

- Vite + React + TypeScript
- Tailwind CSS v4
- GitHub Pages（GitHub Actions で main push 時に自動デプロイ）

## 開発

```bash
npm install
npm run dev      # 開発サーバー
npm run build    # 型チェック + ビルド
npm run preview  # dist/ をローカル確認
```

## ページ構成

- `index.html` — LP本体（ヒーロー / 機能 / 使い方 / 料金 / FAQ / CTA）
- `terms.html` / `privacy.html` / `tokushoho.html` — 規約系（App Store / Google Play 併記の正式文面）
- `en/index.html` / `en/terms.html` / `en/privacy.html` — 英語版（法務文は英訳で、食い違うときは日本語版が優先。特定商取引法に基づく表記は日本語版のみ）
- 文言は言語ごとに `src/data/ja/` と `src/data/en/`（トップは `index.ts` にまとめ、各セクションは `useContent()` で読む）。FAQ を変えたら、その言語の HTML の構造化データ（FAQPage）も同じ文面にする

## 運用メモ

- ストアリンクは `src/constants.ts` の `APP_STORE_URL` / `GOOGLE_PLAY_URL`（ボタン1つの CTA は `storeForUserAgent` で端末ごとに出し分け）
- 文言・デザインの正は Claude Design 出力（`design/`、git 管理外）

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
- `terms.html` / `privacy.html` / `tokushoho.html` — 規約系（文面は準備中の雛形）

## 運用メモ

- App Store リンクは `src/constants.ts` の `APP_STORE_URL`（リリース後に差し替え）
- 文言・デザインの正は Claude Design 出力（`design/`、git 管理外）
- 規約系3ページの文面確定後に `src/legal/*.tsx` を更新する

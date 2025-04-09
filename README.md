# OUS Metaverse ホームページ

## 🚀 プロジェクト概要

OUS Metaverseは岡山理科大学の公認メタバースサークルです。私たちは「メタバースをもっと身近に」をモットーに、より多くの人にメタバースの魅力を広めつつ、メタバースと共に楽しく大学生活を送るために活動しています。

このリポジトリは、OUS Metaverseの公式ホームページのソースコードを管理しています。Astroフレームワークを使用して構築されています。

## 💻 開発環境のセットアップ

```sh
git clone https://github.com/OUS-Metaverse/homepage.git
cd homepage
bun install
bun run dev
```

## 📁 プロジェクト構造

Astroプロジェクト内には、以下のようなフォルダとファイルがあります：

```text
/
├── public/         # 静的アセット（画像、フォントなど）
│   └── favicon.svg
├── src/
│   ├── layouts/    # ページレイアウトコンポーネント
│   │   └── Layout.astro
│   └── pages/      # ページコンポーネント（URLに対応）
│       └── index.astro
└── package.json
```

Astroプロジェクトの構造について詳しく知りたい場合は、[プロジェクト構造ガイド](https://docs.astro.build/ja/basics/project-structure/)を参照してください。

## 🛠️ コマンド

すべてのコマンドはプロジェクトのルートディレクトリで実行します：

| コマンド                  | 動作                                            |
| :------------------------ | :---------------------------------------------- |
| `bun install`             | 依存関係をインストールします                    |
| `bun dev`                 | ローカル開発サーバーを`localhost:4321`で起動します |
| `bun build`               | 本番用サイトを`./dist/`にビルドします            |
| `bun preview`             | デプロイ前に本番ビルドをローカルでプレビューします |
| `bun astro ...`           | `astro add`や`astro check`などのCLIコマンドを実行します |
| `bun astro -- --help`     | Astro CLIのヘルプを表示します                   |

## 🌐 国際化対応

このウェブサイトは以下の言語に対応しています：
- 日本語
- 英語
- 中国語

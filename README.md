# OUS Metaverse ホームページ

## 🚀 プロジェクト概要

OUS Metaverseは岡山理科大学の公認メタバースサークルです。私たちは「メタバースをもっと身近に」をモットーに、より多くの人にメタバースの魅力を広めつつ、メタバースと共に楽しく大学生活を送るために活動しています。

このリポジトリは、OUS Metaverseの公式ホームページのソースコードを管理しています。Astroフレームワークを使用して構築されています。

## 📝 記事作成ガイドライン

新しく記事を作成するには、ニュースなら[`src/content/news`](src/content/news)ディレクトリに、活動紹介なら[`src/content/activities`](src/content/activities)ディレクトリに新しいディレクトリを作成し、その中に言語ごとの記事ファイルを作成します。記事の書き分けについては[後述](#📰-ニュース)を参照してください。

作成したディレクトリ名は記事のURLの一部になります。
例えば、`2025-numa-fes`というディレクトリを作成すると、URLは`/news/2025-numa-fes`になります。

ディレクトリ名は**小文字英数字**とハイフン（`-`）のみを使用してください。日本語や特殊文字は使用しないでください。
実施年が明確な場合は、先頭に`2025-`のように年を付けることを推奨します。

記事ファイルは、言語ごとに`ja.md`、`en.md`、`zh.md`、`ko.md`のように作成します。作成しなかった場合、その言語では記事が表示されません。

### 📰 ニュース

#### 用途

- 対外発表・告知・終了報告など、**即時性の高い情報**の発信

#### 掲載基準

- 外部との接点があるもの（例：イベント参加、メディア掲載など）
- 公式な発表や告知
- 重要な更新・発表

#### 記述ガイド

- タイトルは具体的に（例：NUMA祭2025に出展しました）
- 内容は簡潔に、重要な情報を強調

#### フロントマター

```markdown
---
title: "NUMA祭2025に出展しました"
date: 2025-10-01
image: "/images/news/2025-numa-fes/thumbnail.jpg"
summary: "2025年10月に開催されるNUMA祭に出展します。"
category: "event"
tags: ["NUMA祭", "イベント"]
relatedLinks:
    - title: "NUMA公式サイト"
        url: "https://numa-meta.com/"
---
```

### 🎉 活動紹介

#### 用途

- サークルとして取り組んだ**プロジェクト・活動成果**の紹介

#### 掲載基準

- サークルメンバーの自主的な活動
- 成果物や目標があるもの（例：PV制作、#今週のOUSMetaverse など）

#### 記述ガイド

- 背景、プロセス、成果をセットで記述
- ギャラリーに写真を追加し、活動の雰囲気を伝える

#### フロントマター

```markdown
---
title: "PV制作"
date: 2025-10-01
featured: true
image: "/images/activities/2025-circle-pv-creation/thumbnail.jpg"
summary: "OUS Metaverseの活動を紹介するPVを制作しました。"
category: "creation"
tags: ["PV", "制作"]
gallery:
    - "/images/activities/2025-circle-pv-creation/image1.jpg"
    - "/images/activities/2025-circle-pv-creation/image2.jpg"
    - "/images/activities/2025-circle-pv-creation/image3.jpg"
members:
    - "さしみ"
    - "みねたけ"
    - "yuki"
    - "鷹内かい"
---
```

featuredは、活動紹介の中で特に目立たせたい記事を指定します。`true`に設定すると、活動紹介一覧で強調表示されます。
categoryは以下のいずれかを指定できます。

- `event` - イベント参加や開催
- `workshop` - ワークショップや勉強会
- `creation` - 制作物やプロジェクト
- `contest` - コンテスト参加や開催
- `academic` - 学術活動や研究
- `other` - その他の活動

## 📖 開発者ドキュメント

### 💻 開発環境のセットアップ

#### 必要要件

- [Bun](https://bun.sh/)
- [Git](https://git-scm.com/)

#### インストール手順

```bash
# リポジトリのクローン
git clone https://github.com/OUS-Metaverse/homepage.git

# プロジェクトディレクトリに移動
cd homepage

# 依存関係のインストール
bun install

# 開発サーバーの起動
bun run dev
```

これにより、`localhost:4321`で開発サーバーが起動します。

### 📁 プロジェクト構造

```
/
├── public/         # 静的アセット（画像、フォントなど）
│   └── favicon.svg
├── src/
│   ├── assets/     # コンポーネントで使用する画像やSVGなど
│   │   ├── astro.png
│   ├── components/ # 再利用可能なコンポーネント
│   ├── layouts/    # ページレイアウトコンポーネント
│   ├── libs/       # ユーティリティ関数など
│   │   ├── i18n.ts # 多言語対応のためのユーティリティ
│   │   └── utils.d.ts
│   ├── pages/      # ページコンポーネント（URLに対応）
│   │   └── index.astro
│   └── styles/     # グローバルスタイル
│       └── global.css
├── astro.config.mjs # Astroの設定ファイル
├── tsconfig.json   # TypeScriptの設定
├── package.json    # プロジェクト設定と依存関係
└── README.md       # プロジェクト概要
```

### 🔧 技術スタック

- **フレームワーク**: [Astro](https://astro.build/)
- **スタイリング**: [TailwindCSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/)
- **多言語対応**: [astro-i18n-aut](https://github.com/jlarmstrongiv/astro-i18n-aut)
- **アイコン**: [astro-icon](https://github.com/natemoo-re/astro-icon)
- **SEO**: [astro-seo](https://github.com/jonasmerlin/astro-seo)
- **ランタイム**: [Bun](https://bun.sh/)

### 🌐 多言語対応

プロジェクトは[`astro-i18n-aut`](https://github.com/jlarmstrongiv/astro-i18n-aut)を使用して日本語、英語、中国語に対応しています。

#### 多言語テキストの追加方法

[`useTranslations`](src/libs/i18n.ts)フックを使用して各言語のテキストを定義します：

```astro
---
import { useTranslations } from "../libs/i18n";
const { t } = useTranslations(Astro.url);
---

<h1>
    {
        t({
            ja: "こんにちは、世界！",
            en: "Hello, World!",
            zh: "你好，世界！",
        })
    }
</h1>
```

#### 多言語リンクの作成

```astro
---
import { useTranslations } from "../libs/i18n";
const { l } = useTranslations(Astro.url);
---

<a href={l("/about")}>
    {
        t({
            ja: "詳細",
            en: "About",
            zh: "关于",
        })
    }
</a>
```

### 📝 コンポーネント開発ガイド

#### 新しいコンポーネントの作成

Astroコンポーネントは[`src/components`](src/components)ディレクトリに作成します。

```astro
---
// MyComponent.astro
import { useTranslations } from "../libs/i18n";
const { t } = useTranslations(Astro.url);

// プロパティの定義
export interface Props {
    title: string;
    description?: string;
}

const { title, description = "" } = Astro.props;
---

<div class="my-component">
    <h2>{title}</h2>
    {description && <p>{description}</p>}
    <p>
        {
            t({
                ja: "これは新しいコンポーネントです",
                en: "This is a new component",
                zh: "这是一个新组件",
            })
        }
    </p>
</div>
```

#### 新しいページの作成

ページは[`src/pages`](src/pages)ディレクトリに作成します。

```astro
---
// src/pages/about.astro
import Layout from "../layouts/Layout.astro";
import { useTranslations } from "../libs/i18n";

const { t } = useTranslations(Astro.url);
---

<Layout>
    <main>
        <h1>
            {
                t({
                    ja: "私たちについて",
                    en: "About Us",
                    zh: "关于我们",
                })
            }
        </h1>
        <p>
            {
                t({
                    ja: "OUS Metaverseの詳細情報...",
                    en: "Details about OUS Metaverse...",
                    zh: "关于OUS Metaverse的详细信息...",
                })
            }
        </p>
    </main>
</Layout>
```

### 🎨 スタイリングガイド

プロジェクトではTailwind CSSとdaisyUIを使用しています。

#### Tailwind CSSの使用例

```astro
<div class="flex flex-col items-center rounded-lg bg-white p-4 shadow-md">
    <h2 class="text-2xl font-bold text-gray-800">タイトル</h2>
    <p class="mt-2 text-gray-600">説明テキスト</p>
    <button class="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        ボタン
    </button>
</div>
```

> [!WARNING]
> CSSファイルの使用は避け、なるべくTailwind CSSのユーティリティクラスを使用するか、コンポーネント内でスタイルを定義してください。

### 🔄 貢献ワークフロー

#### 1. 開発の準備

```bash
# 最新のmainブランチを取得
git checkout main
git pull origin main

# 新しい機能ブランチを作成
git checkout -b feature/your-feature-name
```

#### 2. 開発

1. コードを変更
2. 開発サーバーで確認: `bun run dev`

#### 3. ビルドとテスト

```bash
# 本番ビルド
bun run build

# ビルド結果のプレビュー
bun run preview
```

#### 4. コミットとプッシュ

```bash
git add .
git commit -m "feat: 機能の簡潔な説明"
git push origin feature/your-feature-name
```

コミットメッセージは以下の形式を推奨:

- `feat:` - 新機能
- `fix:` - バグ修正
- `docs:` - ドキュメント変更
- `style:` - スタイル変更
- `format:` - フォーマット変更
- `refactor:` - リファクタリング
- `perf:` - パフォーマンス改善
- `test:` - テスト追加・修正
- `chore:` - 雑多な変更

#### 5. プルリクエストの作成

1. GitHubでプルリクエストを作成
2. 変更内容を説明
3. レビュー依頼

### 提出前チェックリスト

- [ ] すべての言語（日本語、英語、中国語）で正しく動作するか確認
- [ ] モバイル/デスクトップの両方でデザインを確認
- [ ] `bun run build`でエラーなくビルドできるか確認
- [ ] `bun run test`でテストがすべて通るか確認
- [ ] `bun run format`でコードをフォーマット

### 📋 その他の参考情報

- [Astro公式ドキュメント](https://docs.astro.build/)
- [TailwindCSS公式ドキュメント](https://tailwindcss.com/docs)
- [daisyUI公式ドキュメント](https://daisyui.com/docs/intro/)

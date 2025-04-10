// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";
import rehypeExternalLinks from "rehype-external-links";
import i18n, { filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";

// デフォルト言語を日本語に設定
const defaultLocale = "ja";
// サポートする言語とそのロケール設定
const locales = {
    ja: "ja-JP",
    en: "en-US",
    zh: "zh-CN",
};

// https://astro.build/config
export default defineConfig({
    // astro-18n-autの設定
    site: "https://www.ousmeta.com",
    trailingSlash: "never",
    build: {
        format: "file",
    },

    // Tailwind CSSの設定
    vite: {
        plugins: [tailwindcss()],
    },

    // 多言語対応の設定
    i18n: {
        defaultLocale: "ja",
        locales: ["ja", "en", "zh"],
    },

    // 統合プラグイン設定
    integrations: [
        // astro-iconの統合
        icon(),
        // astro-i18n-autの統合
        i18n({
            defaultLocale,
            locales,
        }),
        // astro-sitemapの統合
        sitemap({
            i18n: {
                defaultLocale,
                locales,
            },
            filter: filterSitemapByDefaultLocale({ defaultLocale }),
        }),
    ],

    // レスポンシブ画像の設定
    image: {
        experimentalLayout: "responsive",
    },
    experimental: {
        responsiveImages: true,
    },

    markdown: {
        rehypePlugins: [
            [
                // Markdownの外部リンクにアイコンを追加するためのrehypeプラグイン
                rehypeExternalLinks,
                {
                    content: { type: "text", value: " 🔗" },
                },
            ],
        ],
    },
});

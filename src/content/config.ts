import { defineCollection, z } from "astro:content";

// ニュース記事のスキーマ
const newsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        titleEn: z.string(),
        titleZh: z.string(),
        date: z.string().transform((str) => new Date(str)),
        cover: z.string(),
        summary: z.string(),
        summaryEn: z.string(),
        summaryZh: z.string(),
        category: z.string(),
        tags: z.array(z.string()),
        language: z.enum(["ja", "en", "zh"]).default("ja"),
        featured: z.boolean().default(false),
        relatedLinks: z
            .array(
                z.object({
                    title: z.string(),
                    titleEn: z.string(),
                    titleZh: z.string(),
                    url: z.string(),
                }),
            )
            .optional(),
    }),
});

// 活動記事のスキーマ
const activitiesCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        titleEn: z.string(),
        titleZh: z.string(),
        date: z.string().transform((str) => new Date(str)),
        image: z.string(),
        summary: z.string(),
        summaryEn: z.string(),
        summaryZh: z.string(),
        category: z.string(),
        tags: z.array(z.string()),
        language: z.enum(["ja", "en", "zh"]).default("ja"),
        featured: z.boolean().default(false),
        gallery: z.array(z.string()).optional(),
        members: z.array(z.string()).optional(),
    }),
});

// メンバー情報のスキーマ
const membersCollection = defineCollection({
    type: "data",
    schema: z.object({
        staffMembers: z.array(
            z.object({
                id: z.string(),
                name: z.string(),
                role: z.object({
                    ja: z.string(),
                    en: z.string(),
                    zh: z.string(),
                }),
                grade: z.object({
                    ja: z.string(),
                    en: z.string(),
                    zh: z.string(),
                }),
                avatar: z.string(),
                comment: z.object({
                    ja: z.string(),
                    en: z.string(),
                    zh: z.string(),
                }),
                skills: z.array(z.string()).optional(),
                socials: z
                    .array(
                        z.object({
                            name: z.string(),
                            url: z.string(),
                            icon: z.string(),
                        }),
                    )
                    .optional(),
            }),
        ),
        regularMembers: z.array(
            z.object({
                id: z.string(),
                name: z.string(),
                grade: z.object({
                    ja: z.string(),
                    en: z.string(),
                    zh: z.string(),
                }),
                avatar: z.string(),
                skills: z.array(z.string()).optional(),
            }),
        ),
    }),
});

export const collections = {
    news: newsCollection,
    activities: activitiesCollection,
    members: membersCollection,
};

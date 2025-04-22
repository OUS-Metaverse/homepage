import { defineCollection, z } from "astro:content";

const localizationStrings = z.object({
    ja: z.string(),
    en: z.string(),
    zh: z.string(),
    ko: z.string(),
});

// トップページのスキーマ
const topCollection = defineCollection({
    type: "data",
    schema: z.object({
        features: z.array(
            z.object({
                icon: z.string(),
                title: localizationStrings,
                description: localizationStrings,
            }),
        ),
    }),
});

// サークル紹介の「沿革」セクションのスキーマ
const aboutCollection = defineCollection({
    type: "data",
    schema: z.object({
        milestones: z.array(
            z.object({
                year: z.string(),
                title: localizationStrings,
                description: localizationStrings,
            }),
        ),
        activities: z.array(
            z.object({
                icon: z.string(),
                title: localizationStrings,
                description: localizationStrings,
            }),
        ),
    }),
});

// ニュース記事のスキーマ
const newsCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.string().transform((str) => new Date(str)),
            image: image(),
            summary: z.string(),
            category: z.string(),
            tags: z.array(z.string()),
            relatedLinks: z
                .array(
                    z.object({
                        title: z.string(),
                        url: z.string(),
                    }),
                )
                .optional(),
        }),
});

// 活動記事のスキーマ
const activitiesCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.string().transform((str) => new Date(str)),
            featured: z.boolean(),
            image: image(),
            summary: z.string(),
            category: z.string(),
            tags: z.array(z.string()),
            gallery: z.array(z.string()),
            members: z.array(z.string()),
        }),
});

// メンバー情報のスキーマ
const membersCollection = defineCollection({
    type: "data",
    schema: ({ image }) => z.array(
        z.object({
            avatar: image(),
            name: z.string(),
            role: localizationStrings.optional(),
            executive: z.boolean(),
            ob: z.boolean(),
            grade: localizationStrings,
            comment: localizationStrings,
            skills: z.array(z.string()),
            socials: z
                .array(
                    z.object({
                        name: z.string(),
                        url: z.string(),
                        icon: z.string(),
                    }),
                ),
        })
    )
});

export const collections = {
    top: topCollection,
    about: aboutCollection,
    news: newsCollection,
    activities: activitiesCollection,
    members: membersCollection,
};

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
            image: image(),
            summary: z.string(),
            category: z.string(),
            tags: z.array(z.string()),
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
                role: localizationStrings,
                grade: localizationStrings,
                avatar: z.string(),
                comment: localizationStrings,
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
                grade: localizationStrings,
                avatar: z.string(),
                skills: z.array(z.string()).optional(),
            }),
        ),
    }),
});

export const collections = {
    top: topCollection,
    news: newsCollection,
    activities: activitiesCollection,
    members: membersCollection,
};

import {
    defaultLocale,
    getAllLocaleUrls,
    getLocale,
    getLocaleUrl,
    getUrlWithoutLocale,
    locales,
} from "astro-i18n-aut";
import { getCollection } from "astro:content";

export function useTranslations(url: URL) {
    const currentLocale = getLocale(url);

    return {
        t: (translations: Record<string, string>, options?: { targetLocale?: string }) => {
            const targetLocale = options?.targetLocale || currentLocale;
            return translations[targetLocale] || translations[defaultLocale];
        },
        l: (route: string, options?: { targetLocale?: string }) =>
            getLocaleUrl(route, options?.targetLocale || currentLocale),

        getCollection: (async (collection: any, filter?: (entry: any) => boolean) => {
            const regex = new RegExp(`\/${currentLocale}(\.[^\/]+)?$`);
            const contents = await getCollection(
                collection,
                (entry: any) => regex.test(entry.id) && (filter ? filter(entry) : true),
            );

            return contents.map((item: any) => ({
                ...item,
                id: item.id.replace(regex, ""),
                slug: item.slug.replace(regex, ""),
            }));
        }) as typeof getCollection,

        locale: currentLocale,
        locales,
        route: getUrlWithoutLocale(url),
        allRoutes: getAllLocaleUrls(url),
    };
}

export function getNameFromLocale(locale: string) {
    switch (locale) {
        case "ja":
            return "日本語";
        case "en":
            return "English";
        case "zh":
            return "中文";
        case "ko":
            return "한국어";
        default:
            throw new Error(`Locale ${locale} not supported`);
    }
}

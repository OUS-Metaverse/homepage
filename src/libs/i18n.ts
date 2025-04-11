import {
    defaultLocale,
    getAllLocaleUrls,
    getLocale,
    getLocaleUrl,
    getUrlWithoutLocale,
    locales,
} from "astro-i18n-aut";

export function useTranslations(url: URL) {
    const currentLocale = getLocale(url);

    return {
        t: (translations: Record<string, string>, options?: { targetLocale?: string }) => {
            const targetLocale = options?.targetLocale ? options.targetLocale : currentLocale;
            return translations[targetLocale] || translations[defaultLocale];
        },
        l: (route: string, options?: { targetLocale?: string }) =>
            getLocaleUrl(route, options?.targetLocale ? options.targetLocale : currentLocale),
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
        default:
            throw new Error(`Locale ${locale} not supported`);
    }
}

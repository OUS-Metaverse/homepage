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

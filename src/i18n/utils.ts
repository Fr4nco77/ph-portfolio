export const locales = {
  en: "EN",
  es: "ES",
} as const;

export function localPaths() {
  return Object.keys(locales).map((key) => {
    return {
      params: {
        lang: key,
      },
    };
  });
}

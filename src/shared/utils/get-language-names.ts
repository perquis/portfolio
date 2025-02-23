interface Language {
  code: string;
  fullName: string;
}

export function getLanguageNames(
  languageCodes: string[],
  displayLanguage: string = "en",
): Language[] {
  const languageNames = new Intl.DisplayNames([displayLanguage], {
    type: "language",
  });

  return languageCodes.map((code) => ({
    code,
    fullName: languageNames.of(code) || code,
  }));
}

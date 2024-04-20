import { resolve } from "node:path";

import Backend from "i18next-fs-backend";
import { RemixI18Next } from "node_modules/remix-i18next/browser/server.js";

import i18n from "~/i18n";

let i18next = new RemixI18Next({
  detection: {
    supportedLanguages: i18n.supportedLngs,
    fallbackLanguage: i18n.fallbackLng,
  },
  i18next: {
    ...i18n,
    backend: {
      loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
    },
  },
  backend: Backend,
});

export default i18next;

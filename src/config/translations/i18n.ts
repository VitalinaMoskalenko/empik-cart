import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { AppLocalsType } from "../../types";
import pl from "./pl";

i18n.use(initReactI18next).init({
  fallbackLng: AppLocalsType.pl,
  interpolation: {
    escapeValue: false,
  },
  lng: AppLocalsType.pl,
  resources: {
    pl: {
      translation: pl,
    },
  },
});

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          about: "About Us",
          products: "Products",
          facilities: "Facilities",
          contact: "Contact Us",
          careers: "Careers",
          searchPlaceholder: "Search...",
        },
      },
      fr: {
        translation: {
          home: "Accueil",
          about: "À propos",
          products: "Produits",
          facilities: "Installations",
          contact: "Contactez-nous",
          careers: "Carrières",
          searchPlaceholder: "Chercher...",
        },
      },
      es: {
        translation: {
          home: "Inicio",
          about: "Sobre nosotros",
          products: "Productos",
          facilities: "Instalaciones",
          contact: "Contáctenos",
          careers: "Carreras",
          searchPlaceholder: "Buscar...",
        },
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

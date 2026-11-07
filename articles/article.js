"use strict";

const languageButton = document.querySelector("#languageToggle");
const descriptionMeta = document.querySelector('meta[name="description"]');
const openGraphTitle = document.querySelector('meta[property="og:title"]');
const openGraphDescription = document.querySelector('meta[property="og:description"]');
const openGraphLocale = document.querySelector('meta[property="og:locale"]');
const twitterTitle = document.querySelector('meta[name="twitter:title"]');
const twitterDescription = document.querySelector('meta[name="twitter:description"]');
const article = document.querySelector("[data-ar-title][data-en-title]");

function setLanguage(language) {
  const isArabic = language === "ar";
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.title = article.dataset[isArabic ? "arTitle" : "enTitle"];
  descriptionMeta.content = article.dataset[isArabic ? "arDescription" : "enDescription"];
  openGraphTitle.content = document.title;
  openGraphDescription.content = descriptionMeta.content;
  openGraphLocale.content = isArabic ? "ar_EG" : "en_US";
  twitterTitle.content = document.title;
  twitterDescription.content = descriptionMeta.content;
  languageButton.textContent = isArabic ? "EN" : "عربي";
  languageButton.setAttribute("aria-label", isArabic ? "Switch language to English" : "تغيير اللغة إلى العربية");

  document.querySelectorAll("[data-ar][data-en]").forEach((element) => {
    element.textContent = element.dataset[isArabic ? "ar" : "en"];
  });
  document.querySelectorAll("[data-ar-alt][data-en-alt]").forEach((image) => {
    image.alt = image.dataset[isArabic ? "arAlt" : "enAlt"];
  });
}

languageButton.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "ar" ? "en" : "ar");
});

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "de" | "en";

/* ============================================================
   Wörterbuch — Deutsch & Englisch (gesamte Website)
   ============================================================ */
const de = {
  nav: {
    links: [
      { label: "Düfte", href: "#duefte" },
      { label: "Partnerin werden", href: "#partnerin" },
      { label: "Über mich", href: "#ueber" },
      { label: "Kontakt", href: "#kontakt" },
    ],
    cta: "Termin",
  },
  hero: {
    eyebrow: "Düfte · Business · Mentoring",
    h1: ["Düfte verkaufen, Frauen ", "stärken", ", ", "frei leben", "."],
    sub: "Ich helfe dir, mit Chogan-Düften ein eigenes Business aufzubauen — Schritt für Schritt, ohne Verkaufsdruck, mit echtem Wissen.",
    cta1: "Partnerin werden",
    cta2: "Düfte entdecken",
    note: "Kein Risiko · Keine Mindestabnahme · In deinem Tempo",
    kredo: "„Düfte, die erinnern. Frauen, die wachsen.“",
    imgLabel: "Parfum-Flakon auf warmem Marmor",
  },
  marquee: [
    "Düfte, die erinnern",
    "Frauen, die wachsen",
    "Ein Business, das nach dir riecht",
    "Wissen statt Verkaufsdruck",
  ],
  duefte: {
    eyebrow: "Düfte · Beratung",
    h2: ["Der richtige Duft ist eine ", "Erinnerung", "."],
    sub: "Keine Superlative — konkrete Empfehlungen. Sag mir, was du magst, und ich finde den Duft, der zu dir passt und wirklich bleibt.",
    products: [
      { name: "Nº57 — Holz & Vanille", note: "Warm, holzig, cremige Vanille. Hält 8–10 Stunden auf der Haut.", price: "€ 32,00", badge: "Bestseller" },
      { name: "Nº22 — Neroli & Bergamotte", note: "Frisch, sonnig, leicht floral. Für helle Tage und klare Köpfe.", price: "€ 32,00", badge: "Neu im Sortiment" },
      { name: "Nº09 — Amber & Moschus", note: "Sinnlich, weich, langanhaltend. Der Duft für besondere Abende.", price: "€ 34,00", badge: "Limitiert" },
    ],
    productTag: "Parfum · Chogan",
    discover: "Entdecken",
    cta: "Persönliche Duftberatung",
    ctaNote: "Kostenlos · unverbindlich · per WhatsApp oder Zoom",
    pageIntro: "Über 100 Düfte — inspiriert von den großen Häusern, fair im Preis, hochwertig in der Qualität. Ich finde mit dir den, der bleibt.",
  },
  partnerin: {
    eyebrow: "Partnerin werden",
    h2: ["Aus einer ", "Idee", " wird dein Business."],
    sub: "Du liebst Düfte, willst flexibler arbeiten und etwas Eigenes aufbauen? Ich zeige dir Schritt für Schritt, wie du als Chogan-Partnerin startest.",
    steps: [
      { n: "01", title: "Flexibel starten", text: "Kein Risiko, keine Mindestabnahme. Du startest neben dem Beruf — in deinem Tempo, mit deinem Netzwerk." },
      { n: "02", title: "1:1 Mentoring", text: "Ich begleite dich persönlich — mit Skripten, Posting-Plänen und dem Wissen aus echten Verkäufen." },
      { n: "03", title: "Produkt, das überzeugt", text: "Chogan-Düfte mit hoher Qualität zu fairen Preisen — Frauen kaufen wieder, weil sie wieder wollen." },
    ],
    cta: "30 Minuten mit Manuela",
    ctaNote: "Online via Zoom · 100 % kostenfrei",
    pageIntro: "Kein Hype, kein Druck. Nur ein ehrlicher Weg, dir mit etwas, das du liebst, ein zweites Standbein aufzubauen.",
  },
  about: {
    eyebrow: "Über mich",
    h2: ["Ich erkläre. Ich ", "überrede", " nicht."],
    paras: [
      "Ich bin Manuela — Chogan-Partnerin & Mentorin. Ich glaube an Düfte, die man nicht erklären muss, und an ein Business, das sich ehrlich anfühlt.",
      "Statt Superlativen bekommst du konkrete Empfehlungen: welcher Duft 8–10 Stunden hält, welcher zu dir passt — und wie du, wenn du magst, selbst eines aufbaust.",
    ],
    quote: "„Qualität entsteht da, wo jemand verstanden hat, was sie ausmacht — und es weitergibt, ohne sich wichtig zu machen.“",
    role: "Manuela — Chogan Partnerin & Mentorin",
    trust: ["Wissen vor Werbung", "Kein Verkaufsdruck", "In deinem Tempo"],
    imgLabel: "Manuela · Porträt folgt",
  },
  statement: ["Düfte. Beauty. ", "Business."],
  testimonials: {
    eyebrow: "Stimmen",
    h2: ["Worte, die ", "bleiben", "."],
    quotes: [
      { quote: "Manuela hat mir Nº57 empfohlen, weil ich Holz mag — er hält wirklich den ganzen Tag. Keine Übertreibung, einfach richtig.", name: "Carolin", role: "Kundin" },
      { quote: "Ich wollte etwas Eigenes, ohne Druck. Das Mentoring war ehrlich und strukturiert — nach drei Monaten lief mein Business.", name: "Jasmin", role: "Partnerin" },
      { quote: "Endlich jemand, der erklärt statt zu verkaufen. Ich kaufe wieder, weil ich wieder will.", name: "Sandra", role: "Kundin" },
    ],
  },
  termin: {
    eyebrow: "30 Min · Kostenfrei",
    h2: ["30 Minuten mit Manuela — und du weißt, ob's ", "zu dir passt", "."],
    sub: "Kein Verkaufsdruck. Wir schauen gemeinsam, ob die Partnerschaft Sinn ergibt — 30 wertvolle Minuten, die du auf jeden Fall mitnimmst.",
    note: "Online via Zoom · 100 % kostenfrei",
    firstName: "Dein Vorname",
    email: "deine@email.de",
    submit: "Termin reservieren",
    legal: "Plus PDF „Die 7 ersten Schritte als Chogan-Partnerin“ direkt ins Postfach.",
    success: "Wunderbar — ich melde mich persönlich bei dir. ✦",
  },
  contact: {
    kredo: "„Düfte, die erinnern. Frauen, die wachsen.“",
    email: "hallo@manuela-chogan.de",
    instagram: "@manuela.chogan",
    h2: ["Lass uns ", "sprechen", "."],
    sub: "Schreib mir, wofür dein Herz schlägt — Duft oder Business. Ich antworte persönlich.",
  },
  footer: {
    tagline: "Persönliche Duftberatung mit Chogan — und Mentoring für Frauen, die ein eigenes Business aufbauen wollen.",
    navLabel: "Navigation",
    followLabel: "Folgen",
    legal: [
      { label: "Impressum", href: "#" },
      { label: "Datenschutz", href: "#" },
    ],
    rights: "Alle Rechte vorbehalten",
  },
  pages: {
    duefte: { eyebrow: "Düfte & Beratung", title: ["Finde den Duft, der ", "bleibt", "."] },
    partnerin: { eyebrow: "Partnerin werden", title: ["Bau dir etwas ", "Eigenes", " auf."] },
    ueber: { eyebrow: "Über mich", title: ["Schön, dass du ", "hier", " bist."] },
    kontakt: { eyebrow: "Kontakt", title: ["Lass uns ", "sprechen", "."] },
    backHome: "Zur Startseite",
  },
};

const en: typeof de = {
  nav: {
    links: [
      { label: "Fragrances", href: "#duefte" },
      { label: "Become a partner", href: "#partnerin" },
      { label: "About me", href: "#ueber" },
      { label: "Contact", href: "#kontakt" },
    ],
    cta: "Book a call",
  },
  hero: {
    eyebrow: "Fragrances · Business · Mentoring",
    h1: ["Sell scents, ", "empower", " women, ", "live free", "."],
    sub: "I help you build your own business with Chogan fragrances — step by step, without sales pressure, with real knowledge.",
    cta1: "Become a partner",
    cta2: "Explore fragrances",
    note: "No risk · No minimum order · At your own pace",
    kredo: "“Scents that linger. Women who grow.”",
    imgLabel: "Perfume bottle on warm marble",
  },
  marquee: [
    "Scents that linger",
    "Women who grow",
    "A business that smells like you",
    "Knowledge over sales pressure",
  ],
  duefte: {
    eyebrow: "Fragrances · Consultation",
    h2: ["The right scent is a ", "memory", "."],
    sub: "No superlatives — concrete recommendations. Tell me what you love, and I'll find the scent that suits you and truly lasts.",
    products: [
      { name: "Nº57 — Wood & Vanilla", note: "Warm, woody, creamy vanilla. Lasts 8–10 hours on the skin.", price: "€ 32.00", badge: "Bestseller" },
      { name: "Nº22 — Neroli & Bergamot", note: "Fresh, sunny, lightly floral. For bright days and clear minds.", price: "€ 32.00", badge: "New arrival" },
      { name: "Nº09 — Amber & Musk", note: "Sensual, soft, long-lasting. The scent for special evenings.", price: "€ 34.00", badge: "Limited" },
    ],
    productTag: "Perfume · Chogan",
    discover: "Discover",
    cta: "Personal fragrance consultation",
    ctaNote: "Free · no obligation · via WhatsApp or Zoom",
    pageIntro: "Over 100 fragrances — inspired by the great houses, fair in price, premium in quality. Together we'll find the one that stays.",
  },
  partnerin: {
    eyebrow: "Become a partner",
    h2: ["An ", "idea", " becomes your business."],
    sub: "You love fragrances, want more flexibility and something of your own? I'll show you step by step how to start as a Chogan partner.",
    steps: [
      { n: "01", title: "Start flexibly", text: "No risk, no minimum order. Start alongside your job — at your pace, with your network." },
      { n: "02", title: "1:1 mentoring", text: "I guide you personally — with scripts, posting plans and the knowledge from real sales." },
      { n: "03", title: "A product that convinces", text: "Chogan fragrances with high quality at fair prices — women buy again because they want to." },
    ],
    cta: "30 minutes with Manuela",
    ctaNote: "Online via Zoom · 100 % free",
    pageIntro: "No hype, no pressure. Just an honest path to build a second income with something you love.",
  },
  about: {
    eyebrow: "About me",
    h2: ["I explain. I don't ", "persuade", "."],
    paras: [
      "I'm Manuela — Chogan partner & mentor. I believe in scents that need no explaining, and in a business that feels honest.",
      "Instead of superlatives you get concrete advice: which scent lasts 8–10 hours, which suits you — and how, if you like, you build one yourself.",
    ],
    quote: "“Quality is born where someone has understood what makes it special — and passes it on without making themselves important.”",
    role: "Manuela — Chogan Partner & Mentor",
    trust: ["Knowledge over ads", "No sales pressure", "At your own pace"],
    imgLabel: "Manuela · portrait coming",
  },
  statement: ["Scents. Beauty. ", "Business."],
  testimonials: {
    eyebrow: "Voices",
    h2: ["Words that ", "stay", "."],
    quotes: [
      { quote: "Manuela recommended Nº57 because I love wood — it really lasts all day. No exaggeration, simply right.", name: "Carolin", role: "Customer" },
      { quote: "I wanted something of my own, without pressure. The mentoring was honest and structured — after three months my business was running.", name: "Jasmin", role: "Partner" },
      { quote: "Finally someone who explains instead of selling. I buy again because I want to.", name: "Sandra", role: "Customer" },
    ],
  },
  termin: {
    eyebrow: "30 min · Free",
    h2: ["30 minutes with Manuela — and you'll know if it ", "fits you", "."],
    sub: "No sales pressure. We look together at whether the partnership makes sense — 30 valuable minutes you'll take with you either way.",
    note: "Online via Zoom · 100 % free",
    firstName: "Your first name",
    email: "your@email.com",
    submit: "Reserve a slot",
    legal: "Plus the PDF “7 first steps as a Chogan partner” straight to your inbox.",
    success: "Wonderful — I'll personally get in touch with you. ✦",
  },
  contact: {
    kredo: "“Scents that linger. Women who grow.”",
    email: "hallo@manuela-chogan.de",
    instagram: "@manuela.chogan",
    h2: ["Let's ", "talk", "."],
    sub: "Write to me about what your heart beats for — fragrance or business. I reply personally.",
  },
  footer: {
    tagline: "Personal fragrance consultation with Chogan — and mentoring for women who want to build their own business.",
    navLabel: "Navigation",
    followLabel: "Follow",
    legal: [
      { label: "Imprint", href: "#" },
      { label: "Privacy", href: "#" },
    ],
    rights: "All rights reserved",
  },
  pages: {
    duefte: { eyebrow: "Fragrances & Consultation", title: ["Find the scent that ", "stays", "."] },
    partnerin: { eyebrow: "Become a partner", title: ["Build something of your ", "own", "."] },
    ueber: { eyebrow: "About me", title: ["Lovely that you're ", "here", "."] },
    kontakt: { eyebrow: "Contact", title: ["Let's ", "talk", "."] },
    backHome: "Back to home",
  },
};

const dict = { de, en };
export type Dict = typeof de;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LangContext = createContext<Ctx>({ lang: "de", setLang: () => {}, t: de });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "de" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    } catch {}
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

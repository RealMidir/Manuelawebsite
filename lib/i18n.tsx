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
   Positionierung: „Neue Wahrheit" — Traum & Ruhe statt Guru/Geld.
   Story-first (Iman-Stil), Erstgespräch als Filter, kein Hard-Pitch.
   ============================================================ */
const de = {
  nav: {
    links: [
      { label: "Düfte", href: "#duefte" },
      { label: "Dein Weg", href: "#partnerin" },
      { label: "Über mich", href: "#ueber" },
      { label: "Kontakt", href: "#kontakt" },
    ],
    cta: "Erstgespräch",
  },
  hero: {
    eyebrow: "Ein eigener Weg · Düfte · Freiheit",
    h1: ["Etwas ", "Eigenes", " aufbauen — ", "ohne alles aufzugeben", "."],
    sub: "Für Frauen, die sich mehr Freiheit und etwas Eigenes wünschen — aber nicht ihr Leben auf den Kopf stellen wollen. Ich zeige dir einen ruhigen Weg: mit Düften, die du liebst, und einem ersten Schritt, der dich nichts kostet.",
    cta1: "30 Minuten mit Manuela",
    cta2: "Wie es funktioniert",
    note: "Kostenloses Erstgespräch · kein Druck, kein Pitch · in deinem Tempo",
    kredo: "„Düfte, die erinnern. Frauen, die wachsen.“",
    imgLabel: "Parfum-Flakon auf warmem Marmor",
  },
  start: {
    eyebrow: "Die neue Wahrheit",
    old: "Lange dachte ich: Wer mehr will — mehr Ruhe, mehr Freiheit, mehr Zeit — muss entweder härter arbeiten oder alles hinschmeißen und etwas Riskantes wagen.",
    new: ["Heute weiß ich: Du kannst dir etwas ", "Eigenes", " aufbauen — ruhig, neben deinem Leben, mit etwas, das du sowieso liebst."],
    sub: "Kein Hustle. Kein Alles-oder-nichts. Nur ein kleiner erster Schritt — und jemand, der ihn mit dir geht.",
  },
  marquee: [
    "Etwas Eigenes — in deinem Tempo",
    "Mehr Ruhe statt mehr Hustle",
    "Düfte, die du liebst",
    "Kein Druck. Nur ein erster Schritt.",
  ],
  offerings: {
    eyebrow: "Dein Weg",
    h2: ["So kann dein Weg ", "aussehen", "."],
    sub: "Ob du einfach schöne Düfte suchst oder dir etwas Eigenes aufbauen willst — hier ist dein ruhiger Einstieg.",
    more: "Mehr",
    items: [
      { tag: "01", title: "Duftberatung", text: "Konkrete Empfehlungen statt Superlative — der Duft, der wirklich zu dir passt." },
      { tag: "02", title: "1:1 Begleitung", text: "Persönlich an deiner Seite, mit echtem Wissen aus der Praxis — Schritt für Schritt." },
      { tag: "03", title: "Dein erster Schritt", text: "Klein anfangen, neben deinem Leben — mit einem Einstieg, der dich nichts kostet." },
      { tag: "04", title: "Erstgespräch", text: "30 Minuten, ehrlich und unverbindlich. Du gehst mit Klarheit raus — nicht mit einem Pitch." },
    ],
  },
  fullbleed: {
    eyebrow: "Markenkredo",
    lines: ["Düfte, die erinnern.", "Frauen, die wachsen."],
    cta: "Lass uns sprechen",
    imgLabel: "Stillleben · warmes Licht",
  },
  gallery: {
    eyebrow: "Einblicke",
    h2: ["Hinter ", "der Marke", "."],
    captions: ["Parfum auf Marmor", "Persönliche Beratung", "Momente", "Detail"],
  },
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
    pageIntro: "Über 100 Düfte — hochwertig in der Qualität, fair im Preis, langanhaltend auf der Haut. Ich finde mit dir den, der bleibt.",
  },
  partnerin: {
    eyebrow: "Dein erster Schritt",
    h2: ["Aus einer ", "Idee", " wird dein eigener Weg."],
    sub: "Du liebst Düfte und möchtest dir ruhig etwas Eigenes aufbauen? Ich zeige dir den ersten Schritt — klein, ohne Risiko, in deinem Tempo.",
    steps: [
      { n: "01", title: "Klein & ohne Risiko starten", text: "Dein Einstieg kostet dich nichts: ein Startset zum Reinschnuppern, keine Mindestabnahme, kein Lager. Du gehst nichts ein." },
      { n: "02", title: "1:1 an deiner Seite", text: "Ich begleite dich persönlich — mit Plänen, Vorlagen und dem Wissen aus echter Erfahrung." },
      { n: "03", title: "In deinem Tempo wachsen", text: "Du entscheidest, wie weit du gehst. Manche bleiben bei den Düften, andere bauen sich Schritt für Schritt etwas Größeres auf." },
    ],
    cta: "30 Minuten mit Manuela",
    ctaNote: "Online via Zoom · 100 % kostenfrei",
    pageIntro: "Kein Hype, kein Druck. Nur ein ehrlicher, ruhiger Weg, dir mit etwas, das du liebst, etwas Eigenes aufzubauen.",
  },
  about: {
    eyebrow: "Über mich",
    h2: ["Ich erkläre. Ich ", "überrede", " nicht."],
    paras: [
      "Ich bin Manuela. Vor einiger Zeit hatte ich einen guten Job, feste Zeiten, alles ordentlich — und trotzdem das Gefühl, auf der Stelle zu treten.",
      "Heute baue ich mir etwas Eigenes auf, ruhig und neben dem Leben, mit Düften, die ich liebe. Genau diesen Weg zeige ich anderen Frauen — ehrlich, ohne Druck, in ihrem Tempo.",
    ],
    quote: "„Qualität entsteht da, wo jemand verstanden hat, was sie ausmacht — und es weitergibt, ohne sich wichtig zu machen.“",
    role: "Manuela — Chogan Partnerin & Mentorin",
    trust: ["Ehrlich statt Hype", "Kein Verkaufsdruck", "In deinem Tempo"],
    imgLabel: "Manuela · Porträt folgt",
  },
  statement: ["Düfte. Beauty. ", "Freiheit."],
  testimonials: {
    eyebrow: "Stimmen",
    h2: ["Worte, die ", "bleiben", "."],
    quotes: [
      { quote: "Manuela hat mir Nº57 empfohlen, weil ich Holz mag — er hält wirklich den ganzen Tag. Keine Übertreibung, einfach richtig.", name: "Carolin", role: "Kundin" },
      { quote: "Ich wollte etwas Eigenes, ohne mein Leben umzukrempeln. Heute habe ich mehr Ruhe und treffe eigene Entscheidungen — und es hat sich klein und sicher angefühlt.", name: "Jasmin", role: "Partnerin" },
      { quote: "Endlich jemand, der erklärt statt zu verkaufen. Ich kaufe wieder, weil ich wieder will.", name: "Sandra", role: "Kundin" },
    ],
  },
  termin: {
    eyebrow: "30 Min · Kostenfrei",
    h2: ["30 Minuten — und du weißt, wo du ", "stehst", "."],
    sub: "Kein Druck, kein Pitch. Wir schauen gemeinsam, wo du gerade stehst und was dein nächster Schritt sein könnte. Die 30 Minuten nimmst du auf jeden Fall mit.",
    note: "Online via Zoom · 100 % kostenfrei",
    firstName: "Dein Vorname",
    email: "deine@email.de",
    submit: "Termin reservieren",
    legal: "Plus ein kurzer Leitfaden für deinen Start — direkt ins Postfach.",
    success: "Wunderbar — ich melde mich persönlich bei dir. ✦",
  },
  contact: {
    kredo: "„Düfte, die erinnern. Frauen, die wachsen.“",
    email: "hallo@manuela-chogan.de",
    instagram: "@manuela.chogan",
    h2: ["Lass uns ", "sprechen", "."],
    sub: "Schreib mir, wofür dein Herz schlägt — ein Duft oder dein eigener Weg. Ich antworte persönlich.",
  },
  footer: {
    tagline: "Persönliche Duftberatung — und ehrliche Begleitung für Frauen, die sich ruhig etwas Eigenes aufbauen wollen.",
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
    partnerin: { eyebrow: "Dein Weg", title: ["Bau dir etwas ", "Eigenes", " auf."] },
    ueber: { eyebrow: "Über mich", title: ["Schön, dass du ", "hier", " bist."] },
    kontakt: { eyebrow: "Kontakt", title: ["Lass uns ", "sprechen", "."] },
    backHome: "Zur Startseite",
  },
};

const en: typeof de = {
  nav: {
    links: [
      { label: "Fragrances", href: "#duefte" },
      { label: "Your path", href: "#partnerin" },
      { label: "About me", href: "#ueber" },
      { label: "Contact", href: "#kontakt" },
    ],
    cta: "Free call",
  },
  hero: {
    eyebrow: "A path of your own · Fragrances · Freedom",
    h1: ["Build something ", "of your own", " — ", "without giving everything up", "."],
    sub: "For women who long for more freedom and something of their own — but don't want to turn their life upside down. I'll show you a calm path: with fragrances you love, and a first step that costs you nothing.",
    cta1: "30 minutes with Manuela",
    cta2: "How it works",
    note: "Free first call · no pressure, no pitch · at your own pace",
    kredo: "“Scents that linger. Women who grow.”",
    imgLabel: "Perfume bottle on warm marble",
  },
  start: {
    eyebrow: "A new truth",
    old: "For a long time I thought: if you want more — more calm, more freedom, more time — you either have to work harder or throw everything away and gamble on something risky.",
    new: ["Today I know: you can build something ", "of your own", " — calmly, alongside your life, with something you already love."],
    sub: "No hustle. No all-or-nothing. Just a small first step — and someone who walks it with you.",
  },
  marquee: [
    "Something of your own — at your pace",
    "More calm instead of more hustle",
    "Fragrances you love",
    "No pressure. Just a first step.",
  ],
  offerings: {
    eyebrow: "Your path",
    h2: ["What your path could ", "look like", "."],
    sub: "Whether you're simply after beautiful scents or want to build something of your own — here's your calm entry point.",
    more: "More",
    items: [
      { tag: "01", title: "Fragrance consultation", text: "Concrete recommendations over superlatives — the scent that truly suits you." },
      { tag: "02", title: "1:1 guidance", text: "Personally by your side, with real knowledge from practice — step by step." },
      { tag: "03", title: "Your first step", text: "Start small, alongside your life — with an entry that costs you nothing." },
      { tag: "04", title: "First call", text: "30 minutes, honest and no obligation. You leave with clarity — not with a pitch." },
    ],
  },
  fullbleed: {
    eyebrow: "Brand credo",
    lines: ["Scents that linger.", "Women who grow."],
    cta: "Let's talk",
    imgLabel: "Still life · warm light",
  },
  gallery: {
    eyebrow: "Glimpses",
    h2: ["Behind ", "the brand", "."],
    captions: ["Perfume on marble", "Personal consultation", "Moments", "Detail"],
  },
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
    pageIntro: "Over 100 fragrances — premium in quality, fair in price, long-lasting on the skin. Together we'll find the one that stays.",
  },
  partnerin: {
    eyebrow: "Your first step",
    h2: ["An ", "idea", " becomes a path of your own."],
    sub: "You love fragrances and want to calmly build something of your own? I'll show you the first step — small, no risk, at your own pace.",
    steps: [
      { n: "01", title: "Start small & risk-free", text: "Your entry costs you nothing: a starter set to explore, no minimum order, no stock. You're not committing to anything." },
      { n: "02", title: "1:1 by your side", text: "I guide you personally — with plans, templates and the knowledge from real experience." },
      { n: "03", title: "Grow at your pace", text: "You decide how far you go. Some stay with the fragrances, others build something bigger step by step." },
    ],
    cta: "30 minutes with Manuela",
    ctaNote: "Online via Zoom · 100 % free",
    pageIntro: "No hype, no pressure. Just an honest, calm path to build something of your own with something you love.",
  },
  about: {
    eyebrow: "About me",
    h2: ["I explain. I don't ", "persuade", "."],
    paras: [
      "I'm Manuela. Some time ago I had a good job, fixed hours, everything in order — and still felt like I was just treading water.",
      "Today I'm building something of my own, calmly and alongside life, with fragrances I love. This is exactly the path I now show other women — honestly, without pressure, at their pace.",
    ],
    quote: "“Quality is born where someone has understood what makes it special — and passes it on without making themselves important.”",
    role: "Manuela — Chogan Partner & Mentor",
    trust: ["Honest over hype", "No sales pressure", "At your own pace"],
    imgLabel: "Manuela · portrait coming",
  },
  statement: ["Scents. Beauty. ", "Freedom."],
  testimonials: {
    eyebrow: "Voices",
    h2: ["Words that ", "stay", "."],
    quotes: [
      { quote: "Manuela recommended Nº57 because I love wood — it really lasts all day. No exaggeration, simply right.", name: "Carolin", role: "Customer" },
      { quote: "I wanted something of my own, without turning my life upside down. Today I have more calm and make my own decisions — and it felt small and safe.", name: "Jasmin", role: "Partner" },
      { quote: "Finally someone who explains instead of selling. I buy again because I want to.", name: "Sandra", role: "Customer" },
    ],
  },
  termin: {
    eyebrow: "30 min · Free",
    h2: ["30 minutes — and you'll know where you ", "stand", "."],
    sub: "No pressure, no pitch. We look together at where you are right now and what your next step could be. You'll take those 30 minutes with you either way.",
    note: "Online via Zoom · 100 % free",
    firstName: "Your first name",
    email: "your@email.com",
    submit: "Reserve a slot",
    legal: "Plus a short guide for your start — straight to your inbox.",
    success: "Wonderful — I'll personally get in touch with you. ✦",
  },
  contact: {
    kredo: "“Scents that linger. Women who grow.”",
    email: "hallo@manuela-chogan.de",
    instagram: "@manuela.chogan",
    h2: ["Let's ", "talk", "."],
    sub: "Write to me about what your heart beats for — a fragrance or your own path. I reply personally.",
  },
  footer: {
    tagline: "Personal fragrance consultation — and honest guidance for women who want to calmly build something of their own.",
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
    partnerin: { eyebrow: "Your path", title: ["Build something of your ", "own", "."] },
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

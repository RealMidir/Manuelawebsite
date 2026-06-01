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
   Modell: Frauen als Chogan-Partnerinnen ins Netzwerk holen,
   persönlich begleiten (Mentoring). + Eigene Duft-Sets verkaufen.
   Angle: durch Beauty, Düfte & Lifestyle ein Nebeneinkommen aufbauen.
   Traffic kommt v.a. von Instagram (warm). Ton: konkret, ehrlich,
   Hilfe & Tipps von Manuela. Kein Guru, kein Em-Dash, kein Druck.
   ============================================================ */
const de = {
  nav: {
    links: [
      { label: "Duft-Sets", href: "#duefte" },
      { label: "Dein Weg", href: "#partnerin" },
      { label: "Über mich", href: "#ueber" },
      { label: "Kontakt", href: "#kontakt" },
    ],
    cta: "Partnerin werden",
  },
  hero: {
    eyebrow: "Beauty · Düfte · Lifestyle",
    h1: ["Mit Beauty, Düften und Lifestyle ", "ein Nebeneinkommen", " aufbauen", "", "."],
    sub: "Schön, dass du da bist. Ich zeige dir, wie du mit Chogan nebenbei startest: Düfte in Designer-Qualität, ein Einstieg ohne Risiko und meine Tipps und Hilfe auf dem ganzen Weg.",
    cta1: "Partnerin werden",
    cta2: "Meine Duft-Sets",
    note: "Einstieg ohne Risiko · Designer-Qualität · in deinem Tempo",
    kredo: "„Düfte, die erinnern. Frauen, die wachsen.“",
    imgLabel: "Parfum-Flakon auf warmem Marmor",
  },
  start: {
    eyebrow: "Warum überhaupt",
    old: "Die meisten denken: ein eigenes Nebeneinkommen heißt alles umkrempeln, hohes Risiko, alles allein durchziehen.",
    new: ["So muss es nicht sein. Du startest klein, mit Beauty und Düften, die du liebst, und ", "jemandem an deiner Seite", "."],
    sub: "Kein Alles-oder-nichts. Kein Verkaufsdruck. Und vor allem nicht allein, so wie ich damals.",
  },
  marquee: [
    "Beauty, Düfte und Lifestyle",
    "Ein Nebeneinkommen, das zu dir passt",
    "Designer-Qualität, fairer Preis",
    "Du startest nicht allein",
  ],
  offerings: {
    eyebrow: "Partnerin werden",
    h2: ["Was du an meiner Seite ", "bekommst", "."],
    sub: "Kein anonymer Link, kein Sich-selbst-überlassen. So helfe ich dir vom ersten Tag an.",
    more: "Mehr",
    items: [
      { tag: "01", title: "Tipps und Hilfe von mir", text: "Ich bin erreichbar, per WhatsApp und im Call. Du fragst, ich antworte, wir gehen die Schritte zusammen." },
      { tag: "02", title: "Einstieg ohne Risiko", text: "Du startest mit einem Startset, ohne Lager und ohne Mindestabnahme. Du gehst nichts ein." },
      { tag: "03", title: "Fertige Vorlagen", text: "Texte, Posting-Ideen und Abläufe, die schon funktionieren. Du musst nichts bei null erfinden." },
      { tag: "04", title: "Eine Gruppe im Rücken", text: "Du landest in einem Netzwerk von Frauen, die dasselbe aufbauen. Niemand startet allein." },
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
    eyebrow: "Düfte · Sets",
    h2: ["Meine ", "Duft-Sets", " in Designer-Qualität."],
    sub: "Hochwertige Düfte in Designer-Qualität, fair im Preis und langanhaltend auf der Haut. Bestell dein Set direkt bei mir und finde den, der bleibt.",
    products: [
      { name: "Entdecker-Set · 5 Düfte", note: "Fünf Proben zum Durchtesten. Finde in Ruhe deinen Lieblingsduft.", price: "€ 19,00", badge: "Zum Einstieg" },
      { name: "Bestseller-Set · 3 Parfums", note: "Die drei meistgekauften Düfte in voller Größe. Warm, frisch, sinnlich.", price: "€ 89,00", badge: "Beliebt" },
      { name: "Geschenk-Set", note: "Edel verpackt, der Duft, der in Erinnerung bleibt. Perfekt zum Verschenken.", price: "€ 49,00", badge: "Geschenkidee" },
    ],
    productTag: "Duft-Set · Chogan",
    discover: "Bestellen",
    cta: "Set bestellen",
    ctaNote: "Bestellung & Beratung per WhatsApp · schnelle Lieferung",
    pageIntro: "Über 100 Düfte in Designer-Qualität, fair im Preis, langanhaltend auf der Haut. Ich finde mit dir den, der bleibt.",
  },
  partnerin: {
    eyebrow: "So startest du",
    h2: ["In drei Schritten ", "Partnerin", "."],
    sub: "Kein kompliziertes Onboarding. So sieht dein Start mit mir konkret aus.",
    steps: [
      { n: "01", title: "Wir lernen uns kennen", text: "Du schreibst mir, erzählst wo du stehst, und ich gebe dir ehrlich meine Einschätzung. Kein Druck." },
      { n: "02", title: "Du startest mit Startset", text: "Du meldest dich über mich an und bekommst dein Startset. Ohne Risiko, ohne Mindestabnahme." },
      { n: "03", title: "Ich helfe dir weiter", text: "Wir bauen Schritt für Schritt auf, mit Vorlagen, Tipps und mir als direkter Ansprechpartnerin." },
    ],
    cta: "Partnerin werden",
    ctaNote: "Per WhatsApp oder Zoom · 100 % kostenfrei",
    pageIntro: "Kein Hype, kein Druck. Nur ein ehrlicher, ruhiger Weg, dir mit etwas, das du liebst, ein Nebeneinkommen aufzubauen.",
  },
  coaching: {
    eyebrow: "1:1 Mentoring",
    h2: ["Für die, die wirklich ", "aufbauen", " wollen."],
    sub: "Manche wollen einfach schöne Düfte und ein kleines Nebeneinkommen. Andere wollen ernsthaft etwas aufbauen. Wenn du zu den Zweiten gehörst, arbeite ich mit dir direkt und persönlich.",
    points: [
      { title: "Direkt mit mir", text: "Enges 1:1-Mentoring statt Gruppe. Mein voller Fokus auf dem, was du aufbaust." },
      { title: "Dein eigener Plan", text: "Eine klare Strategie, auf dich zugeschnitten, mit konkreten Schritten und Zielen." },
      { title: "Nur für Ambitionierte", text: "Begrenzte Plätze. Nur, wenn du wirklich Zeit und Energie investieren willst." },
    ],
    cta: "Ist das was für dich?",
    ctaNote: "Plätze begrenzt · Details im Gespräch",
  },
  about: {
    eyebrow: "Über mich",
    h2: ["Warum ich das ", "mache", "."],
    paras: [
      "Ich bin Manuela. Ich habe früh mit Chogan angefangen und kam voran, aber mit vielen Umwegen und Problemen, die mir niemand abnehmen konnte. Was mir gefehlt hat: jemand an meiner Seite, der den Weg schon kennt.",
      "Im Chogan-Netzwerk habe ich genau das gefunden. Es wurde leichter, und es haben sich Türen geöffnet, mit denen ich nie gerechnet hätte. Genau das möchte ich an dich weitergeben.",
    ],
    quote: "„Ich musste allein anfangen. Du nicht.“",
    role: "Manuela · Chogan Partnerin & Mentorin",
    trust: ["Persönlich erreichbar", "Echte Hilfe, kein Funnel", "In deinem Tempo"],
    imgLabel: "Manuela · Porträt folgt",
  },
  statement: ["Düfte. Beauty. ", "Business."],
  testimonials: {
    eyebrow: "Stimmen",
    h2: ["Worte, die ", "bleiben", "."],
    quotes: [
      { quote: "Ich hab Nº57 von Manuela empfohlen bekommen, weil ich Holz mag. Hält wirklich den ganzen Tag, und die Beratung war genauso unaufgeregt.", name: "Carolin", role: "Kundin" },
      { quote: "Ich wollte etwas Eigenes, aber nicht allein im Internet rumprobieren. Manuela war von Tag eins erreichbar, das hat den Unterschied gemacht.", name: "Jasmin", role: "Partnerin" },
      { quote: "Was ich gut fand: keine großen Versprechen. Sie hat mir ehrlich gesagt, worauf ich mich einlasse. Genau deshalb hab ich es gemacht.", name: "Sandra", role: "Partnerin" },
    ],
  },
  termin: {
    eyebrow: "Tipps & Hilfe von mir",
    h2: ["Ich helfe dir beim ", "Start", "."],
    sub: "Trag dich ein, dann zeige ich dir, wie du mit Chogan starten kannst, und gebe dir meine Tipps. Kein Druck, keine Verpflichtung.",
    note: "Persönlich von mir · per WhatsApp oder Zoom · kostenfrei",
    firstName: "Dein Vorname",
    email: "deine@email.de",
    submit: "Schreib mir",
    legal: "Plus ein kurzer Leitfaden für deinen Start, direkt ins Postfach.",
    success: "Wunderbar, ich melde mich persönlich bei dir. ✦",
  },
  contact: {
    kredo: "„Düfte, die erinnern. Frauen, die wachsen.“",
    email: "hallo@manuela-chogan.de",
    instagram: "@manuela.chogan",
    h2: ["Lass uns ", "sprechen", "."],
    sub: "Schreib mir, ob für ein Duft-Set oder den Start als Partnerin. Ich antworte persönlich.",
  },
  footer: {
    tagline: "Chogan Partnerin & Mentorin. Ich helfe Frauen, sich mit Beauty und Düften ein Nebeneinkommen aufzubauen. Plus hochwertige Duft-Sets direkt bei mir.",
    navLabel: "Navigation",
    followLabel: "Folgen",
    legal: [
      { label: "Impressum", href: "#" },
      { label: "Datenschutz", href: "#" },
    ],
    rights: "Alle Rechte vorbehalten",
  },
  pages: {
    duefte: { eyebrow: "Düfte & Sets", title: ["Finde den Duft, der ", "bleibt", "."] },
    partnerin: { eyebrow: "Dein Weg", title: ["Werde Partnerin an ", "meiner Seite", "."] },
    ueber: { eyebrow: "Über mich", title: ["Schön, dass du ", "hier", " bist."] },
    kontakt: { eyebrow: "Kontakt", title: ["Lass uns ", "sprechen", "."] },
    backHome: "Zur Startseite",
  },
};

const en: typeof de = {
  nav: {
    links: [
      { label: "Fragrance sets", href: "#duefte" },
      { label: "Your path", href: "#partnerin" },
      { label: "About me", href: "#ueber" },
      { label: "Contact", href: "#kontakt" },
    ],
    cta: "Become a partner",
  },
  hero: {
    eyebrow: "Beauty · Fragrances · Lifestyle",
    h1: ["Build a ", "second income", " with beauty, fragrances and lifestyle", "", "."],
    sub: "Lovely that you're here. I'll show you how to start with Chogan on the side: fragrances in designer quality, a risk-free entry, and my tips and help all along the way.",
    cta1: "Become a partner",
    cta2: "My fragrance sets",
    note: "Risk-free entry · designer quality · at your own pace",
    kredo: "“Scents that linger. Women who grow.”",
    imgLabel: "Perfume bottle on warm marble",
  },
  start: {
    eyebrow: "Why at all",
    old: "Most people think: a second income means turning everything upside down, high risk, doing it all alone.",
    new: ["It doesn't have to be that way. You start small, with beauty and fragrances you love, and ", "someone by your side", "."],
    sub: "No all-or-nothing. No sales pressure. And above all not alone, the way I was back then.",
  },
  marquee: [
    "Beauty, fragrances and lifestyle",
    "A second income that fits you",
    "Designer quality, fair price",
    "You don't start alone",
  ],
  offerings: {
    eyebrow: "Become a partner",
    h2: ["What you get ", "by my side", "."],
    sub: "No anonymous link, no being left to figure it out alone. This is how I help you from day one.",
    more: "More",
    items: [
      { tag: "01", title: "My tips and help", text: "I'm reachable, on WhatsApp and on calls. You ask, I answer, we take the steps together." },
      { tag: "02", title: "Risk-free entry", text: "You start with a starter set, no stock and no minimum order. You're not committing to anything." },
      { tag: "03", title: "Ready-made templates", text: "Texts, posting ideas and workflows that already work. You don't reinvent anything from scratch." },
      { tag: "04", title: "A group behind you", text: "You land in a network of women building the same thing. Nobody starts alone." },
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
    eyebrow: "Fragrances · Sets",
    h2: ["My ", "fragrance sets", " in designer quality."],
    sub: "Premium fragrances in designer quality, fair in price and long-lasting on the skin. Order your set directly from me and find the one that stays.",
    products: [
      { name: "Discovery set · 5 scents", note: "Five samples to try at leisure. Find your favourite in peace.", price: "€ 19.00", badge: "To start" },
      { name: "Bestseller set · 3 perfumes", note: "The three most-bought scents in full size. Warm, fresh, sensual.", price: "€ 89.00", badge: "Popular" },
      { name: "Gift set", note: "Beautifully wrapped, the scent that stays in memory. Perfect to give.", price: "€ 49.00", badge: "Gift idea" },
    ],
    productTag: "Fragrance set · Chogan",
    discover: "Order",
    cta: "Order a set",
    ctaNote: "Order & advice via WhatsApp · fast delivery",
    pageIntro: "Over 100 fragrances in designer quality, fair in price, long-lasting on the skin. Together we'll find the one that stays.",
  },
  partnerin: {
    eyebrow: "How you start",
    h2: ["Become a partner in ", "three steps", "."],
    sub: "No complicated onboarding. Here's what your start with me looks like, concretely.",
    steps: [
      { n: "01", title: "We get to know each other", text: "You message me, tell me where you stand, and I give you my honest take. No pressure." },
      { n: "02", title: "You start with a starter set", text: "You sign up through me and get your starter set. No risk, no minimum order." },
      { n: "03", title: "I help you further", text: "We build step by step, with templates, tips and me as your direct point of contact." },
    ],
    cta: "Become a partner",
    ctaNote: "Via WhatsApp or Zoom · 100 % free",
    pageIntro: "No hype, no pressure. Just an honest, calm path to build a second income with something you love.",
  },
  coaching: {
    eyebrow: "1:1 mentoring",
    h2: ["For those who truly want to ", "build", "."],
    sub: "Some just want beautiful fragrances and a small second income. Others want to seriously build something. If you're the second kind, I work with you directly and personally.",
    points: [
      { title: "Directly with me", text: "Close 1:1 mentoring instead of a group. My full focus on what you're building." },
      { title: "Your own plan", text: "A clear strategy, tailored to you, with concrete steps and goals." },
      { title: "For the ambitious only", text: "Limited spots. Only if you're truly ready to invest time and energy." },
    ],
    cta: "Is this for you?",
    ctaNote: "Limited spots · details in the call",
  },
  about: {
    eyebrow: "About me",
    h2: ["Why I ", "do this", "."],
    paras: [
      "I'm Manuela. I started with Chogan early and made progress, but with plenty of detours and problems no one could take off my hands. What I was missing: someone by my side who already knew the way.",
      "In the Chogan network I found exactly that. It got easier, and doors opened I never expected. That's what I want to pass on to you.",
    ],
    quote: "“I had to start alone. You don't.”",
    role: "Manuela · Chogan Partner & Mentor",
    trust: ["Personally reachable", "Real help, not a funnel", "At your own pace"],
    imgLabel: "Manuela · portrait coming",
  },
  statement: ["Scents. Beauty. ", "Business."],
  testimonials: {
    eyebrow: "Voices",
    h2: ["Words that ", "stay", "."],
    quotes: [
      { quote: "Manuela recommended Nº57 because I love wood. It really lasts all day, and the advice was just as unpretentious.", name: "Carolin", role: "Customer" },
      { quote: "I wanted something of my own, but not to figure it out alone online. Manuela was reachable from day one, that made the difference.", name: "Jasmin", role: "Partner" },
      { quote: "What I liked: no big promises. She told me honestly what I was getting into. That's exactly why I did it.", name: "Sandra", role: "Partner" },
    ],
  },
  termin: {
    eyebrow: "Tips & help from me",
    h2: ["I help you ", "get started", "."],
    sub: "Sign up and I'll show you how to start with Chogan, and give you my tips. No pressure, no obligation.",
    note: "Personally from me · via WhatsApp or Zoom · free",
    firstName: "Your first name",
    email: "your@email.com",
    submit: "Write to me",
    legal: "Plus a short guide for your start, straight to your inbox.",
    success: "Wonderful, I'll personally get in touch with you. ✦",
  },
  contact: {
    kredo: "“Scents that linger. Women who grow.”",
    email: "hallo@manuela-chogan.de",
    instagram: "@manuela.chogan",
    h2: ["Let's ", "talk", "."],
    sub: "Write to me, whether for a fragrance set or starting as a partner. I reply personally.",
  },
  footer: {
    tagline: "Chogan partner & mentor. I help women build a second income with beauty and fragrances. Plus premium fragrance sets directly from me.",
    navLabel: "Navigation",
    followLabel: "Follow",
    legal: [
      { label: "Imprint", href: "#" },
      { label: "Privacy", href: "#" },
    ],
    rights: "All rights reserved",
  },
  pages: {
    duefte: { eyebrow: "Fragrances & Sets", title: ["Find the scent that ", "stays", "."] },
    partnerin: { eyebrow: "Your path", title: ["Become a partner by ", "my side", "."] },
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

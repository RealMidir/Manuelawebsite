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
   persönlich begleiten. + Eigene Duft-Sets verkaufen.
   + 1:1-Coaching als Premium-Tier für Ambitionierte.
   Ton: konkret, ehrlich, Nähe — kein Guru, kein Verkaufsdruck.
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
    eyebrow: "Chogan-Partnerin werden · mit Manuela",
    h1: ["Bau dir etwas ", "Eigenes", " auf — ", "an meiner Seite", "."],
    sub: "Ich zeige dir, wie du als Chogan-Partnerin startest — mit Düften, die Frauen wirklich wieder kaufen, einem Einstieg ohne Risiko und mir als Mentorin, die dich Schritt für Schritt begleitet.",
    cta1: "Partnerin werden",
    cta2: "Meine Duft-Sets",
    note: "Einstieg ohne Risiko · persönliche Begleitung · in deinem Tempo",
    kredo: "„Düfte, die erinnern. Frauen, die wachsen.“",
    imgLabel: "Parfum-Flakon auf warmem Marmor",
  },
  start: {
    eyebrow: "Warum überhaupt",
    old: "Die meisten denken: ein eigenes Business heißt alles hinschmeißen, hohes Risiko, ständig irgendwem etwas andrehen.",
    new: ["So muss es nicht sein. Du startest klein, neben deinem Leben — mit etwas, das du ", "liebst", ", und jemandem, der dich begleitet."],
    sub: "Kein Alles-oder-nichts. Kein Verkaufsdruck. Nur ein erster Schritt, den du jederzeit wieder zurückgehen kannst.",
  },
  marquee: [
    "Etwas Eigenes — begleitet, nicht allein",
    "Düfte, die Frauen wieder kaufen",
    "Einstieg ohne Risiko",
    "Du startest nicht allein",
  ],
  offerings: {
    eyebrow: "Partnerin werden",
    h2: ["Was du an meiner Seite ", "bekommst", "."],
    sub: "Kein anonymer Link, kein Sich-selbst-überlassen. So begleite ich dich vom ersten Tag an.",
    more: "Mehr",
    items: [
      { tag: "01", title: "Persönliche Begleitung", text: "Ich bin erreichbar — per WhatsApp und im Call. Du fragst, ich antworte, wir gehen die Schritte gemeinsam." },
      { tag: "02", title: "Einstieg ohne Risiko", text: "Du startest mit einem Startset, ohne Lager und ohne Mindestabnahme. Du gehst nichts ein." },
      { tag: "03", title: "Fertige Vorlagen", text: "Texte, Posting-Ideen und Abläufe, die schon funktionieren — du musst nichts bei null erfinden." },
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
    h2: ["Meine ", "Duft-Sets", " — bestell direkt bei mir."],
    sub: "Hochwertige Düfte, fair im Preis, langanhaltend auf der Haut. Bestell dein Set direkt bei mir — und finde den, der bleibt.",
    products: [
      { name: "Entdecker-Set · 5 Düfte", note: "Fünf Proben zum Durchtesten — finde in Ruhe deinen Lieblingsduft.", price: "€ 19,00", badge: "Zum Einstieg" },
      { name: "Bestseller-Set · 3 Parfums", note: "Die drei meistgekauften Düfte in voller Größe. Warm, frisch, sinnlich.", price: "€ 89,00", badge: "Beliebt" },
      { name: "Geschenk-Set", note: "Edel verpackt — der Duft, der in Erinnerung bleibt. Perfekt zum Verschenken.", price: "€ 49,00", badge: "Geschenkidee" },
    ],
    productTag: "Duft-Set · Chogan",
    discover: "Bestellen",
    cta: "Set bestellen",
    ctaNote: "Bestellung & Beratung per WhatsApp · schnelle Lieferung",
    pageIntro: "Über 100 Düfte — hochwertig in der Qualität, fair im Preis, langanhaltend auf der Haut. Ich finde mit dir den, der bleibt.",
  },
  partnerin: {
    eyebrow: "So startest du",
    h2: ["In drei Schritten ", "Partnerin", "."],
    sub: "Kein kompliziertes Onboarding. So sieht dein Start mit mir konkret aus.",
    steps: [
      { n: "01", title: "Wir lernen uns kennen", text: "Ein kurzes, kostenloses Gespräch. Du erzählst, wo du stehst — ich sage dir ehrlich, ob das zu dir passt." },
      { n: "02", title: "Du startest mit Startset", text: "Du meldest dich über mich an und bekommst dein Startset. Ohne Risiko, ohne Mindestabnahme." },
      { n: "03", title: "Ich begleite dich", text: "Wir bauen Schritt für Schritt auf — mit Vorlagen, Plänen und mir als direkter Ansprechpartnerin." },
    ],
    cta: "Partnerin werden",
    ctaNote: "Online via Zoom oder WhatsApp · 100 % kostenfrei",
    pageIntro: "Kein Hype, kein Druck. Nur ein ehrlicher, ruhiger Weg, dir mit etwas, das du liebst, etwas Eigenes aufzubauen.",
  },
  coaching: {
    eyebrow: "1:1 Premium-Begleitung",
    h2: ["Für die, die wirklich ", "aufbauen", " wollen."],
    sub: "Manche wollen einfach schöne Düfte und ein kleines Standbein. Andere wollen ernsthaft etwas aufbauen. Wenn du zu den Zweiten gehörst, arbeite ich mit dir direkt und persönlich.",
    points: [
      { title: "Direkt mit mir", text: "Enge 1:1-Zusammenarbeit statt Gruppe — mein voller Fokus auf deinem Aufbau." },
      { title: "Dein eigener Plan", text: "Eine klare Strategie, auf dich zugeschnitten — mit konkreten Schritten und Zielen." },
      { title: "Nur für Ambitionierte", text: "Begrenzte Plätze. Nur, wenn du wirklich Zeit und Energie investieren willst." },
    ],
    cta: "Ist das was für dich?",
    ctaNote: "Plätze begrenzt · Details im Gespräch",
  },
  about: {
    eyebrow: "Über mich",
    h2: ["Warum ich das ", "mache", "."],
    paras: [
      "Ich bin Manuela. Lange hatte ich einen sicheren Job, feste Zeiten — und das leise Gefühl, dass da mehr sein müsste. Nicht mehr Geld um jeden Preis. Mehr Eigenes.",
      "Heute baue ich mir das mit Chogan auf — ruhig, neben dem Leben, mit Düften, die ich liebe. Und ich begleite andere Frauen genau auf diesem Weg: persönlich, erreichbar, ohne sie mit einem Link allein zu lassen.",
    ],
    quote: "„Niemand baut sich allein etwas auf. Den Unterschied macht, wer an deiner Seite steht.“",
    role: "Manuela — Chogan Partnerin & Mentorin",
    trust: ["Persönlich erreichbar", "Echte Begleitung, kein Funnel", "In deinem Tempo"],
    imgLabel: "Manuela · Porträt folgt",
  },
  statement: ["Düfte. Beauty. ", "Begleitung."],
  testimonials: {
    eyebrow: "Stimmen",
    h2: ["Worte, die ", "bleiben", "."],
    quotes: [
      { quote: "Ich hab Nº57 von Manuela empfohlen bekommen, weil ich Holz mag — hält wirklich den ganzen Tag. Genauso unaufgeregt war auch die Beratung.", name: "Carolin", role: "Kundin" },
      { quote: "Ich wollte etwas Eigenes, aber nicht allein im Internet rumprobieren. Manuela war von Tag eins erreichbar — das hat den Unterschied gemacht.", name: "Jasmin", role: "Partnerin" },
      { quote: "Was ich gut fand: keine großen Versprechen. Sie hat mir ehrlich gesagt, worauf ich mich einlasse. Genau deshalb hab ich's gemacht.", name: "Sandra", role: "Partnerin" },
    ],
  },
  termin: {
    eyebrow: "Kostenloses Erstgespräch",
    h2: ["Lass uns kurz ", "sprechen", "."],
    sub: "Erzähl mir, wo du stehst — und ich sage dir ehrlich, ob und wie ein Start als Partnerin zu dir passt. Kein Druck, keine Verpflichtung.",
    note: "Online via Zoom oder WhatsApp · 100 % kostenfrei",
    firstName: "Dein Vorname",
    email: "deine@email.de",
    submit: "Gespräch anfragen",
    legal: "Plus ein kurzer Leitfaden für deinen Start — direkt ins Postfach.",
    success: "Wunderbar — ich melde mich persönlich bei dir. ✦",
  },
  contact: {
    kredo: "„Düfte, die erinnern. Frauen, die wachsen.“",
    email: "hallo@manuela-chogan.de",
    instagram: "@manuela.chogan",
    h2: ["Lass uns ", "sprechen", "."],
    sub: "Schreib mir — ob für ein Duft-Set oder den Start als Partnerin. Ich antworte persönlich.",
  },
  footer: {
    tagline: "Chogan-Partnerin & Mentorin — ich begleite Frauen, die sich mit Düften etwas Eigenes aufbauen. Plus hochwertige Duft-Sets direkt bei mir.",
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
    eyebrow: "Become a Chogan partner · with Manuela",
    h1: ["Build something ", "of your own", " — ", "by my side", "."],
    sub: "I'll show you how to start as a Chogan partner — with fragrances women genuinely buy again, a risk-free entry, and me as your mentor, guiding you step by step.",
    cta1: "Become a partner",
    cta2: "My fragrance sets",
    note: "Risk-free entry · personal guidance · at your own pace",
    kredo: "“Scents that linger. Women who grow.”",
    imgLabel: "Perfume bottle on warm marble",
  },
  start: {
    eyebrow: "Why at all",
    old: "Most people think: something of your own means quitting everything, high risk, constantly pushing things onto people.",
    new: ["It doesn't have to be that way. You start small, alongside your life — with something you ", "love", ", and someone who guides you."],
    sub: "No all-or-nothing. No sales pressure. Just a first step you can walk back any time.",
  },
  marquee: [
    "Something of your own — guided, not alone",
    "Fragrances women buy again",
    "A risk-free entry",
    "You don't start alone",
  ],
  offerings: {
    eyebrow: "Become a partner",
    h2: ["What you get ", "by my side", "."],
    sub: "No anonymous link, no being left to figure it out alone. This is how I guide you from day one.",
    more: "More",
    items: [
      { tag: "01", title: "Personal guidance", text: "I'm reachable — on WhatsApp and on calls. You ask, I answer, we take the steps together." },
      { tag: "02", title: "Risk-free entry", text: "You start with a starter set, no stock and no minimum order. You're not committing to anything." },
      { tag: "03", title: "Ready-made templates", text: "Texts, posting ideas and workflows that already work — you don't reinvent anything from scratch." },
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
    h2: ["My ", "fragrance sets", " — order directly from me."],
    sub: "Premium fragrances, fair in price, long-lasting on the skin. Order your set directly from me — and find the one that stays.",
    products: [
      { name: "Discovery set · 5 scents", note: "Five samples to try at leisure — find your favourite in peace.", price: "€ 19.00", badge: "To start" },
      { name: "Bestseller set · 3 perfumes", note: "The three most-bought scents in full size. Warm, fresh, sensual.", price: "€ 89.00", badge: "Popular" },
      { name: "Gift set", note: "Beautifully wrapped — the scent that stays in memory. Perfect to give.", price: "€ 49.00", badge: "Gift idea" },
    ],
    productTag: "Fragrance set · Chogan",
    discover: "Order",
    cta: "Order a set",
    ctaNote: "Order & advice via WhatsApp · fast delivery",
    pageIntro: "Over 100 fragrances — premium in quality, fair in price, long-lasting on the skin. Together we'll find the one that stays.",
  },
  partnerin: {
    eyebrow: "How you start",
    h2: ["Become a partner in ", "three steps", "."],
    sub: "No complicated onboarding. Here's what your start with me looks like, concretely.",
    steps: [
      { n: "01", title: "We get to know each other", text: "A short, free call. You tell me where you stand — I tell you honestly whether this fits you." },
      { n: "02", title: "You start with a starter set", text: "You sign up through me and get your starter set. No risk, no minimum order." },
      { n: "03", title: "I guide you", text: "We build step by step — with templates, plans and me as your direct point of contact." },
    ],
    cta: "Become a partner",
    ctaNote: "Online via Zoom or WhatsApp · 100 % free",
    pageIntro: "No hype, no pressure. Just an honest, calm path to build something of your own with something you love.",
  },
  coaching: {
    eyebrow: "1:1 premium guidance",
    h2: ["For those who truly want to ", "build", "."],
    sub: "Some just want beautiful fragrances and a small second income. Others want to seriously build something. If you're the second kind, I work with you directly and personally.",
    points: [
      { title: "Directly with me", text: "Close 1:1 collaboration instead of a group — my full focus on what you're building." },
      { title: "Your own plan", text: "A clear strategy, tailored to you — with concrete steps and goals." },
      { title: "For the ambitious only", text: "Limited spots. Only if you're truly ready to invest time and energy." },
    ],
    cta: "Is this for you?",
    ctaNote: "Limited spots · details in the call",
  },
  about: {
    eyebrow: "About me",
    h2: ["Why I ", "do this", "."],
    paras: [
      "I'm Manuela. For a long time I had a secure job, fixed hours — and the quiet feeling that there should be more. Not more money at any cost. More of my own.",
      "Today I'm building exactly that with Chogan — calmly, alongside life, with fragrances I love. And I guide other women down this same path: personally, reachable, without leaving them alone with a link.",
    ],
    quote: "“No one builds something on their own. The difference is who stands by your side.”",
    role: "Manuela — Chogan Partner & Mentor",
    trust: ["Personally reachable", "Real guidance, not a funnel", "At your own pace"],
    imgLabel: "Manuela · portrait coming",
  },
  statement: ["Scents. Beauty. ", "Guidance."],
  testimonials: {
    eyebrow: "Voices",
    h2: ["Words that ", "stay", "."],
    quotes: [
      { quote: "Manuela recommended Nº57 because I love wood — it really lasts all day. The advice was just as unpretentious.", name: "Carolin", role: "Customer" },
      { quote: "I wanted something of my own, but not to figure it out alone online. Manuela was reachable from day one — that made the difference.", name: "Jasmin", role: "Partner" },
      { quote: "What I liked: no big promises. She told me honestly what I was getting into. That's exactly why I did it.", name: "Sandra", role: "Partner" },
    ],
  },
  termin: {
    eyebrow: "Free first call",
    h2: ["Let's have a quick ", "chat", "."],
    sub: "Tell me where you stand — and I'll tell you honestly whether and how starting as a partner fits you. No pressure, no obligation.",
    note: "Online via Zoom or WhatsApp · 100 % free",
    firstName: "Your first name",
    email: "your@email.com",
    submit: "Request a call",
    legal: "Plus a short guide for your start — straight to your inbox.",
    success: "Wonderful — I'll personally get in touch with you. ✦",
  },
  contact: {
    kredo: "“Scents that linger. Women who grow.”",
    email: "hallo@manuela-chogan.de",
    instagram: "@manuela.chogan",
    h2: ["Let's ", "talk", "."],
    sub: "Write to me — whether for a fragrance set or starting as a partner. I reply personally.",
  },
  footer: {
    tagline: "Chogan partner & mentor — I guide women building something of their own with fragrances. Plus premium fragrance sets directly from me.",
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

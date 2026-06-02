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
   Multi-Page: Startseite funnelt zur kostenlosen Chogan-Registrierung
   (Direktlink, kein Call). Unterseiten: Dein Weg (Roadmap, Mentoring als
   Endziel), Über mich, Duft-Sets, Kontakt (Insta/WhatsApp/Zoom).
   Angle: durch Beauty, Düfte & Lifestyle ein Nebeneinkommen aufbauen.
   Ton: konkret, ehrlich, Hilfe von Manuela. Kein Guru, kein Em-Dash.
   ============================================================ */
const de = {
  nav: {
    links: [
      { label: "Dein Weg", href: "/dein-weg" },
      { label: "Duft-Sets", href: "/duefte" },
      { label: "Über mich", href: "/ueber" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    cta: "Kostenlos registrieren",
  },
  hero: {
    eyebrow: "Beauty · Düfte · Lifestyle",
    h1: ["Mit Beauty, Düften und Lifestyle ", "ein Nebeneinkommen", " aufbauen", "", "."],
    sub: "Schön, dass du da bist. Du startest mit Chogan komplett kostenlos: Düfte in Designer-Qualität, ein Einstieg ohne Risiko und meine Tipps und Hilfe auf dem ganzen Weg.",
    cta1: "Kostenlos registrieren",
    cta2: "Dein Weg ansehen",
    note: "Direkt bei Chogan · kein Risiko · in deinem Tempo",
    kredo: "„Düfte, die erinnern. Frauen, die wachsen.“",
    imgLabel: "Parfum-Flakon auf warmem Marmor",
  },
  start: {
    eyebrow: "Warum überhaupt",
    old: "Die meisten denken: ein eigenes Nebeneinkommen heißt alles umkrempeln, hohes Risiko, alles allein durchziehen.",
    new: ["So muss es nicht sein. Du startest klein, mit Beauty und Düften, die du liebst, und ", "jemandem an deiner Seite", "."],
    sub: "Kein Alles-oder-nichts. Kein Verkaufsdruck. Und vor allem nicht allein, so wie ich damals.",
  },
  register: {
    eyebrow: "Kostenlos starten",
    h2: ["Registriere dich kostenlos ", "bei Chogan", "."],
    sub: "Dein Einstieg läuft direkt über Chogan und kostet dich nichts. Kein Abo, keine Mindestabnahme, keine versteckten Kosten. Du legst dir nur deinen Zugang an, der Rest kommt von mir.",
    why: [
      { title: "Warum kostenlos?", text: "Chogan verdient an den Produkten, nicht an deiner Anmeldung. Darum kannst du ohne Risiko reinschnuppern." },
      { title: "Warum über mich?", text: "Ich verdiene nur, wenn du wirklich vorankommst. Deshalb helfe ich dir ehrlich, statt dich mit einem Link allein zu lassen." },
      { title: "Was du danach machst", text: "Düfte selbst nutzen, an Freundinnen weitergeben oder dir etwas aufbauen. Du entscheidest, ich begleite dich." },
    ],
    cta: "Jetzt kostenlos registrieren",
    ctaNote: "Direkt bei Chogan · 2 Minuten · keine Kosten",
    help: "Fragen vorher? Erreich mich kurz hier:",
  },
  whyChogan: {
    eyebrow: "Warum Chogan",
    h2: ["Designer-Qualität, ", "ohne den Markenaufschlag", "."],
    paras: [
      "Chogan ist ein italienisches Beauty-Haus aus Barletta. Die Olfazeta-Düfte sind hochkonzentriert, rund 30 % Parfumöl, und an bekannten Designerdüften orientiert. Du zahlst aber rund 60 bis 70 % weniger, also für den Duft statt für die Werbung.",
      "So steigst du in die Beauty-Nische ein, ohne im Drogerie-Regal gegen die großen Konzerne anzutreten. Offen für Frauen und Männer.",
    ],
    badgesTitle: "Worauf du dich verlassen kannst",
    badges: [
      "Made in Italy · Barletta",
      "Bio-zertifiziert (Biocertitalia)",
      "Olfazeta · ~30 % Parfumöl",
      "Nicht an Tieren getestet*",
    ],
    badgeNote: "*Herstellerangabe von Chogan.",
    linkLabel: "Mehr über Chogan ansehen",
    proofLabel: "Bio-Zertifikat prüfen",
  },
  ctaBand: {
    register: {
      eyebrow: "Kostenlos starten",
      h2: ["Heute ", "kostenlos registrieren", "."],
      sub: "Direkt bei Chogan, in zwei Minuten. Kein Abo, keine Mindestabnahme. Das einzige Risiko ist, es nicht zu starten.",
      cta: "Jetzt kostenlos registrieren",
      note: "Direkt bei Chogan · keine Kosten",
    },
    bewerben: {
      eyebrow: "1:1 Mentoring",
      h2: ["Ernsthaft aufbauen? ", "Bewirb dich", "."],
      sub: "Für die, die wirklich Umsatz aufbauen wollen, arbeite ich direkt mit dir. Begrenzte Plätze, weil mein Fokus dann ganz bei dir liegt.",
      cta: "Fürs Mentoring bewerben",
      note: "Plätze begrenzt · per WhatsApp oder Zoom",
    },
  },
  values: {
    eyebrow: "Meine Werte",
    h2: ["Wofür ich ", "stehe", "."],
    sub: "Warum ich Chogan gewählt habe und wie ich arbeite. Daran kannst du mich messen.",
    items: [
      { title: "Ehrlichkeit vor Hype", text: "Keine großen Versprechen. Ich sage dir vorher, worauf du dich einlässt und was realistisch ist." },
      { title: "Hilfe vor Verkauf", text: "Ich verdiene erst, wenn du vorankommst. Also helfe ich dir wirklich, statt dich mit einem Link allein zu lassen." },
      { title: "Qualität, die man riecht", text: "Chogan ist Made in Italy, bio-zertifiziert und hochkonzentriert. Hinter dem, was du weitergibst, kannst du stehen." },
      { title: "Wachstum für alle", text: "Ein Weg, der für Frauen und Männer offen ist. In deinem Tempo, mit einer Gruppe im Rücken." },
    ],
    cta: "Partnerin werden",
    ctaNote: "Kostenlos & unverbindlich · ich begleite dich",
  },
  marquee: [
    "Beauty, Düfte und Lifestyle",
    "Ein Nebeneinkommen, das zu dir passt",
    "Designer-Qualität, fairer Preis",
    "Du startest nicht allein",
  ],
  offerings: {
    eyebrow: "Warum mit mir",
    h2: ["Was du an meiner Seite ", "bekommst", "."],
    sub: "Kein anonymer Link, kein Sich-selbst-überlassen. So helfe ich dir vom ersten Tag an.",
    more: "Mehr",
    items: [
      { tag: "01", title: "Tipps und Hilfe von mir", text: "Ich bin erreichbar, per WhatsApp und im Call. Du fragst, ich antworte, wir gehen die Schritte zusammen." },
      { tag: "02", title: "Einstieg ohne Risiko", text: "Du startest kostenlos, ohne Lager und ohne Mindestabnahme. Du gehst nichts ein." },
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
    cta: "Set per WhatsApp bestellen",
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
  roadmap: {
    eyebrow: "Dein Weg",
    h2: ["Von der Anmeldung bis zu ", "deinem Ziel", "."],
    sub: "Jede geht ihr eigenes Tempo. So sieht der Weg aus, wenn du ihn gehen willst.",
    steps: [
      { n: "01", title: "Kostenlos registrieren", text: "Dein Zugang bei Chogan, direkt über mich. Ohne Risiko, ohne Kosten." },
      { n: "02", title: "Deine ersten Düfte", text: "Du testest, findest deine Favoriten und nutzt sie selbst oder gibst sie weiter." },
      { n: "03", title: "Erste Kundinnen", text: "Aus einem netten Kompliment werden Empfehlungen. Ich gebe dir Vorlagen und Tipps, die schon funktionieren." },
      { n: "04", title: "Dein Netzwerk wächst", text: "Du holst andere dazu und baust dir Schritt für Schritt etwas Eigenes auf." },
    ],
    goalEyebrow: "Das Endziel",
    goalTitle: "Höhere Umsätze mit 1:1 Mentoring",
    goalText: "Wenn du wirklich aufbauen willst, arbeite ich direkt mit dir. Mehr dazu gleich.",
    cta: "Jetzt kostenlos starten",
    ctaNote: "Schritt 1 beginnt hier · direkt bei Chogan",
  },
  coaching: {
    eyebrow: "1:1 Mentoring",
    h2: ["Für die, die wirklich ", "aufbauen", " wollen."],
    sub: "Manche wollen einfach schöne Düfte und ein kleines Nebeneinkommen. Andere wollen ernsthaft etwas aufbauen, mit höheren Umsätzen. Wenn du zu den Zweiten gehörst, arbeite ich mit dir direkt und persönlich.",
    points: [
      { title: "Direkt mit mir", text: "Enges 1:1-Mentoring statt Gruppe. Mein voller Fokus auf dem, was du aufbaust." },
      { title: "Dein eigener Plan", text: "Eine klare Strategie, auf dich zugeschnitten, mit konkreten Schritten und Zielen." },
      { title: "Nur für Ambitionierte", text: "Begrenzte Plätze. Nur, wenn du wirklich Zeit und Energie investieren willst." },
    ],
    cta: "Ist das was für dich?",
    ctaNote: "Plätze begrenzt · schreib mir kurz",
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
    sub: "Hast du Fragen, bevor du startest? Erreich mich da, wo es dir am liebsten ist.",
    instagram: { label: "Instagram", note: "Schreib mir eine DM" },
    whatsapp: { label: "WhatsApp", note: "Meist Antwort am selben Tag" },
    zoom: { label: "Zoom-Call", note: "Auf Wunsch, einfach kurz anfragen" },
    kredo: "„Düfte, die erinnern. Frauen, die wachsen.“",
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
    deinweg: { eyebrow: "Dein Weg", title: ["Dein Weg mit ", "Chogan", "."] },
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
      { label: "Your path", href: "/dein-weg" },
      { label: "Fragrance sets", href: "/duefte" },
      { label: "About me", href: "/ueber" },
      { label: "Contact", href: "/kontakt" },
    ],
    cta: "Register free",
  },
  hero: {
    eyebrow: "Beauty · Fragrances · Lifestyle",
    h1: ["Build a ", "second income", " with beauty, fragrances and lifestyle", "", "."],
    sub: "Lovely that you're here. You start with Chogan completely free: fragrances in designer quality, a risk-free entry, and my tips and help all along the way.",
    cta1: "Register free",
    cta2: "See your path",
    note: "Directly with Chogan · no risk · at your own pace",
    kredo: "“Scents that linger. Women who grow.”",
    imgLabel: "Perfume bottle on warm marble",
  },
  start: {
    eyebrow: "Why at all",
    old: "Most people think: a second income means turning everything upside down, high risk, doing it all alone.",
    new: ["It doesn't have to be that way. You start small, with beauty and fragrances you love, and ", "someone by your side", "."],
    sub: "No all-or-nothing. No sales pressure. And above all not alone, the way I was back then.",
  },
  register: {
    eyebrow: "Start free",
    h2: ["Register for free ", "with Chogan", "."],
    sub: "Your entry runs directly through Chogan and costs you nothing. No subscription, no minimum order, no hidden costs. You just set up your access, the rest comes from me.",
    why: [
      { title: "Why free?", text: "Chogan earns on the products, not on your sign-up. So you can explore with no risk." },
      { title: "Why through me?", text: "I only earn when you actually move forward. So I help you honestly instead of leaving you alone with a link." },
      { title: "What you do next", text: "Use the fragrances yourself, share them with friends, or build something. You decide, I guide you." },
    ],
    cta: "Register for free now",
    ctaNote: "Directly with Chogan · 2 minutes · no cost",
    help: "Questions first? Reach me quickly here:",
  },
  whyChogan: {
    eyebrow: "Why Chogan",
    h2: ["Designer quality, ", "without the brand markup", "."],
    paras: [
      "Chogan is an Italian beauty house from Barletta. The Olfazeta fragrances are highly concentrated, around 30% perfume oil, and inspired by well-known designer scents. Yet you pay roughly 60 to 70% less, for the scent instead of the advertising.",
      "It lets you step into the beauty niche without fighting the big corporations on the drugstore shelf. Open to women and men alike.",
    ],
    badgesTitle: "What you can rely on",
    badges: [
      "Made in Italy · Barletta",
      "Organic-certified (Biocertitalia)",
      "Olfazeta · ~30% perfume oil",
      "Not tested on animals*",
    ],
    badgeNote: "*Manufacturer's statement by Chogan.",
    linkLabel: "See more about Chogan",
    proofLabel: "Check the organic certificate",
  },
  ctaBand: {
    register: {
      eyebrow: "Start free",
      h2: ["Register ", "free today", "."],
      sub: "Directly with Chogan, in two minutes. No subscription, no minimum order. The only risk is not starting.",
      cta: "Register for free now",
      note: "Directly with Chogan · no cost",
    },
    bewerben: {
      eyebrow: "1:1 mentoring",
      h2: ["Serious about building? ", "Apply", "."],
      sub: "For those who truly want to build revenue, I work with you directly. Limited spots, because my focus is then fully on you.",
      cta: "Apply for mentoring",
      note: "Limited spots · via WhatsApp or Zoom",
    },
  },
  values: {
    eyebrow: "My values",
    h2: ["What I ", "stand for", "."],
    sub: "Why I chose Chogan and how I work. Hold me to it.",
    items: [
      { title: "Honesty over hype", text: "No big promises. I tell you upfront what you're getting into and what's realistic." },
      { title: "Help before selling", text: "I only earn once you move forward. So I genuinely help you instead of leaving you alone with a link." },
      { title: "Quality you can smell", text: "Chogan is Made in Italy, organic-certified and highly concentrated. You can stand behind what you pass on." },
      { title: "Growth for everyone", text: "A path open to women and men. At your own pace, with a group behind you." },
    ],
    cta: "Become a partner",
    ctaNote: "Free & no obligation · I'll guide you",
  },
  marquee: [
    "Beauty, fragrances and lifestyle",
    "A second income that fits you",
    "Designer quality, fair price",
    "You don't start alone",
  ],
  offerings: {
    eyebrow: "Why with me",
    h2: ["What you get ", "by my side", "."],
    sub: "No anonymous link, no being left to figure it out alone. This is how I help you from day one.",
    more: "More",
    items: [
      { tag: "01", title: "My tips and help", text: "I'm reachable, on WhatsApp and on calls. You ask, I answer, we take the steps together." },
      { tag: "02", title: "Risk-free entry", text: "You start for free, no stock and no minimum order. You're not committing to anything." },
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
    cta: "Order a set via WhatsApp",
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
  roadmap: {
    eyebrow: "Your path",
    h2: ["From sign-up to ", "your goal", "."],
    sub: "Everyone moves at her own pace. Here's what the path looks like if you want to walk it.",
    steps: [
      { n: "01", title: "Register for free", text: "Your Chogan access, directly through me. No risk, no cost." },
      { n: "02", title: "Your first fragrances", text: "You test, find your favourites and use them yourself or share them." },
      { n: "03", title: "First customers", text: "A nice compliment turns into recommendations. I give you templates and tips that already work." },
      { n: "04", title: "Your network grows", text: "You bring others in and build something of your own, step by step." },
    ],
    goalEyebrow: "The end goal",
    goalTitle: "Higher revenue with 1:1 mentoring",
    goalText: "When you really want to build, I work with you directly. More on that just below.",
    cta: "Start for free now",
    ctaNote: "Step 1 begins here · directly with Chogan",
  },
  coaching: {
    eyebrow: "1:1 mentoring",
    h2: ["For those who truly want to ", "build", "."],
    sub: "Some just want beautiful fragrances and a small second income. Others want to seriously build something, with higher revenue. If you're the second kind, I work with you directly and personally.",
    points: [
      { title: "Directly with me", text: "Close 1:1 mentoring instead of a group. My full focus on what you're building." },
      { title: "Your own plan", text: "A clear strategy, tailored to you, with concrete steps and goals." },
      { title: "For the ambitious only", text: "Limited spots. Only if you're truly ready to invest time and energy." },
    ],
    cta: "Is this for you?",
    ctaNote: "Limited spots · just message me",
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
    sub: "Got questions before you start? Reach me wherever you like best.",
    instagram: { label: "Instagram", note: "Send me a DM" },
    whatsapp: { label: "WhatsApp", note: "Usually a reply the same day" },
    zoom: { label: "Zoom call", note: "On request, just ask" },
    kredo: "“Scents that linger. Women who grow.”",
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
    deinweg: { eyebrow: "Your path", title: ["Your path with ", "Chogan", "."] },
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

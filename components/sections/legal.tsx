"use client";

import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";

/* ============================================================
   Rechtstexte (Impressum + Datenschutz), zweisprachig.
   Die deutsche Fassung ist die rechtlich verbindliche.
   Inhalte als reine Strings -> einfache DE/EN-Paritaet;
   E-Mail / Telefon / URLs werden automatisch verlinkt.
   ============================================================ */

type Section = { h: string; p: string[] };
type LegalContent = {
  courtesy?: string;
  lead?: string;
  address?: { name: string; lines: string[] };
  sections: Section[];
  updated?: string;
  back: string;
};

/** Wandelt E-Mail-Adressen, Telefonnummern und URLs in klickbare Links um. */
function linkify(text: string): ReactNode {
  const re =
    /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})|(https?:\/\/[^\s]+)|(\+\d[\d\s]{6,}\d)/g;
  const cls =
    "text-clay underline decoration-clay/40 underline-offset-2 transition-colors hover:decoration-clay";
  const out: ReactNode[] = [];
  let last = 0;
  let k = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last)
      out.push(<Fragment key={k++}>{text.slice(last, m.index)}</Fragment>);
    const tok = m[0];
    if (m[1]) {
      out.push(
        <a key={k++} href={`mailto:${tok}`} className={cls}>
          {tok}
        </a>,
      );
    } else if (m[2]) {
      out.push(
        <a
          key={k++}
          href={tok}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
        >
          {tok}
        </a>,
      );
    } else {
      out.push(
        <a key={k++} href={`tel:${tok.replace(/\s+/g, "")}`} className={cls}>
          {tok}
        </a>,
      );
    }
    last = m.index + tok.length;
  }
  if (last < text.length)
    out.push(<Fragment key={k++}>{text.slice(last)}</Fragment>);
  return out;
}

function LegalShell({ content }: { content: LegalContent }) {
  return (
    <section className="bg-cream pb-28 pt-2 md:pb-36">
      <div className="mx-auto max-w-[760px] px-6 md:px-10">
        {content.courtesy && (
          <Reveal>
            <p className="mono-label mb-9 text-clay">{content.courtesy}</p>
          </Reveal>
        )}

        {content.lead && (
          <Reveal>
            <p className="text-pretty max-w-xl font-light leading-relaxed text-mushroom md:text-lg">
              {linkify(content.lead)}
            </p>
          </Reveal>
        )}

        {content.address && (
          <Reveal>
            <div className="mt-10 border-l-2 border-clay/40 pl-6">
              <p className="font-display text-xl text-espresso">
                {content.address.name}
              </p>
              <div className="mt-2 space-y-0.5 text-[0.95rem] font-light text-mushroom">
                {content.address.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <div className="mt-12 space-y-11">
          {content.sections.map((s) => (
            <Reveal key={s.h}>
              <div>
                <h2 className="font-display text-xl font-medium text-espresso md:text-2xl">
                  {s.h}
                </h2>
                <div className="mt-3 space-y-3">
                  {s.p.map((para, j) => (
                    <p
                      key={j}
                      className="text-[0.95rem] font-light leading-relaxed text-mushroom"
                    >
                      {linkify(para)}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {content.updated && (
          <p className="mono-label mt-16 text-mushroom/65">{content.updated}</p>
        )}

        <div className="mt-10">
          <Link href="/" className="link-underline mono-label text-clay">
            ← {content.back}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Impressum ----------------------------- */

const IMPRESSUM: Record<"de" | "en", LegalContent> = {
  de: {
    lead: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).",
    address: {
      name: "Manuela Buchner GmbH",
      lines: ["Glasstr. 4 B", "80995 München", "Deutschland"],
    },
    sections: [
      {
        h: "Rechtsform",
        p: ["Gesellschaft mit beschränkter Haftung (GmbH)"],
      },
      {
        h: "Vertreten durch",
        p: ["Manuela Buchner, Geschäftsführerin"],
      },
      {
        h: "Kontakt",
        p: [
          "Telefon: +49 176 77777786",
          "E-Mail: manuela.buchner86@icloud.com",
        ],
      },
      {
        h: "Handelsregister",
        p: [
          "Eintragung im Handelsregister",
          "Registergericht: Amtsgericht München",
          "Registernummer: HRB 284909",
        ],
      },
      {
        h: "Umsatzsteuer-ID",
        p: [
          "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:",
          "DE362200206",
        ],
      },
      {
        h: "Redaktionell verantwortlich (§ 18 Abs. 2 MStV)",
        p: ["Manuela Buchner", "Glasstr. 4 B, 80995 München"],
      },
      {
        h: "Hinweis zu Chogan",
        p: [
          "Diese Website ist die unabhängige Internetpräsenz von Manuela Buchner als selbstständige Chogan-Vertriebspartnerin. Sie wird nicht von der Chogan Group S.p.A. betrieben und stellt kein offizielles Angebot der Chogan Group S.p.A. dar.",
        ],
      },
      {
        h: "Verbraucherstreitbeilegung",
        p: [
          "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        ],
      },
      {
        h: "Haftung für Inhalte",
        p: [
          "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
          "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
        ],
      },
      {
        h: "Haftung für Links",
        p: [
          "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
          "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
        ],
      },
      {
        h: "Urheberrecht",
        p: [
          "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
          "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Solltest du dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
        ],
      },
    ],
    back: "Zur Startseite",
  },
  en: {
    courtesy:
      "This is a courtesy translation of our German imprint. In case of doubt, the German version applies.",
    lead: "Information pursuant to § 5 of the German Digital Services Act (DDG).",
    address: {
      name: "Manuela Buchner GmbH",
      lines: ["Glasstr. 4 B", "80995 Munich", "Germany"],
    },
    sections: [
      {
        h: "Legal form",
        p: ["Limited liability company (GmbH)"],
      },
      {
        h: "Represented by",
        p: ["Manuela Buchner, Managing Director"],
      },
      {
        h: "Contact",
        p: [
          "Phone: +49 176 77777786",
          "E-mail: manuela.buchner86@icloud.com",
        ],
      },
      {
        h: "Commercial register",
        p: [
          "Registered in the commercial register",
          "Register court: Local Court of Munich (Amtsgericht München)",
          "Register number: HRB 284909",
        ],
      },
      {
        h: "VAT ID",
        p: [
          "VAT identification number pursuant to § 27 a of the German VAT Act:",
          "DE362200206",
        ],
      },
      {
        h: "Responsible for editorial content (§ 18 (2) MStV)",
        p: ["Manuela Buchner", "Glasstr. 4 B, 80995 Munich"],
      },
      {
        h: "Note regarding Chogan",
        p: [
          "This website is the independent online presence of Manuela Buchner as a self-employed Chogan sales partner. It is not operated by Chogan Group S.p.A. and does not constitute an official offer by Chogan Group S.p.A.",
        ],
      },
      {
        h: "Consumer dispute resolution",
        p: [
          "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
        ],
      },
      {
        h: "Liability for content",
        p: [
          "As a service provider, we are responsible for our own content on these pages in accordance with § 7 (1) DDG and general law. However, pursuant to §§ 8 to 10 DDG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
          "Obligations to remove or block the use of information under general law remain unaffected. Liability in this respect is only possible from the point in time at which a concrete infringement of the law becomes known. Upon becoming aware of such infringements, we will remove this content immediately.",
        ],
      },
      {
        h: "Liability for links",
        p: [
          "Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking; unlawful content was not recognizable at that time.",
          "However, permanent monitoring of the content of the linked pages is not reasonable without concrete indications of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.",
        ],
      },
      {
        h: "Copyright",
        p: [
          "The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of use outside the limits of copyright require the written consent of the respective author or creator.",
          "Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. Should you nevertheless become aware of a copyright infringement, please let us know. Upon becoming aware of legal violations, we will remove such content immediately.",
        ],
      },
    ],
    back: "Back to home",
  },
};

/* ---------------------------- Datenschutz ---------------------------- */

const DATENSCHUTZ: Record<"de" | "en", LegalContent> = {
  de: {
    lead: "Diese Datenschutzerklärung informiert dich darüber, wie wir mit personenbezogenen Daten umgehen, wenn du diese Website besuchst oder uns kontaktierst.",
    sections: [
      {
        h: "1. Verantwortlicher",
        p: [
          "Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
          "Manuela Buchner GmbH",
          "Manuela Buchner (Geschäftsführerin)",
          "Glasstr. 4 B, 80995 München, Deutschland",
          "Telefon: +49 176 77777786",
          "E-Mail: manuela.buchner86@icloud.com",
        ],
      },
      {
        h: "2. Grundsätzliches",
        p: [
          "Wir nehmen den Schutz deiner persönlichen Daten ernst und behandeln deine personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
          "Diese Website kannst du grundsätzlich nutzen, ohne personenbezogene Daten anzugeben. Personenbezogene Daten werden nur erhoben, wenn du sie uns von dir aus mitteilst, etwa wenn du uns kontaktierst.",
        ],
      },
      {
        h: "3. Hosting",
        p: [
          "Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet. Vercel verarbeitet in unserem Auftrag die Daten, die beim Aufruf der Website technisch anfallen (siehe Abschnitt „Server-Logfiles“). Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung.",
          "Soweit dabei Daten in die USA übertragen werden, stützt sich die Übertragung auf das EU-US Data Privacy Framework bzw. auf Standardvertragsklauseln der EU-Kommission. Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und effizienten Bereitstellung dieser Website (Art. 6 Abs. 1 lit. f DSGVO).",
        ],
      },
      {
        h: "4. Server-Logfiles",
        p: [
          "Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Informationen in sogenannten Server-Logfiles gespeichert, die dein Browser übermittelt. Dies sind in der Regel:",
          "– aufgerufene Seite bzw. Datei",
          "– Datum und Uhrzeit des Zugriffs",
          "– übertragene Datenmenge",
          "– Browsertyp und Browserversion",
          "– verwendetes Betriebssystem",
          "– Referrer-URL",
          "– IP-Adresse (gekürzt bzw. anonymisiert)",
          "Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur technischen Bereitstellung und Sicherheit der Website. Die Logfiles werden aus Sicherheitsgründen für einen begrenzten Zeitraum gespeichert und anschließend gelöscht.",
        ],
      },
      {
        h: "5. Kontaktaufnahme",
        p: [
          "Wenn du uns per E-Mail, Telefon, WhatsApp oder Instagram kontaktierst, werden deine Angaben (z. B. Name, Kontaktdaten, Inhalt der Nachricht) zur Bearbeitung deiner Anfrage gespeichert. Diese Daten geben wir nicht ohne deine Einwilligung weiter.",
          "Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit einem Vertrag bzw. dessen Anbahnung zusammenhängt, andernfalls auf Grundlage unseres berechtigten Interesses an der Beantwortung deiner Anfrage (Art. 6 Abs. 1 lit. f DSGVO) bzw. deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Deine Daten löschen wir, sobald sie für die Erreichung des Zwecks nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
        ],
      },
      {
        h: "6. WhatsApp und Instagram",
        p: [
          "Für die Kommunikation nutzen wir unter anderem WhatsApp und Instagram, Dienste der Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irland. Wenn du uns über diese Dienste kontaktierst, verarbeitet Meta die dabei anfallenden Daten nach eigenen Datenschutzbestimmungen und kann sie auch in Drittländer übertragen. Auf diese Datenverarbeitung haben wir keinen Einfluss.",
          "Die Nutzung dieser Kanäle erfolgt auf Grundlage deiner Einwilligung bzw. unseres berechtigten Interesses an einer unkomplizierten Kommunikation (Art. 6 Abs. 1 lit. a und f DSGVO). Wenn dir das nicht recht ist, erreichst du uns jederzeit auch klassisch per E-Mail.",
        ],
      },
      {
        h: "7. Schriftarten",
        p: [
          "Diese Website verwendet Schriftarten (u. a. Lora, Manrope und JetBrains Mono), die lokal auf unserem Server eingebunden und von dort ausgeliefert werden. Es wird dabei keine Verbindung zu Servern von Google oder anderen Dritten aufgebaut; es werden insofern keine personenbezogenen Daten an Dritte übertragen.",
        ],
      },
      {
        h: "8. Lokale Speicherung (Local Storage)",
        p: [
          "Um deine gewählte Spracheinstellung (Deutsch oder Englisch) zu speichern, legen wir eine Information im lokalen Speicher (Local Storage) deines Browsers ab. Diese Information ist technisch notwendig, verbleibt auf deinem Gerät und wird nicht an uns oder Dritte übertragen. Du kannst sie jederzeit über die Einstellungen deines Browsers löschen. Eine Einwilligung ist hierfür nicht erforderlich (§ 25 Abs. 2 TDDDG).",
        ],
      },
      {
        h: "9. Cookies und Tracking",
        p: [
          "Diese Website setzt keine Tracking- oder Analyse-Cookies ein und nutzt keine Webanalyse- oder Werbedienste (z. B. Google Analytics, Meta-Pixel). Es findet kein nutzerübergreifendes Tracking statt. Ein Cookie-Einwilligungsbanner ist daher nicht erforderlich.",
        ],
      },
      {
        h: "10. Externe Links",
        p: [
          "Diese Website enthält Links zu externen Websites Dritter (z. B. zur Chogan Group sowie zu Instagram und WhatsApp). Wenn du einem solchen Link folgst, gelten die Datenschutzbestimmungen des jeweiligen Anbieters. Auf deren Datenverarbeitung haben wir keinen Einfluss.",
        ],
      },
      {
        h: "11. SSL-/TLS-Verschlüsselung",
        p: [
          "Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du an der Adresszeile deines Browsers (https://) sowie am Schloss-Symbol.",
        ],
      },
      {
        h: "12. Deine Rechte",
        p: [
          "Du hast im Rahmen der gesetzlichen Bestimmungen jederzeit das Recht auf:",
          "– Auskunft über deine bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO),",
          "– Berichtigung unrichtiger Daten (Art. 16 DSGVO),",
          "– Löschung (Art. 17 DSGVO),",
          "– Einschränkung der Verarbeitung (Art. 18 DSGVO),",
          "– Datenübertragbarkeit (Art. 20 DSGVO) sowie",
          "– Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).",
          "Soweit eine Verarbeitung auf deiner Einwilligung beruht, kannst du diese jederzeit mit Wirkung für die Zukunft widerrufen. Zur Ausübung deiner Rechte genügt eine formlose Mitteilung an die oben genannten Kontaktdaten.",
        ],
      },
      {
        h: "13. Beschwerderecht bei der Aufsichtsbehörde",
        p: [
          "Dir steht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde für nichtöffentliche Stellen in Bayern ist:",
          "Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)",
          "Promenade 18, 91522 Ansbach",
          "https://www.lda.bayern.de",
        ],
      },
      {
        h: "14. Änderungen dieser Datenschutzerklärung",
        p: [
          "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für deinen erneuten Besuch gilt dann die neue Datenschutzerklärung.",
        ],
      },
    ],
    updated: "Stand: Juni 2026",
    back: "Zur Startseite",
  },
  en: {
    courtesy:
      "This is a courtesy translation of our German privacy policy. In case of doubt, the German version applies.",
    lead: "This privacy policy explains how we handle personal data when you visit this website or contact us.",
    sections: [
      {
        h: "1. Controller",
        p: [
          "The controller responsible for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is:",
          "Manuela Buchner GmbH",
          "Manuela Buchner (Managing Director)",
          "Glasstr. 4 B, 80995 Munich, Germany",
          "Phone: +49 176 77777786",
          "E-mail: manuela.buchner86@icloud.com",
        ],
      },
      {
        h: "2. General information",
        p: [
          "We take the protection of your personal data seriously and treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.",
          "You can generally use this website without providing personal data. Personal data is only collected if you provide it to us on your own initiative, for example when you contact us.",
        ],
      },
      {
        h: "3. Hosting",
        p: [
          "This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Vercel processes, on our behalf, the data that is technically generated when the website is accessed (see “Server log files”). A data processing agreement is in place with Vercel.",
          "Insofar as data is transferred to the USA, the transfer is based on the EU-US Data Privacy Framework or on the EU Commission’s standard contractual clauses. The legal basis is our legitimate interest in the secure and efficient provision of this website (Art. 6 (1) (f) GDPR).",
        ],
      },
      {
        h: "4. Server log files",
        p: [
          "When this website is accessed, the hosting provider automatically stores information in so-called server log files that your browser transmits. These are usually:",
          "– the page or file accessed",
          "– date and time of access",
          "– amount of data transferred",
          "– browser type and version",
          "– operating system used",
          "– referrer URL",
          "– IP address (shortened or anonymized)",
          "This data is not merged with other data sources. Processing is based on Art. 6 (1) (f) GDPR for the technical provision and security of the website. For security reasons, the log files are stored for a limited period and then deleted.",
        ],
      },
      {
        h: "5. Contacting us",
        p: [
          "If you contact us by e-mail, phone, WhatsApp or Instagram, your details (e.g. name, contact data, content of the message) are stored in order to process your request. We do not pass on this data without your consent.",
          "Processing is based on Art. 6 (1) (b) GDPR if your request is related to a contract or its initiation, otherwise on the basis of our legitimate interest in responding to your request (Art. 6 (1) (f) GDPR) or your consent (Art. 6 (1) (a) GDPR). We delete your data as soon as it is no longer required to achieve the purpose and no statutory retention obligations prevent deletion.",
        ],
      },
      {
        h: "6. WhatsApp and Instagram",
        p: [
          "For communication we use, among other things, WhatsApp and Instagram, services provided by Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Ireland. If you contact us via these services, Meta processes the resulting data in accordance with its own privacy policy and may also transfer it to third countries. We have no influence on this data processing.",
          "The use of these channels is based on your consent or on our legitimate interest in straightforward communication (Art. 6 (1) (a) and (f) GDPR). If you prefer not to use them, you can always reach us by e-mail instead.",
        ],
      },
      {
        h: "7. Fonts",
        p: [
          "This website uses fonts (including Lora, Manrope and JetBrains Mono) that are embedded locally on our server and delivered from there. No connection to servers operated by Google or other third parties is established; accordingly, no personal data is transferred to third parties.",
        ],
      },
      {
        h: "8. Local storage",
        p: [
          "To save your selected language setting (German or English), we store a piece of information in your browser’s local storage. This information is technically necessary, remains on your device and is not transmitted to us or third parties. You can delete it at any time via your browser settings. No consent is required for this (§ 25 (2) TDDDG).",
        ],
      },
      {
        h: "9. Cookies and tracking",
        p: [
          "This website does not use any tracking or analytics cookies and does not use any web analytics or advertising services (e.g. Google Analytics, Meta Pixel). No cross-user tracking takes place. A cookie consent banner is therefore not required.",
        ],
      },
      {
        h: "10. External links",
        p: [
          "This website contains links to external third-party websites (e.g. to Chogan Group as well as to Instagram and WhatsApp). If you follow such a link, the privacy policy of the respective provider applies. We have no influence on their data processing.",
        ],
      },
      {
        h: "11. SSL/TLS encryption",
        p: [
          "For security reasons and to protect the transmission of confidential content, this website uses SSL or TLS encryption. You can recognize an encrypted connection by the address bar of your browser (https://) and the lock symbol.",
        ],
      },
      {
        h: "12. Your rights",
        p: [
          "Within the scope of the statutory provisions, you have the right at any time to:",
          "– information about your personal data stored by us (Art. 15 GDPR),",
          "– rectification of incorrect data (Art. 16 GDPR),",
          "– erasure (Art. 17 GDPR),",
          "– restriction of processing (Art. 18 GDPR),",
          "– data portability (Art. 20 GDPR), and",
          "– objection to processing (Art. 21 GDPR).",
          "Insofar as processing is based on your consent, you can withdraw it at any time with effect for the future. An informal message to the contact details above is sufficient to exercise your rights.",
        ],
      },
      {
        h: "13. Right to lodge a complaint",
        p: [
          "You have the right to lodge a complaint with a data protection supervisory authority. The competent authority for non-public bodies in Bavaria is:",
          "Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)",
          "Promenade 18, 91522 Ansbach, Germany",
          "https://www.lda.bayern.de",
        ],
      },
      {
        h: "14. Changes to this privacy policy",
        p: [
          "We reserve the right to amend this privacy policy so that it always complies with current legal requirements or in order to implement changes to our services. The new privacy policy will then apply to your next visit.",
        ],
      },
    ],
    updated: "Last updated: June 2026",
    back: "Back to home",
  },
};

export function Impressum() {
  const { lang } = useLang();
  return <LegalShell content={IMPRESSUM[lang]} />;
}

export function Datenschutz() {
  const { lang } = useLang();
  return <LegalShell content={DATENSCHUTZ[lang]} />;
}

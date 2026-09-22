window.KLAUSURCHECK_CONFIG = {
  // ----- M12LK: AKTUELLER LERNSTANDSCHECK -----
  title: "Lernstandscheck M12LK",
  className: "M12LK",
  topic: "Integralrechnung: Änderungsraten, Bestände und Mittelwerte",

  // Interne Kennung. Wird NICHT auf der Seite angezeigt.
  datasetId: "m12lk-integralrechnung-2026-09-22-s6zh",

  // Immer im Footer sichtbar.
  version: "1.0.1",

  // Allgemeine formative Diagnostik, keine reine Klausurvorbereitung.
  usageMode: "diagnose",

  // Klassenverlauf: automatische Sicherung bei Änderungen
  // plus manuelle, benennbare Messpunkte.
  history: {
    enabled: true,
    autoMinutes: 2
  },

  // Offene Fragen der Lerngruppe können gegenseitig hochgestimmt werden.
  upvotesEnabled: true,

  competencies: [
    {
      id: "aenderungsraten_bestaende",
      title: "Änderungen und Bestände aus Änderungsraten bestimmen und deuten",
      info: "Aus Änderungsraten Änderungen bzw. Bestände bestimmen, Anfangsbestände berücksichtigen und die Ergebnisse im Sachzusammenhang deuten."
    },
    {
      id: "flaechenbilanz_rechtecksummen",
      title: "Integral als Flächenbilanz verstehen; Rechtecksummen/Ober- und Untersummen",
      info: "Bestimmte Integrale als Flächenbilanz verstehen und Integrale mithilfe von Rechtecksummen sowie Ober- und Untersummen annähern bzw. erläutern."
    },
    {
      id: "funktion_stammfunktion",
      title: "Zusammenhang Funktion ↔ Stammfunktion; unbestimmtes Integral",
      info: "Den Zusammenhang zwischen Funktion und Stammfunktion verstehen, Stammfunktionen erkennen und die Bedeutung des unbestimmten Integrals erklären."
    },
    {
      id: "integrationsregeln",
      title: "Stammfunktionen und Integrationsregeln sicher anwenden",
      info: "Passende Stammfunktionen bestimmen und die im Unterricht behandelten Integrationsregeln sicher anwenden."
    },
    {
      id: "hauptsatz",
      title: "Hauptsatz verstehen und bestimmte Integrale berechnen",
      info: "Den Hauptsatz der Differential- und Integralrechnung nutzen, bestimmte Integrale berechnen und die Rolle der Integrationsgrenzen verstehen."
    },
    {
      id: "flaecheninhalte",
      title: "Flächeninhalte mit Integralen bestimmen",
      info: "Flächen zwischen Graph und x-Achse sowie zwischen Graphen bestimmen; Nullstellen bzw. Schnittpunkte und Vorzeichen passend berücksichtigen."
    },
    {
      id: "mittelwert",
      title: "Mittelwert einer Funktion; mittlerer Bestand / mittlere Änderungsrate",
      info: "Den Mittelwert einer Funktion auf einem Intervall berechnen und als mittleren Bestand bzw. mittlere Änderungsrate im jeweiligen Sachzusammenhang deuten."
    },
    {
      id: "rotationskoerper",
      title: "Volumina von Rotationskörpern bestimmen und modellieren",
      info: "Volumina von Rotationskörpern mit Integralen bestimmen, passende Integrationsgrenzen wählen und Modellierungsaufgaben dazu bearbeiten."
    }
  ],

  // ----- TECHNIK: NORMALERWEISE NICHT ÄNDERN -----
  supabaseUrl: "https://tgokrdtlvtfyxaqscuwx.supabase.co",
  supabasePublishableKey: "sb_publishable_YKnRHgSUgHx6dj-wDHWvOA_OKEFAaaW"
};

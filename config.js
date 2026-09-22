window.KLAUSURCHECK_CONFIG = {
  // ----- M12LK: AKTUELLER LERNSTANDSCHECK -----
  title: "Lernstandscheck M12LK",
  className: "M12LK",
  topic: "Integralrechnung: Änderungsraten, Bestände und Mittelwerte",

  // Interne Kennung. Wird NICHT auf der Seite angezeigt.
  datasetId: "m12lk-integralrechnung-2026-09-22-s6zh",

  // Immer im Footer sichtbar.
  version: "1.0.0",

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
      id: "groessen_deuten",
      title: "Bestand und Änderungsrate unterscheiden",
      info: "Erkennen und erklären, welche Größe eine Funktion beschreibt: einen Bestand oder eine Änderungsrate. Dabei auch die Bedeutung der Einheit beachten."
    },
    {
      id: "aenderung_integral",
      title: "Änderungen mit dem bestimmten Integral berechnen",
      info: "Aus einer Änderungsrate die gesamte Änderung in einem gegebenen Intervall mit einem bestimmten Integral bestimmen."
    },
    {
      id: "bestand_rekonstruieren",
      title: "Bestände rekonstruieren",
      info: "Einen Anfangsbestand mit der aufsummierten Änderung verbinden und daraus den Bestand zu einem späteren Zeitpunkt bestimmen."
    },
    {
      id: "bestandsfunktion",
      title: "Bestandsfunktionen bestimmen und deuten",
      info: "Aus einer Änderungsrate und einem bekannten Anfangswert eine passende Bestandsfunktion aufstellen und ihre Bedeutung erklären."
    },
    {
      id: "mittelwert",
      title: "Mittelwerte mit dem Integral bestimmen",
      info: "Den Mittelwert einer Funktion in einem Intervall mit der Integral-Mittelwertformel berechnen und inhaltlich deuten."
    },
    {
      id: "integral_deuten",
      title: "Integrale geometrisch und inhaltlich deuten",
      info: "Integralwerte als Flächenbilanz bzw. aufsummierte Änderung interpretieren und Vorzeichen sowie Intervallgrenzen sinnvoll einordnen."
    },
    {
      id: "ansatz_deutung",
      title: "Passenden Ansatz wählen und Ergebnisse deuten",
      info: "In Sachaufgaben entscheiden, ob Änderung, Bestand oder Mittelwert gesucht ist, einen geeigneten Ansatz wählen und das Ergebnis mit Einheit und Sachbezug deuten."
    }
  ],

  // ----- TECHNIK: NORMALERWEISE NICHT ÄNDERN -----
  supabaseUrl: "https://tgokrdtlvtfyxaqscuwx.supabase.co",
  supabasePublishableKey: "sb_publishable_YKnRHgSUgHx6dj-wDHWvOA_OKEFAaaW"
};

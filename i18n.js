/* ==========================================================================
   Andrew Gabriel — Portfolio
   i18n.js — language switch (EN / DE)

   English is the default and lives directly in index.html. Every element
   marked with data-i18n="key" is swapped for the German string below when
   DE is active, and restored from its original English markup when EN is
   active. Quiz strings are read by the quiz script through AG.t().
   ========================================================================== */

(function () {
  'use strict';

  var STORAGE_KEY  = 'ag-lang';
  var DEFAULT_LANG = 'en';

  /* ------------------------------------------------------------------------
     German strings  (values are HTML — escape & as &amp;)
     ------------------------------------------------------------------------ */
  var DE = {

    /* Meta + navigation */
    'meta.description': 'Andrew Gabriel — Internationaler Produktmanager. Ingenieurhintergrund, strategische Weitsicht, mehrsprachig.',
    'nav.aria':       'Hauptnavigation',
    'lang.aria':      'Sprache',
    'nav.quiz':       'Quiz',
    'nav.videos':     'Videos',
    'nav.work':       'Erfahrung',
    'nav.education':  'Ausbildung',
    'nav.skills':     'Kenntnisse',
    'nav.contact':    'Kontakt',

    /* Hero */
    'hero.kicker': 'Internationaler Produktmanager',

    /* Milestones */
    'journey.title': '<em>Meilensteine</em>',
    'tl1.title': 'Science Talker',
    'tl1.text':  'FameLab Ägypten — Top 10 von 250+ Teilnehmern, Wissenschaft verständlich erklärt in unter 3 Minuten.',
    'tl2.title': 'B.Sc. Maschinenbau',
    'tl2.text':  'Universität Duisburg-Essen — hier entstand das ingenieurwissenschaftliche Fundament.',
    'tl3.title': 'ESN-Organisator',
    'tl3.text':  'Erasmus Student Network, TU Dortmund — Veranstaltungen für internationale Austauschstudierende organisiert.',
    'tl4.title': 'M.Sc. Wirtschaftsingenieurwesen',
    'tl4.text':  'TU Dortmund — Brücke zwischen Ingenieurwesen, Unternehmensstrategie und Systemdenken.',
    'tl5.title': 'Mannschaftskapitän',
    'tl5.text':  'Kapitän der Herren 2 — Führung auf und neben dem Platz.',

    /* Quiz — static parts */
    'quiz.kicker': 'Interaktiv',
    'quiz.title':  'Lerne Andrew in <em>5 Fragen</em> kennen',

    /* Quiz — script strings */
    'quiz.question':  'Frage',
    'quiz.next':      'Weiter →',
    'quiz.seeResult': 'Ergebnis →',
    'quiz.again':     'Nochmal spielen',
    'quiz.complete':  'Abgeschlossen',
    'quiz.notQuite':  'Nicht ganz — richtig ist {k}.',
    'quiz.right':     ['Genau.', 'Richtig.', 'Du kennst ihn.', 'Volltreffer.', 'Stark.'],
    'quiz.verdicts': [
      'Wir kennen uns wohl noch nicht, oder?',
      'Ein vielversprechender Anfang.',
      'Du hast gut aufgepasst.',
      'Beeindruckend nah dran.',
      'Fast perfekt.',
      'Du kennst Andrew in- und auswendig.'
    ],
    'quiz.questions': [
      {
        prompt: 'Wie viele Sprachen spricht Andrew?',
        options: ['Zwei', 'Drei', 'Vier', 'Fünf']
      },
      {
        prompt: 'Welches Thema hat er beim FameLab-Wettbewerb vorgestellt?',
        options: ['Quantencomputing', 'Magnetresonanz', 'Erneuerbare Energien', 'Gentechnik']
      },
      {
        prompt: 'Was war Andrews erste Berufserfahrung?',
        options: ['Produktmanager', 'Wissenschaftliche Hilfskraft', 'Berechnungsingenieur', 'CAD-Konstrukteur']
      },
      {
        prompt: 'Welcher studentischen Organisation ist er an der TU Dortmund beigetreten?',
        options: ['AIESEC', 'ESN (Erasmus Student Network)', 'IAESTE', 'Rotaract']
      },
      {
        prompt: 'Welche Rolle hat er aktuell im Tennisclub?',
        options: ['Kassenwart', 'Jugendtrainer', 'Mannschaftskapitän der Herren 2', 'Turnierorganisator']
      }
    ],

    /* Videos */
    'videos.title': '<em>Videos</em>',
    'videos.note':  'Beim Klick wird das Video von YouTube bzw. Google Drive geladen.',
    'v1.title': 'FameLab-Wettbewerb',
    'v1.text':  'Präsentation eines wissenschaftlichen Themas in unter 3 Minuten — Top 10 von 250+ Teilnehmern.',
    'v1.link':  'Auf YouTube ansehen ↗',
    'v1.play':  'Video abspielen: FameLab-Wettbewerb',
    'v2.title': 'Kurze Vorstellung',
    'v2.text':  'Eine kurze persönliche Vorstellung.',
    'v2.link':  'In Google Drive öffnen ↗',
    'v2.play':  'Video abspielen: Kurze Vorstellung',

    /* About */
    'about.title': 'Über mich',
    'about.lead':
      'Ich verbinde technisches Ingenieurwesen mit strategischem Produktdenken. ' +
      'Als Berechnungsingenieur für Automobil-OEMs gestartet, habe ich in das Produktmanagement ' +
      'gewechselt — und bringe eine Kombination aus <em>Systemdenken</em> und ' +
      'kaufmännischem Verständnis in jedes Produkt ein, das ich verantworte.',
    'about.langLabel': 'Sprachen',
    'about.langValue': 'Arabisch · Deutsch · Englisch · Spanisch',
    'about.bgLabel':   'Ausbildung',
    'about.bgValue':   'M.Sc. Wirtschaftsingenieurwesen<br />B.Sc. Maschinenbau',

    /* Experience */
    'exp.title': 'Berufliche <em>Erfahrung</em>',

    'exp1.period': 'Jan 2025<br>Heute',
    'exp1.badge':  'Aktuell',
    'exp1.role':   'Internationaler Produktmanager',
    'exp1.duties':
      '<li>Steuerung der Markteinführung von 3 neuen Produkten inkl. Preisstrategie im Rahmen der Go-to-Market-Planung.</li>' +
      '<li>Erstellung und Veröffentlichung von 2 Produktkatalogen zur Unterstützung von Marketing und Vertrieb.</li>' +
      '<li>Durchführung von Sales-Trainings im Sinne von Sales Enablement zur erfolgreichen Einführung neuer Produkte.</li>' +
      '<li>Entwicklung der Produktvision und Produktmission inkl. Value Proposition und Produktpositionierung als Grundlage für Produktstrategie, Roadmap und Lifecycle-Management.</li>' +
      '<li>Unterstützung von Vertrieb und Kundenservice bei der Angebotserstellung unter Berücksichtigung von Kundenbedürfnissen und Nutzererlebnis.</li>' +
      '<li>Pflege von Produkten und Produktserien im ERP-System (ProAlpha) im Rahmen des Produktlebenszyklus-Managements.</li>' +
      '<li>Optimierung von Projektmanagement-Prozessen zur Steigerung von Effizienz und Transparenz, inkl. Automatisierung von Abläufen; Pflege von Epics und User Stories in Jira und Confluence in enger Zusammenarbeit mit interdisziplinären Teams.</li>' +
      '<li>Abstimmung mit Business-Stakeholdern zur Übersetzung von Geschäftsanforderungen in Produktstrategie und Roadmap.</li>',

    'exp2.period': 'Jun 2022<br>Apr 2024',
    'exp2.role':   'Wissenschaftliche Hilfskraft — Lehrstuhl für Unternehmenslogistik',
    'exp2.duties':
      '<li>Literaturrecherche zu strategischer und operativer Beschaffung sowie Supply Chain Management.</li>' +
      '<li>Datenanalyse und Analytics mit Visualisierung in Python (Pandas), um zentrale Erkenntnisse aus Experteninterviews abzuleiten.</li>',

    'exp3.period': 'Jul 2018<br>Sep 2021',
    'exp3.role':   'Berechnungsingenieur (CAE-Simulation)',
    'exp3.duties':
      '<li>Koordination von Simulationen von der Planung bis zur Umsetzung und Leitung komplexer Vorhaben über Teams hinweg.</li>' +
      '<li>Aufbau und Validierung neuer Simulationsmodelle in Adams View für 5+ OEMs.</li>' +
      '<li>Identifikation und Behebung von Modellierungsproblemen zur Einhaltung von Produkt- und Simulationsspezifikationen.</li>' +
      '<li>Reduktion der Modellaufbauzeit um 10 % durch Automatisierungsskripte zur Optimierung des Modellaufbaus.</li>',

    'exp4.period': 'Feb 2017<br>Jul 2018',
    'exp4.role':   'Berechnungsingenieur (CAE-Simulation)',
    'exp4.duties':
      '<li>Verantwortung für Durchführung und Validierung von 40+ Simulationsläufen pro Jahr.</li>' +
      '<li>Erstellung von Dokumentationen und Kommunikation der Ergebnisse an 4 Standorte weltweit für ein gemeinsames Verständnis der Simulationsergebnisse in einer globalen Organisation mit Stakeholder-Abstimmung.</li>' +
      '<li>Funktionsübergreifende Zusammenarbeit mit CAD- und CAE-Teams zur Etablierung eines einheitlichen Produktentwicklungsprozesses.</li>',

    /* Education */
    'edu.title':   '<em>Ausbildung</em>',
    'edu1.degree': 'Master of Science — Wirtschaftsingenieurwesen',
    'edu1.grade':  'Note 2,0',
    'edu2.degree': 'Bachelor of Science — Maschinenbau',
    'edu2.grade':  'Note 2,6',
    'edu3.school': 'Universität Alexandria',
    'edu3.degree': 'Bachelorstudiengang Mechatronik (ohne Abschluss)',
    'edu4.degree': 'IGCSE — Alexandria, Ägypten',

    /* Skills */
    'skills.title': 'Kenntnisse &amp; <em>Expertise</em>',
    'sk1.label': 'Produkt &amp; Strategie',
    'sk1.items':
      '<li class="skill-item skill-item--strong">Produktstrategie &amp; Roadmapping</li>' +
      '<li class="skill-item skill-item--strong">Produktlebenszyklus-Management</li>' +
      '<li class="skill-item skill-item--strong">PRD</li>' +
      '<li class="skill-item skill-item--strong">Sales-Training</li>' +
      '<li class="skill-item">Epics &amp; User Stories (Jira)</li>' +
      '<li class="skill-item">Confluence-Dokumentation</li>' +
      '<li class="skill-item">Roadmapping</li>',
    'sk2.label': 'Engineering &amp; Tools',
    'sk2.items':
      '<li class="skill-item skill-item--strong">Claude</li>' +
      '<li class="skill-item skill-item--strong">Claude Code &amp; KI-Agents</li>' +
      '<li class="skill-item skill-item--strong">Python</li>' +
      '<li class="skill-item">LLMs &amp; Generative KI</li>' +
      '<li class="skill-item">ProAlpha ERP</li>' +
      '<li class="skill-item">Microsoft Office</li>' +
      '<li class="skill-item">Figma</li>',
    'sk3.label': 'Sprachen',
    'ln.ar': 'Arabisch',
    'ln.de': 'Deutsch',
    'ln.en': 'Englisch',
    'ln.es': 'Spanisch',
    'lv.native': 'Muttersprache',
    'lv.fluent': 'Fließend',

    /* Extras */
    'extras.title': 'Zertifikate &amp; <em>Engagement</em>',
    'x1.date': 'Okt 2024',
    'x1.body': 'Ausgestellt von Aha! Software. Inhalte: Produktlebenszyklus, Produkt-Roadmapping und Strategieentwicklung.',
    'x2.date': 'Sep 2023 — Heute',
    'x2.body': 'Ehrenamtliche Organisation an der TU Dortmund. Planung, Organisation und Durchführung von 15+ Veranstaltungen für 200+ Erasmus-Austauschstudenten, um das kulturelle Engagement der Studierenden zu fördern.',
    'x3.title': 'FameLab — Wissenschaftskommunikation',
    'x3.body': 'Unter den Top 10 von 250+ Teilnehmern beim ägyptischen FameLab-Wettbewerb — Präsentation wissenschaftlicher Themen in weniger als 3 Minuten.',

    /* Contact */
    'contact.headline': 'Lass uns<br><em>vernetzen.</em>',
    'contact.email':    'E-Mail'
  };

  /* ------------------------------------------------------------------------
     Engine
     ------------------------------------------------------------------------ */
  var current   = DEFAULT_LANG;
  var listeners = [];

  function has(key) { return Object.prototype.hasOwnProperty.call(DE, key); }

  function readStored() {
    try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function writeStored(lang) {
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
  }

  /** Translate helper for scripts: returns the German value when DE is active, else the fallback. */
  function t(key, fallback) {
    return (current === 'de' && has(key)) ? DE[key] : fallback;
  }

  var textEls  = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var labelEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n-label]'));
  var metaDesc = document.querySelector('meta[name="description"]');

  // Remember the original English markup once.
  textEls.forEach(function (el)  { el.__en = el.innerHTML; });
  labelEls.forEach(function (el) { el.__enLabel = el.getAttribute('aria-label'); });
  var enDescription = metaDesc ? metaDesc.getAttribute('content') : '';

  function apply(lang) {
    current = lang;
    document.documentElement.setAttribute('lang', lang);

    textEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.innerHTML = (lang === 'de' && has(key)) ? DE[key] : el.__en;
    });

    labelEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n-label');
      el.setAttribute('aria-label', (lang === 'de' && has(key)) ? DE[key] : el.__enLabel);
    });

    if (metaDesc) {
      metaDesc.setAttribute('content', (lang === 'de') ? DE['meta.description'] : enDescription);
    }

    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (btn) {
      var on = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.classList.toggle('is-active', on);
    });
  }

  function setLang(lang) {
    lang = (lang === 'de') ? 'de' : 'en';
    if (lang === current) return;
    apply(lang);
    writeStored(lang);
    listeners.forEach(function (fn) { fn(lang); });
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-lang]') : null;
    if (btn) setLang(btn.getAttribute('data-lang'));
  });

  // Initial language: saved choice, otherwise English.
  apply(readStored() === 'de' ? 'de' : DEFAULT_LANG);

  window.AG = {
    t: t,
    getLang: function () { return current; },
    setLang: setLang,
    onChange: function (fn) { listeners.push(fn); }
  };
})();

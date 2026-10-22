// looks easier than script.js but it took 3 cup of hot chocolate to finish 50 lines only.
const BN = {
  ar: "التكوين|الخروج|اللاويين|العدد|التثنية|يشوع|القضاة|راعوث|١ صموئيل|٢ صموئيل|١ الملوك|٢ الملوك|١ أخبار الأيام|٢ أخبار الأيام|عزرا|نحميا|أستير|أيوب|المزامير|الأمثال|الجامعة|نشيد الأنشاد|إشعياء|إرميا|مراثي إرميا|حزقيال|دانيال|هوشع|يوئيل|عاموس|عوبديا|يونان|ميخا|ناحوم|حبقوق|صفنيا|حجي|زكريا|ملاخي|متى|مرقس|لوقا|يوحنا|أعمال الرسل|رومية|١ كورنثوس|٢ كورنثوس|غلاطية|أفسس|فيلبي|كولوسي|١ تسالونيكي|٢ تسالونيكي|١ تيموثاوس|٢ تيموثاوس|تيطس|فليمون|العبرانيين|يعقوب|١ بطرس|٢ بطرس|١ يوحنا|٢ يوحنا|٣ يوحنا|يهوذا|رؤيا يوحنا".split(
    "|",
  ),
  en: "Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|1 Samuel|2 Samuel|1 Kings|2 Kings|1 Chronicles|2 Chronicles|Ezra|Nehemiah|Esther|Job|Psalms|Proverbs|Ecclesiastes|Song of Solomon|Isaiah|Jeremiah|Lamentations|Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|1 Corinthians|2 Corinthians|Galatians|Ephesians|Philippians|Colossians|1 Thessalonians|2 Thessalonians|1 Timothy|2 Timothy|Titus|Philemon|Hebrews|James|1 Peter|2 Peter|1 John|2 John|3 John|Jude|Revelation".split(
    "|",
  ),
  fr: "Genèse|Exode|Lévitique|Nombres|Deutéronome|Josué|Juges|Ruth|1 Samuel|2 Samuel|1 Rois|2 Rois|1 Chroniques|2 Chroniques|Esdras|Néhémie|Esther|Job|Psaumes|Proverbes|Ecclésiaste|Cantique des cantiques|Ésaïe|Jérémie|Lamentations|Ézéchiel|Daniel|Osée|Joël|Amos|Abdias|Jonas|Michée|Nahum|Habacuc|Sophonie|Aggée|Zacharie|Malachie|Matthieu|Marc|Luc|Jean|Actes|Romains|1 Corinthiens|2 Corinthiens|Galates|Éphésiens|Philippiens|Colossiens|1 Thessaloniciens|2 Thessaloniciens|1 Timothée|2 Timothée|Tite|Philémon|Hébreux|Jacques|1 Pierre|2 Pierre|1 Jean|2 Jean|3 Jean|Jude|Apocalypse".split(
    "|",
  ),
};
const NC = // Random nums don't mind about it.
  "50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22"
    .split(",")
    .map(Number);
const TOTAL = NC.reduce((a, b) => a + b, 0); // hardly remember the difference between it and .map
const LG = {
  ar: { n: "العربية · فاندايك", dir: "rtl", f: "Amiri,serif" },
  en: { n: "English · KJV", dir: "ltr", f: "Georgia,serif" },
  fr: { n: "Français · Segond 1910", dir: "ltr", f: "Georgia,serif" },
  bo: { n: "Coptic · Bohairic", dir: "ltr", f: "'Noto Sans Coptic',serif" },
  sa: { n: "Coptic · Sahidic", dir: "ltr", f: "'Noto Sans Coptic',serif" },
};
const WT = {
  book: ["الكتاب", "The Book", "Le Livre"],
  note: ["الدفتر", "Notebook", "Carnet"],
  prog: ["فصل مقروء", "chapters read", "chapitres lus"],
  prev: ["السابق", "Previous", "Précédent"],
  next: ["التالي", "Next", "Suivant"],
  read: ["علّم الفصل كمقروء ✓", "Mark chapter as read ✓", "Marquer comme lu ✓"],
  undo: ["اتقرى ✓ (إلغاء)", "Read ✓ (undo)", "Lu ✓ (annuler)"],
  bm: ["علامة", "Bookmark", "Signet"],
  tap: [
    "اضغط على آية عشان تظللها أو تنسخها",
    "Tap a verse to highlight or copy it",
    "Touche un verset pour le surligner ou le copier",
  ],
  clr: ["مسح", "Clear", "Effacer"],
  tonote: ["للدفتر", "To notebook", "Au carnet"],
  miss: [
    "نص الصفحة دي لسه متركبش (شوف README). الموجود دلوقتي: مزمور ٢٣ ويوحنا ١: ١–٥.",
    "This page’s text isn’t installed yet (see README). Included for now: Psalm 23 and John 1:1–5.",
    "Le texte de cette page n’est pas encore installé (voir README). Inclus pour l’instant : Psaume 23 et Jean 1:1–5.",
  ],
  new: ["+ ملاحظة جديدة", "+ New note", "+ Nouvelle note"],
  exp: ["تصدير", "Export", "Exporter"],
  find: ["دوّر في ملاحظاتك…", "Search your notes…", "Chercher dans tes notes…"],
  ph: ["اكتب هنا…", "Write here…", "Écris ici…"],
  none: [
    "الدفتر فاضي، اكتب أول ملاحظة!",
    "Your notebook is empty. Write your first note!",
    "Ton carnet est vide. Écris ta première note !",
  ],
  hls: ["آياتي المظللة", "My highlights", "Mes versets surlignés"],
  nohl: [
    "ظلّل آية في الكتاب وهتظهر هنا",
    "Highlight a verse in the book and it shows up here",
    "Surligne un verset dans le livre et il apparaîtra ici",
  ],
};
// Samples
const SMP = {
  ar: {
    19: {
      23: [
        "اَلرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ.",
        "فِي مَرَاعٍ خُضْرٍ يُرْبِضُنِي. إِلَى مِيَاهِ الرَّاحَةِ يُورِدُنِي.",
        "يَرُدُّ نَفْسِي. يَهْدِينِي إِلَى سُبُلِ الْبِرِّ مِنْ أَجْلِ اسْمِهِ.",
        "أَيْضًا إِذَا سِرْتُ فِي وَادِي ظِلِّ الْمَوْتِ لاَ أَخَافُ شَرًّا، لأَنَّكَ أَنْتَ مَعِي. عَصَاكَ وَعُكَّازُكَ هُمَا يُعَزِّيَانِنِي.",
        "تُرَتِّبُ قُدَّامِي مَائِدَةً تُجَاهَ مُضَايِقِيَّ. مَسَحْتَ بِالدُّهْنِ رَأْسِي. كَأْسِي رَيَّا.",
        "إِنَّمَا خَيْرٌ وَرَحْمَةٌ يَتْبَعَانِنِي كُلَّ أَيَّامِ حَيَاتِي، وَأَسْكُنُ فِي بَيْتِ الرَّبِّ إِلَى مَدَى الأَيَّامِ.",
      ],
    },
    43: {
      1: [
        "فِي الْبَدْءِ كَانَ الْكَلِمَةُ، وَالْكَلِمَةُ كَانَ عِنْدَ اللهِ، وَكَانَ الْكَلِمَةُ اللهَ.",
        "هذَا كَانَ فِي الْبَدْءِ عِنْدَ اللهِ.",
        "كُلُّ شَيْءٍ بِهِ كَانَ، وَبِغَيْرِهِ لَمْ يَكُنْ شَيْءٌ مِمَّا كَانَ.",
        "فِيهِ كَانَتِ الْحَيَاةُ، وَالْحَيَاةُ كَانَتْ نُورَ النَّاسِ.",
        "وَالنُّورُ يُضِيءُ فِي الظُّلْمَةِ، وَالظُّلْمَةُ لَمْ تُدْرِكْهُ.",
      ],
    },
  },
  en: {
    19: {
      23: [
        "The LORD is my shepherd; I shall not want.",
        "He maketh me to lie down in green pastures: he leadeth me beside the still waters.",
        "He restoreth my soul: he leadeth me in the paths of righteousness for his name’s sake.",
        "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.",
        "Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.",
        "Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.",
      ],
    },
    43: {
      1: [
        "In the beginning was the Word, and the Word was with God, and the Word was God.",
        "The same was in the beginning with God.",
        "All things were made by him; and without him was not any thing made that was made.",
        "In him was life; and the life was the light of men.",
        "And the light shineth in darkness; and the darkness comprehended it not.",
      ],
    },
  },
  fr: {
    19: {
      23: [
        "L’Éternel est mon berger: je ne manquerai de rien.",
        "Il me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles.",
        "Il restaure mon âme, Il me conduit dans les sentiers de la justice, A cause de son nom.",
        "Quand je marche dans la vallée de l’ombre de la mort, Je ne crains aucun mal, car tu es avec moi: Ta houlette et ton bâton me rassurent.",
        "Tu dresses devant moi une table, En face de mes adversaires; Tu oins d’huile ma tête, Et ma coupe déborde.",
        "Oui, le bonheur et la grâce m’accompagneront Tous les jours de ma vie, Et j’habiterai dans la maison de l’Éternel Jusqu’à la fin de mes jours.",
      ],
    },
    43: {
      1: [
        "Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu.",
        "Elle était au commencement avec Dieu.",
        "Toutes choses ont été faites par elle, et rien de ce qui a été fait n’a été fait sans elle.",
        "En elle était la vie, et la vie était la lumière des hommes.",
        "La lumière luit dans les ténèbres, et les ténèbres ne l’ont point reçue.",
      ],
    },
  },
};

const wt = (k) => WT[k][LI[S.lang]];
const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
const bnames = () => BN[["ar", "en", "fr"][LI[S.lang]]];
S.nb = S.nb || [];
function W() {
  if (!S.ws) {
    const a = S.lang === "cp" ? "ar" : S.lang;
    S.ws = {
      b: 19,
      c: 23,
      fs: 1.1,
      l1: a,
      l2: a === "en" ? "ar" : "en",
      hl: {},
      read: {},
      bm: null,
    };
  }
  return S.ws;
}
const CACHE = {};
function loadBook(l, b) {
  const k = l + b;
  return (CACHE[k] ||= fetch(`bible/${l}/${b}.json`)
    .then((r) => (r.ok ? r.json() : null)) // No one use .then & .catch in 2026 but i do, i'm goin to use async/await as soon as possible
    .catch(() => null)
    .then((d) => d || (SMP[l] && SMP[l][b]) || null));
}
const chap = (
  d,
  c, // Don't ask who is chap (it means man or a guy 'british', just to remember)
) => (d ? (Array.isArray(d) ? d[c - 1] : d[c]) || null : null);

var WS = {
  d: [],
  sel: null,
  turn: false,
  q: "",
  book(i) {
    // Absolute Cinema!
    const w = W(),
      bl = bnames(),
      done = Object.keys(w.read).length,
      rd = w.read[w.b + "." + w.c];
    const o = (v, t, s) =>
      `<option value="${v}"${s ? " selected" : ""}>${t}</option>`;
    const lang = (id, cur) =>
      `<select data-wsel="${id}">${Object.entries(LG)
        .map(([k, g]) => o(k, g.n, k === cur))
        .join("")}</select>`;
    const isbm = w.bm && w.bm.b === w.b && w.bm.c === w.c;
    return `<div class="hi"><div><h1>${wt("book")}</h1><p>${done} / ${TOTAL} ${wt("prog")}</p></div></div>
    <div class="bar"><b style="width:${((done / TOTAL) * 100).toFixed(1)}%"></b></div>
    <div class="wsc"><select data-wsel="b">${bl.map((n, k) => o(k + 1, n, k + 1 === w.b)).join("")}</select>
    <select data-wsel="c">${Array.from({ length: NC[w.b - 1] }, (_, k) => o(k + 1, (w.read[w.b + "." + (k + 1)] ? "✓ " : "") + (k + 1), k + 1 === w.c)).join("")}</select>${lang("l1", w.l1)}${lang("l2", w.l2)}</div>
    <div class="bookwrap"><div class="book${WS.turn ? " turn" : ""}">${isbm ? '<i class="rib"></i>' : ""}<div class="pgs" id="pgs"></div></div></div>
    <div id="vbar" class="vbar"></div>
    <div class="wsb"><button class="btn" data-ws="prev">‹ ${wt("prev")}</button><button class="btn main${rd ? " done" : ""}" data-ws="read">${rd ? wt("undo") : wt("read")}</button><button class="btn" data-ws="next">${wt("next")} ›</button></div>
    <div class="wsb"><button class="btn" data-ws="fs-">A−</button><button class="btn" data-ws="fs+">A+</button><button class="btn${isbm ? " fav on" : ""}" data-ws="bm">🔖 ${wt("bm")}</button>${w.bm && !isbm ? `<button class="btn" data-ws="gobm">→ ${bl[w.bm.b - 1]} ${w.bm.c}</button>` : ""}</div>`;
  },
  after() {
    if (tab !== "book") return;
    const w = W();
    Promise.all([w.l1, w.l2].map((l) => loadBook(l, w.b))).then((ds) => {
      // I hate promises
      WS.d = ds.map((d) => chap(d, w.c)); // no callback hell... YEAA
      WS.draw();
    });
    WS.turn = false;
  },
  draw() {
    const pgs = $("#pgs");
    if (!pgs) return;
    const w = W(),
      bl = bnames();
    pgs.innerHTML = [w.l1, w.l2]
      .map((l, x) => {
        const g = LG[l],
          vs = WS.d[x],
          head = `<div class="pgh"><b>${bl[w.b - 1]} ${w.c}</b><span>${g.n}</span></div>`;
        if (!vs)
          return `<div class="pg" dir="${g.dir}">${head}<p class="empty">${wt("miss")}</p></div>`;
        return `<div class="pg" dir="${g.dir}" style="font-family:${g.f};font-size:${w.fs}rem">${head}${vs.map((t, n) => `<p class="vs" data-v="${n + 1}"><sup>${(n + 1).toLocaleString(l === "ar" ? "ar-EG" : "en")}</sup> ${t}</p>`).join("")}</div>`;
      })
      .join("");
    WS.paint();
  },
  paint() {
    const w = W();
    document.querySelectorAll(".vs").forEach((p) => {
      const n = +p.dataset.v,
        h = w.hl[`${w.b}.${w.c}.${n}`];
      p.className = "vs" + (h ? " h" + h.c : "") + (WS.sel === n ? " sel" : "");
    });
    const vb = $("#vbar"),
      s = WS.sel;
    if (vb)
      vb.innerHTML = s
        ? `<span>${bnames()[w.b - 1]} ${w.c}:${s}</span>` +
          [1, 2, 3, 4]
            .map(
              (c) =>
                `<button class="sw h${c}" data-ws="hl" data-c="${c}" aria-label="highlight"></button>`,
            )
            .join("") +
          `<button class="btn" data-ws="clr">${wt("clr")}</button><button class="btn" data-ws="cp">${U[S.lang].copy}</button><button class="btn" data-ws="tonote">✎ ${wt("tonote")}</button>`
        : `<span>${wt("tap")}</span>`;
  },
  vtext(n) {
    return (WS.d[0] && WS.d[0][n - 1]) || (WS.d[1] && WS.d[1][n - 1]) || "";
  },
  open(b, c) {
    const w = W();
    w.b = b;
    w.c = c;
    WS.sel = null;
    WS.turn = true;
    save();
    render();
    scrollTo({ top: 0 });
  },
  step(d) {
    const w = W();
    let { b, c } = w;
    c += d;
    if (c < 1) {
      b = b > 1 ? b - 1 : 66;
      c = NC[b - 1];
    } else if (c > NC[b - 1]) {
      b = b < 66 ? b + 1 : 1;
      c = 1;
    }
    WS.open(b, c);
  },
  note() {
    const hs =
      Object.values(W().hl)
        .map(
          (h) =>
            `<div class="fv h${h.c}" data-ws="go" data-b="${h.b}" data-ch="${h.ch}"><b>${esc(h.r)}</b>${esc(h.t)}</div>`,
        )
        .join("") || `<p class="empty">${wt("nohl")}</p>`;
    return `<div class="hi"><div><h1>${wt("note")}</h1><p>${S.nb.length} ✎</p></div></div>
    <div class="wsb"><button class="btn main" data-ws="newnote">${wt("new")}</button><button class="btn" data-ws="export">${wt("exp")}</button></div>
    <input class="note" data-nq placeholder="${wt("find")}"><div id="nl">${WS.list()}</div><h2>${wt("hls")}</h2><div class="favs">${hs}</div>`;
  },
  list() {
    const a = S.nb.filter((n) => n.t.toLowerCase().includes(WS.q));
    return a.length
      ? a
          .map(
            (n) =>
              `<div class="nt"><div class="ntd"><span>${new Date(n.d).toLocaleDateString(U[S.lang].loc, { day: "numeric", month: "short", year: "numeric" })}</span><button class="btn" data-ws="del" data-id="${n.id}">🗑</button></div><textarea data-nid="${n.id}" rows="5" placeholder="${wt("ph")}">${esc(n.t)}</textarea></div>`,
          )
          .join("")
      : `<p class="empty">${wt("none")}</p>`;
  },
};

document.addEventListener("click", (e) => {
  const v = e.target.closest(".vs");
  if (v) {
    const n = +v.dataset.v;
    WS.sel = WS.sel === n ? null : n;
    WS.paint();
    return;
  }
  const t = e.target.closest("[data-ws]");
  if (!t) return;
  const a = t.dataset.ws,
    w = W(),
    k = `${w.b}.${w.c}.${WS.sel}`,
    ref = `${bnames()[w.b - 1]} ${w.c}:${WS.sel}`;
  if (a === "hl" && WS.sel) {
    w.hl[k] = { c: +t.dataset.c, t: WS.vtext(WS.sel), r: ref, b: w.b, ch: w.c };
    save();
    WS.paint();
  } else if (a === "clr" && WS.sel) {
    delete w.hl[k];
    save();
    WS.paint();
  } else if (a === "cp" && WS.sel) {
    try {
      navigator.clipboard.writeText(`${WS.vtext(WS.sel)}\n— ${ref}`);
    } catch (x) {}
    t.textContent = U[S.lang].copied;
  } else if (a === "tonote" && WS.sel) {
    S.nb.unshift({
      id: Date.now(),
      d: new Date().toISOString(),
      t: `“${WS.vtext(WS.sel)}”\n— ${ref}\n\n`,
    });
    save();
    t.textContent = "✓";
  } else if (a === "read") {
    const id = w.b + "." + w.c;
    if (w.read[id]) delete w.read[id];
    else {
      w.read[id] = 1;
      S.days[key(new Date())] = 1;
      burst(t);
    }
    save();
    render();
  } else if (a === "prev") WS.step(-1);
  else if (a === "next") WS.step(1);
  else if (a === "fs+" || a === "fs-") {
    w.fs = Math.min(
      1.8,
      Math.max(0.8, +(w.fs + (a === "fs+" ? 0.1 : -0.1)).toFixed(1)),
    );
    save();
    WS.draw();
  } else if (a === "bm") {
    w.bm = w.bm && w.bm.b === w.b && w.bm.c === w.c ? null : { b: w.b, c: w.c };
    save();
    render();
  } else if (a === "gobm" && w.bm) WS.open(w.bm.b, w.bm.c);
  else if (a === "go") {
    tab = "book";
    WS.open(+t.dataset.b, +t.dataset.ch);
  } else if (a === "newnote") {
    S.nb.unshift({ id: Date.now(), d: new Date().toISOString(), t: "" });
    save();
    render();
    const ta = document.querySelector("[data-nid]");
    if (ta) ta.focus();
  } else if (a === "del") {
    S.nb = S.nb.filter((n) => n.id !== +t.dataset.id);
    save();
    render();
  } else if (a === "export") {
    const x = document.createElement("a");
    x.href = URL.createObjectURL(
      // Nahhh actually don't remember what is that thing.
      new Blob(
        [
          S.nb
            .map((n) => new Date(n.d).toLocaleString() + "\n" + n.t)
            .join("\n\n— — —\n\n"),
        ],
        { type: "text/plain;charset=utf-8" },
      ),
    );
    x.download = "evangil-notes.txt";
    x.click();
  }
});
document.addEventListener("change", (e) => {
  const s = e.target.dataset && e.target.dataset.wsel; // don't try to debug this code actually.
  if (!s) return;
  const w = W(),
    v = e.target.value;
  if (s === "b") WS.open(+v, 1);
  else if (s === "c") WS.open(w.b, +v);
  else {
    w[s] = v;
    save();
    render();
  }
});
document.addEventListener("input", (e) => {
  const d = e.target.dataset || {};
  if (d.nid) {
    const n = S.nb.find((x) => x.id === +d.nid);
    if (n) {
      n.t = e.target.value;
      save();
    }
  } else if (d.nq !== undefined) {
    WS.q = e.target.value.toLowerCase();
    $("#nl").innerHTML = WS.list();
  }
});

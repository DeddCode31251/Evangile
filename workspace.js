/*
Hello!,

-- Before you start addding new features or edit anything
-- it was the only 2 person who understand the code and the random variables names is ME & God
-- For now it's only God!
-- If it works dont dare to touch it please,
-- 
-- wasted_hours = 2h
--
-- Please update that counter 'wasted_hours' when you think you're a genius and try to do smth new.
-- Thanks!
*/

const V = [
  {
    r: ["يوحنا ٣: ١٦", "John 3:16", "Jean 3:16"],
    m: "hg",
    t: [
      "لأَنَّهُ هكَذَا أَحَبَّ اللهُ الْعَالَمَ حَتَّى بَذَلَ ابْنَهُ الْوَحِيدَ، لِكَيْ لاَ يَهْلِكَ كُلُّ مَنْ يُؤْمِنُ بِهِ، بَلْ تَكُونُ لَهُ الْحَيَاةُ الأَبَدِيَّةُ.",
      "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
      "Car Dieu a tant aimé le monde qu’il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu’il ait la vie éternelle.",
    ],
  },
  {
    r: ["مزمور ٢٣: ١", "Psalm 23:1", "Psaume 23:1"],
    m: "gl",
    t: [
      "الرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ.",
      "The LORD is my shepherd; I shall not want.",
      "L’Éternel est mon berger: je ne manquerai de rien.",
    ],
  },
  {
    r: ["فيلبي ٤: ١٣", "Philippians 4:13", "Philippiens 4:13"],
    m: "st",
    t: [
      "أَسْتَطِيعُ كُلَّ شَيْءٍ فِي الْمَسِيحِ الَّذِي يُقَوِّينِي.",
      "I can do all things through Christ which strengtheneth me.",
      "Je puis tout par celui qui me fortifie.",
    ],
  },
  {
    r: ["متى ١١: ٢٨", "Matthew 11:28", "Matthieu 11:28"],
    m: "th",
    t: [
      "تَعَالَوْا إِلَيَّ يَا جَمِيعَ الْمُتْعَبِينَ وَالثَّقِيلِي الأَحْمَالِ وَأَنَا أُرِيحُكُمْ.",
      "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
      "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.",
    ],
  },
  {
    r: ["إشعياء ٤١: ١٠", "Isaiah 41:10", "Ésaïe 41:10"],
    m: "as",
    t: [
      "لاَ تَخَفْ لأَنِّي مَعَكَ. لاَ تَتَلَفَّتْ لأَنِّي إِلهُكَ. قَدْ أَيَّدْتُكَ وَأَعَنْتُكَ وَعَضَدْتُكَ بِيَمِينِ بِرِّي.",
      "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee.",
      "Ne crains rien, car je suis avec toi; ne promène pas des regards inquiets, car je suis ton Dieu; je te fortifie, je viens à ton secours.",
    ],
  },
  {
    r: ["أمثال ٣: ٥", "Proverbs 3:5", "Proverbes 3:5"],
    m: "la",
    t: [
      "تَوَكَّلْ عَلَى الرَّبِّ بِكُلِّ قَلْبِكَ، وَعَلَى فَهْمِكَ لاَ تَعْتَمِدْ.",
      "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
      "Confie-toi en l’Éternel de tout ton cœur, et ne t’appuie pas sur ton intelligence.",
    ],
  },
  {
    r: ["يشوع ١: ٩", "Joshua 1:9", "Josué 1:9"],
    m: "as",
    t: [
      "تَشَدَّدْ وَتَشَجَّعْ. لاَ تَرْهَبْ وَلاَ تَرْتَعِبْ، لأَنَّ الرَّبَّ إِلهَكَ مَعَكَ حَيْثُمَا تَذْهَبُ.",
      "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.",
      "Fortifie-toi et prends courage. Ne t’effraie point, car l’Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras.",
    ],
  },
  {
    r: ["مزمور ٤٦: ١", "Psalm 46:1", "Psaume 46:1"],
    m: "at",
    t: [
      "اَللهُ لَنَا مَلْجَأٌ وَقُوَّةٌ، عَوْنًا فِي الضِّيقَاتِ وُجِدَ شَدِيدًا.",
      "God is our refuge and strength, a very present help in trouble.",
      "Dieu est pour nous un refuge et un appui, un secours qui ne manque jamais dans la détresse.",
    ],
  },
  {
    r: ["يوحنا ٨: ١٢", "John 8:12", "Jean 8:12"],
    m: "lh",
    t: [
      "أَنَا هُوَ نُورُ الْعَالَمِ. مَنْ يَتْبَعْنِي فَلاَ يَمْشِي فِي الظُّلْمَةِ بَلْ يَكُونُ لَهُ نُورُ الْحَيَاةِ.",
      "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.",
      "Je suis la lumière du monde; celui qui me suit ne marchera pas dans les ténèbres, mais il aura la lumière de la vie.",
    ],
  },
  {
    r: ["١ كورنثوس ١٣: ١٣", "1 Corinthians 13:13", "1 Corinthiens 13:13"],
    m: "gh",
    t: [
      "أَمَّا الآنَ فَيَثْبُتُ: الإِيمَانُ وَالرَّجَاءُ وَالْمَحَبَّةُ، هذِهِ الثَّلاَثَةُ وَلكِنَّ أَعْظَمَهُنَّ الْمَحَبَّةُ.",
      "And now abideth faith, hope, charity, these three; but the greatest of these is charity.",
      "Maintenant donc ces trois choses demeurent: la foi, l’espérance, la charité; mais la plus grande de ces choses, c’est la charité.",
    ],
  },
  {
    r: ["إرميا ٢٩: ١١", "Jeremiah 29:11", "Jérémie 29:11"],
    m: "hl",
    t: [
      "لأَنِّي عَرَفْتُ الأَفْكَارَ الَّتِي أَنَا مُفْتَكِرٌ بِهَا عَنْكُمْ، يَقُولُ الرَّبُّ، أَفْكَارَ سَلاَمٍ لاَ شَرٍّ، لأُعْطِيَكُمْ آخِرَةً وَرَجَاءً.",
      "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
      "Car je connais les projets que j’ai formés sur vous, dit l’Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l’espérance.",
    ],
  },
  {
    r: ["مزمور ١١٩: ١٠٥", "Psalm 119:105", "Psaume 119:105"],
    m: "l",
    t: [
      "سِرَاجٌ لِرِجْلِي كَلاَمُكَ وَنُورٌ لِسَبِيلِي.",
      "Thy word is a lamp unto my feet, and a light unto my path.",
      "Ta parole est une lampe à mes pieds, et une lumière sur mon sentier.",
    ],
  },
  {
    r: ["متى ٦: ٩", "Matthew 6:9", "Matthieu 6:9"],
    m: "lg",
    c: "Ⲡⲉⲛⲓⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛϫⲉ ⲡⲉⲕⲣⲁⲛ.",
    t: [
      "أَبَانَا الَّذِي فِي السَّمَاوَاتِ، لِيَتَقَدَّسِ اسْمُكَ.",
      "Our Father which art in heaven, Hallowed be thy name.",
      "Notre Père qui es aux cieux! Que ton nom soit sanctifié!",
    ],
  },
  {
    r: ["رومية ٨: ٢٨", "Romans 8:28", "Romains 8:28"],
    m: "hs",
    t: [
      "وَنَحْنُ نَعْلَمُ أَنَّ كُلَّ الأَشْيَاءِ تَعْمَلُ مَعًا لِلْخَيْرِ لِلَّذِينَ يُحِبُّونَ اللهَ، الَّذِينَ هُمْ مَدْعُوُّونَ حَسَبَ قَصْدِهِ.",
      "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
      "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein.",
    ],
  },
  {
    r: ["فيلبي ٤: ٦", "Philippians 4:6", "Philippiens 4:6"],
    m: "at",
    t: [
      "لاَ تَهْتَمُّوا بِشَيْءٍ، بَلْ فِي كُلِّ شَيْءٍ بِالصَّلاَةِ وَالدُّعَاءِ مَعَ الشُّكْرِ، لِتُعْلَمْ طِلْبَاتُكُمْ عِنْدَ اللهِ.",
      "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.",
      "Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces.",
    ],
  },
  {
    r: ["مزمور ٢٧: ١", "Psalm 27:1", "Psaume 27:1"],
    m: "a",
    t: [
      "الرَّبُّ نُورِي وَخَلاَصِي، مِمَّنْ أَخَافُ؟ الرَّبُّ حِصْنُ حَيَاتِي، مِمَّنْ أَرْتَعِبُ؟",
      "The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?",
      "L'Éternel est ma lumière et mon salut: de qui aurais-je crainte? L'Éternel est le soutien de ma vie: de qui aurais-je peur?",
    ],
  },
  {
    r: ["إشعياء ٤٠: ٣١", "Isaiah 40:31", "Ésaïe 40:31"],
    m: "st",
    t: [
      "وَأَمَّا مُنْتَظِرُو الرَّبِّ فَيُجَدِّدُونَ قُوَّةً. يَرْتَفِعُونَ بِأَجْنِحَةٍ كَالنُّسُورِ. يَرْكُضُونَ وَلاَ يَتْعَبُونَ، يَمْشُونَ وَلاَ يُعْيُونَ.",
      "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
      "Ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent le vol comme les aigles; Ils courent, et ne se lassent point, Ils marchent, et ne se fatiguent point.",
    ],
  },
  {
    r: ["متى ٢٨: ٢٠", "Matthew 28:20", "Matthieu 28:20"],
    m: "al",
    t: [
      "وَعَلِّمُوهُمْ أَنْ يَحْفَظُوا كُلَّ مَا أَوْصَيْتُكُمْ بِهِ. وَهَا أَنَا مَعَكُمْ كُلَّ الأَيَّامِ إِلَى انْقِضَاءِ الدَّهْرِ. آمِينَ.",
      "Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.",
      "et enseignez-leur à observer tout ce que je vous ai prescrit. Et voici, je suis avec vous tous les jours, jusqu'à la fin du monde.",
    ],
  },
  {
    r: ["يوحنا ١٤: ٢٧", "John 14:27", "Jean 14:27"],
    m: "at",
    t: [
      "سَلاَمًا أَتْرُكُ لَكُمْ. سَلاَمِي أُعْطِيكُمْ. لَيْسَ كَمَا يُعْطِي الْعَالَمُ أُعْطِيكُمْ أَنَا. لاَ تَضْطَرِبْ قُلُوبُكُمْ وَلاَ تَخَفْ.",
      "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.",
      "Je vous laisse la paix, je vous donne ma paix. Je ne vous donne pas comme le monde donne. Que votre cœur ne se trouble point, et ne s'alarme point.",
    ],
  },
  {
    r: ["١ بطرس ٥: ٧", "1 Peter 5:7", "1 Pierre 5:7"],
    m: "t",
    t: [
      "مُلْقِينَ كُلَّ هَمِّكُمْ عَلَيْهِ، لأَنَّهُ هُوَ يَعْتَنِي بِكُمْ.",
      "Casting all your care upon him; for he careth for you.",
      "et déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous.",
    ],
  },
  {
    r: ["مزمور ٣٤: ١٨", "Psalm 34:18", "Psaume 34:18"],
    m: "tl",
    t: [
      "قَرِيبٌ هُوَ الرَّبُّ مِنَ الْمُنْكَسِرِي الْقُلُوبِ، وَيُخَلِّصُ الْمُنْسَحِقِي الرُّوحِ.",
      "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.",
      "L'Éternel est près de ceux qui ont le cœur brisé, Et il sauve ceux qui ont l'esprit dans l'abattement.",
    ],
  },
  {
    r: ["رومية ٨: ٣٩", "Romans 8:39", "Romains 8:39"],
    m: "h",
    t: [
      "وَلاَ عُلْوٌ وَلاَ عُمْقٌ وَلاَ خَلِيقَةٌ أُخْرَى تَقْدِرُ أَنْ تَفْصِلَنَا عَنْ مَحَبَّةِ اللهِ الَّتِي فِي الْمَسِيحِ يَسُوعَ رَبِّنَا.",
      "Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.",
      "ni les puissances, ni la hauteur, ni la profondeur, ni aucune autre créature ne pourra nous séparer de l'amour de Dieu manifesté en Jésus-Christ notre Seigneur.",
    ],
  },
  {
    r: ["مزمور ١٢١: ١-٢", "Psalm 121:1-2", "Psaume 121:1-2"],
    m: "s",
    t: [
      "أَرْفَعُ عَيْنَيَّ إِلَى الْجِبَالِ، مِنْ حَيْثُ يَأْتِي عَوْنِي. مَعُونَتِي مِنْ عِنْدِ الرَّبِّ، صَانِعِ السَّمَاوَاتِ وَالأَرْضِ.",
      "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.",
      "Je lève mes yeux vers les montagnes… D'où me viendra le secours? Le secours me vient de l'Éternel, Qui a fait les cieux et la terre.",
    ],
  },
  {
    r: ["٢ كورنثوس ١٢: ٩", "2 Corinthians 12:9", "2 Corinthiens 12:9"],
    m: "st",
    t: [
      "فَقَالَ لِي: «تَكْفِيكَ نِعْمَتِي، لأَنَّ قُوَّتِي فِي الضَّعْفِ تُكْمَلُ».",
      "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness.",
      "et il m'a dit: Ma grâce te suffit, car ma puissance s'accomplit dans la faiblesse.",
    ],
  },
  {
    r: ["عبرانيين ١١: ١", "Hebrews 11:1", "Hébreux 11:1"],
    m: "h",
    t: [
      "وَلَكِنَّ الإِيمَانَ هُوَ الثِّقَةُ بِمَا نَرْجُو، وَالإِيقَانُ بِأُمُورٍ لاَ نَرَاهَا.",
      "Now faith is the substance of things hoped for, the evidence of things not seen.",
      "Or la foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas.",
    ],
  },
  {
    r: ["مزمور ٥١: ١٠", "Psalm 51:10", "Psaume 51:10"],
    m: "l",
    t: [
      "قَلْبًا نَقِيًّا اخْلُقْ فِيَّ يَا اللهُ، وَرُوحًا مُسْتَقِيمًا جَدِّدْ فِي دَاخِلِي.",
      "Create in me a clean heart, O God; and renew a right spirit within me.",
      "Ô Dieu! crée en moi un cœur pur, Renouvelle en moi un esprit bien disposé.",
    ],
  },
  {
    r: ["أفسس ٢: ٨", "Ephesians 2:8", "Éphésiens 2:8"],
    m: "g",
    t: [
      "لأَنَّكُمْ بِالنِّعْمَةِ مُخَلَّصُونَ، بِالإِيمَانِ، وَذلِكَ لَيْسَ مِنْكُمْ. هُوَ عَطِيَّةُ اللهِ.",
      "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:",
      "car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu.",
    ],
  },
  {
    r: ["رؤيا ٢١: ٤", "Revelation 21:4", "Apocalypse 21:4"],
    m: "ht",
    t: [
      "وَسَيَمْسَحُ اللهُ كُلَّ دَمْعَةٍ مِنْ عُيُونِهِمْ، وَالْمَوْتُ لاَ يَكُونُ فِي مَا بَعْدُ، وَلاَ يَكُونُ حُزْنٌ وَلاَ صُرَاخٌ وَلاَ وَجَعٌ فِي مَا بَعْدُ، لأَنَّ الأُمُورَ الأُولَى قَدْ مَضَتْ.",
      "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.",
      "Il essuiera toute larme de leurs yeux, et la mort ne sera plus, et il n'y aura plus ni deuil, ni cri, ni douleur, car les premières choses ont disparu.",
    ],
  },
  {
    r: ["مزمور ٩١: ١", "Psalm 91:1", "Psaume 91:1"],
    m: "as",
    t: [
      "السَّاكِنُ فِي سِتْرِ الْعَلِيِّ، فِي ظِلِّ الْقَدِيرِ يَبِيتُ.",
      "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.",
      "Celui qui demeure sous l'abri du Très-Haut Repose à l'ombre du Tout Puissant.",
    ],
  },
  {
    r: ["إشعياء ٤٣: ٢", "Isaiah 43:2", "Ésaïe 43:2"],
    m: "a",
    t: [
      "عِنْدَمَا تَعْبُرُ فِي الْمِيَاهِ أَنَا مَعَكَ، وَفِي الأَنْهَارِ لاَ تَغْرَقُ. عِنْدَمَا تَمْشِي فِي النَّارِ لاَ تُحْرَقُ، وَاللَّهِيبُ لاَ يُلْهِبُكَ.",
      "When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned; neither shall the flame kindle upon thee.",
      "Si tu traverses les eaux, je serai avec toi; Et les fleuves, ils ne te submergeront point; Si tu marches dans le feu, tu ne te brûleras pas, Et la flamme ne t'embrasera pas.",
    ],
  },
  {
    r: ["مراثي ٣: ٢٢-٢٣", "Lamentations 3:22-23", "Lamentations 3:22-23"],
    m: "hg",
    t: [
      "مِنْ أَحْبَارِ الرَّبِّ أَنَّنَا لَمْ نَفْنَ بَعْدُ، لأَنَّ مَرَاحِمَهُ لاَ تَزُولُ. هِيَ جَدِيدَةٌ فِي كُلِّ صَبَاحٍ. عَظِيمَةٌ أَمَانَتُكَ.",
      "It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.",
      "Les bontés de l'Éternel ne sont pas épuisées, Ses compassions ne sont pas à leur terme; Elles se renouvellent chaque matin. Oh! que ta fidélité est grande!",
    ],
  },
  {
    r: ["عبرانيين ١٣: ٥", "Hebrews 13:5", "Hébreux 13:5"],
    m: "as",
    t: [
      "لِتَكُنْ سِيرَتُكُمْ خَالِيَةً مِنْ مَحَبَّةِ الْمَالِ، وَكُونُوا مُكْتَفِينَ بِمَا هُوَ حَاضِرٌ. لأَنَّهُ قَالَ: «لاَ أُخَلِّيكَ وَلاَ أَتْرُكُكَ».",
      "Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.",
      "Que votre conduite ne soit pas guidée par l'amour de l'argent; contentez-vous de ce que vous avez; car Dieu lui-même a dit: Je ne te délaisserai point, et je ne t'abandonnerai point.",
    ],
  },
  {
    r: ["يوحنا ١٤: ٦", "John 14:6", "Jean 14:6"],
    m: "l",
    t: [
      "قَالَ لَهُ يَسُوعُ: «أَنَا هُوَ الطَّرِيقُ وَالْحَقُّ وَالْحَيَاةُ. لَيْسَ أَحَدٌ يَأْتِي إِلَى الآبِ إِلاَّ بِي».",
      "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.",
      "Jésus lui dit: Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi.",
    ],
  },
];

const U = {
  ar: {
    loc: "ar-EG",
    tag: "آية النهارده",
    g: ["صباح الخير", "أهلاً بيك", "مساء الخير"],
    hi: "خد دقيقة هادية مع كلمة ربنا",
    ask: "اسأل نفسك",
    np: "اكتب سطر لنفسك…",
    p: [
      "الآية دي بتكلمك عن إيه في يومك؟",
      "فين محتاج الكلمة دي النهارده؟",
      "مين ممكن تبعتله الآية دي؟",
      "كلمة واحدة تلخص الآية دي عندك؟",
      "إيه الخطوة الصغيرة اللي تعملها بيها؟",
    ],
    read: "قرأتها ✓",
    done: "اتقرت ✓",
    next: "آية تانية",
    mood: "حاسس بإيه النهارده؟",
    all: "آية اليوم",
    streak: "يوم ورا بعض",
    s0: "ابدأ سلسلتك النهارده",
    s1: "بداية حلوة، كمّل بكرة",
    sn: "ما تكسرش السلسلة!",
    prog: "آيات قرأتها",
    favs: "المفضلة",
    none: "اضغط ♥ على أي آية وهتلاقيها هنا",
    copy: "نسخ",
    copied: "اتنسخت ✓",
    share: "مشاركة",
    foot: "النص: ترجمة فاندايك · KJV · لويس سيغون 1910 (ملك عام) — من غير تسجيل، وكل حاجة محفوظة على جهازك",
    m: {
      t: "تعبان",
      a: "خايف",
      l: "تايه",
      g: "شاكر",
      h: "محتاج أمل",
      s: "محتاج قوة",
    },
  },
  en: {
    loc: "en",
    tag: "Verse of the day",
    g: ["Good morning", "Welcome back", "Good evening"],
    hi: "Take a quiet minute with the Word.",
    ask: "Ask yourself",
    np: "Write a line to yourself…",
    p: [
      "What does this verse say to your day?",
      "Where do you need this word today?",
      "Who could you send this verse to?",
      "What one word sums it up for you?",
      "What small step can you take with it?",
    ],
    read: "I read it ✓",
    done: "Read ✓",
    next: "Another verse",
    mood: "How are you feeling today?",
    all: "Today’s verse",
    streak: "day streak",
    s0: "Start your streak today",
    s1: "Great start, come back tomorrow",
    sn: "Don’t break the chain!",
    prog: "verses read",
    favs: "Favorites",
    none: "Tap ♥ on any verse and it will show up here",
    copy: "Copy",
    copied: "Copied ✓",
    share: "Share",
    foot: "Text: Van Dyck (AR) · KJV (EN) · Louis Segond 1910 (FR), all public domain. No sign-up; everything stays on your device.",
    m: {
      t: "Tired",
      a: "Afraid",
      l: "Lost",
      g: "Grateful",
      h: "Need hope",
      s: "Need strength",
    },
  },
  fr: {
    loc: "fr",
    tag: "Verset du jour",
    g: ["Bonjour", "Bon retour", "Bonsoir"],
    hi: "Prends une minute de calme avec la Parole.",
    ask: "Demande-toi",
    np: "Écris une ligne pour toi…",
    p: [
      "Que dit ce verset à ta journée ?",
      "Où as-tu besoin de cette parole aujourd’hui ?",
      "À qui pourrais-tu envoyer ce verset ?",
      "Quel mot le résume pour toi ?",
      "Quel petit pas peux-tu faire avec lui ?",
    ],
    read: "Je l’ai lu ✓",
    done: "Lu ✓",
    next: "Un autre verset",
    mood: "Comment te sens-tu aujourd’hui ?",
    all: "Verset du jour",
    streak: "jours d’affilée",
    s0: "Commence ta série aujourd’hui",
    s1: "Beau début, reviens demain",
    sn: "Ne casse pas la chaîne !",
    prog: "versets lus",
    favs: "Favoris",
    none: "Appuie sur ♥ sur un verset et il apparaîtra ici",
    copy: "Copier",
    copied: "Copié ✓",
    share: "Partager",
    foot: "Texte : Van Dyck (AR) · KJV (EN) · Louis Segond 1910 (FR), domaine public. Sans inscription ; tout reste sur ton appareil.",
    m: {
      t: "Fatigué",
      a: "Peur",
      l: "Perdu",
      g: "Reconnaissant",
      h: "Besoin d’espoir",
      s: "Besoin de force",
    },
  },
};

const LI = { ar: 0, en: 1, fr: 2, cp: 0 };
U.cp = U.ar;

let S = { lang: null, theme: null, days: {}, seen: [], favs: [] };
try {
  Object.assign(S, JSON.parse(localStorage.getItem("aish") || "{}"));
} catch (e) {}
if (!S.lang) {
  const n = (navigator.language || "ar").slice(0, 2);
  S.lang = n === "fr" ? "fr" : n === "en" ? "en" : "ar";
}

const save = () => {
  try {
    localStorage.setItem("aish", JSON.stringify(S));
  } catch (e) {}
};

const key = (d) =>
  d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

const daily = () =>
  Math.floor((Date.now() - new Date().getTimezoneOffset() * 6e4) / 864e5) %
  V.length;

const $ = (s) => document.querySelector(s);

let cur = daily(),
  mood = null,
  tab = "home";

function streak() {
  const d = new Date();
  if (!S.days[key(d)]) d.setDate(d.getDate() - 1);
  let n = 0;
  while (S.days[key(d)]) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

function num(n) {
  return n.toLocaleString(U[S.lang].loc);
}

function setTheme() {
  if (S.theme) document.documentElement.dataset.theme = S.theme;
  else delete document.documentElement.dataset.theme;
}

const ME = {
  name: "",
  email: "",
  whatsapp: "",
  phone: "",
  github: "",
  site: "",
};

const X = {
  tabs: [
    ["اقرأ", "Read", "Lire"],
    ["الكتاب", "Book", "Livre"],
    ["الدفتر", "Notebook", "Carnet"],
    ["عظات", "Sermons", "Sermons"],
    ["جديد", "Updates", "Nouveautés"],
    ["عني", "About", "À propos"],
  ],
  sermT: ["عظات وشهداء", "Sermons & Martyrs", "Sermons et martyrs"],
  sermI: [
    "عظات كهنة مصريين وسِيَر شهداء الكنيسة. الروابط بتفتح المصادر الأصلية.",
    "Sermons from Egyptian priests and the stories of the Church’s martyrs. Links open the original sources.",
    "Sermons de prêtres égyptiens et récits des martyrs de l’Église. Les liens ouvrent les sources d’origine.",
  ],
  pr: ["آباء وكهنة", "Priests & fathers", "Prêtres et pères"],
  mr: ["شهداء", "Martyrs", "Martyrs"],
  lis: ["شوف العظات والسيرة ↗", "Sermons & stories ↗", "Sermons et récits ↗"],
  updT: ["إيه الجديد", "What’s new", "Nouveautés"],
  aboutT: ["عن المطوّر", "About the developer", "À propos du développeur"],
  about: [
    "أنا مطوّر ويب Full-stack (HTML وCSS وJS وNode.js وExpress وMySQL) بعمل مواقع آمنة وتشتغل على كل الأجهزة. عملت Evangil عشان قراءة الكلمة تبقى عادة يومية، ببلاش ومن غير تسجيل.",
    "I’m a full-stack web developer (HTML, CSS, JS, Node.js, Express, MySQL) building secure websites that work on every device. I made Evangil to make reading the Word a daily habit: free, with no sign-up.",
    "Je suis développeur web full-stack (HTML, CSS, JS, Node.js, Express, MySQL) et je crée des sites sécurisés qui fonctionnent sur tous les appareils. J’ai créé Evangil pour faire de la lecture de la Parole une habitude quotidienne : gratuit et sans inscription.",
  ],
  cont: ["للتواصل", "Get in touch", "Me contacter"],
  soon: [
    "بيانات التواصل هتتضاف قريب",
    "Contact details coming soon",
    "Coordonnées bientôt disponibles",
  ],
};

const F = [
  {
    k: "p",
    y: "1923–2012",
    q: "عظات البابا شنودة الثالث",
    n: ["البابا شنودة الثالث", "Pope Shenouda III", "Pape Shenouda III"],
    b: [
      "البابا الـ١١٧ للكنيسة القبطية الأرثوذكسية (١٩٧١–٢٠١٢)، اشتهر بعظته الأسبوعية يوم الأربعاء في الكاتدرائية المرقسية بالعباسية وبكتبه الكثيرة.",
      "The 117th Pope of the Coptic Orthodox Church (1971–2012), known for his weekly Wednesday sermons at St. Mark’s Cathedral in Abbassia and for his many books.",
      "117e pape de l’Église copte orthodoxe (1971–2012), connu pour ses sermons du mercredi à la cathédrale Saint-Marc d’Abbassia et pour ses nombreux livres.",
    ],
  },
  {
    k: "p",
    y: "1919–2006",
    q: "عظات الأب متى المسكين",
    n: ["الأب متى المسكين", "Fr. Matta El-Meskeen", "Père Matta El-Meskeen"],
    b: [
      "راهب وكاتب مصري قاد نهضة رهبانية في دير القديس مكاريوس بوادي النطرون، وترك كتبًا كثيرة في الحياة الروحية.",
      "Egyptian monk and author who led a monastic revival at the Monastery of St. Macarius in Wadi El-Natrun and left many books on the spiritual life.",
      "Moine et auteur égyptien, artisan d’un renouveau monastique au monastère Saint-Macaire du Wadi Natroun, auteur de nombreux livres de vie spirituelle.",
    ],
  },
  {
    k: "m",
    y: "~68",
    q: "سيرة القديس مرقس الرسول",
    n: [
      "القديس مرقس الرسول",
      "St. Mark the Evangelist",
      "Saint Marc l’évangéliste",
    ],
    b: [
      "كاتب الإنجيل ومؤسس كنيسة الإسكندرية، وتقول التقاليد إنه استشهد فيها نحو سنة ٦٨م.",
      "Writer of the Gospel and founder of the Church of Alexandria; tradition says he was martyred there around AD 68.",
      "Auteur de l’Évangile et fondateur de l’Église d’Alexandrie, où la tradition dit qu’il fut martyrisé vers l’an 68.",
    ],
  },
  {
    k: "m",
    y: "~296",
    q: "سيرة مارمينا العجايبي",
    n: [
      "مارمينا العجايبي",
      "St. Mina the Miracle-Worker",
      "Saint Mina le thaumaturge",
    ],
    b: [
      "جندي استشهد نحو سنة ٢٩٦م، ومنطقة أبو مينا قرب الإسكندرية من مواقع التراث العالمي لليونسكو.",
      "A soldier martyred around AD 296; the Abu Mena site near Alexandria is a UNESCO World Heritage Site.",
      "Soldat martyrisé vers 296 ; le site d’Abou Mena, près d’Alexandrie, est classé au patrimoine mondial de l’UNESCO.",
    ],
  },
  {
    k: "m",
    y: "2015",
    q: "شهداء ليبيا الـ٢١ قصة",
    n: [
      "شهداء ليبيا الـ٢١",
      "The 21 Martyrs of Libya",
      "Les 21 martyrs de Libye",
    ],
    b: [
      "في ١٥ فبراير ٢٠١٥ قُتل ٢١ رجلًا في ليبيا (٢٠ مصريًا قبطيًا ومعهم رجل من غانا)، وتحتفل بهم الكنيسة القبطية كشهداء.",
      "On 15 February 2015, 21 men (20 Egyptian Copts and one Ghanaian) were killed in Libya; the Coptic Church commemorates them as martyrs.",
      "Le 15 février 2015, 21 hommes (20 coptes égyptiens et un Ghanéen) ont été tués en Libye ; l’Église copte les commémore comme martyrs.",
    ],
  },
];

const logs = [
  {
    v: "v1.3",
    d: "2026-10-22",
    t: ["الكتاب والدفتر", "The Book and the Notebook", "Le Livre et le Carnet"],
    x: [
      "كتاب بصفحتين (عربي · إنجليزي · فرنسي · قبطي)، تظليل الآيات، علامة مقروء، علامة مرجعية، ودفتر ملاحظات.",
      "A two-page book (Arabic · English · French · Coptic), verse highlights, chapter read marks, a bookmark and a notebook.",
      "Un livre à deux pages (arabe · anglais · français · copte), versets surlignés, chapitres lus, signet et carnet de notes.",
    ],
  },
  {
    v: "v1.2.1",
    d: "2026-10-18",
    t: [
      "اضافه 20 أيه جديده",
      "Added 20 new verses ",
      "Ajout de 20 nouveaux versets",
    ],
    x: [
      "أضفنا سِيَر آباء مصريين وشهداء مع روابط للعظات.",
      "Added profiles of Egyptian fathers and martyrs with links to sermons.",
      "Ajout de portraits de pères égyptiens et de martyrs avec liens vers des sermons.",
    ],
  },
  {
    v: "v1.2",
    d: "2026-10-18",
    t: [
      "تابات جديدة: عظات وشهداء، جديد، وعني",
      "New tabs: Sermons & Martyrs, Updates, About",
      "Nouveaux onglets : Sermons et martyrs, Nouveautés, À propos",
    ],
    x: [
      "أضفنا سِيَر آباء مصريين وشهداء مع روابط للعظات.",
      "Added profiles of Egyptian fathers and martyrs with links to sermons.",
      "Ajout de portraits de pères égyptiens et de martyrs avec liens vers des sermons.",
    ],
  },
  {
    v: "v1.1",
    d: "2026-10-18",
    t: [
      "القبطي وتصميم أدفى",
      "Coptic and a warmer design",
      "Le copte et un design plus chaleureux",
    ],
    x: [
      "زر Ⲙ للغة القبطية (الصلاة الربانية دلوقتي والباقي تحت المراجعة)، وتحية حسب الوقت وسطر تكتبه لنفسك.",
      "The Ⲙ button adds Coptic (the Lord’s Prayer for now, the rest under review), plus a time-of-day greeting and a note line for yourself.",
      "Le bouton Ⲙ ajoute le copte (le Notre Père pour l’instant, le reste en relecture), une salutation selon l’heure et une ligne de notes personnelle.",
    ],
  },
  {
    v: "v1.0",
    d: "2026-10-18",
    t: ["انطلاق Evangil", "Evangil launches", "Lancement d’Evangil"],
    x: [
      "ثلاث لغات، سلسلة قراءة يومية، آيات حسب المزاج، من غير تسجيل.",
      "Three languages, a daily reading streak, verses by mood, no sign-up.",
      "Trois langues, une série de lecture quotidienne, des versets selon l’humeur, sans inscription.",
    ],
  },
];

const TABS = ["home", "book", "note", "ser", "logs", "me"];

function nav(u, i) {
  const btns = X.tabs
    .map(
      (t, n) =>
        `<button class="chip ${tab === TABS[n] ? "on" : ""}" data-tab="${TABS[n]}">${t[i]}</button>`,
    )
    .join("");
  return `<div class="tabs">${btns}</div>`;
}

function card(f, i) {
  const href =
    f.s ||
    "https://www.youtube.com/results?search_query=" + encodeURIComponent(f.q);
  return `<div class="card2"><h3>${f.n[i]} <span class="y">${f.y}</span></h3><p>${f.b[i]}</p><a class="lk" href="${href}" target="_blank" rel="noopener noreferrer">${X.lis[i]}</a></div>`;
}

function panel(i) {
  if (tab === "book") return WS.book(i);
  if (tab === "note") return WS.note(i);
  const hd = (t, s) =>
    `<div class="hi"><div><h1>${t}</h1>${s ? `<p>${s}</p>` : ""}</div></div>`;

  if (tab === "ser") {
    // Brain rot function, i don't remember how it works.
    const sec = (title, k) =>
      `<h2>${title}</h2>` +
      F.filter((f) => f.k === k)
        .map((f) => card(f, i))
        .join("");
    return hd(X.sermT[i], X.sermI[i]) + sec(X.pr[i], "p") + sec(X.mr[i], "m");
  }

  if (tab === "logs") {
    const items = logs
      .map(
        (e) =>
          `<div class="card2"><span class="ver">${e.v}</span> <span class="y">${e.d}</span><h3>${e.t[i]}</h3><p>${e.x[i]}</p></div>`,
      )
      .join("");
    return hd(X.updT[i]) + items;
  }

  const links = [
    // The regex is just an random 'Medium' post i have seen that actually helped.
    ["✉", ME.email && "mailto:" + ME.email, ME.email],
    [
      "WhatsApp",
      ME.whatsapp && "https://wa.me/" + ME.whatsapp.replace(/[^0-9]/g, ""),
      ME.whatsapp,
    ],
    ["☎", ME.phone && "tel:" + ME.phone, ME.phone],
    ["GitHub", ME.github, ME.github],
    ["🌐", ME.site, ME.site],
  ].filter((x) => x[1]);

  const chips = links
    .map(
      (x) =>
        `<a class="chip" href="${x[1]}" target="_blank" rel="noopener noreferrer">${x[0]} ${x[2]}</a>`,
    )
    .join("");

  return (
    hd(ME.name || X.aboutT[i], ME.name ? X.aboutT[i] : "") +
    `<div class="card2"><p>${X.about[i]}</p></div><h2>${X.cont[i]}</h2>` +
    `<div class="chips">${chips || `<p class="empty">${X.soon[i]}</p>`}</div>`
  );
}

const SUN = // SVG is made with chatgbt, there's no human that writes random things like 4v8M32
    '<svg viewBox="0 0 64 64"><g stroke="var(--acc2)" stroke-width="4" stroke-linecap="round"><path d="M32 4v8M32 52v8M4 32h8M52 32h8M12 12l6 6M46 46l6 6M12 52l6-6M46 18l6-6"/></g><circle cx="32" cy="32" r="12" fill="var(--acc)"/></svg>',
  MOON =
    '<svg viewBox="0 0 64 64"><path d="M44 8a24 24 0 1 0 12 36A20 20 0 0 1 44 8z" fill="var(--acc2)"/></svg>';

function hello(u) {
  const h = new Date().getHours();
  const k = h < 12 ? 0 : h < 18 ? 1 : 2;
  const icon = h < 5 || h >= 19 ? MOON : SUN;
  return `<div class="hi">${icon}<div><h1>${u.g[k]}</h1><p>${u.hi}</p></div></div>`;
}

function render(anim) {
  // Got back pain while doing this thing
  const u = U[S.lang],
    i = LI[S.lang],
    v = V[cur],
    h = document.documentElement;

  h.lang = S.lang === "cp" ? "ar" : S.lang;
  h.dir = S.lang === "ar" || S.lang === "cp" ? "rtl" : "ltr";
  document.title = "Evangil";

  const langName = (l) =>
    l === "ar" ? "ع" : l === "cp" ? "Ⲙ" : l.toUpperCase();
  $("#tools").innerHTML =
    ["ar", "en", "fr", "cp"]
      .map(
        (l) =>
          `<button class="${l === S.lang ? "on" : ""}" data-l="${l}">${langName(l)}</button>`,
      )
      .join("") + `<button data-th aria-label="theme">◐</button>`;

  const st = streak();
  const today = !!S.days[key(new Date())]; // For less hours wasted the '!!' converts whatever values into boolean.

  const wk = []; // Most random variable names in this section.
  for (let k = 6; k >= 0; k--) {
    const d = new Date();
    d.setDate(d.getDate() - k);
    const day = d.toLocaleDateString(u.loc, { weekday: "narrow" });
    wk.push(
      `<div class="dot ${S.days[key(d)] ? "f" : ""}"><i></i>${day}</div>`,
    );
  }

  const isRead = S.seen.includes(cur);
  const pct = Math.round((S.seen.length / V.length) * 100); // Actually don't remember how it function.

  const sub = st === 0 ? u.s0 : today && st === 1 ? u.s1 : !today ? u.sn : ""; // Wa did i wro here 😢
  // To rememeber the '? :' is a if else func
  const streakBox = `<div class="streak"><div class="flame ${today ? "lit" : ""}">🔥</div><div><div class="n">${num(st)}</div><div class="sub">${st ? u.streak : ""} ${sub}</div></div><div class="dots">${wk.join("")}</div></div>`;

  // From there is absolute cHaOs no notes or comments just random and horrible things that works
  const moodChips =
    `<button class="chip ${!mood ? "on" : ""}" data-m="">${u.all}</button>` +
    Object.entries(u.m)
      .map(
        ([k, t]) =>
          `<button class="chip ${mood === k ? "on" : ""}" data-m="${k}">${t}</button>`,
      )
      .join("");

  const note = ((S.notes && S.notes[cur]) || "")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
  const body =
    S.lang === "cp" && v.c
      ? `<p class="txt cp">${v.c}</p>`
      : (S.lang === "cp"
          ? `<p class="cpn">النص القبطي قيد المراجعة، دي النسخة العربي</p>`
          : "") + `<p class="txt">${v.t[i]}</p>`;

  const verse = `<section class="verse ${anim ? "pop" : ""}"><span class="tag">${u.tag}</span>${body}<p class="ref">${v.r[i]}</p><div class="ask"><b>${u.ask}</b>${u.p[cur % 5]}</div><input class="note" data-note maxlength="140" placeholder="${u.np}" value="${note}"><div class="acts"><button class="btn main ${isRead ? "done" : ""}" data-read>${isRead ? u.done : u.read}</button><button class="btn fav ${S.favs.includes(cur) ? "on" : ""}" data-fav>♥</button><button class="btn" data-copy>${u.copy}</button><button class="btn" data-share>${u.share}</button><button class="btn" data-next>${u.next} ↻</button></div></section>`;

  const prog = `<div class="prog"><h2>${num(S.seen.length)} / ${num(V.length)} ${u.prog}</h2><div class="bar"><b style="width:${pct}%"></b></div></div>`;

  const favs =
    S.favs
      .map(
        (f) =>
          `<div class="fv" data-f="${f}"><b>${V[f].r[i]}</b>${V[f].t[i].slice(0, 90)}${V[f].t[i].length > 90 ? "…" : ""}</div>`,
      )
      .join("") || `<p class="empty">${u.none}</p>`;

  $("#app").innerHTML =
    nav(u, i) +
    (tab !== "home"
      ? panel(i)
      : hello(u) +
        streakBox +
        `<h2>${u.mood}</h2><div class="chips">${moodChips}</div>` +
        verse +
        prog +
        `<h2>♥ ${u.favs}</h2><div class="favs">${favs}</div>`);

  $("#foot").textContent = u.foot;
  if (typeof WS !== "undefined" && WS) WS.after();
}

const DIR = [
  [1, 0],
  [0.9, 0.43],
  [0.62, 0.78],
  [0.22, 0.97],
  [-0.22, 0.97],
  [-0.62, 0.78],
  [-0.9, 0.43],
  [-1, 0],
  [-0.9, -0.43],
  [-0.62, -0.78],
  [-0.22, -0.97],
  [0.22, -0.97],
  [0.62, -0.78],
  [0.9, -0.43],
];

function burst(el) {
  const r = el.getBoundingClientRect();
  for (let k = 0; k < 14; k++) {
    const s = document.createElement("span");
    s.className = "sp";
    s.textContent = k % 3 === 2 ? "🔥" : k % 2 ? "✨" : "✦";
    s.style.left = r.left + r.width / 2 + "px";
    s.style.top = r.top + r.height / 2 + "px";
    s.style.setProperty("--x", DIR[k][0] * 90 + "px");
    s.style.setProperty("--y", DIR[k][1] * 90 + "px");
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1000);
  }
}

function pick() {
  const pool = V.map((v, k) => k).filter(
    (k) => k !== cur && (!mood || V[k].m.includes(mood)),
  );
  if (pool.length) cur = pool[Math.floor(Math.random() * pool.length)];
}

document.addEventListener("click", async (e) => {
  // i say i won't write any other notes, but this is most horrifying thing i actually did.
  const t = e.target.closest("button,.fv");
  if (!t) return;
  const d = t.dataset;

  if (d.l) {
    S.lang = d.l;
    save();
    render();
  } else if (d.tab) {
    tab = d.tab;
    render();
    scrollTo({ top: 0 });
  } else if (t.hasAttribute("data-th")) {
    const dark = matchMedia("(prefers-color-scheme: dark)").matches;
    const now = S.theme || (dark ? "dark" : "light");
    S.theme = now === "dark" ? "light" : "dark";
    setTheme();
    save();
  } else if (d.m !== undefined) {
    mood = d.m || null;
    if (mood) pick();
    else cur = daily();
    render(true);
  } else if (t.hasAttribute("data-next")) {
    pick();
    render(true);
  } else if (t.hasAttribute("data-read")) {
    if (!S.seen.includes(cur)) S.seen.push(cur);
    S.days[key(new Date())] = 1;
    save();
    render();
    burst($("[data-read]"));
  } else if (t.hasAttribute("data-fav")) {
    const k = S.favs.indexOf(cur);
    if (k < 0) S.favs.push(cur);
    else S.favs.splice(k, 1);
    save();
    render();
  } else if (t.hasAttribute("data-copy") || t.hasAttribute("data-share")) {
    const i = LI[S.lang];
    const txt = `${V[cur].t[i]}\n— ${V[cur].r[i]}`;
    if (t.hasAttribute("data-share") && navigator.share) {
      try {
        await navigator.share({ text: txt });
        return;
      } catch (x) {}
    }
    try {
      await navigator.clipboard.writeText(txt);
    } catch (x) {}
    const o = t.textContent;
    t.textContent = U[S.lang].copied;
    setTimeout(() => (t.textContent = o), 1400);
  } else if (d.f) {
    cur = +d.f;
    mood = null;
    render(true);
    scrollTo({ top: 0, behavior: "smooth" });
  }
});

document.addEventListener("input", (e) => {
  if (e.target.matches("[data-note]")) {
    S.notes = S.notes || {};
    S.notes[cur] = e.target.value;
    save();
  }
});

setTheme();
render(true);


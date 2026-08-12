const baseQuestions = [
  {
    id: 1,
    question: 'Quelle est la fonction principale des mitochondries dans une cellule ?',
    options: ['Produire de l’énergie', 'Stocker l’ADN', 'Synthétiser les protéines', 'Réguler la transpiration'],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: 'Quel organe filtre le sang dans le corps humain ?',
    options: ['Le cœur', 'Le foie', 'Le rein', 'Le poumon'],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: 'Dans la classification des cellules, quelle structure contient l’information génétique ?',
    options: ['Le cytoplasme', 'Le noyau', 'La membrane', 'La vacuole'],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: 'Quelle est la formule chimique de l’eau ?',
    options: ['CO2', 'O2', 'H2O', 'NaCl'],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: 'Quel est le plus grand planète du système solaire ?',
    options: ['Mars', 'Jupiter', 'Vénus', 'Mercure'],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: 'Quelle est la planète la plus proche du Soleil ?',
    options: ['Vénus', 'Mercure', 'Mars', 'Neptune'],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: 'Dans une fraction, que représente le dénominateur ?',
    options: ['Le nombre total de parts', 'Le nombre de parts prises', 'Le résultat final', 'Le quotient'],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: 'Quelle est la valeur de 7 × 8 ?',
    options: ['54', '56', '58', '60'],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: 'Quel est le résultat de 15 - 7 ?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: 'Quelle est la capitale du Sénégal ?',
    options: ['Dakar', 'Saint-Louis', 'Thiès', 'Ziguinchor'],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: 'Quel continent est traversé par l’équateur ?',
    options: ['Europe', 'Asie', 'Afrique', 'Océanie'],
    correctAnswer: 2,
  },
  {
    id: 12,
    question: 'Qui a écrit “Le Petit Prince” ?',
    options: ['Victor Hugo', 'Antoine de Saint-Exupéry', 'Albert Camus', 'Molière'],
    correctAnswer: 1,
  },
  {
    id: 13,
    question: 'Quel est le synonyme de “rapidement” ?',
    options: ['Lentement', 'Vite', 'Doucement', 'Longtemps'],
    correctAnswer: 1,
  },
  {
    id: 14,
    question: 'Quel est l’antonyme de “heureux” ?',
    options: ['Satisfait', 'Content', 'Malheureux', 'Tranquille'],
    correctAnswer: 2,
  },
  {
    id: 15,
    question: 'Dans une phrase, le verbe exprime généralement ?',
    options: ['Le nom de l’objet', 'L’action ou l’état', 'Le pronom', 'La ponctuation'],
    correctAnswer: 1,
  },
  {
    id: 16,
    question: 'Quel est le terme utilisé pour une idée principale d’un texte ?',
    options: ['Conclusion', 'Thèse', 'Argument', 'Exemple'],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: 'Quel pays a pour capitale Nairobi ?',
    options: ['Kenya', 'Tanzanie', 'Ouganda', 'Rwanda'],
    correctAnswer: 0,
  },
  {
    id: 18,
    question: 'Quelle est la langue officielle du Brésil ?',
    options: ['Espagnol', 'Portugais', 'Français', 'Italien'],
    correctAnswer: 1,
  },
  {
    id: 19,
    question: 'Quel instrument sert à mesurer la température ?',
    options: ['Baromètre', 'Thermomètre', 'Altimètre', 'Voltmetre'],
    correctAnswer: 1,
  },
  {
    id: 20,
    question: 'Quel est le plus grand océan du monde ?',
    options: ['Océan Atlantique', 'Océan Indien', 'Océan Arctique', 'Océan Pacifique'],
    correctAnswer: 3,
  },
  {
    id: 21,
    question: 'Quel est le nombre premier après 11 ?',
    options: ['12', '13', '14', '15'],
    correctAnswer: 1,
  },
  {
    id: 22,
    question: 'Quelle est la racine carrée de 49 ?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 1,
  },
  {
    id: 23,
    question: 'Quel est le résultat de 3² ?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 3,
  },
  {
    id: 24,
    question: 'Quel est l’angle d’un triangle équilatéral ?',
    options: ['60°', '90°', '120°', '180°'],
    correctAnswer: 0,
  },
  {
    id: 25,
    question: 'Quelle est la capitale du Maroc ?',
    options: ['Alger', 'Rabat', 'Tunis', 'Tripoli'],
    correctAnswer: 1,
  },
  {
    id: 26,
    question: 'Quel est le nom de la force qui attire les objets vers la Terre ?',
    options: ['Magnétisme', 'Gravité', 'Friction', 'Électricité'],
    correctAnswer: 1,
  },
  {
    id: 27,
    question: 'Quel est l’élément chimique représenté par le symbole Fe ?',
    options: ['Fer', 'Fluor', 'Félin', 'Francium'],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: 'Quel type de réaction transforme un solide en liquide ?',
    options: ['Fusion', 'Vaporisation', 'Condensation', 'Solidification'],
    correctAnswer: 0,
  },
  {
    id: 29,
    question: 'Comment s’appelle la couche de l’atmosphère où nous vivons ?',
    options: ['Stratosphère', 'Mésosphère', 'Troposphère', 'Thermosphère'],
    correctAnswer: 2,
  },
  {
    id: 30,
    question: 'Quel est le premier ministre de l’Ancien Régime français ?',
    options: ['Roi', 'Président', 'Premier ministre', 'Empereur'],
    correctAnswer: 0,
  },
  {
    id: 31,
    question: 'Quelle guerre a opposé la France et l’Allemagne de 1870 à 1871 ?',
    options: ['Guerre de Cent Ans', 'Guerre franco-prussienne', 'Première Guerre mondiale', 'Seconde Guerre mondiale'],
    correctAnswer: 1,
  },
  {
    id: 32,
    question: 'Quel événement marque la fin de la Seconde Guerre mondiale en Europe ?',
    options: ['Le débarquement de Normandie', 'La bataille de Verdun', 'Le 8 mai 1945', 'La révolution française'],
    correctAnswer: 2,
  },
  {
    id: 33,
    question: 'Qui a proclamé les Droits de l’Homme et du Citoyen ?',
    options: ['Napoléon Bonaparte', 'Louis XVI', 'La Convention', 'L’Assemblée constituante'],
    correctAnswer: 3,
  },
  {
    id: 34,
    question: 'Quelle est la capitale de l’Egypte ?',
    options: ['Tunis', 'Le Caire', 'Alger', 'Rabat'],
    correctAnswer: 1,
  },
  {
    id: 35,
    question: 'Quel est le nom du document fondateur de la République française ?',
    options: ['La Déclaration des droits de l’homme', 'La Constitution de 1958', 'La Charte de 1814', 'Le Traité de Versailles'],
    correctAnswer: 0,
  },
  {
    id: 36,
    question: 'Quel est le synonyme de “sagesse” ?',
    options: ['Folie', 'Prudence', 'Agressivité', 'Lâcheté'],
    correctAnswer: 1,
  },
  {
    id: 37,
    question: 'Quel mot complète : “Il fait … aujourd’hui” ?',
    options: ['beau', 'beau', 'beaux', 'belle'],
    correctAnswer: 0,
  },
  {
    id: 38,
    question: 'Dans la phrase “Les enfants jouent dans le jardin”, quel est le sujet ?',
    options: ['Les enfants', 'jouent', 'dans le jardin', 'le jardin'],
    correctAnswer: 0,
  },
  {
    id: 39,
    question: 'Quel est l’adjectif dans : “La maison blanche” ?',
    options: ['maison', 'blanche', 'la', 'house'],
    correctAnswer: 1,
  },
  {
    id: 40,
    question: 'Quel est le contraire de “ouvrir” ?',
    options: ['fermer', 'cacher', 'mettre', 'prendre'],
    correctAnswer: 0,
  },
  {
    id: 41,
    question: 'Quel est le nom de la guerre de 1914 à 1918 ?',
    options: ['Première Guerre mondiale', 'Guerre froide', 'Guerre d’Algérie', 'Guerre de Corée'],
    correctAnswer: 0,
  },
  {
    id: 42,
    question: 'Quel est le pays voisin de la France au nord ?',
    options: ['L’Espagne', 'Le Portugal', 'La Belgique', 'L’Italie'],
    correctAnswer: 2,
  },
  {
    id: 43,
    question: 'Quel est le nom du cours d’eau qui traverse Paris ?',
    options: ['La Garonne', 'La Loire', 'La Seine', 'Le Rhône'],
    correctAnswer: 2,
  },
  {
    id: 44,
    question: 'Quel est l’élément principal du réseau électrique d’une maison ?',
    options: ['L’eau', 'Le courant', 'Le bois', 'Le gaz'],
    correctAnswer: 1,
  },
  {
    id: 45,
    question: 'Quel est le plus long fleuve du monde ?',
    options: ['Le Nil', 'L’Amazone', 'Le Mississippi', 'Le Yangtsé'],
    correctAnswer: 1,
  },
  {
    id: 46,
    question: 'Quel est le nom du processus par lequel les plantes fabriquent leur nourriture ?',
    options: ['Respiration', 'Photosynthèse', 'Digestion', 'Transpiration'],
    correctAnswer: 1,
  },
  {
    id: 47,
    question: 'Quel est le symbole chimique du sodium ?',
    options: ['S', 'Na', 'So', 'N'],
    correctAnswer: 1,
  },
  {
    id: 48,
    question: 'Quel est le résultat de 20 ÷ 4 ?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
  },
  {
    id: 49,
    question: 'Quel est le périmètre d’un carré de côté 5 cm ?',
    options: ['10 cm', '15 cm', '20 cm', '25 cm'],
    correctAnswer: 2,
  },
  {
    id: 50,
    question: 'Combien font 12 + 19 ?',
    options: ['29', '30', '31', '32'],
    correctAnswer: 2,
  },
  {
    id: 51,
    question: 'Quel est le plus petit nombre entier positif ?',
    options: ['0', '1', '2', '3'],
    correctAnswer: 1,
  },
  {
    id: 52,
    question: 'Combien de jours comporte une semaine ?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
  },
  {
    id: 53,
    question: 'Quel est le nom du grand ensemble d’étoiles qui contient notre Soleil ?',
    options: ['Planète', 'Galaxie', 'Comète', 'Astéroïde'],
    correctAnswer: 1,
  },
  {
    id: 54,
    question: 'Quel est le nom de la planète rouge ?',
    options: ['Vénus', 'Mars', 'Jupiter', 'Saturne'],
    correctAnswer: 1,
  },
  {
    id: 55,
    question: 'Quel mot est un nom commun ?',
    options: ['Paris', 'Marie', 'Livre', 'France'],
    correctAnswer: 2,
  },
  {
    id: 56,
    question: 'Quelle est la forme correcte ?',
    options: ['Je suis allé', 'Je suis allée', 'Je suis allés', 'Je suis allées'],
    correctAnswer: 0,
  },
  {
    id: 57,
    question: 'Quel est le pluriel de “cheval” ?',
    options: ['Chevaux', 'Chevals', 'Chevales', 'Cheval'],
    correctAnswer: 0,
  },
  {
    id: 58,
    question: 'Quel mot complète : “Elle a … une bonne note” ?',
    options: ['eu', 'eut', 'aura', 'avait'],
    correctAnswer: 0,
  },
  {
    id: 59,
    question: 'Quel est le nom du récit où l’on raconte une histoire imaginaire ?',
    options: ['Poème', 'Roman', 'Article', 'Lettre'],
    correctAnswer: 1,
  },
  {
    id: 60,
    question: 'Quel est le principal rôle d’un introducteur dans un exposé ?',
    options: ['Résumer la conclusion', 'Présenter le sujet', 'Corriger les erreurs', 'Faire rire'],
    correctAnswer: 1,
  },
  {
    id: 61,
    question: 'Quelle est la capitale de l’Algérie ?',
    options: ['Rabat', 'Tunis', 'Alger', 'Tripoli'],
    correctAnswer: 2,
  },
  {
    id: 62,
    question: 'Quel est le nom de la ligne imaginaire qui partage la Terre en deux hémisphères ?',
    options: ['Le méridien de Greenwich', 'L’équateur', 'Le tropique du Cancer', 'Le cercle polaire'],
    correctAnswer: 1,
  },
  {
    id: 63,
    question: 'Quel est le nom de la couche externe de la Terre ?',
    options: ['Le noyau', 'Le manteau', 'La croûte', 'La lithosphère'],
    correctAnswer: 2,
  },
  {
    id: 64,
    question: 'Quel est le principal gaz contenu dans l’air ?',
    options: ['Oxygène', 'Azote', 'Dioxyde de carbone', 'Hydrogène'],
    correctAnswer: 1,
  },
  {
    id: 65,
    question: 'Comment appelle-t-on un animal qui mange à la fois de la viande et des végétaux ?',
    options: ['Carnivore', 'Herbivore', 'Omnivore', 'Insectivore'],
    correctAnswer: 2,
  },
  {
    id: 66,
    question: 'Quel est le nom du phénomène par lequel l’eau passe de l’état liquide à gazeux ?',
    options: ['Fusion', 'Solidification', 'Vaporisation', 'Condensation'],
    correctAnswer: 2,
  },
  {
    id: 67,
    question: 'Quel est le résultat de 5 × 6 ?',
    options: ['25', '30', '35', '40'],
    correctAnswer: 1,
  },
  {
    id: 68,
    question: 'Quel est l’aire d’un rectangle de 6 cm de long et 4 cm de large ?',
    options: ['10 cm²', '20 cm²', '24 cm²', '28 cm²'],
    correctAnswer: 2,
  },
  {
    id: 69,
    question: 'Quel est le plus grand nombre parmi 58, 85, 75 et 68 ?',
    options: ['58', '68', '75', '85'],
    correctAnswer: 3,
  },
  {
    id: 70,
    question: 'Combien font 100 - 45 ?',
    options: ['45', '55', '65', '75'],
    correctAnswer: 1,
  },
  {
    id: 71,
    question: 'Quel est le nom du président de la République française depuis 2017 ?',
    options: ['Nicolas Sarkozy', 'François Hollande', 'Emmanuel Macron', 'Jacques Chirac'],
    correctAnswer: 2,
  },
  {
    id: 72,
    question: 'Quel est le mois qui suit avril ?',
    options: ['Mars', 'Mai', 'Juin', 'Juillet'],
    correctAnswer: 1,
  },
  {
    id: 73,
    question: 'Quel mot est un verbe ?',
    options: ['Maison', 'Livre', 'Courir', 'Joli'],
    correctAnswer: 2,
  },
  {
    id: 74,
    question: 'Quel est l’infinitif du verbe “mangent” ?',
    options: ['Manger', 'Mangeant', 'Mangé', 'Mangent'],
    correctAnswer: 0,
  },
  {
    id: 75,
    question: 'Quel est le bon accord : “des enfants …” ?',
    options: ['heureux', 'heureuse', 'heureuses', 'heureuxes'],
    correctAnswer: 0,
  },
  {
    id: 76,
    question: 'Quelle est la capitale du Canada ?',
    options: ['Toronto', 'Ottawa', 'Montréal', 'Vancouver'],
    correctAnswer: 1,
  },
  {
    id: 77,
    question: 'Quel est le pays connu pour le kangourou ?',
    options: ['Brésil', 'Australie', 'Argentine', 'Afrique du Sud'],
    correctAnswer: 1,
  },
  {
    id: 78,
    question: 'Quel est le nom du système de gouvernement où le peuple élit ses représentants ?',
    options: ['Monarchie', 'Dictature', 'Démocratie', 'Oligarchie'],
    correctAnswer: 2,
  },
  {
    id: 79,
    question: 'Quel est l’organe qui pompe le sang dans le corps ?',
    options: ['Le foie', 'Le cœur', 'Le poumon', 'Le cerveau'],
    correctAnswer: 1,
  },
  {
    id: 80,
    question: 'Quel est l’élément principal qui permet aux plantes de pousser ?',
    options: ['Le pétrole', 'Le soleil', 'Le sable', 'Le métal'],
    correctAnswer: 1,
  },
  {
    id: 81,
    question: 'Quel est le nom de la maladie due à un manque de vitamine C ?',
    options: ['Le scorbut', 'Le diabète', 'La rougeole', 'La grippe'],
    correctAnswer: 0,
  },
  {
    id: 82,
    question: 'Quel est le nom des parties du corps qui permettent le mouvement ?',
    options: ['Les os', 'Les dents', 'Les muscles', 'Les cheveux'],
    correctAnswer: 2,
  },
  {
    id: 83,
    question: 'Quel est le plus grand désert chaud du monde ?',
    options: ['Le Sahara', 'Le Gobi', 'Le Kalahari', 'Le Namib'],
    correctAnswer: 0,
  },
  {
    id: 84,
    question: 'Quelle est la capitale du Nigeria ?',
    options: ['Lagos', 'Abuja', 'Kano', 'Port Harcourt'],
    correctAnswer: 1,
  },
  {
    id: 85,
    question: 'Quelle est la langue officielle de la Chine ?',
    options: ['Le français', 'Le chinois mandarin', 'L’arabe', 'Le japonais'],
    correctAnswer: 1,
  },
  {
    id: 86,
    question: 'Quel est le résultat de 9 × 9 ?',
    options: ['72', '81', '90', '99'],
    correctAnswer: 1,
  },
  {
    id: 87,
    question: 'Combien font 40 + 25 ?',
    options: ['55', '60', '65', '70'],
    correctAnswer: 2,
  },
  {
    id: 88,
    question: 'Quel est le nom de la forme géométrique à trois côtés ?',
    options: ['Carré', 'Triangle', 'Rectangle', 'Cercle'],
    correctAnswer: 1,
  },
  {
    id: 89,
    question: 'Quelle est la valeur de 100 ÷ 10 ?',
    options: ['10', '100', '1', '0'],
    correctAnswer: 0,
  },
  {
    id: 90,
    question: 'Quel est le nom du document qui résume les idées principales d’un texte ?',
    options: ['Un résumé', 'Une lettre', 'Un dialogue', 'Un poème'],
    correctAnswer: 0,
  },
  {
    id: 91,
    question: 'Quelle est la capitale de l’Italie ?',
    options: ['Milan', 'Rome', 'Florence', 'Venise'],
    correctAnswer: 1,
  },
  {
    id: 92,
    question: 'Quel est le nom du système de numération utilisé dans les ordinateurs ?',
    options: ['Le système décimal', 'Le système binaire', 'Le système hexadécimal', 'Le système romain'],
    correctAnswer: 1,
  },
  {
    id: 93,
    question: 'Quelle est la couleur du sang dans les veines ?',
    options: ['Bleu', 'Rouge', 'Vert', 'Jaune'],
    correctAnswer: 1,
  },
  {
    id: 94,
    question: 'Quel est le nom de l’organe qui produit la bile ?',
    options: ['Le cœur', 'Le foie', 'Le pancréas', 'Le rein'],
    correctAnswer: 1,
  },
  {
    id: 95,
    question: 'Quel est le nom de l’appareil chargé de la respiration ?',
    options: ['Le système digestif', 'Le système nerveux', 'Le système respiratoire', 'Le système osseux'],
    correctAnswer: 2,
  },
  {
    id: 96,
    question: 'Quel est le nom d’une forme de discours qui raconte une histoire ?',
    options: ['Narration', 'Description', 'Argumentation', 'Exposition'],
    correctAnswer: 0,
  },
  {
    id: 97,
    question: 'Quelle est la capitale du Japon ?',
    options: ['Osaka', 'Kyoto', 'Tokyo', 'Sapporo'],
    correctAnswer: 2,
  },
  {
    id: 98,
    question: 'Quel est le nom de l’élément de la matière qui a pour symbole O ?',
    options: ['Or', 'Oxygène', 'Argent', 'Azote'],
    correctAnswer: 1,
  },
  {
    id: 99,
    question: 'Quel est le nom du phénomène où la lumière change de direction ?',
    options: ['Réflexion', 'Refraction', 'Diffusion', 'Absorption'],
    correctAnswer: 1,
  },
  {
    id: 100,
    question: 'Quel mot signifie “qui ne peut pas être cassé” ?',
    options: ['Fragile', 'Solide', 'Mou', 'Léger'],
    correctAnswer: 1,
  },
];

function makeOptions(correct, wrong1, wrong2, wrong3) {
  return [String(correct), String(wrong1), String(wrong2), String(wrong3)];
}

function generateExtraQuestions() {
  const questions = [];
  const grammarQuestions = [
    { question: 'Quel est le synonyme de “rapide” ?', options: ['Lent', 'Vite', 'Faible', 'Triste'], correctAnswer: 1 },
    { question: 'Quel est l’antonyme de “noir” ?', options: ['Blanc', 'Gris', 'Bleu', 'Brun'], correctAnswer: 0 },
    { question: 'Quel est le synonyme de “grand” ?', options: ['Petit', 'Large', 'Haut', 'Étroit'], correctAnswer: 2 },
    { question: 'Quel est l’antonyme de “fort” ?', options: ['Faible', 'Solide', 'Courageux', 'Rapide'], correctAnswer: 0 },
    { question: 'Comment conjugue-t-on “être” à la première personne du singulier ?','options': ['Es', 'Sommes', 'Suis', 'Êtes'], correctAnswer: 2 },
    { question: 'Comment conjugue-t-on “aller” à la troisième personne du singulier ?','options': ['Allons', 'Vont', 'Vas', 'Va'], correctAnswer: 3 },
    { question: 'Quel est le synonyme de “content” ?', options: ['Triste', 'Satisfait', 'Paresseux', 'Nerveux'], correctAnswer: 1 },
    { question: 'Quel est l’antonyme de “difficile” ?', options: ['Facile', 'Long', 'Penible', 'Rare'], correctAnswer: 0 },
    { question: 'Comment conjugue-t-on “finir” avec “nous” ?','options': ['Finissons', 'Finissez', 'Finissent', 'Finit'], correctAnswer: 0 },
    { question: 'Comment conjugue-t-on “prendre” avec “elles” ?','options': ['Prenent', 'Prenez', 'Prend', 'Prenons'], correctAnswer: 0 },
    { question: 'Quel est le synonyme de “triste” ?', options: ['Mélancolique', 'Joyeux', 'Rapide', 'Léger'], correctAnswer: 0 },
    { question: 'Quel est l’antonyme de “chaud” ?', options: ['Froid', 'Tendre', 'Sombre', 'Sec'], correctAnswer: 0 },
    { question: 'Comment conjugue-t-on “avoir” avec “tu” ?','options': ['As', 'Avez', 'Ont', 'Ai'], correctAnswer: 0 },
    { question: 'Quel est le synonyme de “beau” ?', options: ['Joli', 'Sec', 'Lent', 'Clair'], correctAnswer: 0 },
    { question: 'Quel est l’antonyme de “lent” ?', options: ['Rapide', 'Calme', 'Mince', 'Grand'], correctAnswer: 0 },
    { question: 'Comment conjugue-t-on “faire” à la troisième personne du singulier ?','options': ['Fait', 'Fais', 'Faisons', 'Font'], correctAnswer: 0 },
    { question: 'Quel est le synonyme de “sombre” ?', options: ['Obscur', 'Brillant', 'Doux', 'Léger'], correctAnswer: 0 },
    { question: 'Quel est l’antonyme de “facile” ?', options: ['Difficile', 'Plus', 'Claire', 'Lourd'], correctAnswer: 0 },
    { question: 'Comment conjugue-t-on “aller” à la première personne du singulier ?','options': ['Allons', 'Vais', 'Vas', 'Vont'], correctAnswer: 1 },
    { question: 'Quel est le synonyme de “heureux” ?', options: ['Jaloux', 'Triste', 'Joyeux', 'Rouge'], correctAnswer: 2 },
  ];

  const geographyQuestions = [
    { question: 'Quelle est la capitale de l’Italie ?', options: ['Rome', 'Milan', 'Venise', 'Florence'], correctAnswer: 0 },
    { question: 'Quelle est la capitale de l’Égypte ?', options: ['Le Caire', 'Alexandrie', 'Gizeh', 'Louqsor'], correctAnswer: 0 },
    { question: 'Quel fleuve traverse la France ?', options: ['La Loire', 'Le Danube', 'Le Nil', 'Le Rhin'], correctAnswer: 0 },
    { question: 'Quel est le plus haut sommet d’Afrique ?', options: ['Kilimandjaro', 'Mont Elbrouz', 'Mont Kenya', 'Atlas'], correctAnswer: 0 },
    { question: 'Quel est le plus grand continent ?', options: ['Afrique', 'Europe', 'Asie', 'Océanie'], correctAnswer: 2 },
    { question: 'Quel pays a un drapeau rouge avec un croissant blanc ?', options: ['Turquie', 'Canada', 'Chine', 'Suisse'], correctAnswer: 0 },
    { question: 'Quel est l’océan le plus profond ?', options: ['Océan Atlantique', 'Océan Indien', 'Océan Pacifique', 'Océan Arctique'], correctAnswer: 2 },
    { question: 'Quelle est la capitale du Canada ?', options: ['Toronto', 'Ottawa', 'Montréal', 'Vancouver'], correctAnswer: 1 },
    { question: 'Quel est le plus grand pays d’Amérique du Sud ?', options: ['Argentine', 'Brésil', 'Pérou', 'Chili'], correctAnswer: 1 },
    { question: 'Dans quel pays se trouvent les pyramides de Gizeh ?', options: ['Égypte', 'Mexique', 'Grèce', 'Turquie'], correctAnswer: 0 },
    { question: 'À quelle date a eu lieu la prise de la Bastille ?', options: ['14 juillet 1789', '1er mai 1789', '4 juillet 1776', '11 novembre 1918'], correctAnswer: 0 },
    { question: 'En quelle année la Seconde Guerre mondiale s’est-elle terminée en Europe ?', options: ['1944', '1945', '1946', '1947'], correctAnswer: 1 },
    { question: 'Où se trouve la Tour Eiffel ?', options: ['Londres', 'Paris', 'Rome', 'Madrid'], correctAnswer: 1 },
    { question: 'Qui a inventé l’imprimerie moderne ?', options: ['Edison', 'Gutenberg', 'Tesla', 'Newton'], correctAnswer: 1 },
    { question: 'Quel pays a Tokyo comme capitale ?', options: ['Chine', 'Japon', 'Corée du Sud', 'Thaïlande'], correctAnswer: 1 },
    { question: 'Quel désert est considéré comme le plus grand désert chaud ?', options: ['Sahara', 'Gobi', 'Kalahari', 'Atacama'], correctAnswer: 0 },
    { question: 'Quel pays est célèbre pour ses kangourous ?', options: ['Australie', 'Inde', 'Canada', 'Brésil'], correctAnswer: 0 },
    { question: 'Quelle est la capitale de l’Espagne ?', options: ['Barcelone', 'Madrid', 'Séville', 'Valence'], correctAnswer: 1 },
    { question: 'Quel est la capitale du Portugal ?', options: ['Lisbonne', 'Porto', 'Coimbra', 'Faro'], correctAnswer: 0 },
    { question: 'Quelle est la capitale de l’Indonésie ?', options: ['Singapour', 'Jakarta', 'Manille', 'Kuala Lumpur'], correctAnswer: 1 },
  ];

  const scienceQuestions = [
    { question: 'Quel est le symbole chimique de l’eau ?', options: ['HO', 'H2O', 'O2H', 'OH2'], correctAnswer: 1 },
    { question: 'Quel gaz respirons-nous pour vivre ?', options: ['Nitrogène', 'Oxygène', 'Hydrogène', 'Dioxyde de carbone'], correctAnswer: 1 },
    { question: 'Quel est le symbole chimique du fer ?', options: ['Fe', 'Ir', 'Fr', 'Fi'], correctAnswer: 0 },
    { question: 'Quelle planète est la plus proche du Soleil ?', options: ['Vénus', 'Mars', 'Mercure', 'Terre'], correctAnswer: 2 },
    { question: 'Quelle unité mesure l’intensité électrique ?', options: ['Volt', 'Watt', 'Ampère', 'Ohm'], correctAnswer: 2 },
    { question: 'Quel organe pompe le sang ?', options: ['Le foie', 'Le poumon', 'Le cœur', 'Le rein'], correctAnswer: 2 },
    { question: 'Quel est l’état de l’eau à 0°C ?', options: ['Gazeux', 'Solide', 'Liquide', 'Plasma'], correctAnswer: 2 },
    { question: 'Quel est le principal gaz contenu dans l’air ?', options: ['Oxygène', 'Hydrogène', 'Nitrogène', 'Dioxyde de carbone'], correctAnswer: 2 },
    { question: 'Quel type d’énergie provient du Soleil ?', options: ['Éolienne', 'Solaire', 'Hydraulique', 'Géothermique'], correctAnswer: 1 },
    { question: 'Quel animal est un mammifère marin ?', options: ['Requin', 'Dauphin', 'Calmar', 'Poisson-lune'], correctAnswer: 1 },
    { question: 'Qu’est-ce que la photosynthèse produit principalement ?', options: ['Gaz carbonique', 'Oxygène', 'Eau', 'Feu'], correctAnswer: 1 },
    { question: 'Quel est le principal métal dans l’acier ?', options: ['Aluminium', 'Fer', 'Cuivre', 'Platine'], correctAnswer: 1 },
    { question: 'Quelle est la vitesse approximative du son dans l’air ?', options: ['340 m/s', '150 m/s', '1000 m/s', '30 m/s'], correctAnswer: 0 },
    { question: 'Quel est l’organisme producteur de pollen ?', options: ['L’arbre', 'La fleur', 'Le champignon', 'La roche'], correctAnswer: 1 },
    { question: 'Quel est le liquide qui transporte le sang ?', options: ['Plasma', 'Lymphe', 'Salive', 'Urine'], correctAnswer: 0 },
    { question: 'Quel est le plus grand organe du corps humain ?', options: ['Le cuir chevelu', 'La peau', 'Le foie', 'Le cœur'], correctAnswer: 1 },
    { question: 'Quel est l’élément principal de l’ADN ?', options: ['Protéine', 'Acide aminé', 'Nucléotide', 'Lipide'], correctAnswer: 2 },
    { question: 'Quel est le nom d’un animal qui est un reptile ?', options: ['Grenouille', 'Serpent', 'Chien', 'Aigle'], correctAnswer: 1 },
    { question: 'Quel est le principal organe de la respiration ?', options: ['Le foie', 'Le cœur', 'Les poumons', 'La rate'], correctAnswer: 2 },
    { question: 'Quel est le phénomène où la lumière change de direction ?', options: ['Réflexion', 'Réfraction', 'Diffusion', 'Absorption'], correctAnswer: 1 },
  ];

  const advancedMathQuestions = [
    { question: 'Quel est 15% de 200 ?', options: ['15', '20', '30', '50'], correctAnswer: 2 },
    { question: 'Quel est le prochain nombre premier après 31 ?', options: ['33', '35', '37', '39'], correctAnswer: 2 },
    { question: 'Que vaut 7² ?', options: ['42', '49', '56', '63'], correctAnswer: 1 },
    { question: 'Quel est 3/4 de 100 ?', options: ['50', '60', '75', '80'], correctAnswer: 2 },
    { question: 'Que vaut 0,5 + 0,25 ?', options: ['0,55', '0,60', '0,75', '0,80'], correctAnswer: 2 },
    { question: 'Que vaut 12 × 12 ?', options: ['124', '144', '154', '164'], correctAnswer: 1 },
    { question: 'Quel est 25% de 80 ?', options: ['15', '18', '20', '25'], correctAnswer: 2 },
    { question: 'Que vaut 5³ ?', options: ['25', '50', '100', '125'], correctAnswer: 3 },
    { question: 'Que vaut 9² ?', options: ['72', '81', '90', '99'], correctAnswer: 1 },
    { question: 'Si x=2, que vaut 3x+4 ?', options: ['6', '8', '10', '12'], correctAnswer: 2 },
    { question: 'Combien font 45 ÷ 9 ?', options: ['3', '4', '5', '6'], correctAnswer: 2 },
    { question: 'Que vaut 8 × 7 ?', options: ['48', '54', '56', '58'], correctAnswer: 2 },
    { question: 'Combien font 18 ÷ 3 ?', options: ['5', '6', '7', '8'], correctAnswer: 1 },
    { question: 'Que vaut 14 + 28 ?', options: ['32', '38', '42', '48'], correctAnswer: 2 },
    { question: 'Que vaut 11 × 11 ?', options: ['111', '121', '131', '141'], correctAnswer: 1 },
    { question: 'Quel est 1/2 de 50 ?', options: ['10', '15', '25', '30'], correctAnswer: 2 },
    { question: 'Quel est 30% de 60 ?', options: ['12', '15', '18', '20'], correctAnswer: 2 },
    { question: 'Quel est le double de 24 ?', options: ['44', '46', '48', '50'], correctAnswer: 2 },
    { question: 'Combien vaut 7 × 8 ?', options: ['48', '52', '56', '60'], correctAnswer: 2 },
    { question: 'Combien vaut 100 - 37 ?', options: ['63', '67', '73', '77'], correctAnswer: 0 },
  ];

  const hardQuestions = [
    { question: 'Combien de faces a un cube ?', options: ['4', '6', '8', '12'], correctAnswer: 1 },
    { question: 'Combien de côtés a un octogone ?', options: ['6', '7', '8', '9'], correctAnswer: 2 },
    { question: 'Combien de faces a un dodécaèdre ?', options: ['10', '12', '14', '16'], correctAnswer: 1 },
    { question: 'Quelle est la formule de l’aire d’un cercle ?', options: ['2πr', 'πr²', 'πd', '2r²'], correctAnswer: 1 },
    { question: 'Quelle planète a un jour plus long que son année ?', options: ['Mercure', 'Venus', 'Mars', 'Jupiter'], correctAnswer: 1 },
    { question: 'Quel est l’état du dioxyde de carbone à -79°C ?', options: ['Gazeux', 'Liquide', 'Solide', 'Plasma'], correctAnswer: 2 },
    { question: 'Quel est le symbole du sodium ?', options: ['So', 'Na', 'Sd', 'Ns'], correctAnswer: 1 },
    { question: 'Combien de minutes y a-t-il dans une heure ?', options: ['45', '50', '55', '60'], correctAnswer: 3 },
    { question: 'Combien d’heures y a-t-il dans deux jours ?', options: ['24', '36', '48', '72'], correctAnswer: 2 },
    { question: 'Combien de zéros y a-t-il dans un million ?', options: ['4', '5', '6', '7'], correctAnswer: 2 },
  ];

  for (let index = 0; index < 150; index += 1) {
    const id = 101 + index;
    let question = '';
    let options = [];
    let correctAnswer = 0;

    if (id <= 120) {
      const a = 6 + (index % 10);
      const b = 2 + Math.floor(index / 10);
      const correct = a * b;
      question = `Quel est le produit de ${a} et ${b} ?`;
      options = makeOptions(correct, correct + 2, correct - 2, correct + 5);
    } else if (id <= 140) {
      const subIndex = index - 20;
      const divisor = 2 + (subIndex % 10);
      const quotient = 2 + Math.floor(subIndex / 2);
      const dividend = divisor * quotient;
      question = `Quel est le résultat de ${dividend} ÷ ${divisor} ?`;
      options = makeOptions(quotient, quotient + 1, Math.max(1, quotient - 1), quotient + 2);
    } else if (id <= 160) {
      const subIndex = index - 40;
      if (subIndex < 10) {
        const n = 11 + subIndex;
        const correct = n * n;
        question = `Que vaut ${n}² ?`;
        options = makeOptions(correct, correct - n, correct + n, correct - n - 1);
      } else {
        const meters = 6 + (subIndex - 10);
        const correct = meters * 100;
        question = `Combien de centimètres y a-t-il dans ${meters} mètres ?`;
        options = makeOptions(correct, correct - 50, correct + 50, correct + 100);
      }
    } else if (id <= 180) {
      const item = grammarQuestions[id - 161];
      question = item.question;
      options = item.options;
      correctAnswer = item.correctAnswer;
    } else if (id <= 200) {
      const item = geographyQuestions[id - 181];
      question = item.question;
      options = item.options;
      correctAnswer = item.correctAnswer;
    } else if (id <= 220) {
      const item = scienceQuestions[id - 201];
      question = item.question;
      options = item.options;
      correctAnswer = item.correctAnswer;
    } else if (id <= 240) {
      const item = advancedMathQuestions[id - 221];
      question = item.question;
      options = item.options;
      correctAnswer = item.correctAnswer;
    } else {
      const item = hardQuestions[id - 241];
      question = item.question;
      options = item.options;
      correctAnswer = item.correctAnswer;
    }

    questions.push({ id, question, options, correctAnswer });
  }

  return questions;
}

// Nouvelles questions ajoutées : Biologie, Géologie, Chimie et Histoire nationale d'Haïti
const haitiQuestions = [
  // Biologie
  {
    id: 251,
    question: 'Quelle est la fonction principale des globules rouges ?',
    options: ['Transporter l’oxygène', 'Combattre les infections', 'Coaguler le sang', 'Digérer les aliments'],
    correctAnswer: 0,
  },
  {
    id: 252,
    question: 'Quel organite cellulaire est responsable de la photosynthèse chez les plantes ?',
    options: ['La mitochondrie', 'Le chloroplaste', 'Le noyau', 'Le ribosome'],
    correctAnswer: 1,
  },
  {
    id: 253,
    question: 'Comment appelle-t-on le processus par lequel une cellule se divise en deux cellules identiques ?',
    options: ['La méiose', 'La mitose', 'La fécondation', 'La photosynthèse'],
    correctAnswer: 1,
  },
  {
    id: 254,
    question: 'Quel est le rôle principal des enzymes dans la digestion ?',
    options: ['Stocker l’énergie', 'Accélérer les réactions chimiques', 'Transporter l’oxygène', 'Combattre les microbes'],
    correctAnswer: 1,
  },
  {
    id: 255,
    question: 'Quel groupe sanguin est considéré comme donneur universel ?',
    options: ['A positif', 'AB positif', 'O négatif', 'B positif'],
    correctAnswer: 2,
  },
  {
    id: 256,
    question: 'Quel insecte est responsable de la transmission du paludisme (malaria) ?',
    options: ['La mouche tsé-tsé', 'Le moustique Anophèle', 'La punaise', 'Le moustique Aedes'],
    correctAnswer: 1,
  },
  {
    id: 257,
    question: 'Quel organe du corps humain produit l’insuline ?',
    options: ['Le foie', 'Le pancréas', 'Le rein', 'La rate'],
    correctAnswer: 1,
  },
  {
    id: 258,
    question: 'Quelle vitamine la peau produit-elle grâce à l’exposition au soleil ?',
    options: ['Vitamine A', 'Vitamine B12', 'Vitamine C', 'Vitamine D'],
    correctAnswer: 3,
  },
  {
    id: 259,
    question: 'Comment appelle-t-on l’ensemble formé par les êtres vivants et leur environnement ?',
    options: ['Une biosphère', 'Un écosystème', 'Une population', 'Une chaîne alimentaire'],
    correctAnswer: 1,
  },
  {
    id: 260,
    question: 'Quel est le rôle principal des globules blancs dans l’organisme ?',
    options: ['Transporter l’oxygène', 'Défendre l’organisme contre les infections', 'Coaguler le sang', 'Produire de l’énergie'],
    correctAnswer: 1,
  },

  // Géologie
  {
    id: 261,
    question: 'Comment appelle-t-on la zone de contact entre deux plaques tectoniques ?',
    options: ['Une dorsale', 'Une faille', 'Un cratère', 'Un bassin'],
    correctAnswer: 1,
  },
  {
    id: 262,
    question: 'Sur quelle faille sismique majeure Haïti est-elle en partie située ?',
    options: ['La faille de San Andreas', 'La faille Enriquillo-Plantain Garden', 'La faille de l’Anatolie', 'La faille du Rift est-africain'],
    correctAnswer: 1,
  },
  {
    id: 263,
    question: 'Comment appelle-t-on une roche formée par le refroidissement du magma ?',
    options: ['Roche sédimentaire', 'Roche métamorphique', 'Roche ignée (magmatique)', 'Roche calcaire'],
    correctAnswer: 2,
  },
  {
    id: 264,
    question: 'Quel événement géologique majeur a frappé Haïti le 12 janvier 2010 ?',
    options: ['Une éruption volcanique', 'Un séisme (tremblement de terre)', 'Un tsunami sans séisme', 'Une éruption de geyser'],
    correctAnswer: 1,
  },
  {
    id: 265,
    question: 'Comment appelle-t-on l’étude scientifique des tremblements de terre ?',
    options: ['La météorologie', 'La sismologie', 'La volcanologie', 'La géodésie'],
    correctAnswer: 1,
  },
  {
    id: 266,
    question: 'Quelle est la couche la plus externe de la Terre ?',
    options: ['Le noyau', 'Le manteau', 'La croûte terrestre', 'L’asthénosphère'],
    correctAnswer: 2,
  },
  {
    id: 267,
    question: 'Comment appelle-t-on une roche formée par l’accumulation de sédiments ?',
    options: ['Roche ignée', 'Roche sédimentaire', 'Roche métamorphique', 'Roche volcanique'],
    correctAnswer: 1,
  },
  {
    id: 268,
    question: 'Quelle est la principale cause des éruptions volcaniques ?',
    options: ['La remontée de magma', 'Le vent', 'La marée', 'La pluie'],
    correctAnswer: 0,
  },
  {
    id: 269,
    question: 'Quelle échelle est couramment utilisée pour mesurer la magnitude d’un séisme ?',
    options: ['L’échelle de Beaufort', 'L’échelle de Richter', 'L’échelle Celsius', 'L’échelle de Mercalli uniquement'],
    correctAnswer: 1,
  },
  {
    id: 270,
    question: 'Quelles sont les deux plaques tectoniques dont le mouvement affecte particulièrement Haïti ?',
    options: ['La plaque pacifique et la plaque africaine', 'La plaque Caraïbe et la plaque nord-américaine', 'La plaque eurasienne et la plaque indienne', 'La plaque sud-américaine et la plaque antarctique'],
    correctAnswer: 1,
  },

  // Chimie
  {
    id: 271,
    question: 'Quel est le symbole chimique de l’oxygène ?',
    options: ['Ox', 'O', 'Og', 'O2'],
    correctAnswer: 1,
  },
  {
    id: 272,
    question: 'Combien d’électrons possède un atome d’hydrogène neutre ?',
    options: ['1', '2', '3', '0'],
    correctAnswer: 0,
  },
  {
    id: 273,
    question: 'Quel est le pH de l’eau pure à température ambiante ?',
    options: ['0', '7', '14', '10'],
    correctAnswer: 1,
  },
  {
    id: 274,
    question: 'Comment appelle-t-on une substance qui accélère une réaction chimique sans être consommée ?',
    options: ['Un réactif', 'Un catalyseur', 'Un solvant', 'Un précipité'],
    correctAnswer: 1,
  },
  {
    id: 275,
    question: 'Comment appelle-t-on la réaction chimique entre un acide et une base ?',
    options: ['Oxydation', 'Combustion', 'Neutralisation', 'Fermentation'],
    correctAnswer: 2,
  },
  {
    id: 276,
    question: 'Quelle est la formule chimique du sel de table ?',
    options: ['NaCl', 'KCl', 'CaCO3', 'H2SO4'],
    correctAnswer: 0,
  },
  {
    id: 277,
    question: 'Combien de protons contient un atome de carbone ?',
    options: ['4', '6', '8', '12'],
    correctAnswer: 1,
  },
  {
    id: 278,
    question: 'Quel gaz est principalement produit lors de la combustion complète du carbone ?',
    options: ['Monoxyde de carbone', 'Dioxyde de carbone', 'Méthane', 'Azote'],
    correctAnswer: 1,
  },
  {
    id: 279,
    question: 'Dans quel état de la matière les particules sont-elles les plus rapprochées ?',
    options: ['Gazeux', 'Liquide', 'Solide', 'Plasma'],
    correctAnswer: 2,
  },
  {
    id: 280,
    question: 'Comment appelle-t-on le tableau qui classe les éléments chimiques ?',
    options: ['Le tableau atomique', 'Le tableau périodique', 'Le tableau moléculaire', 'Le tableau isotopique'],
    correctAnswer: 1,
  },

  // Histoire nationale d'Haïti
  {
    id: 281,
    question: 'En quelle année Haïti a-t-elle proclamé son indépendance ?',
    options: ['1791', '1804', '1815', '1825'],
    correctAnswer: 1,
  },
  {
    id: 282,
    question: 'Qui est considéré comme le père fondateur de l’indépendance haïtienne, ayant proclamé l’indépendance en 1804 ?',
    options: ['Toussaint Louverture', 'Jean-Jacques Dessalines', 'Alexandre Pétion', 'Henri Christophe'],
    correctAnswer: 1,
  },
  {
    id: 283,
    question: 'Quelle bataille est considérée comme décisive pour l’indépendance d’Haïti ?',
    options: ['La bataille de Crête-à-Pierrot', 'La bataille de Vertières', 'La bataille de Savannah', 'Le siège de Jacmel'],
    correctAnswer: 1,
  },
  {
    id: 284,
    question: 'Qui a mené la révolution haïtienne avant d’être capturé et déporté en France en 1802 ?',
    options: ['Jean-Jacques Dessalines', 'Toussaint Louverture', 'Alexandre Pétion', 'Vincent Ogé'],
    correctAnswer: 1,
  },
  {
    id: 285,
    question: 'Quel nom portait le territoire d’Haïti avant l’indépendance, sous la colonisation française ?',
    options: ['Hispaniola', 'Saint-Domingue', 'La Navidad', 'Port Royal'],
    correctAnswer: 1,
  },
  {
    id: 286,
    question: 'En quelle année a eu lieu la bataille de Vertières ?',
    options: ['1791', '1798', '1803', '1806'],
    correctAnswer: 2,
  },
  {
    id: 287,
    question: 'Qui fut le premier empereur d’Haïti après l’indépendance ?',
    options: ['Henri Christophe', 'Alexandre Pétion', 'Jean-Jacques Dessalines', 'Jean-Pierre Boyer'],
    correctAnswer: 2,
  },
  {
    id: 288,
    question: 'À quelle date exacte l’indépendance d’Haïti a-t-elle été proclamée ?',
    options: ['1er janvier 1804', '14 juillet 1804', '18 novembre 1803', '4 juillet 1804'],
    correctAnswer: 0,
  },
  {
    id: 289,
    question: 'Qui est traditionnellement crédité de la rédaction de l’Acte de l’Indépendance d’Haïti ?',
    options: ['Boisrond-Tonnerre', 'Alexandre Pétion', 'Vincent Ogé', 'Charles Rivière-Hérard'],
    correctAnswer: 0,
  },
  {
    id: 290,
    question: 'Quelle puissance coloniale Haïti a-t-elle vaincue pour obtenir son indépendance ?',
    options: ['L’Espagne', 'La France', 'Le Royaume-Uni', 'Le Portugal'],
    correctAnswer: 1,
  },
];

export const baccQuestions = baseQuestions.concat(generateExtraQuestions()).concat(haitiQuestions);

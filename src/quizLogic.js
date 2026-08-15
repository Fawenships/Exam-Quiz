export const QUESTIONS_PER_LEVEL = 5;
export function createQuiz(questions) {
  return {
    questions,
    currentIndex: 0,
    score: 0,
    failed: false,
    failedAnswer: null,
  };
}
function normalizeQuestionsWithLevels(questions) {
  return questions.map((question, index) => ({
    ...question,
    level: typeof question.level === 'number' ? question.level : Math.ceil((index + 1) / QUESTIONS_PER_LEVEL),
  }));
}
export function selectQuestionsByLevel(questions, level) {
  const normalizedLevel = Number(level);
  if (Number.isNaN(normalizedLevel) || normalizedLevel < 1) {
    return [];
  }
  const questionsWithLevels = normalizeQuestionsWithLevels(questions);
  return questionsWithLevels.filter((question) => question.level === normalizedLevel).slice(0, QUESTIONS_PER_LEVEL);
}
export function getCurrentQuestion(quiz) {
  return quiz.questions[quiz.currentIndex] || null;
}
export function answerQuestion(quiz, selectedIndex) {
  const currentQuestion = getCurrentQuestion(quiz);
  if (!currentQuestion) {
    return quiz;
  }
  const isCorrect = selectedIndex === currentQuestion.correctAnswer;
  const nextScore = isCorrect ? quiz.score + 1 : quiz.score;
  return {
    ...quiz,
    score: nextScore,
    currentIndex: quiz.currentIndex + 1,
  };
}
export function isFinished(quiz) {
  return quiz.currentIndex >= quiz.questions.length;
}
export function getProgress(quiz) {
  if (!quiz.questions.length) {
    return 'Aucune question';
  }
  const current = Math.min(quiz.currentIndex + 1, quiz.questions.length);
  return `Question ${current} sur ${quiz.questions.length}`;
}
export function getLevel(score, total) {
  const percentage = total === 0 ? 0 : Math.round((score / total) * 100);
  if (percentage >= 80) {
    return 'Niveau : Excellent';
  }
  if (percentage >= 50) {
    return 'Niveau : Bien';
  }
  return 'Niveau : À améliorer';
}

// Indices pré-écrits, organisés par thème.
// Chaque question du quiz est comparée à ces mots-clés pour trouver
// l'indice le plus pertinent. Si aucun thème ne correspond, un indice
// générique est affiché.
const HINT_CATEGORIES = [
  {
    keywords: ['séisme', 'sismique', 'faille', 'plaque tectonique', 'épicentre', 'foyer', 'réplique', 'tsunami', 'sismographe', 'richter', 'liquéfaction'],
    hint: 'Astuce IA : pensez aux mouvements des plaques tectoniques et à ce qui se passe à leurs limites.',
  },
  {
    keywords: ['volcan', 'magma', 'lave', 'éruption', 'geyser'],
    hint: 'Astuce IA : imaginez le trajet du magma, de l’intérieur de la Terre jusqu’à la surface.',
  },
  {
    keywords: [' roche', 'roches', 'minéral', 'calcaire', 'granite', 'basalte', 'grès', 'marbre', 'sédiment'],
    hint: 'Astuce IA : demandez-vous comment cette roche s’est formée (chaleur, pression, ou accumulation ?).',
  },
  {
    keywords: ['globule', 'sang', 'cœur', 'artère', 'veine', 'hémoglobine', 'coagul'],
    hint: 'Astuce IA : pensez au trajet du sang dans le corps et à ce que chaque élément y transporte.',
  },
  {
    keywords: ['digest', 'estomac', 'intestin', 'foie', 'pancréas', 'bile', 'œsophage', 'salive'],
    hint: 'Astuce IA : suivez le chemin des aliments, de la bouche jusqu’à leur absorption.',
  },
  {
    keywords: ['cellule', ' adn', 'noyau', 'mitose', 'méiose', 'chromosome', 'gènes', 'génétique', 'hérédité'],
    hint: 'Astuce IA : pensez à la fonction de cette structure à l’intérieur d’une cellule.',
  },
  {
    keywords: ['symbole chimique', 'élément chimique'],
    hint: 'Astuce IA : le symbole vient souvent du nom latin de l’élément — pensez à sa première (ou ses deux premières) lettre.',
  },
  {
    keywords: ['acide', ' base', 'basique', ' ph ', ' ph?', ' ph.', 'neutralisation'],
    hint: 'Astuce IA : un pH bas est acide, un pH élevé est basique, 7 est neutre.',
  },
  {
    keywords: ['réaction', 'catalyseur', 'exothermique', 'endothermique'],
    hint: 'Astuce IA : demandez-vous si la réaction libère ou absorbe de la chaleur.',
  },
  {
    keywords: ['atome', 'proton', 'électron', 'neutron', ' ion ', ' ions', 'isotope'],
    hint: 'Astuce IA : rappelez-vous la charge électrique de chaque particule (proton +, électron -, neutron neutre).',
  },
  {
    keywords: ['plante', 'photosynthèse', 'chlorophylle', 'racine', 'stomate', 'pollinisation', 'germination'],
    hint: 'Astuce IA : pensez à ce dont une plante a besoin pour capter la lumière et grandir.',
  },
  {
    keywords: ['écosystème', 'chaîne alimentaire', 'population', 'décomposeur', 'parasite'],
    hint: 'Astuce IA : réfléchissez aux relations entre les êtres vivants et leur environnement.',
  },
  {
    keywords: ['haïti', 'hispaniola', 'port-au-prince', 'massif de la selle'],
    hint: 'Astuce IA : pensez à la géographie et à l’histoire géologique d’Haïti.',
  },
  {
    keywords: ['plaque ', 'continent', 'dérive des continents', 'pangée'],
    hint: 'Astuce IA : imaginez les continents comme de grands morceaux qui se déplacent lentement.',
  },
  {
    keywords: ['climat', 'météo', 'atmosphère', 'ouragan', 'front météorologique'],
    hint: 'Astuce IA : pensez aux échanges de chaleur et d’humidité dans l’air.',
  },
  {
    keywords: ['squelette', 'muscle', 'articulation', 'crâne', ' côtes', 'vertèbre'],
    hint: 'Astuce IA : pensez au rôle de soutien et de protection de cette structure.',
  },
  {
    keywords: ['système immunitaire', 'anticorps', 'lymphocyte', 'vaccin', 'infection'],
    hint: 'Astuce IA : pensez à comment le corps se défend contre les microbes.',
  },
];

export function getAiHint(question) {
  const normalizedQuestion = ` ${(question?.question || '').toLowerCase()} `;
  const match = HINT_CATEGORIES.find((category) =>
    category.keywords.some((keyword) => normalizedQuestion.includes(keyword))
  );
  if (match) {
    return match.hint;
  }
  return 'Astuce IA : relisez bien l’énoncé et éliminez d’abord les réponses qui vous semblent clairement fausses.';
}

export function getAiFeedback(question, selectedIndex) {
  if (!question) {
    return 'L’IA n’a pas de question à analyser.';
  }
  const isCorrect = selectedIndex === question.correctAnswer;
  if (isCorrect) {
    return 'Bonne réponse ! L’IA confirme que vous avez compris la notion.';
  }
  return 'Réponse incorrecte. L’IA recommande de réviser cette notion et de relire l’énoncé.';
}

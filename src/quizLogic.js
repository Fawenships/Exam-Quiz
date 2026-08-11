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
    level: typeof question.level === 'number' ? question.level : Math.ceil((index + 1) / 5),
  }));
}

export function selectQuestionsByLevel(questions, level) {
  const normalizedLevel = Number(level);
  if (Number.isNaN(normalizedLevel) || normalizedLevel < 1) {
    return [];
  }

  const questionsWithLevels = normalizeQuestionsWithLevels(questions);
  return questionsWithLevels.filter((question) => question.level === normalizedLevel).slice(0, 5);
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

export function getAiHint(question) {
  const normalizedQuestion = (question?.question || '').toLowerCase();

  if (normalizedQuestion.includes('capitale')) {
    return 'Astuce IA : pensez à la plus grande ville et au centre administratif du pays.';
  }

  if (normalizedQuestion.includes('côtés') || normalizedQuestion.includes('carre')) {
    return 'Astuce IA : un carré possède quatre côtés égaux.';
  }

  if (normalizedQuestion.includes('2 + 2')) {
    return 'Astuce IA : additionnez les deux nombres pour trouver le résultat.';
  }

  return 'Astuce IA : relisez bien l’énoncé avant de choisir une réponse.';
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

export function createQuiz(questions) {
  return {
    questions,
    currentIndex: 0,
    score: 0,
  };
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

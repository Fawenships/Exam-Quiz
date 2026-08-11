import test from 'node:test';
import assert from 'node:assert/strict';
import { createQuiz, selectQuestionsByLevel, answerQuestion, getCurrentQuestion, getLevel, getProgress, getAiHint, getAiFeedback, isFinished } from '../src/quizLogic.js';

const questions = [
  {
    id: 1,
    question: 'Quelle est la capitale d’Haïti ?',
    options: ['Port-au-Prince', 'Cap-Haïtien', 'Jacmel', 'Les Cayes'],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: 'Combien de côtés a un carré ?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1,
  },
];

test('createQuiz initialise la première question', () => {
  const quiz = createQuiz(questions);
  assert.equal(quiz.score, 0);
  assert.equal(quiz.currentIndex, 0);
  assert.deepEqual(getCurrentQuestion(quiz), questions[0]);
});

test('selectQuestionsByLevel renvoie les 5 questions du niveau choisi', () => {
  const levelQuestions = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    question: `Question ${index + 1}`,
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 0,
  }));

  const selected = selectQuestionsByLevel(levelQuestions, 2);
  assert.equal(selected.length, 5);
  assert.equal(selected[0].id, 6);
  assert.equal(selected[4].id, 10);
});

test('answerQuestion met à jour le score et passe à la question suivante', () => {
  const quiz = createQuiz(questions);
  const nextState = answerQuestion(quiz, 0);
  assert.equal(nextState.score, 1);
  assert.equal(nextState.currentIndex, 1);
  assert.deepEqual(getCurrentQuestion(nextState), questions[1]);
});

test('isFinished retourne vrai à la fin du quiz', () => {
  let quiz = createQuiz(questions);
  quiz = answerQuestion(quiz, 0);
  quiz = answerQuestion(quiz, 1);
  assert.equal(isFinished(quiz), true);
});

test('getProgress retourne la progression actuelle du quiz', () => {
  const quiz = createQuiz(questions);
  assert.equal(getProgress(quiz), 'Question 1 sur 2');
});

test('getLevel retourne le bon niveau selon le score', () => {
  assert.equal(getLevel(4, 5), 'Niveau : Excellent');
  assert.equal(getLevel(3, 5), 'Niveau : Bien');
  assert.equal(getLevel(1, 5), 'Niveau : À améliorer');
});

test('getAiHint retourne un conseil adapté à la question', () => {
  const hint = getAiHint(questions[0]);
  assert.match(hint, /Port-au-Prince/);
  assert.match(hint, /capitale/i);
});

test('getAiFeedback donne un retour en fonction de la réponse', () => {
  const correctFeedback = getAiFeedback(questions[0], 0);
  assert.match(correctFeedback, /bonne réponse/i);

  const wrongFeedback = getAiFeedback(questions[0], 1);
  assert.match(wrongFeedback, /réviser/i);
});

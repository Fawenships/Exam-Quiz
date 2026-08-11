import 'package:flutter/material.dart';

void main() {
  runApp(const ExamQuizApp());
}

class ExamQuizApp extends StatelessWidget {
  const ExamQuizApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Exam-Quiz',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final Map<String, List<Map<String, dynamic>>> categories = {
    'Mathématiques': [
      {
        'question': 'Combien vaut 7 + 5 ?',
        'options': ['10', '11', '12', '13'],
        'correctAnswer': 2,
      },
      {
        'question': 'Combien de côtés a un triangle ?',
        'options': ['2', '3', '4', '5'],
        'correctAnswer': 1,
      },
    ],
    'Histoire': [
      {
        'question': 'Qui était le premier président d’Haïti ?',
        'options': ['Jean-Pierre Boyer', 'Dessalines', 'Toussaint Louverture', 'Henri Christophe'],
        'correctAnswer': 1,
      },
    ],
    'Géographie': [
      {
        'question': 'Quelle est la capitale d’Haïti ?',
        'options': ['Port-au-Prince', 'Cap-Haïtien', 'Jacmel', 'Les Cayes'],
        'correctAnswer': 0,
      },
    ],
  };

  String selectedCategory = 'Mathématiques';
  int currentIndex = 0;
  int score = 0;
  int? selectedAnswer;
  bool showFeedback = false;
  List<Map<String, dynamic>>? currentQuestions;

  void startQuiz(String category) {
    setState(() {
      selectedCategory = category;
      currentQuestions = List.from(categories[category]!);
      currentIndex = 0;
      score = 0;
      selectedAnswer = null;
      showFeedback = false;
    });
  }

  void answer(int selectedIndex) {
    if (showFeedback || currentQuestions == null) {
      return;
    }

    final currentQuestion = currentQuestions![currentIndex];
    final isCorrect = selectedIndex == currentQuestion['correctAnswer'];
    if (isCorrect) {
      score += 1;
    }

    setState(() {
      selectedAnswer = selectedIndex;
      showFeedback = true;
    });
  }

  void nextQuestion() {
    if (currentQuestions == null) {
      return;
    }

    setState(() {
      currentIndex += 1;
      selectedAnswer = null;
      showFeedback = false;
    });
  }

  String getLevel() {
    if (currentQuestions == null || currentQuestions!.isEmpty) {
      return 'Débutant';
    }

    final ratio = score / currentQuestions!.length;
    if (ratio >= 0.8) {
      return 'Expert';
    }
    if (ratio >= 0.6) {
      return 'Très bien';
    }
    if (ratio >= 0.4) {
      return 'Bien';
    }
    return 'À reprendre';
  }

  double getProgressPercent() {
    if (currentQuestions == null || currentQuestions!.isEmpty) {
      return 0;
    }
    return (currentIndex / currentQuestions!.length).clamp(0.0, 1.0);
  }

  Widget buildHome() {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFF2563EB), Color(0xFF38BDF8)],
          ),
        ),
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Card(
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
              child: Padding(
                padding: const EdgeInsets.all(24),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Text(
                      'Exam-Quiz',
                      style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 12),
                    const Text(
                      'Choisissez une matière pour commencer votre quiz.',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 16),
                    ),
                    const SizedBox(height: 24),
                    ...categories.keys.map(
                      (category) => Padding(
                        padding: const EdgeInsets.only(bottom: 12),
                        child: SizedBox(
                          width: double.infinity,
                          child: ElevatedButton(
                            onPressed: () => startQuiz(category),
                            child: Text(category),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget buildQuiz() {
    if (currentQuestions == null) {
      return buildHome();
    }

    if (currentIndex >= currentQuestions!.length) {
      return Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [Color(0xFF0F172A), Color(0xFF334155)],
            ),
          ),
          child: Center(
            child: Padding(
              padding: const EdgeInsets.all(24),
              child: Card(
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                child: Padding(
                  padding: const EdgeInsets.all(24),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Text(
                        'Quiz terminé !',
                        style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(height: 12),
                      Text(
                        'Votre score : $score/${currentQuestions!.length}',
                        style: const TextStyle(fontSize: 20),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        'Niveau : ${getLevel()}',
                        style: const TextStyle(fontSize: 18, color: Colors.blueGrey),
                      ),
                      const SizedBox(height: 20),
                      ElevatedButton(
                        onPressed: () => startQuiz(selectedCategory),
                        child: const Text('Recommencer'),
                      ),
                      const SizedBox(height: 10),
                      OutlinedButton(
                        onPressed: () => setState(() => currentQuestions = null),
                        child: const Text('Retour'),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      );
    }

    final currentQuestion = currentQuestions![currentIndex];
    final isCorrect = selectedAnswer != null && selectedAnswer == currentQuestion['correctAnswer'];
    final feedbackText = selectedAnswer == null
        ? null
        : (isCorrect ? 'Bonne réponse !' : 'Réponse incorrecte.');

    return Scaffold(
      appBar: AppBar(
        title: Text(selectedCategory),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 16),
            child: Center(child: Text('Score : $score')),
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(12),
                    child: LinearProgressIndicator(
                      value: getProgressPercent(),
                      minHeight: 10,
                      backgroundColor: Colors.grey[200],
                      valueColor: const AlwaysStoppedAnimation<Color>(Colors.blueAccent),
                    ),
                  ),
                ),
                const SizedBox(width: 12),
                Text('${(getProgressPercent() * 100).round()}%'),
              ],
            ),
            const SizedBox(height: 12),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Question ${currentIndex + 1}/${currentQuestions!.length}',
                  style: const TextStyle(color: Colors.grey, fontSize: 16),
                ),
                Text(
                  'Niveau : ${getLevel()}',
                  style: const TextStyle(color: Colors.blueGrey, fontSize: 16),
                ),
              ],
            ),
            const SizedBox(height: 12),
            Text(
              currentQuestion['question'],
              style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 24),
            ...List.generate(
              (currentQuestion['options'] as List).length,
              (index) => Padding(
                padding: const EdgeInsets.only(bottom: 10),
                child: SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: showFeedback ? null : () => answer(index),
                    style: ElevatedButton.styleFrom(
                      minimumSize: const Size(0, 48),
                      backgroundColor: selectedAnswer == index
                          ? (showFeedback && isCorrect ? Colors.green : Colors.red)
                          : null,
                      foregroundColor: selectedAnswer == index ? Colors.white : null,
                    ),
                    child: Text(currentQuestion['options'][index]),
                  ),
                ),
              ),
            ),
            if (showFeedback) ...[
              const SizedBox(height: 12),
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: isCorrect ? Colors.green.shade50 : Colors.red.shade50,
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Text(
                  feedbackText!,
                  style: TextStyle(
                    color: isCorrect ? Colors.green.shade800 : Colors.red.shade800,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
              const SizedBox(height: 16),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: nextQuestion,
                  child: Text(currentIndex + 1 >= currentQuestions!.length ? 'Voir le résultat' : 'Question suivante'),
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return currentQuestions == null ? buildHome() : buildQuiz();
  }
}

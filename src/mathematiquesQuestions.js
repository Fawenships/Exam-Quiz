export const mathematiquesQuestions = [

  /* ===================================================== */
  /* 1. ÉQUATIONS */
  /* ===================================================== */

  {
    question: "Résoudre l'équation : 3x + 7 = 22.",
    answer: "x = 5",
    solution: "On cherche la valeur de x.\n\nÉtape 1 : On part de l'équation :\n3x + 7 = 22.\n\nÉtape 2 : On soustrait 7 aux deux membres :\n3x + 7 - 7 = 22 - 7.\n\nDonc :\n3x = 15.\n\nÉtape 3 : On divise les deux membres par 3 :\n3x ÷ 3 = 15 ÷ 3.\n\nDonc :\nx = 5.\n\nVérification :\n3(5) + 7 = 15 + 7 = 22.\n\nConclusion : x = 5."
  },

  {
    question: "Résoudre l'équation : 5x - 9 = 16.",
    answer: "x = 5",
    solution: "On cherche x.\n\nÉtape 1 : On part de :\n5x - 9 = 16.\n\nÉtape 2 : On ajoute 9 aux deux membres :\n5x - 9 + 9 = 16 + 9.\n\nDonc :\n5x = 25.\n\nÉtape 3 : On divise par 5 :\nx = 25 ÷ 5.\n\nDonc :\nx = 5.\n\nVérification :\n5(5) - 9 = 25 - 9 = 16.\n\nConclusion : x = 5."
  },

  {
    question: "Résoudre l'équation : 2x + 5 = x + 12.",
    answer: "x = 7",
    solution: "On cherche à isoler x.\n\nÉtape 1 : On part de :\n2x + 5 = x + 12.\n\nÉtape 2 : On soustrait x aux deux membres :\n2x - x + 5 = 12.\n\nDonc :\nx + 5 = 12.\n\nÉtape 3 : On soustrait 5 aux deux membres :\nx = 12 - 5.\n\nDonc :\nx = 7.\n\nVérification :\n2(7) + 5 = 14 + 5 = 19.\n7 + 12 = 19.\n\nLes deux membres sont égaux.\n\nConclusion : x = 7."
  },

  {
    question: "Résoudre l'équation : 4(x - 3) = 20.",
    answer: "x = 8",
    solution: "On cherche x.\n\nÉtape 1 : On part de :\n4(x - 3) = 20.\n\nÉtape 2 : On divise les deux membres par 4 :\nx - 3 = 20 ÷ 4.\n\nDonc :\nx - 3 = 5.\n\nÉtape 3 : On ajoute 3 aux deux membres :\nx = 5 + 3.\n\nDonc :\nx = 8.\n\nVérification :\n4(8 - 3) = 4 × 5 = 20.\n\nConclusion : x = 8."
  },

  {
    question: "Résoudre l'équation : 3(x + 2) - 4 = 17.",
    answer: "x = 5",
    solution: "On cherche x.\n\nÉtape 1 : On développe la parenthèse :\n3(x + 2) = 3x + 6.\n\nL'équation devient :\n3x + 6 - 4 = 17.\n\nÉtape 2 : On réduit :\n3x + 2 = 17.\n\nÉtape 3 : On soustrait 2 :\n3x = 15.\n\nÉtape 4 : On divise par 3 :\nx = 5.\n\nVérification :\n3(5 + 2) - 4 = 3 × 7 - 4 = 21 - 4 = 17.\n\nConclusion : x = 5."
  },


  /* ===================================================== */
  /* 2. ÉQUATIONS DU SECOND DEGRÉ */
  /* ===================================================== */

  {
    question: "Résoudre l'équation x² - 5x + 6 = 0.",
    answer: "x = 2 ou x = 3",
    solution: "On cherche les valeurs de x qui rendent l'expression égale à zéro.\n\nÉtape 1 : On cherche deux nombres dont le produit vaut 6 et dont la somme vaut -5.\n\nCes nombres sont -2 et -3 car :\n(-2) × (-3) = 6.\n\nEt :\n(-2) + (-3) = -5.\n\nÉtape 2 : On factorise :\nx² - 5x + 6 = (x - 2)(x - 3).\n\nL'équation devient :\n(x - 2)(x - 3) = 0.\n\nÉtape 3 : Un produit est nul si au moins un facteur est nul.\n\nDonc :\nx - 2 = 0 ou x - 3 = 0.\n\nÉtape 4 : On résout :\nx = 2 ou x = 3.\n\nConclusion : les solutions sont x = 2 et x = 3."
  },

  {
    question: "Résoudre l'équation x² - 9 = 0.",
    answer: "x = -3 ou x = 3",
    solution: "On reconnaît une différence de deux carrés.\n\nÉtape 1 : On écrit 9 sous la forme 3² :\nx² - 9 = x² - 3².\n\nÉtape 2 : On utilise l'identité remarquable :\na² - b² = (a - b)(a + b).\n\nDonc :\nx² - 3² = (x - 3)(x + 3).\n\nL'équation devient :\n(x - 3)(x + 3) = 0.\n\nÉtape 3 :\nx - 3 = 0 donne x = 3.\n\nx + 3 = 0 donne x = -3.\n\nConclusion : x = -3 ou x = 3."
  },

  {
    question: "Résoudre l'équation x² + 4x + 4 = 0.",
    answer: "x = -2",
    solution: "Étape 1 : On reconnaît une identité remarquable :\na² + 2ab + b² = (a + b)².\n\nIci :\nx² + 4x + 4 = x² + 2 × x × 2 + 2².\n\nDonc :\nx² + 4x + 4 = (x + 2)².\n\nÉtape 2 : L'équation devient :\n(x + 2)² = 0.\n\nÉtape 3 : Un carré est nul uniquement lorsque son contenu est nul :\nx + 2 = 0.\n\nDonc :\nx = -2.\n\nConclusion : la solution est x = -2."
  },

  {
    question: "Résoudre x² - 7x + 12 = 0.",
    answer: "x = 3 ou x = 4",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 12 et dont la somme vaut -7.\n\nLes nombres sont -3 et -4.\n\nEn effet :\n(-3) × (-4) = 12.\n\nEt :\n(-3) + (-4) = -7.\n\nÉtape 2 : On factorise :\nx² - 7x + 12 = (x - 3)(x - 4).\n\nÉtape 3 : On pose :\n(x - 3)(x - 4) = 0.\n\nDonc :\nx - 3 = 0 ou x - 4 = 0.\n\nÉtape 4 :\nx = 3 ou x = 4.\n\nConclusion : les solutions sont 3 et 4."
  },

  {
    question: "Résoudre x² - 2x - 8 = 0.",
    answer: "x = -2 ou x = 4",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut -8 et dont la somme vaut -2.\n\nCes nombres sont -4 et 2.\n\nEn effet :\n(-4) × 2 = -8.\n\nEt :\n(-4) + 2 = -2.\n\nÉtape 2 : On factorise :\nx² - 2x - 8 = (x - 4)(x + 2).\n\nÉtape 3 :\n(x - 4)(x + 2) = 0.\n\nDonc :\nx - 4 = 0 ou x + 2 = 0.\n\nÉtape 4 :\nx = 4 ou x = -2.\n\nConclusion : les solutions sont x = -2 et x = 4."
  },


  /* ===================================================== */
  /* 3. FACTORISATION ET DÉVELOPPEMENT */
  /* ===================================================== */

  {
    question: "Développer : (x + 3)(x + 5).",
    answer: "x² + 8x + 15",
    solution: "On utilise la distributivité.\n\nÉtape 1 : On multiplie x par chaque terme :\nx × x = x².\nx × 5 = 5x.\n\nÉtape 2 : On multiplie 3 par chaque terme :\n3 × x = 3x.\n3 × 5 = 15.\n\nÉtape 3 : On rassemble les termes :\nx² + 5x + 3x + 15.\n\nÉtape 4 : On réduit les termes semblables :\n5x + 3x = 8x.\n\nDonc :\nx² + 8x + 15.\n\nConclusion : (x + 3)(x + 5) = x² + 8x + 15."
  },

  {
    question: "Développer : (2x - 3)(x + 4).",
    answer: "2x² + 5x - 12",
    solution: "Étape 1 : On distribue chaque terme du premier facteur.\n\n2x × x = 2x².\n2x × 4 = 8x.\n\n-3 × x = -3x.\n-3 × 4 = -12.\n\nÉtape 2 : On rassemble :\n2x² + 8x - 3x - 12.\n\nÉtape 3 : On réduit :\n8x - 3x = 5x.\n\nDonc :\n2x² + 5x - 12.\n\nConclusion : le développement est 2x² + 5x - 12."
  },

  {
    question: "Factoriser : x² + 6x + 9.",
    answer: "(x + 3)²",
    solution: "On cherche une identité remarquable.\n\nÉtape 1 : On reconnaît :\na² + 2ab + b² = (a + b)².\n\nIci :\nx² + 6x + 9.\n\nÉtape 2 :\n9 = 3².\n\nEt :\n2 × x × 3 = 6x.\n\nDonc :\nx² + 6x + 9 = (x + 3)².\n\nConclusion : la forme factorisée est (x + 3)²."
  },

  {
    question: "Factoriser : x² - 16.",
    answer: "(x - 4)(x + 4)",
    solution: "Étape 1 : On reconnaît une différence de deux carrés :\nx² - 16.\n\nÉtape 2 : On écrit :\n16 = 4².\n\nDonc :\nx² - 4².\n\nÉtape 3 : On utilise :\na² - b² = (a - b)(a + b).\n\nDonc :\nx² - 16 = (x - 4)(x + 4).\n\nConclusion : la factorisation est (x - 4)(x + 4)."
  },


  /* ===================================================== */
  /* 4. INÉGALITÉS */
  /* ===================================================== */

  {
    question: "Résoudre l'inéquation : 3x + 2 > 11.",
    answer: "x > 3",
    solution: "On cherche les valeurs de x qui rendent l'inégalité vraie.\n\nÉtape 1 :\n3x + 2 > 11.\n\nÉtape 2 : On soustrait 2 aux deux membres :\n3x > 9.\n\nÉtape 3 : On divise par 3. Comme 3 est positif, le signe ne change pas :\nx > 3.\n\nConclusion : l'ensemble des solutions est x > 3."
  },

  {
    question: "Résoudre l'inéquation : 5x - 4 ≤ 16.",
    answer: "x ≤ 4",
    solution: "Étape 1 :\n5x - 4 ≤ 16.\n\nÉtape 2 : On ajoute 4 aux deux membres :\n5x ≤ 20.\n\nÉtape 3 : On divise par 5 :\nx ≤ 4.\n\nComme 5 est positif, le sens du signe ne change pas.\n\nConclusion : x ≤ 4."
  },

  {
    question: "Résoudre l'inéquation : -2x + 6 > 10.",
    answer: "x < -2",
    solution: "Étape 1 :\n-2x + 6 > 10.\n\nÉtape 2 : On soustrait 6 :\n-2x > 4.\n\nÉtape 3 : On divise par -2.\nAttention : lorsqu'on divise une inéquation par un nombre négatif, le signe s'inverse.\n\nDonc :\nx < -2.\n\nConclusion : x < -2."
  },


  /* ===================================================== */
  /* 5. PUISSANCES ET RACINES */
  /* ===================================================== */

  {
    question: "Calculer : 2⁵.",
    answer: "32",
    solution: "Une puissance indique que l'on multiplie plusieurs fois le même nombre.\n\nÉtape 1 :\n2⁵ signifie :\n2 × 2 × 2 × 2 × 2.\n\nÉtape 2 : On calcule progressivement :\n2 × 2 = 4.\n4 × 2 = 8.\n8 × 2 = 16.\n16 × 2 = 32.\n\nConclusion : 2⁵ = 32."
  },

  {
    question: "Calculer : 10³.",
    answer: "1000",
    solution: "Étape 1 : Une puissance 3 signifie que le nombre est multiplié trois fois :\n10³ = 10 × 10 × 10.\n\nÉtape 2 :\n10 × 10 = 100.\n\nPuis :\n100 × 10 = 1000.\n\nConclusion : 10³ = 1000."
  },

  {
    question: "Simplifier : 2³ × 2⁴.",
    answer: "2⁷ = 128",
    solution: "Lorsque deux puissances ont la même base et sont multipliées, on additionne leurs exposants.\n\nRègle :\naᵐ × aⁿ = aᵐ⁺ⁿ.\n\nÉtape 1 :\n2³ × 2⁴ = 2³⁺⁴.\n\nÉtape 2 :\n3 + 4 = 7.\n\nDonc :\n2³ × 2⁴ = 2⁷.\n\nÉtape 3 :\n2⁷ = 128.\n\nConclusion : le résultat est 128."
  },

  {
    question: "Calculer √49.",
    answer: "7",
    solution: "La racine carrée de 49 est le nombre positif qui, multiplié par lui-même, donne 49.\n\nÉtape 1 : On cherche un nombre dont le carré vaut 49.\n\n7 × 7 = 49.\n\nÉtape 2 : Donc :\n√49 = 7.\n\nConclusion : √49 = 7."
  },

  {
    question: "Simplifier √36 + √16.",
    answer: "10",
    solution: "Étape 1 : On calcule chaque racine carrée.\n\n√36 = 6 car 6² = 36.\n\n√16 = 4 car 4² = 16.\n\nÉtape 2 : On additionne :\n6 + 4 = 10.\n\nConclusion : √36 + √16 = 10."
  },


  /* ===================================================== */
  /* 6. FONCTIONS */
  /* ===================================================== */

  {
    question: "Soit f(x) = 2x + 3. Calculer f(4).",
    answer: "f(4) = 11",
    solution: "On remplace x par 4 dans l'expression de la fonction.\n\nÉtape 1 :\nf(x) = 2x + 3.\n\nÉtape 2 : Pour x = 4 :\nf(4) = 2(4) + 3.\n\nÉtape 3 :\n2 × 4 = 8.\n\nDonc :\nf(4) = 8 + 3 = 11.\n\nConclusion : f(4) = 11."
  },

  {
    question: "Soit f(x) = x² - 3x + 2. Calculer f(2).",
    answer: "f(2) = 0",
    solution: "Étape 1 : On remplace x par 2 :\nf(2) = 2² - 3(2) + 2.\n\nÉtape 2 : On calcule la puissance :\n2² = 4.\n\nÉtape 3 : On calcule le produit :\n3 × 2 = 6.\n\nDonc :\nf(2) = 4 - 6 + 2.\n\nÉtape 4 :\n4 - 6 = -2.\n\nPuis :\n-2 + 2 = 0.\n\nConclusion : f(2) = 0."
  },

  {
    question: "Soit f(x) = 3x - 5. Déterminer x lorsque f(x) = 10.",
    answer: "x = 5",
    solution: "On cherche x tel que f(x) = 10.\n\nÉtape 1 :\nf(x) = 3x - 5.\n\nDonc :\n3x - 5 = 10.\n\nÉtape 2 : On ajoute 5 :\n3x = 15.\n\nÉtape 3 : On divise par 3 :\nx = 5.\n\nVérification :\nf(5) = 3 × 5 - 5 = 15 - 5 = 10.\n\nConclusion : x = 5."
  },

  {
    question: "Déterminer le domaine de définition de f(x) = 1/(x - 3).",
    answer: "D_f = ℝ \\ {3}",
    solution: "On doit identifier les valeurs interdites.\n\nÉtape 1 : La fonction contient une fraction :\n1/(x - 3).\n\nÉtape 2 : Un dénominateur ne peut jamais être égal à zéro.\n\nOn impose donc :\nx - 3 ≠ 0.\n\nÉtape 3 :\nx ≠ 3.\n\nConclusion : la fonction est définie pour tous les nombres réels sauf 3.\n\nDonc : D_f = ℝ \\ {3}."
  },


  /* ===================================================== */
  /* 7. DROITES ET GÉOMÉTRIE ANALYTIQUE */
  /* ===================================================== */

  {
    question: "Déterminer l'équation de la droite passant par A(0,2) et B(2,6).",
    answer: "y = 2x + 2",
    solution: "Une droite peut s'écrire sous la forme y = ax + b.\n\nÉtape 1 : Calculons le coefficient directeur a.\n\nFormule :\na = (y₂ - y₁)/(x₂ - x₁).\n\nAvec A(0,2) et B(2,6) :\na = (6 - 2)/(2 - 0).\n\na = 4/2 = 2.\n\nÉtape 2 : L'équation devient :\ny = 2x + b.\n\nÉtape 3 : Le point A(0,2) appartient à la droite.\nOn remplace x par 0 et y par 2 :\n2 = 2(0) + b.\n\nDonc :\nb = 2.\n\nConclusion :\ny = 2x + 2."
  },

  {
    question: "Calculer la distance entre A(1,2) et B(4,6).",
    answer: "5",
    solution: "On utilise la formule de distance dans un repère :\nAB = √[(x₂ - x₁)² + (y₂ - y₁)²].\n\nÉtape 1 :\nx₂ - x₁ = 4 - 1 = 3.\n\ny₂ - y₁ = 6 - 2 = 4.\n\nÉtape 2 :\nAB = √(3² + 4²).\n\nÉtape 3 :\n3² = 9.\n4² = 16.\n\nDonc :\nAB = √(9 + 16) = √25.\n\nÉtape 4 :\n√25 = 5.\n\nConclusion : AB = 5."
  },

  {
    question: "Déterminer le milieu du segment reliant A(2,4) et B(6,8).",
    answer: "M(4,6)",
    solution: "On utilise la formule des coordonnées du milieu :\nM((x₁+x₂)/2 ; (y₁+y₂)/2).\n\nÉtape 1 : Coordonnée x :\n(2 + 6) ÷ 2 = 8 ÷ 2 = 4.\n\nÉtape 2 : Coordonnée y :\n(4 + 8) ÷ 2 = 12 ÷ 2 = 6.\n\nConclusion : le milieu est M(4,6)."
  },


  /* ===================================================== */
  /* 8. DÉRIVÉES */
  /* ===================================================== */

  {
    question: "Calculer la dérivée de f(x) = x².",
    answer: "f'(x) = 2x",
    solution: "On utilise la règle de dérivation :\n(xⁿ)' = n xⁿ⁻¹.\n\nÉtape 1 : Ici, n = 2.\n\nDonc :\n(x²)' = 2x¹.\n\nÉtape 2 : Comme x¹ = x :\nf'(x) = 2x.\n\nConclusion : la dérivée de x² est 2x."
  },

  {
    question: "Calculer la dérivée de f(x) = 3x² + 4x - 5.",
    answer: "f'(x) = 6x + 4",
    solution: "On dérive chaque terme séparément.\n\nÉtape 1 :\n(3x²)' = 3 × 2x = 6x.\n\nÉtape 2 :\n(4x)' = 4.\n\nÉtape 3 :\n(-5)' = 0 car la dérivée d'une constante est zéro.\n\nÉtape 4 : On rassemble :\nf'(x) = 6x + 4 + 0.\n\nDonc :\nf'(x) = 6x + 4.\n\nConclusion : f'(x) = 6x + 4."
  },

  {
    question: "Calculer la dérivée de f(x) = 5x³.",
    answer: "f'(x) = 15x²",
    solution: "On utilise la règle :\n(xⁿ)' = nxⁿ⁻¹.\n\nÉtape 1 :\nf(x) = 5x³.\n\nÉtape 2 : La dérivée de x³ est 3x².\n\nDonc :\nf'(x) = 5 × 3x².\n\nÉtape 3 :\n5 × 3 = 15.\n\nConclusion : f'(x) = 15x²."
  },

  {
    question: "Déterminer les points critiques de f(x) = x² - 4x + 3.",
    answer: "x = 2",
    solution: "Un point critique peut être trouvé en résolvant f'(x) = 0.\n\nÉtape 1 : On dérive :\nf(x) = x² - 4x + 3.\n\nDonc :\nf'(x) = 2x - 4.\n\nÉtape 2 : On pose :\n2x - 4 = 0.\n\nÉtape 3 : On ajoute 4 :\n2x = 4.\n\nÉtape 4 : On divise par 2 :\nx = 2.\n\nConclusion : le point critique correspond à x = 2."
  },


  /* ===================================================== */
  /* 9. LIMITES */
  /* ===================================================== */

  {
    question: "Calculer lim(x→2) (x + 3).",
    answer: "5",
    solution: "La fonction f(x) = x + 3 est une fonction polynomiale, donc elle est continue.\n\nOn peut remplacer directement x par 2.\n\nÉtape 1 :\nlim(x→2)(x + 3) = 2 + 3.\n\nÉtape 2 :\n2 + 3 = 5.\n\nConclusion : la limite vaut 5."
  },

  {
    question: "Calculer lim(x→3) (x² + 2x).",
    answer: "15",
    solution: "La fonction x² + 2x est polynomiale et donc continue.\n\nÉtape 1 : On remplace x par 3 :\n3² + 2(3).\n\nÉtape 2 :\n3² = 9.\n\nEt :\n2 × 3 = 6.\n\nÉtape 3 :\n9 + 6 = 15.\n\nConclusion : la limite vaut 15."
  },

  {
    question: "Calculer lim(x→2) (x² - 4)/(x - 2).",
    answer: "4",
    solution: "Si on remplace directement x par 2, on obtient 0/0. Il faut donc simplifier.\n\nÉtape 1 : On factorise le numérateur :\nx² - 4 = (x - 2)(x + 2).\n\nDonc :\n(x² - 4)/(x - 2) = [(x - 2)(x + 2)]/(x - 2).\n\nÉtape 2 : Pour x ≠ 2, on simplifie x - 2 :\n= x + 2.\n\nÉtape 3 : On calcule maintenant la limite :\nlim(x→2)(x + 2) = 2 + 2 = 4.\n\nConclusion : la limite vaut 4."
  },


  /* ===================================================== */
  /* 10. PRIMITIVES ET INTÉGRALES */
  /* ===================================================== */

  {
    question: "Déterminer une primitive de f(x) = 2x.",
    answer: "F(x) = x² + C",
    solution: "On cherche une fonction F dont la dérivée est 2x.\n\nÉtape 1 : On sait que :\n(x²)' = 2x.\n\nDonc une primitive de 2x est x².\n\nÉtape 2 : Une primitive générale contient une constante C.\n\nDonc :\nF(x) = x² + C.\n\nÉtape 3 : Vérification :\nF'(x) = 2x.\n\nConclusion : F(x) = x² + C."
  },

  {
    question: "Déterminer une primitive de f(x) = 3x².",
    answer: "F(x) = x³ + C",
    solution: "On utilise la règle :\nLa dérivée de x³ est 3x².\n\nÉtape 1 :\nf(x) = 3x².\n\nÉtape 2 : On reconnaît que :\n(x³)' = 3x².\n\nDonc une primitive est :\nF(x) = x³.\n\nÉtape 3 : On ajoute la constante d'intégration C.\n\nF(x) = x³ + C.\n\nConclusion : F(x) = x³ + C."
  },

  {
    question: "Calculer l'intégrale ∫₂⁵ 3x² dx.",
    answer: "117",
    solution: "Étape 1 : On cherche une primitive de 3x².\n\nUne primitive est :\nx³.\n\nÉtape 2 : On applique la formule :\n∫₂⁵ 3x² dx = [x³]₂⁵.\n\nÉtape 3 : On remplace les bornes :\n= 5³ - 2³.\n\nÉtape 4 :\n5³ = 125.\n2³ = 8.\n\nDonc :\n125 - 8 = 117.\n\nConclusion : l'intégrale vaut 117."
  },


  /* ===================================================== */
  /* 11. SUITES ARITHMÉTIQUES */
  /* ===================================================== */

  {
    question: "Une suite arithmétique a pour premier terme u₁ = 5 et raison r = 3. Calculer u₁₀.",
    answer: "u₁₀ = 32",
    solution: "Pour une suite arithmétique :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 : On connaît :\nu₁ = 5.\nr = 3.\nn = 10.\n\nÉtape 2 : On remplace dans la formule :\nu₁₀ = 5 + (10 - 1) × 3.\n\nÉtape 3 :\n10 - 1 = 9.\n\nDonc :\nu₁₀ = 5 + 9 × 3.\n\nÉtape 4 :\n9 × 3 = 27.\n\nDonc :\nu₁₀ = 5 + 27 = 32.\n\nConclusion : u₁₀ = 32."
  },

  {
    question: "Une suite arithmétique vérifie u₁ = 2 et r = 4. Calculer u₆.",
    answer: "u₆ = 22",
    solution: "Formule d'une suite arithmétique :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁ = 2, r = 4 et n = 6.\n\nÉtape 2 :\nu₆ = 2 + (6 - 1) × 4.\n\nÉtape 3 :\n6 - 1 = 5.\n\nDonc :\nu₆ = 2 + 5 × 4.\n\nÉtape 4 :\n5 × 4 = 20.\n\nDonc :\nu₆ = 22.\n\nConclusion : u₆ = 22."
  },


  /* ===================================================== */
  /* 12. SUITES GÉOMÉTRIQUES */
  /* ===================================================== */

  {
    question: "Une suite géométrique a pour premier terme u₁ = 2 et raison q = 3. Calculer u₅.",
    answer: "u₅ = 162",
    solution: "Pour une suite géométrique :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 : On connaît :\nu₁ = 2.\nq = 3.\nn = 5.\n\nÉtape 2 : On applique la formule :\nu₅ = 2 × 3⁴.\n\nÉtape 3 :\n3⁴ = 3 × 3 × 3 × 3 = 81.\n\nÉtape 4 :\nu₅ = 2 × 81 = 162.\n\nConclusion : u₅ = 162."
  },

  {
    question: "Une suite géométrique vérifie u₁ = 5 et q = 2. Calculer u₄.",
    answer: "u₄ = 40",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nn = 4.\n\nDonc :\nu₄ = 5 × 2³.\n\nÉtape 2 :\n2³ = 8.\n\nÉtape 3 :\n5 × 8 = 40.\n\nConclusion : u₄ = 40."
  },


  /* ===================================================== */
  /* 13. PROBABILITÉS */
  /* ===================================================== */

  {
    question: "Un dé équilibré à six faces est lancé. Quelle est la probabilité d'obtenir un 4 ?",
    answer: "1/6",
    solution: "La probabilité se calcule par :\nP(événement) = nombre de cas favorables / nombre de cas possibles.\n\nÉtape 1 : Un dé possède 6 résultats possibles :\n1, 2, 3, 4, 5 et 6.\n\nDonc il y a 6 cas possibles.\n\nÉtape 2 : Un seul résultat correspond à obtenir 4.\nIl y a donc 1 cas favorable.\n\nÉtape 3 :\nP(4) = 1/6.\n\nConclusion : la probabilité d'obtenir 4 est 1/6, soit environ 16,67 %."
  },

  {
    question: "Une urne contient 3 boules rouges et 2 boules bleues. On tire une boule au hasard. Quelle est la probabilité d'obtenir une boule rouge ?",
    answer: "3/5",
    solution: "Étape 1 : On compte toutes les boules.\n\n3 boules rouges + 2 boules bleues = 5 boules.\n\nIl y a donc 5 cas possibles.\n\nÉtape 2 : Les cas favorables sont les boules rouges.\nIl y en a 3.\n\nÉtape 3 :\nP(rouge) = 3/5.\n\nÉtape 4 : En pourcentage :\n3 ÷ 5 = 0,6.\n\n0,6 × 100 = 60 %.\n\nConclusion : P(rouge) = 3/5 = 60 %."
  },

  {
    question: "Une pièce équilibrée est lancée deux fois. Quelle est la probabilité d'obtenir deux fois face ?",
    answer: "1/4",
    solution: "Une pièce équilibrée donne face avec une probabilité de 1/2.\n\nÉtape 1 : Pour le premier lancer :\nP(face) = 1/2.\n\nÉtape 2 : Pour le deuxième lancer :\nP(face) = 1/2.\n\nÉtape 3 : Les deux événements sont indépendants, donc on multiplie les probabilités :\nP(face et face) = 1/2 × 1/2.\n\nÉtape 4 :\n1/2 × 1/2 = 1/4.\n\nConclusion : la probabilité d'obtenir deux fois face est 1/4, soit 25 %."
  },


  /* ===================================================== */
  /* 14. STATISTIQUES */
  /* ===================================================== */

  {
    question: "Calculer la moyenne des nombres 10, 12, 14, 16 et 18.",
    answer: "14",
    solution: "La moyenne se calcule en additionnant toutes les valeurs puis en divisant par le nombre de valeurs.\n\nÉtape 1 : On additionne :\n10 + 12 + 14 + 16 + 18 = 70.\n\nÉtape 2 : Il y a 5 nombres.\n\nÉtape 3 :\nMoyenne = 70 ÷ 5.\n\nDonc :\nMoyenne = 14.\n\nConclusion : la moyenne est 14."
  },

  {
    question: "Déterminer la médiane de la série : 3, 5, 7, 9, 11.",
    answer: "7",
    solution: "La médiane est la valeur qui se trouve au centre de la série lorsque les nombres sont rangés dans l'ordre.\n\nÉtape 1 : La série est déjà ordonnée :\n3, 5, 7, 9, 11.\n\nÉtape 2 : Il y a 5 valeurs.\nLa troisième valeur est au centre.\n\nÉtape 3 : La troisième valeur est 7.\n\nConclusion : la médiane est 7."
  },

  {
    question: "Déterminer l'étendue de la série : 4, 8, 10, 15, 20.",
    answer: "16",
    solution: "L'étendue se calcule avec la formule :\nÉtendue = valeur maximale - valeur minimale.\n\nÉtape 1 : La valeur maximale est 20.\n\nÉtape 2 : La valeur minimale est 4.\n\nÉtape 3 :\n20 - 4 = 16.\n\nConclusion : l'étendue est 16."
  },


  /* ===================================================== */
  /* 15. NOMBRES COMPLEXES */
  /* ===================================================== */

  {
    question: "Calculer (3 + 2i) + (4 - 5i).",
    answer: "7 - 3i",
    solution: "On additionne séparément les parties réelles et les parties imaginaires.\n\nÉtape 1 : Parties réelles :\n3 + 4 = 7.\n\nÉtape 2 : Parties imaginaires :\n2i - 5i = -3i.\n\nÉtape 3 : On rassemble :\n7 - 3i.\n\nConclusion :\n(3 + 2i) + (4 - 5i) = 7 - 3i."
  },

  {
    question: "Calculer (3 + 2i)(1 - i).",
    answer: "5 - i",
    solution: "On utilise la distributivité.\n\nÉtape 1 :\n3 × 1 = 3.\n\n3 × (-i) = -3i.\n\n2i × 1 = 2i.\n\n2i × (-i) = -2i².\n\nÉtape 2 : On sait que :\ni² = -1.\n\nDonc :\n-2i² = -2(-1) = 2.\n\nÉtape 3 : On rassemble :\n3 - 3i + 2i + 2.\n\nÉtape 4 :\n3 + 2 = 5.\n\n-3i + 2i = -i.\n\nConclusion : le résultat est 5 - i."
  },

  {
    question: "Calculer i².",
    answer: "-1",
    solution: "Par définition du nombre imaginaire i :\n\ni² = -1.\n\nConclusion : i² = -1."
  },


  /* ===================================================== */
  /* 16. GÉOMÉTRIE */
  /* ===================================================== */

  {
    question: "Calculer l'aire d'un triangle dont la base mesure 10 cm et la hauteur 6 cm.",
    answer: "30 cm²",
    solution: "La formule de l'aire d'un triangle est :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 : La base mesure 10 cm.\nLa hauteur mesure 6 cm.\n\nÉtape 2 : On remplace dans la formule :\nA = (10 × 6) ÷ 2.\n\nÉtape 3 :\n10 × 6 = 60.\n\nPuis :\n60 ÷ 2 = 30.\n\nConclusion : l'aire du triangle est 30 cm²."
  },

  {
    question: "Calculer l'aire d'un cercle de rayon 5 cm. Prendre π ≈ 3,14.",
    answer: "78,5 cm²",
    solution: "La formule de l'aire d'un cercle est :\nA = πr².\n\nÉtape 1 : Le rayon est r = 5 cm.\n\nÉtape 2 : On calcule r² :\n5² = 25.\n\nÉtape 3 : On remplace π par 3,14 :\nA = 3,14 × 25.\n\nÉtape 4 :\n3,14 × 25 = 78,5.\n\nConclusion : l'aire du cercle est environ 78,5 cm²."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 12 cm et de largeur 5 cm.",
    answer: "34 cm",
    solution: "La formule du périmètre d'un rectangle est :\nP = 2(L + l).\n\nÉtape 1 :\nL = 12 cm.\nl = 5 cm.\n\nÉtape 2 :\nP = 2(12 + 5).\n\nÉtape 3 :\n12 + 5 = 17.\n\nDonc :\nP = 2 × 17 = 34.\n\nConclusion : le périmètre est 34 cm."
  },

  {
    question: "Dans un triangle rectangle, les deux côtés de l'angle droit mesurent 3 cm et 4 cm. Calculer l'hypoténuse.",
    answer: "5 cm",
    solution: "Le triangle est rectangle. On utilise donc le théorème de Pythagore.\n\nÉtape 1 : On appelle c l'hypoténuse.\n\nÉtape 2 : Le théorème de Pythagore donne :\nc² = 3² + 4².\n\nÉtape 3 : On calcule les carrés :\n3² = 9.\n4² = 16.\n\nDonc :\nc² = 9 + 16 = 25.\n\nÉtape 4 : On prend la racine carrée :\nc = √25 = 5.\n\nConclusion : l'hypoténuse mesure 5 cm."
  },

  {
    question: "Calculer le volume d'un cube de côté 4 cm.",
    answer: "64 cm³",
    solution: "Le volume d'un cube est donné par :\nV = c³.\n\nÉtape 1 : Le côté mesure 4 cm.\n\nÉtape 2 :\nV = 4³.\n\nÉtape 3 :\n4³ = 4 × 4 × 4.\n\n4 × 4 = 16.\n16 × 4 = 64.\n\nConclusion : le volume est 64 cm³."
  },


  /* ===================================================== */
  /* 17. POURCENTAGES */
  /* ===================================================== */

  {
    question: "Calculer 20 % de 150.",
    answer: "30",
    solution: "On peut transformer 20 % en nombre décimal.\n\nÉtape 1 :\n20 % = 20/100 = 0,20.\n\nÉtape 2 : On multiplie par 150 :\n150 × 0,20 = 30.\n\nConclusion : 20 % de 150 = 30."
  },

  {
    question: "Un article coûte 200 HTG et bénéficie d'une réduction de 15 %. Quel est le nouveau prix ?",
    answer: "170 HTG",
    solution: "Étape 1 : On calcule le montant de la réduction.\n\n15 % = 15/100 = 0,15.\n\nRéduction = 200 × 0,15.\n\nDonc :\nRéduction = 30 HTG.\n\nÉtape 2 : On retire la réduction du prix initial :\n200 - 30 = 170.\n\nConclusion : le nouveau prix est 170 HTG."
  },

  {
    question: "Un prix de 500 HTG augmente de 10 %. Quel est le nouveau prix ?",
    answer: "550 HTG",
    solution: "Étape 1 : On calcule l'augmentation :\n10 % = 0,10.\n\nAugmentation = 500 × 0,10 = 50 HTG.\n\nÉtape 2 : On ajoute l'augmentation au prix initial :\n500 + 50 = 550 HTG.\n\nConclusion : le nouveau prix est 550 HTG."
  },


  /* ===================================================== */
  /* 18. INTÉRÊTS */
  /* ===================================================== */

  {
    question: "Un capital de 10 000 HTG est placé à un taux d'intérêt simple de 5 % pendant 1 an. Calculer l'intérêt.",
    answer: "500 HTG",
    solution: "Pour un intérêt simple, on utilise :\nI = C × t.\n\nC représente le capital et t le taux sous forme décimale.\n\nÉtape 1 :\nC = 10 000 HTG.\nt = 5 % = 0,05.\n\nÉtape 2 :\nI = 10 000 × 0,05.\n\nÉtape 3 :\nI = 500 HTG.\n\nConclusion : l'intérêt obtenu est de 500 HTG."
  },

  {
    question: "Un capital de 20 000 HTG est placé à 4 % pendant 2 ans à intérêt simple. Calculer l'intérêt total.",
    answer: "1 600 HTG",
    solution: "La formule de l'intérêt simple est :\nI = C × t × n.\n\nÉtape 1 :\nC = 20 000 HTG.\nt = 4 % = 0,04.\nn = 2 ans.\n\nÉtape 2 :\nI = 20 000 × 0,04 × 2.\n\nÉtape 3 :\n20 000 × 0,04 = 800.\n\nPuis :\n800 × 2 = 1 600.\n\nConclusion : l'intérêt total est de 1 600 HTG."
  },


  /* ===================================================== */
  /* 19. PROPORTIONNALITÉ ET VITESSE */
  /* ===================================================== */

  {
    question: "Une voiture parcourt 180 km en 3 heures. Quelle est sa vitesse moyenne ?",
    answer: "60 km/h",
    solution: "La vitesse moyenne se calcule avec :\nv = distance ÷ temps.\n\nÉtape 1 :\nDistance = 180 km.\nTemps = 3 h.\n\nÉtape 2 :\nv = 180 ÷ 3.\n\nÉtape 3 :\nv = 60 km/h.\n\nConclusion : la vitesse moyenne est de 60 km/h."
  },

  {
    question: "Si 5 cahiers coûtent 500 HTG, combien coûtent 8 cahiers au même prix unitaire ?",
    answer: "800 HTG",
    solution: "On utilise la proportionnalité.\n\nÉtape 1 : Calculons le prix d'un cahier :\n500 ÷ 5 = 100 HTG.\n\nÉtape 2 : Un cahier coûte donc 100 HTG.\n\nÉtape 3 : Pour 8 cahiers :\n8 × 100 = 800 HTG.\n\nConclusion : 8 cahiers coûtent 800 HTG."
  },


  /* ===================================================== */
  /* 20. EXPONENTIELLES */
  /* ===================================================== */

  {
    question: "Résoudre 2ˣ = 32.",
    answer: "x = 5",
    solution: "On cherche l'exposant x.\n\nÉtape 1 : On écrit 32 comme une puissance de 2.\n\n32 = 2 × 2 × 2 × 2 × 2 = 2⁵.\n\nÉtape 2 : L'équation devient :\n2ˣ = 2⁵.\n\nÉtape 3 : Lorsque les bases sont identiques, les exposants sont égaux :\nx = 5.\n\nConclusion : x = 5."
  },

  {
    question: "Résoudre 3ˣ = 81.",
    answer: "x = 4",
    solution: "Étape 1 : On cherche à écrire 81 comme une puissance de 3.\n\n3 × 3 × 3 × 3 = 81.\n\nDonc :\n81 = 3⁴.\n\nÉtape 2 : L'équation devient :\n3ˣ = 3⁴.\n\nÉtape 3 : Les bases étant identiques :\nx = 4.\n\nConclusion : x = 4."
  },


  /* ===================================================== */
  /* 21. LOGARITHMES */
  /* ===================================================== */

  {
    question: "Calculer log₁₀(100).",
    answer: "2",
    solution: "Le logarithme décimal cherche l'exposant auquel il faut élever 10 pour obtenir le nombre donné.\n\nOn cherche donc x tel que :\n10ˣ = 100.\n\nÉtape 1 :\n100 = 10².\n\nÉtape 2 : Donc :\nlog₁₀(100) = 2.\n\nConclusion : log₁₀(100) = 2."
  },

  {
    question: "Calculer ln(e³).",
    answer: "3",
    solution: "Le logarithme naturel ln et la fonction exponentielle eˣ sont des fonctions réciproques.\n\nRègle :\nln(eˣ) = x.\n\nÉtape 1 :\nln(e³).\n\nÉtape 2 : On applique la règle :\nln(e³) = 3.\n\nConclusion : le résultat est 3."
  },


  /* ===================================================== */
  /* 22. CALCULS DIVERS */
  /* ===================================================== */

  {
    question: "Calculer : 15 + 8 × 2.",
    answer: "31",
    solution: "On respecte les priorités de calcul : les multiplications sont effectuées avant les additions.\n\nÉtape 1 : On calcule la multiplication :\n8 × 2 = 16.\n\nÉtape 2 : On effectue l'addition :\n15 + 16 = 31.\n\nConclusion : le résultat est 31."
  },

  {
    question: "Calculer : (15 + 8) × 2.",
    answer: "46",
    solution: "Les parenthèses sont prioritaires.\n\nÉtape 1 : On calcule la parenthèse :\n15 + 8 = 23.\n\nÉtape 2 : On multiplie par 2 :\n23 × 2 = 46.\n\nConclusion : le résultat est 46."
  },

  {
    question: "Calculer : 100 - 25 ÷ 5.",
    answer: "95",
    solution: "La division est prioritaire sur la soustraction.\n\nÉtape 1 :\n25 ÷ 5 = 5.\n\nÉtape 2 :\n100 - 5 = 95.\n\nConclusion : le résultat est 95."
  },

  {
    question: "Calculer : 3/4 + 1/4.",
    answer: "1",
    solution: "Les deux fractions ont le même dénominateur.\n\nÉtape 1 : On conserve le dénominateur 4.\n\nÉtape 2 : On additionne les numérateurs :\n3 + 1 = 4.\n\nDonc :\n3/4 + 1/4 = 4/4.\n\nÉtape 3 :\n4/4 = 1.\n\nConclusion : le résultat est 1."
  },

  {
    question: "Calculer : 2/3 × 9/4.",
    answer: "3/2",
    solution: "Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux.\n\nÉtape 1 :\n(2/3) × (9/4) = (2 × 9)/(3 × 4).\n\nÉtape 2 :\n= 18/12.\n\nÉtape 3 : On simplifie par 6 :\n18 ÷ 6 = 3.\n12 ÷ 6 = 2.\n\nDonc :\n18/12 = 3/2.\n\nConclusion : le résultat est 3/2."
  },

  {
    question: "Résoudre : x/3 = 5.",
    answer: "x = 15",
    solution: "On cherche x.\n\nÉtape 1 :\nx/3 = 5.\n\nÉtape 2 : Pour supprimer la division par 3, on multiplie les deux membres par 3 :\n(x/3) × 3 = 5 × 3.\n\nÉtape 3 :\nx = 15.\n\nVérification :\n15 ÷ 3 = 5.\n\nConclusion : x = 15."
  },

  {
    question: "Résoudre : (x - 2)/4 = 3.",
    answer: "x = 14",
    solution: "Étape 1 :\n(x - 2)/4 = 3.\n\nÉtape 2 : On multiplie les deux membres par 4 :\nx - 2 = 12.\n\nÉtape 3 : On ajoute 2 aux deux membres :\nx = 14.\n\nVérification :\n(14 - 2) ÷ 4 = 12 ÷ 4 = 3.\n\nConclusion : x = 14."
  },


  /* ===================================================== */
  /* 23. SYSTÈMES */
  /* ===================================================== */

  {
    question: "Résoudre le système : x + y = 10 et x - y = 2.",
    answer: "x = 6 et y = 4",
    solution: "On utilise la méthode par addition.\n\nÉtape 1 : On écrit les deux équations :\nx + y = 10.\nx - y = 2.\n\nÉtape 2 : On additionne les deux équations membre par membre :\n(x + y) + (x - y) = 10 + 2.\n\nLes termes y s'annulent :\n2x = 12.\n\nÉtape 3 : On divise par 2 :\nx = 6.\n\nÉtape 4 : On remplace x dans la première équation :\n6 + y = 10.\n\nDonc :\ny = 4.\n\nVérification :\n6 + 4 = 10.\n6 - 4 = 2.\n\nConclusion : x = 6 et y = 4."
  },

  {
    question: "Résoudre le système : 2x + y = 7 et x - y = 2.",
    answer: "x = 3 et y = 1",
    solution: "Étape 1 : On écrit :\n2x + y = 7.\nx - y = 2.\n\nÉtape 2 : On additionne les deux équations :\n2x + y + x - y = 7 + 2.\n\nLes y s'annulent :\n3x = 9.\n\nÉtape 3 :\nx = 9 ÷ 3 = 3.\n\nÉtape 4 : On remplace x par 3 dans x - y = 2 :\n3 - y = 2.\n\nDonc :\ny = 1.\n\nVérification :\n2(3) + 1 = 7.\n3 - 1 = 2.\n\nConclusion : x = 3 et y = 1."
  },


  /* ===================================================== */
  /* 24. COMBINAISONS ET FACTORIELLES */
  /* ===================================================== */

  {
    question: "Calculer 5!.",
    answer: "120",
    solution: "Le symbole ! représente la factorielle.\n\nPar définition :\n5! = 5 × 4 × 3 × 2 × 1.\n\nÉtape 1 :\n5 × 4 = 20.\n\nÉtape 2 :\n20 × 3 = 60.\n\nÉtape 3 :\n60 × 2 = 120.\n\nÉtape 4 :\n120 × 1 = 120.\n\nConclusion : 5! = 120."
  },

  {
    question: "Calculer le nombre de façons de choisir 2 personnes parmi 5.",
    answer: "10",
    solution: "On utilise la combinaison :\nC(n,p) = n! / [p!(n-p)!].\n\nIci :\nn = 5 et p = 2.\n\nÉtape 1 :\nC(5,2) = 5! / [2! × 3!].\n\nÉtape 2 :\n5! = 120.\n2! = 2.\n3! = 6.\n\nDonc :\nC(5,2) = 120 / (2 × 6).\n\nÉtape 3 :\n120 ÷ 12 = 10.\n\nConclusion : il existe 10 façons de choisir 2 personnes parmi 5."
  },


  /* ===================================================== */
  /* 25. COORDONNÉES ET VECTEURS */
  /* ===================================================== */

  {
    question: "Déterminer les coordonnées du vecteur AB avec A(2,3) et B(7,9).",
    answer: "AB = (5,6)",
    solution: "Les coordonnées du vecteur AB se calculent par :\nAB = (xB - xA ; yB - yA).\n\nÉtape 1 : Pour x :\n7 - 2 = 5.\n\nÉtape 2 : Pour y :\n9 - 3 = 6.\n\nÉtape 3 : On rassemble :\nAB = (5 ; 6).\n\nConclusion : le vecteur AB a pour coordonnées (5 ; 6)."
  },

  {
    question: "Calculer la norme du vecteur u = (3,4).",
    answer: "5",
    solution: "La norme d'un vecteur u = (x,y) est :\n||u|| = √(x² + y²).\n\nÉtape 1 :\n||u|| = √(3² + 4²).\n\nÉtape 2 :\n3² = 9.\n4² = 16.\n\nDonc :\n||u|| = √25.\n\nÉtape 3 :\n√25 = 5.\n\nConclusion : ||u|| = 5."
  },


  /* ===================================================== */
  /* 26. ANGLES */
  /* ===================================================== */

  {
    question: "Dans un triangle, deux angles mesurent 50° et 60°. Calculer le troisième angle.",
    answer: "70°",
    solution: "La somme des angles d'un triangle est toujours égale à 180°.\n\nÉtape 1 : On additionne les deux angles connus :\n50° + 60° = 110°.\n\nÉtape 2 : On soustrait cette valeur de 180° :\n180° - 110° = 70°.\n\nConclusion : le troisième angle mesure 70°."
  },

  {
    question: "Deux angles sont supplémentaires. Le premier mesure 65°. Calculer le second.",
    answer: "115°",
    solution: "Deux angles supplémentaires ont une somme de 180°.\n\nÉtape 1 : On écrit :\n65° + x = 180°.\n\nÉtape 2 : On soustrait 65° :\nx = 180° - 65°.\n\nÉtape 3 :\nx = 115°.\n\nConclusion : le second angle mesure 115°."
  },


  /* ===================================================== */
  /* 27. ÉQUATIONS AVEC FRACTIONS */
  /* ===================================================== */

  {
    question: "Résoudre : x/2 + 3 = 7.",
    answer: "x = 8",
    solution: "Étape 1 :\nx/2 + 3 = 7.\n\nÉtape 2 : On soustrait 3 aux deux membres :\nx/2 = 4.\n\nÉtape 3 : On multiplie par 2 :\nx = 8.\n\nVérification :\n8/2 + 3 = 4 + 3 = 7.\n\nConclusion : x = 8."
  },

  {
    question: "Résoudre : (2x + 1)/3 = 5.",
    answer: "x = 7",
    solution: "Étape 1 :\n(2x + 1)/3 = 5.\n\nÉtape 2 : On multiplie les deux membres par 3 :\n2x + 1 = 15.\n\nÉtape 3 : On soustrait 1 :\n2x = 14.\n\nÉtape 4 : On divise par 2 :\nx = 7.\n\nVérification :\n(2(7) + 1)/3 = 15/3 = 5.\n\nConclusion : x = 7."
  },


  /* ===================================================== */
  /* 28. IDENTITÉS REMARQUABLES */
  /* ===================================================== */

  {
    question: "Développer : (x - 4)².",
    answer: "x² - 8x + 16",
    solution: "On utilise l'identité remarquable :\n(a - b)² = a² - 2ab + b².\n\nÉtape 1 : Ici a = x et b = 4.\n\nÉtape 2 :\nx² - 2 × x × 4 + 4².\n\nÉtape 3 :\n2 × x × 4 = 8x.\n\nEt :\n4² = 16.\n\nDonc :\nx² - 8x + 16.\n\nConclusion : (x - 4)² = x² - 8x + 16."
  },

  {
    question: "Développer : (2x + 3)².",
    answer: "4x² + 12x + 9",
    solution: "On utilise :\n(a + b)² = a² + 2ab + b².\n\nÉtape 1 :\na = 2x.\nb = 3.\n\nÉtape 2 :\n(2x)² + 2(2x)(3) + 3².\n\nÉtape 3 :\n(2x)² = 4x².\n\n2(2x)(3) = 12x.\n\n3² = 9.\n\nConclusion :\n(2x + 3)² = 4x² + 12x + 9."
  },


  /* ===================================================== */
  /* 29. POURCENTAGE AVANCÉ */
  /* ===================================================== */

  {
    question: "Un nombre de 80 augmente de 25 %. Quel est le nouveau nombre ?",
    answer: "100",
    solution: "Étape 1 : On calcule 25 % de 80.\n\n25 % = 0,25.\n\n80 × 0,25 = 20.\n\nÉtape 2 : On ajoute l'augmentation :\n80 + 20 = 100.\n\nOn peut aussi utiliser le coefficient multiplicateur :\n1 + 25/100 = 1,25.\n\n80 × 1,25 = 100.\n\nConclusion : le nouveau nombre est 100."
  },

  {
    question: "Un nombre de 200 diminue de 30 %. Quel est le nouveau nombre ?",
    answer: "140",
    solution: "Étape 1 : On calcule 30 % de 200.\n\n30 % = 0,30.\n\n200 × 0,30 = 60.\n\nÉtape 2 : On retire la diminution :\n200 - 60 = 140.\n\nOn peut aussi utiliser le coefficient multiplicateur :\n1 - 0,30 = 0,70.\n\n200 × 0,70 = 140.\n\nConclusion : le nouveau nombre est 140."
  },


  /* ===================================================== */
  /* 30. PROBLÈMES MIXTES */
  /* ===================================================== */

  {
    question: "Un étudiant obtient 14, 16 et 10 à trois contrôles. Quelle note doit-il obtenir au quatrième contrôle pour avoir une moyenne de 13 ?",
    answer: "12",
    solution: "On cherche la quatrième note x.\n\nÉtape 1 : Pour avoir une moyenne de 13 sur quatre notes, la somme totale doit être :\n13 × 4 = 52.\n\nÉtape 2 : On additionne les trois premières notes :\n14 + 16 + 10 = 40.\n\nÉtape 3 : Il manque donc :\n52 - 40 = 12.\n\nConclusion : l'étudiant doit obtenir 12 au quatrième contrôle."
  },

  {
    question: "Un réservoir contient 120 litres d'eau. On utilise 35 litres. Combien de litres restent-ils ?",
    answer: "85 litres",
    solution: "Étape 1 : Quantité initiale :\n120 litres.\n\nÉtape 2 : Quantité utilisée :\n35 litres.\n\nÉtape 3 : On soustrait :\n120 - 35 = 85.\n\nConclusion : il reste 85 litres."
  },

  {
    question: "Un terrain rectangulaire mesure 20 m de longueur et 15 m de largeur. Calculer son aire.",
    answer: "300 m²",
    solution: "L'aire d'un rectangle se calcule avec :\nA = longueur × largeur.\n\nÉtape 1 :\nLongueur = 20 m.\nLargeur = 15 m.\n\nÉtape 2 :\nA = 20 × 15.\n\nÉtape 3 :\n20 × 15 = 300.\n\nConclusion : l'aire du terrain est 300 m²."
  },

  {
    question: "Un élève répond correctement à 18 questions sur 20. Quel est son pourcentage de réussite ?",
    answer: "90 %",
    solution: "Le pourcentage de réussite se calcule par :\n(nombre de réponses correctes ÷ nombre total de questions) × 100.\n\nÉtape 1 :\n18 ÷ 20 = 0,9.\n\nÉtape 2 :\n0,9 × 100 = 90.\n\nConclusion : le taux de réussite est de 90 %."
  },

  {
    question: "Une classe compte 40 élèves. 60 % sont des filles. Combien y a-t-il de filles ?",
    answer: "24 filles",
    solution: "Étape 1 : On transforme 60 % en nombre décimal :\n60 % = 0,60.\n\nÉtape 2 : On multiplie par le nombre total d'élèves :\n40 × 0,60 = 24.\n\nConclusion : il y a 24 filles dans la classe."
  },

  {
    question: "Un produit coûte 1 000 HTG. Après une réduction de 20 %, quel est son prix ?",
    answer: "800 HTG",
    solution: "Étape 1 : Calculons la réduction :\n20 % de 1 000 = 1 000 × 0,20 = 200 HTG.\n\nÉtape 2 : On retire la réduction du prix initial :\n1 000 - 200 = 800 HTG.\n\nConclusion : le prix après réduction est de 800 HTG."
  },

  {
    question: "Une voiture roule à 80 km/h pendant 2,5 heures. Quelle distance parcourt-elle ?",
    answer: "200 km",
    solution: "On utilise la formule :\ndistance = vitesse × temps.\n\nÉtape 1 :\nv = 80 km/h.\nt = 2,5 h.\n\nÉtape 2 :\nd = 80 × 2,5.\n\nÉtape 3 :\n80 × 2 = 160.\n80 × 0,5 = 40.\n\nDonc :\n160 + 40 = 200.\n\nConclusion : la voiture parcourt 200 km."
  },

  {
    question: "Résoudre l'équation : 7x - 14 = 0.",
    answer: "x = 2",
    solution: "Étape 1 :\n7x - 14 = 0.\n\nÉtape 2 : On ajoute 14 aux deux membres :\n7x = 14.\n\nÉtape 3 : On divise par 7 :\nx = 2.\n\nVérification :\n7 × 2 - 14 = 14 - 14 = 0.\n\nConclusion : x = 2."
  },

  {
    question: "Résoudre l'équation : 6x + 12 = 0.",
    answer: "x = -2",
    solution: "Étape 1 :\n6x + 12 = 0.\n\nÉtape 2 : On soustrait 12 :\n6x = -12.\n\nÉtape 3 : On divise par 6 :\nx = -2.\n\nVérification :\n6(-2) + 12 = -12 + 12 = 0.\n\nConclusion : x = -2."
  },

  {
    question: "Calculer la valeur de 4² + 3².",
    answer: "25",
    solution: "Étape 1 : Calculons chaque carré :\n4² = 4 × 4 = 16.\n\n3² = 3 × 3 = 9.\n\nÉtape 2 : On additionne :\n16 + 9 = 25.\n\nConclusion : 4² + 3² = 25."
  },

  {
    question: "Calculer √144.",
    answer: "12",
    solution: "On cherche le nombre positif dont le carré est 144.\n\nÉtape 1 :\n12 × 12 = 144.\n\nÉtape 2 : Donc :\n√144 = 12.\n\nConclusion : √144 = 12."
  },

  {
    question: "Résoudre x² = 25.",
    answer: "x = -5 ou x = 5",
    solution: "On cherche tous les nombres dont le carré vaut 25.\n\nÉtape 1 :\n5² = 25.\n\nMais :\n(-5)² = 25 également.\n\nÉtape 2 : Une équation x² = a, avec a positif, possède deux solutions opposées :\nx = √25 ou x = -√25.\n\nÉtape 3 :\n√25 = 5.\n\nDonc :\nx = 5 ou x = -5.\n\nConclusion : les solutions sont -5 et 5."
  },

  {
    question: "Résoudre x² = 49.",
    answer: "x = -7 ou x = 7",
    solution: "Étape 1 : On cherche les nombres dont le carré vaut 49.\n\n7² = 49.\n\nEt :\n(-7)² = 49.\n\nÉtape 2 : Donc :\nx = √49 ou x = -√49.\n\nÉtape 3 :\n√49 = 7.\n\nConclusion : x = -7 ou x = 7."
  },

  {
    question: "Calculer la somme 1 + 2 + 3 + 4 + 5.",
    answer: "15",
    solution: "Étape 1 : On additionne les premiers termes :\n1 + 2 = 3.\n\nÉtape 2 :\n3 + 3 = 6.\n\nÉtape 3 :\n6 + 4 = 10.\n\nÉtape 4 :\n10 + 5 = 15.\n\nConclusion : la somme est 15."
  },

  {
    question: "Un triangle possède des côtés de 5 cm, 5 cm et 8 cm. Quel est son périmètre ?",
    answer: "18 cm",
    solution: "Le périmètre d'un polygone est la somme de toutes ses longueurs de côtés.\n\nÉtape 1 : On additionne les trois côtés :\n5 + 5 + 8.\n\nÉtape 2 :\n5 + 5 = 10.\n\nPuis :\n10 + 8 = 18.\n\nConclusion : le périmètre du triangle est 18 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 9 cm.",
    answer: "81 cm²",
    solution: "L'aire d'un carré se calcule avec :\nA = côté².\n\nÉtape 1 : Le côté vaut 9 cm.\n\nÉtape 2 :\nA = 9².\n\nÉtape 3 :\n9² = 9 × 9 = 81.\n\nConclusion : l'aire du carré est 81 cm²."
  },

  {
    question: "Calculer le volume d'un pavé droit de dimensions 5 cm, 4 cm et 3 cm.",
    answer: "60 cm³",
    solution: "Le volume d'un pavé droit est :\nV = longueur × largeur × hauteur.\n\nÉtape 1 :\nV = 5 × 4 × 3.\n\nÉtape 2 :\n5 × 4 = 20.\n\nÉtape 3 :\n20 × 3 = 60.\n\nConclusion : le volume est 60 cm³."
  },

  {
    question: "Si 3 kg de riz coûtent 900 HTG, combien coûtent 7 kg au même prix par kilogramme ?",
    answer: "2 100 HTG",
    solution: "Étape 1 : Calculons le prix d'un kilogramme :\n900 ÷ 3 = 300 HTG.\n\nÉtape 2 : Un kilogramme coûte donc 300 HTG.\n\nÉtape 3 : Pour 7 kg :\n7 × 300 = 2 100 HTG.\n\nConclusion : 7 kg coûtent 2 100 HTG."
  },

  {
    question: "Un nombre est égal à 40 % de 250. Quel est ce nombre ?",
    answer: "100",
    solution: "Étape 1 : Transformer 40 % en décimal :\n40 % = 0,40.\n\nÉtape 2 : Multiplier par 250 :\n250 × 0,40 = 100.\n\nConclusion : le nombre est 100."
  },

  {
    question: "Une population de 5 000 habitants augmente de 8 %. Quelle est la nouvelle population ?",
    answer: "5 400 habitants",
    solution: "Étape 1 : Calculons l'augmentation :\n8 % = 0,08.\n\n5 000 × 0,08 = 400.\n\nÉtape 2 : On ajoute l'augmentation :\n5 000 + 400 = 5 400.\n\nConclusion : la nouvelle population est de 5 400 habitants."
  },

  {
    question: "Une population de 5 000 habitants diminue de 8 %. Quelle est la nouvelle population ?",
    answer: "4 600 habitants",
    solution: "Étape 1 : Calculons la diminution :\n5 000 × 0,08 = 400.\n\nÉtape 2 : On retire 400 à la population initiale :\n5 000 - 400 = 4 600.\n\nConclusion : la nouvelle population est de 4 600 habitants."
  },

  {
    question: "Calculer la moyenne de 8, 10, 12 et 14.",
    answer: "11",
    solution: "Étape 1 : On additionne les quatre valeurs :\n8 + 10 + 12 + 14 = 44.\n\nÉtape 2 : Il y a 4 valeurs.\n\nÉtape 3 :\n44 ÷ 4 = 11.\n\nConclusion : la moyenne est 11."
  },

  {
    question: "Calculer la probabilité d'obtenir un nombre pair avec un dé équilibré à six faces.",
    answer: "1/2",
    solution: "Les résultats possibles sont :\n1, 2, 3, 4, 5, 6.\n\nÉtape 1 : Les nombres pairs sont :\n2, 4 et 6.\n\nIl y a donc 3 cas favorables.\n\nÉtape 2 : Il y a 6 résultats possibles.\n\nÉtape 3 :\nP(pair) = 3/6.\n\nÉtape 4 : On simplifie par 3 :\n3/6 = 1/2.\n\nConclusion : la probabilité d'obtenir un nombre pair est 1/2, soit 50 %."
  },

  {
    question: "Calculer 2⁻³.",
    answer: "1/8",
    solution: "Une puissance négative signifie que l'on prend l'inverse de la puissance positive.\n\nRègle :\na⁻ⁿ = 1/aⁿ.\n\nÉtape 1 :\n2⁻³ = 1/2³.\n\nÉtape 2 :\n2³ = 8.\n\nDonc :\n2⁻³ = 1/8.\n\nConclusion : 2⁻³ = 1/8."
  },

  {
    question: "Simplifier : (x²)³.",
    answer: "x⁶",
    solution: "Lorsqu'une puissance est élevée à une autre puissance, on multiplie les exposants.\n\nRègle :\n(aᵐ)ⁿ = aᵐⁿ.\n\nÉtape 1 :\n(x²)³ = x^(2 × 3).\n\nÉtape 2 :\n2 × 3 = 6.\n\nDonc :\n(x²)³ = x⁶.\n\nConclusion : le résultat est x⁶."
  },

  {
    question: "Simplifier : x³ × x².",
    answer: "x⁵",
    solution: "Lorsque les puissances ont la même base et sont multipliées, on additionne les exposants.\n\nRègle :\nxᵐ × xⁿ = xᵐ⁺ⁿ.\n\nÉtape 1 :\nx³ × x² = x³⁺².\n\nÉtape 2 :\n3 + 2 = 5.\n\nConclusion : x³ × x² = x⁵."
  },

  {
    question: "Simplifier : x⁷ / x³, avec x ≠ 0.",
    answer: "x⁴",
    solution: "Lorsque deux puissances de même base sont divisées, on soustrait les exposants.\n\nRègle :\nxᵐ / xⁿ = xᵐ⁻ⁿ.\n\nÉtape 1 :\nx⁷ / x³ = x⁷⁻³.\n\nÉtape 2 :\n7 - 3 = 4.\n\nDonc :\nx⁷ / x³ = x⁴.\n\nConclusion : le résultat est x⁴."
  },

  {
    question: "Déterminer la pente de la droite passant par A(1,2) et B(5,10).",
    answer: "a = 2",
    solution: "Le coefficient directeur d'une droite passant par deux points est :\na = (y₂ - y₁)/(x₂ - x₁).\n\nÉtape 1 :\ny₂ - y₁ = 10 - 2 = 8.\n\nÉtape 2 :\nx₂ - x₁ = 5 - 1 = 4.\n\nÉtape 3 :\na = 8/4 = 2.\n\nConclusion : le coefficient directeur est 2."
  },

  {
    question: "Calculer la distance entre A(0,0) et B(6,8).",
    answer: "10",
    solution: "On utilise la formule :\nAB = √[(x₂-x₁)² + (y₂-y₁)²].\n\nÉtape 1 :\nx₂-x₁ = 6 - 0 = 6.\n\ny₂-y₁ = 8 - 0 = 8.\n\nÉtape 2 :\nAB = √(6² + 8²).\n\nÉtape 3 :\n6² = 36.\n8² = 64.\n\nDonc :\nAB = √100.\n\nÉtape 4 :\n√100 = 10.\n\nConclusion : AB = 10."
  },

  {
    question: "Calculer la dérivée de f(x) = 7x + 4.",
    answer: "f'(x) = 7",
    solution: "On utilise les règles de dérivation.\n\nLa dérivée de ax est a.\nLa dérivée d'une constante est 0.\n\nÉtape 1 :\n(7x)' = 7.\n\nÉtape 2 :\n(4)' = 0.\n\nÉtape 3 :\nf'(x) = 7 + 0 = 7.\n\nConclusion : f'(x) = 7."
  },

  {
    question: "Calculer la dérivée de f(x) = x³ - 2x.",
    answer: "f'(x) = 3x² - 2",
    solution: "On dérive chaque terme.\n\nÉtape 1 :\n(x³)' = 3x².\n\nÉtape 2 :\n(-2x)' = -2.\n\nÉtape 3 : On rassemble :\nf'(x) = 3x² - 2.\n\nConclusion : f'(x) = 3x² - 2."
  },

  {
    question: "Déterminer une primitive de f(x) = 4x³.",
    answer: "F(x) = x⁴ + C",
    solution: "On cherche une fonction dont la dérivée est 4x³.\n\nÉtape 1 : On sait que :\n(x⁴)' = 4x³.\n\nÉtape 2 : Donc une primitive est x⁴.\n\nÉtape 3 : On ajoute la constante C :\nF(x) = x⁴ + C.\n\nVérification :\nF'(x) = 4x³.\n\nConclusion : F(x) = x⁴ + C."
  },

  {
    question: "Calculer lim(x→1) (3x + 2).",
    answer: "5",
    solution: "La fonction 3x + 2 est continue.\n\nÉtape 1 : On remplace x par 1 :\n3(1) + 2.\n\nÉtape 2 :\n3 + 2 = 5.\n\nConclusion : la limite vaut 5."
  },

  {
    question: "Résoudre 5ˣ = 125.",
    answer: "x = 3",
    solution: "Étape 1 : On écrit 125 comme une puissance de 5.\n\n5 × 5 × 5 = 125.\n\nDonc :\n125 = 5³.\n\nÉtape 2 :\n5ˣ = 5³.\n\nÉtape 3 : Les bases sont identiques, donc :\nx = 3.\n\nConclusion : x = 3."
  },

  {
    question: "Calculer log₁₀(1000).",
    answer: "3",
    solution: "On cherche l'exposant x tel que :\n10ˣ = 1000.\n\nÉtape 1 :\n1000 = 10 × 10 × 10 = 10³.\n\nÉtape 2 : Donc :\nlog₁₀(1000) = 3.\n\nConclusion : le résultat est 3."
  },

  {
    question: "Un capital de 5 000 HTG est placé à 6 % pendant 2 ans à intérêt simple. Calculer l'intérêt.",
    answer: "600 HTG",
    solution: "On utilise la formule :\nI = C × t × n.\n\nÉtape 1 :\nC = 5 000 HTG.\nt = 6 % = 0,06.\nn = 2 ans.\n\nÉtape 2 :\nI = 5 000 × 0,06 × 2.\n\nÉtape 3 :\n5 000 × 0,06 = 300.\n\nPuis :\n300 × 2 = 600.\n\nConclusion : l'intérêt est de 600 HTG."
  },

  {
    question: "Une suite arithmétique a u₁ = 10 et r = 5. Calculer u₈.",
    answer: "u₈ = 45",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁ = 10.\nr = 5.\nn = 8.\n\nÉtape 2 :\nu₈ = 10 + (8 - 1) × 5.\n\nÉtape 3 :\n8 - 1 = 7.\n\nDonc :\nu₈ = 10 + 7 × 5.\n\nÉtape 4 :\n7 × 5 = 35.\n\nDonc :\nu₈ = 45.\n\nConclusion : u₈ = 45."
  },

  {
    question: "Une suite géométrique a u₁ = 3 et q = 2. Calculer u₆.",
    answer: "u₆ = 96",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₁ = 3.\nq = 2.\nn = 6.\n\nÉtape 2 :\nu₆ = 3 × 2⁵.\n\nÉtape 3 :\n2⁵ = 32.\n\nÉtape 4 :\n3 × 32 = 96.\n\nConclusion : u₆ = 96."
  },

  {
    question: "Calculer la probabilité d'obtenir un as dans un jeu de 52 cartes contenant 4 as.",
    answer: "1/13",
    solution: "On utilise :\nP(événement) = cas favorables / cas possibles.\n\nÉtape 1 : Il y a 52 cartes au total.\n\nDonc : 52 cas possibles.\n\nÉtape 2 : Il y a 4 as.\n\nDonc : 4 cas favorables.\n\nÉtape 3 :\nP(as) = 4/52.\n\nÉtape 4 : On simplifie par 4 :\n4/52 = 1/13.\n\nConclusion : la probabilité d'obtenir un as est 1/13."
  },

  {
    question: "Calculer la moyenne de 5, 10, 15, 20 et 25.",
    answer: "15",
    solution: "Étape 1 : Additionnons les valeurs :\n5 + 10 + 15 + 20 + 25 = 75.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n75 ÷ 5 = 15.\n\nConclusion : la moyenne est 15."
  },

  {
    question: "Dans un triangle rectangle, l'hypoténuse mesure 13 cm et un côté mesure 5 cm. Calculer l'autre côté.",
    answer: "12 cm",
    solution: "On utilise le théorème de Pythagore.\n\nSi c est l'hypoténuse et a,b les deux autres côtés :\nc² = a² + b².\n\nÉtape 1 :\n13² = 5² + b².\n\nÉtape 2 :\n13² = 169.\n5² = 25.\n\nDonc :\n169 = 25 + b².\n\nÉtape 3 : On soustrait 25 :\nb² = 169 - 25 = 144.\n\nÉtape 4 :\nb = √144 = 12.\n\nConclusion : l'autre côté mesure 12 cm."
  },

  {
    question: "Résoudre l'inéquation : 2x - 6 ≥ 0.",
    answer: "x ≥ 3",
    solution: "Étape 1 :\n2x - 6 ≥ 0.\n\nÉtape 2 : On ajoute 6 aux deux membres :\n2x ≥ 6.\n\nÉtape 3 : On divise par 2 :\nx ≥ 3.\n\nComme 2 est positif, le signe ne change pas.\n\nConclusion : x ≥ 3."
  },

  {
    question: "Résoudre l'inéquation : -3x + 9 ≤ 0.",
    answer: "x ≥ 3",
    solution: "Étape 1 :\n-3x + 9 ≤ 0.\n\nÉtape 2 : On soustrait 9 :\n-3x ≤ -9.\n\nÉtape 3 : On divise par -3.\nComme on divise par un nombre négatif, le signe s'inverse :\nx ≥ 3.\n\nConclusion : x ≥ 3."
  },

  {
    question: "Calculer l'aire d'un trapèze de bases 8 cm et 12 cm et de hauteur 5 cm.",
    answer: "50 cm²",
    solution: "La formule de l'aire d'un trapèze est :\nA = [(B + b) × h] ÷ 2.\n\nÉtape 1 :\nB = 12 cm.\nb = 8 cm.\nh = 5 cm.\n\nÉtape 2 :\nB + b = 12 + 8 = 20.\n\nÉtape 3 :\nA = (20 × 5) ÷ 2.\n\nÉtape 4 :\n20 × 5 = 100.\n\n100 ÷ 2 = 50.\n\nConclusion : l'aire du trapèze est 50 cm²."
  },

  {
    question: "Calculer la circonférence d'un cercle de rayon 7 cm avec π ≈ 3,14.",
    answer: "43,96 cm",
    solution: "La circonférence d'un cercle est :\nC = 2πr.\n\nÉtape 1 :\nr = 7 cm.\nπ ≈ 3,14.\n\nÉtape 2 :\nC = 2 × 3,14 × 7.\n\nÉtape 3 :\n2 × 7 = 14.\n\nDonc :\nC = 3,14 × 14.\n\nÉtape 4 :\n3,14 × 14 = 43,96.\n\nConclusion : la circonférence est environ 43,96 cm."
  },

  {
    question: "Un étudiant a obtenu 72 points sur 100. Quel est son pourcentage ?",
    answer: "72 %",
    solution: "Le pourcentage est :\n(points obtenus ÷ points possibles) × 100.\n\nÉtape 1 :\n72 ÷ 100 = 0,72.\n\nÉtape 2 :\n0,72 × 100 = 72.\n\nConclusion : le score correspond à 72 %."
  },

  {
    question: "Résoudre : 4x + 8 = 2x + 20.",
    answer: "x = 6",
    solution: "Étape 1 :\n4x + 8 = 2x + 20.\n\nÉtape 2 : On soustrait 2x aux deux membres :\n2x + 8 = 20.\n\nÉtape 3 : On soustrait 8 :\n2x = 12.\n\nÉtape 4 : On divise par 2 :\nx = 6.\n\nVérification :\n4(6) + 8 = 32.\n2(6) + 20 = 32.\n\nConclusion : x = 6."
  },

  {
    question: "Résoudre : 2(x + 4) = 18.",
    answer: "x = 5",
    solution: "Étape 1 :\n2(x + 4) = 18.\n\nÉtape 2 : On divise les deux membres par 2 :\nx + 4 = 9.\n\nÉtape 3 : On soustrait 4 :\nx = 5.\n\nVérification :\n2(5 + 4) = 2 × 9 = 18.\n\nConclusion : x = 5."
  },

  {
    question: "Factoriser : 2x + 6.",
    answer: "2(x + 3)",
    solution: "On cherche le facteur commun aux deux termes.\n\nÉtape 1 : Les termes sont 2x et 6.\n\nÉtape 2 : Le facteur commun est 2.\n\nOn met 2 en facteur :\n2x + 6 = 2(x + 3).\n\nVérification :\n2 × x = 2x.\n2 × 3 = 6.\n\nConclusion : 2x + 6 = 2(x + 3)."
  },

  {
    question: "Développer : 3(x + 5).",
    answer: "3x + 15",
    solution: "On utilise la distributivité.\n\nÉtape 1 : On multiplie 3 par x :\n3 × x = 3x.\n\nÉtape 2 : On multiplie 3 par 5 :\n3 × 5 = 15.\n\nÉtape 3 : On rassemble :\n3x + 15.\n\nConclusion : 3(x + 5) = 3x + 15."
  },

  {
    question: "Calculer 25 % de 400.",
    answer: "100",
    solution: "Étape 1 :\n25 % = 25/100 = 0,25.\n\nÉtape 2 :\n400 × 0,25 = 100.\n\nConclusion : 25 % de 400 = 100."
  },

  {
    question: "Une marchandise coûte 2 500 HTG. Elle est vendue avec une réduction de 12 %. Quel est le montant de la réduction ?",
    answer: "300 HTG",
    solution: "Étape 1 : Transformer 12 % en décimal :\n12 % = 0,12.\n\nÉtape 2 : Calculer la réduction :\n2 500 × 0,12.\n\nÉtape 3 :\n2 500 × 0,10 = 250.\n2 500 × 0,02 = 50.\n\nDonc :\n250 + 50 = 300.\n\nConclusion : la réduction est de 300 HTG."
  },

  {
    question: "Une voiture consomme 8 litres pour 100 km. Combien consomme-t-elle pour 250 km au même rythme ?",
    answer: "20 litres",
    solution: "La consommation est proportionnelle à la distance.\n\nÉtape 1 : Pour 100 km, la voiture consomme 8 L.\n\nÉtape 2 : 250 km représentent 2,5 fois 100 km.\n\nÉtape 3 :\n8 × 2,5 = 20.\n\nConclusion : la voiture consomme 20 litres pour 250 km."
  },

  {
    question: "Calculer le périmètre d'un carré de côté 12 cm.",
    answer: "48 cm",
    solution: "Un carré possède quatre côtés de même longueur.\n\nFormule :\nP = 4 × côté.\n\nÉtape 1 :\nP = 4 × 12.\n\nÉtape 2 :\nP = 48.\n\nConclusion : le périmètre est 48 cm."
  },

  {
    question: "Calculer la diagonale d'un carré de côté 5 cm.",
    answer: "5√2 cm",
    solution: "La diagonale d'un carré forme un triangle rectangle dont les deux côtés mesurent 5 cm.\n\nOn utilise Pythagore :\nd² = 5² + 5².\n\nÉtape 1 :\n5² = 25.\n\nDonc :\nd² = 25 + 25 = 50.\n\nÉtape 2 :\nd = √50.\n\nÉtape 3 :\n50 = 25 × 2.\n\nDonc :\n√50 = √25 × √2 = 5√2.\n\nConclusion : la diagonale mesure 5√2 cm, soit environ 7,07 cm."
  },

  {
    question: "Résoudre x² - 10x + 25 = 0.",
    answer: "x = 5",
    solution: "Étape 1 : On reconnaît une identité remarquable :\na² - 2ab + b² = (a - b)².\n\nIci :\nx² - 10x + 25.\n\nÉtape 2 :\n25 = 5².\n\nEt :\n2 × x × 5 = 10x.\n\nDonc :\nx² - 10x + 25 = (x - 5)².\n\nÉtape 3 :\n(x - 5)² = 0.\n\nDonc :\nx - 5 = 0.\n\nÉtape 4 :\nx = 5.\n\nConclusion : la solution est x = 5."
  },

  {
    question: "Résoudre x² + x - 6 = 0.",
    answer: "x = -3 ou x = 2",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut -6 et dont la somme vaut 1.\n\nCes nombres sont 3 et -2.\n\nEn effet :\n3 × (-2) = -6.\n\nEt :\n3 + (-2) = 1.\n\nÉtape 2 : On factorise :\nx² + x - 6 = (x + 3)(x - 2).\n\nÉtape 3 :\n(x + 3)(x - 2) = 0.\n\nDonc :\nx + 3 = 0 ou x - 2 = 0.\n\nÉtape 4 :\nx = -3 ou x = 2.\n\nConclusion : les solutions sont -3 et 2."
  },

  {
    question: "Calculer la moyenne pondérée des notes 10 et 16 ayant respectivement les coefficients 2 et 3.",
    answer: "13,6",
    solution: "La moyenne pondérée se calcule par :\nM = (note₁ × coefficient₁ + note₂ × coefficient₂) ÷ somme des coefficients.\n\nÉtape 1 :\n10 × 2 = 20.\n\n16 × 3 = 48.\n\nÉtape 2 : On additionne les produits :\n20 + 48 = 68.\n\nÉtape 3 : On additionne les coefficients :\n2 + 3 = 5.\n\nÉtape 4 :\nM = 68 ÷ 5 = 13,6.\n\nConclusion : la moyenne pondérée est 13,6."
  },

  {
    question: "Un sac contient 4 boules rouges, 3 bleues et 3 vertes. Quelle est la probabilité de tirer une boule bleue ?",
    answer: "3/10",
    solution: "Étape 1 : On compte toutes les boules :\n4 + 3 + 3 = 10.\n\nIl y a donc 10 cas possibles.\n\nÉtape 2 : Il y a 3 boules bleues.\n\nDonc 3 cas sont favorables.\n\nÉtape 3 :\nP(bleue) = 3/10.\n\nConclusion : la probabilité est 3/10, soit 30 %."
  },

  {
    question: "Calculer la somme des angles intérieurs d'un quadrilatère.",
    answer: "360°",
    solution: "La somme des angles intérieurs d'un polygone à n côtés est :\n(n - 2) × 180°.\n\nÉtape 1 : Un quadrilatère possède 4 côtés.\n\nDonc :\n(4 - 2) × 180°.\n\nÉtape 2 :\n2 × 180° = 360°.\n\nConclusion : la somme des angles intérieurs d'un quadrilatère est 360°."
  },

  {
    question: "Convertir 2,5 heures en minutes.",
    answer: "150 minutes",
    solution: "Une heure contient 60 minutes.\n\nÉtape 1 :\n2,5 heures = 2 heures + 0,5 heure.\n\nÉtape 2 :\n2 heures = 2 × 60 = 120 minutes.\n\nÉtape 3 :\n0,5 heure = 0,5 × 60 = 30 minutes.\n\nÉtape 4 :\n120 + 30 = 150 minutes.\n\nConclusion : 2,5 heures correspondent à 150 minutes."
  },

  {
    question: "Convertir 72 km/h en m/s.",
    answer: "20 m/s",
    solution: "Pour convertir km/h en m/s, on peut multiplier par 5/18.\n\nÉtape 1 :\n72 × 5/18.\n\nÉtape 2 :\n72 ÷ 18 = 4.\n\nÉtape 3 :\n4 × 5 = 20.\n\nConclusion : 72 km/h = 20 m/s."
  },

  {
    question: "Un train parcourt 360 km à une vitesse moyenne de 90 km/h. Combien de temps met-il ?",
    answer: "4 heures",
    solution: "On utilise la formule :\ntemps = distance ÷ vitesse.\n\nÉtape 1 :\nDistance = 360 km.\nVitesse = 90 km/h.\n\nÉtape 2 :\nt = 360 ÷ 90.\n\nÉtape 3 :\nt = 4 heures.\n\nVérification :\n90 × 4 = 360 km.\n\nConclusion : le train met 4 heures."
  },

  {
    question: "Résoudre : 10 - 2x = 4.",
    answer: "x = 3",
    solution: "Étape 1 :\n10 - 2x = 4.\n\nÉtape 2 : On soustrait 10 aux deux membres :\n-2x = -6.\n\nÉtape 3 : On divise par -2 :\nx = 3.\n\nVérification :\n10 - 2(3) = 10 - 6 = 4.\n\nConclusion : x = 3."
  },

  {
    question: "Résoudre : 3(x - 2) = 2x + 5.",
    answer: "x = 11",
    solution: "Étape 1 : On développe le membre de gauche :\n3(x - 2) = 3x - 6.\n\nL'équation devient :\n3x - 6 = 2x + 5.\n\nÉtape 2 : On soustrait 2x aux deux membres :\nx - 6 = 5.\n\nÉtape 3 : On ajoute 6 :\nx = 11.\n\nVérification :\n3(11 - 2) = 3 × 9 = 27.\n2(11) + 5 = 22 + 5 = 27.\n\nConclusion : x = 11."
  },

  {
    question: "Calculer (5 + 3)(5 - 3).",
    answer: "16",
    solution: "On peut utiliser l'identité remarquable :\n(a + b)(a - b) = a² - b².\n\nÉtape 1 :\n(5 + 3)(5 - 3).\n\nÉtape 2 :\n5 + 3 = 8.\n\n5 - 3 = 2.\n\nÉtape 3 :\n8 × 2 = 16.\n\nOu directement :\n5² - 3² = 25 - 9 = 16.\n\nConclusion : le résultat est 16."
  },

  {
    question: "Calculer la racine carrée de 225.",
    answer: "15",
    solution: "On cherche le nombre positif dont le carré est 225.\n\nÉtape 1 :\n15 × 15 = 225.\n\nÉtape 2 : Donc :\n√225 = 15.\n\nConclusion : √225 = 15."
  },

  {
    question: "Calculer 15 % de 800.",
    answer: "120",
    solution: "Étape 1 :\n15 % = 0,15.\n\nÉtape 2 :\n800 × 0,15.\n\nOn peut décomposer :\n800 × 0,10 = 80.\n800 × 0,05 = 40.\n\nÉtape 3 :\n80 + 40 = 120.\n\nConclusion : 15 % de 800 = 120."
  },

  {
    question: "Une note de 12/20 correspond à quel pourcentage ?",
    answer: "60 %",
    solution: "Pour convertir une note sur 20 en pourcentage, on peut multiplier par 5.\n\nÉtape 1 :\n12/20.\n\nÉtape 2 :\n12 ÷ 20 = 0,6.\n\nÉtape 3 :\n0,6 × 100 = 60 %.\n\nConclusion : 12/20 correspond à 60 %."
  },

  {
    question: "Un rectangle a une aire de 72 cm² et une longueur de 12 cm. Calculer sa largeur.",
    answer: "6 cm",
    solution: "La formule de l'aire d'un rectangle est :\nA = L × l.\n\nOn cherche la largeur l.\n\nÉtape 1 :\n72 = 12 × l.\n\nÉtape 2 : On divise par 12 :\nl = 72 ÷ 12.\n\nÉtape 3 :\nl = 6.\n\nConclusion : la largeur est de 6 cm."
  },

  {
    question: "Un cercle a un diamètre de 10 cm. Calculer son rayon.",
    answer: "5 cm",
    solution: "Le rayon est la moitié du diamètre.\n\nFormule :\nr = d ÷ 2.\n\nÉtape 1 :\nd = 10 cm.\n\nÉtape 2 :\nr = 10 ÷ 2 = 5 cm.\n\nConclusion : le rayon mesure 5 cm."
  },

  {
    question: "Calculer la somme 2 + 4 + 6 + 8 + 10.",
    answer: "30",
    solution: "Étape 1 :\n2 + 4 = 6.\n\nÉtape 2 :\n6 + 6 = 12.\n\nÉtape 3 :\n12 + 8 = 20.\n\nÉtape 4 :\n20 + 10 = 30.\n\nConclusion : la somme est 30."
  },

  {
    question: "Une suite arithmétique commence par 4 et a pour raison 2. Calculer u₁₀.",
    answer: "u₁₀ = 22",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁ = 4.\nr = 2.\nn = 10.\n\nÉtape 2 :\nu₁₀ = 4 + (10 - 1) × 2.\n\nÉtape 3 :\n10 - 1 = 9.\n\nDonc :\nu₁₀ = 4 + 9 × 2.\n\nÉtape 4 :\n9 × 2 = 18.\n\nDonc :\nu₁₀ = 22.\n\nConclusion : u₁₀ = 22."
  },

  {
    question: "Une suite géométrique commence par 2 et a pour raison 3. Calculer u₄.",
    answer: "u₄ = 54",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₁ = 2.\nq = 3.\nn = 4.\n\nÉtape 2 :\nu₄ = 2 × 3³.\n\nÉtape 3 :\n3³ = 27.\n\nÉtape 4 :\n2 × 27 = 54.\n\nConclusion : u₄ = 54."
  },

  {
    question: "Calculer la probabilité d'obtenir au moins une face en lançant une pièce équilibrée deux fois.",
    answer: "3/4",
    solution: "On peut utiliser l'événement contraire.\n\nL'événement contraire de 'au moins une face' est 'aucune face', c'est-à-dire obtenir pile deux fois.\n\nÉtape 1 :\nP(pile) = 1/2.\n\nÉtape 2 :\nP(pile et pile) = 1/2 × 1/2 = 1/4.\n\nÉtape 3 : La probabilité de l'événement contraire est 1/4.\n\nDonc :\nP(au moins une face) = 1 - 1/4.\n\nÉtape 4 :\n1 - 1/4 = 3/4.\n\nConclusion : la probabilité est 3/4, soit 75 %."
  },

  {
    question: "Calculer la médiane de la série : 2, 4, 6, 8, 10, 12, 14.",
    answer: "8",
    solution: "Étape 1 : La série est déjà rangée dans l'ordre croissant.\n\n2, 4, 6, 8, 10, 12, 14.\n\nÉtape 2 : Il y a 7 valeurs.\n\nLa valeur centrale est la quatrième.\n\nÉtape 3 : La quatrième valeur est 8.\n\nConclusion : la médiane est 8."
  },

  {
    question: "Calculer l'étendue de la série : 12, 18, 7, 25, 10.",
    answer: "18",
    solution: "L'étendue est :\nvaleur maximale - valeur minimale.\n\nÉtape 1 : La valeur maximale est 25.\n\nÉtape 2 : La valeur minimale est 7.\n\nÉtape 3 :\n25 - 7 = 18.\n\nConclusion : l'étendue est 18."
  },

  {
    question: "Calculer (2 + 3i) + (5 - i).",
    answer: "7 + 2i",
    solution: "On additionne séparément les parties réelles et imaginaires.\n\nÉtape 1 : Parties réelles :\n2 + 5 = 7.\n\nÉtape 2 : Parties imaginaires :\n3i - i = 2i.\n\nÉtape 3 :\n7 + 2i.\n\nConclusion : le résultat est 7 + 2i."
  },

  {
    question: "Calculer (2 + i)(2 - i).",
    answer: "5",
    solution: "On utilise l'identité :\n(a + b)(a - b) = a² - b².\n\nIci :\na = 2 et b = i.\n\nÉtape 1 :\n(2 + i)(2 - i) = 2² - i².\n\nÉtape 2 :\n2² = 4.\n\nEt :\ni² = -1.\n\nDonc :\n4 - (-1) = 5.\n\nConclusion : le résultat est 5."
  },

  {
    question: "Calculer l'aire d'un cercle de diamètre 10 cm avec π ≈ 3,14.",
    answer: "78,5 cm²",
    solution: "Étape 1 : Le diamètre vaut 10 cm.\nLe rayon est la moitié du diamètre :\nr = 10 ÷ 2 = 5 cm.\n\nÉtape 2 : Formule de l'aire :\nA = πr².\n\nÉtape 3 :\nr² = 5² = 25.\n\nÉtape 4 :\nA = 3,14 × 25 = 78,5.\n\nConclusion : l'aire est environ 78,5 cm²."
  },

  {
    question: "Un capital de 8 000 HTG produit 320 HTG d'intérêt simple en un an. Quel est le taux d'intérêt ?",
    answer: "4 %",
    solution: "La formule de l'intérêt simple est :\nI = C × t.\n\nOn cherche t.\n\nÉtape 1 :\n320 = 8 000 × t.\n\nÉtape 2 : On divise par 8 000 :\nt = 320 ÷ 8 000.\n\nÉtape 3 :\nt = 0,04.\n\nÉtape 4 : On transforme en pourcentage :\n0,04 × 100 = 4 %.\n\nConclusion : le taux d'intérêt est de 4 %."
  },

  {
    question: "Un nombre multiplié par 4 puis augmenté de 6 donne 30. Trouver ce nombre.",
    answer: "6",
    solution: "On appelle x le nombre recherché.\n\nÉtape 1 : Traduction de l'énoncé :\n4x + 6 = 30.\n\nÉtape 2 : On soustrait 6 :\n4x = 24.\n\nÉtape 3 : On divise par 4 :\nx = 6.\n\nVérification :\n4 × 6 + 6 = 24 + 6 = 30.\n\nConclusion : le nombre recherché est 6."
  },

  {
    question: "Le double d'un nombre diminué de 5 vaut 13. Trouver ce nombre.",
    answer: "9",
    solution: "On appelle x le nombre recherché.\n\nÉtape 1 : Le double du nombre est 2x.\n\n'Le double diminué de 5 vaut 13' donne :\n2x - 5 = 13.\n\nÉtape 2 : On ajoute 5 :\n2x = 18.\n\nÉtape 3 : On divise par 2 :\nx = 9.\n\nVérification :\n2 × 9 - 5 = 18 - 5 = 13.\n\nConclusion : le nombre recherché est 9."
  },

  {
    question: "Un nombre augmenté de 20 % devient 120. Quel était le nombre initial ?",
    answer: "100",
    solution: "Une augmentation de 20 % signifie que le nouveau nombre représente 120 % de l'ancien.\n\nÉtape 1 :\n120 % = 1,20.\n\nSi x est le nombre initial :\n1,20x = 120.\n\nÉtape 2 : On divise par 1,20 :\nx = 120 ÷ 1,20.\n\nÉtape 3 :\nx = 100.\n\nVérification :\n20 % de 100 = 20.\n100 + 20 = 120.\n\nConclusion : le nombre initial était 100."
  },

  {
    question: "Un prix après une réduction de 25 % est de 150 HTG. Quel était le prix initial ?",
    answer: "200 HTG",
    solution: "Après une réduction de 25 %, il reste 75 % du prix initial.\n\nÉtape 1 :\n75 % = 0,75.\n\nSi x est le prix initial :\n0,75x = 150.\n\nÉtape 2 : On divise par 0,75 :\nx = 150 ÷ 0,75.\n\nÉtape 3 :\nx = 200.\n\nVérification :\n25 % de 200 = 50.\n200 - 50 = 150.\n\nConclusion : le prix initial était 200 HTG."
  },

  {
    question: "Calculer la longueur de l'hypoténuse d'un triangle rectangle dont les côtés de l'angle droit mesurent 6 cm et 8 cm.",
    answer: "10 cm",
    solution: "On utilise le théorème de Pythagore :\nc² = a² + b².\n\nÉtape 1 :\na = 6 cm.\nb = 8 cm.\n\nDonc :\nc² = 6² + 8².\n\nÉtape 2 :\n6² = 36.\n8² = 64.\n\nDonc :\nc² = 36 + 64 = 100.\n\nÉtape 3 :\nc = √100 = 10.\n\nConclusion : l'hypoténuse mesure 10 cm."
  },

  {
    question: "Calculer la longueur d'un côté d'un carré dont l'aire est 64 cm².",
    answer: "8 cm",
    solution: "L'aire d'un carré est :\nA = c².\n\nÉtape 1 :\n64 = c².\n\nÉtape 2 : On prend la racine carrée :\nc = √64.\n\nÉtape 3 :\n√64 = 8.\n\nComme une longueur est positive :\nc = 8 cm.\n\nConclusion : le côté du carré mesure 8 cm."
  },

  {
    question: "Une classe a 30 élèves et 18 sont présents. Quel pourcentage de la classe est présent ?",
    answer: "60 %",
    solution: "Le pourcentage se calcule par :\nprésents ÷ total × 100.\n\nÉtape 1 :\n18 ÷ 30 = 0,6.\n\nÉtape 2 :\n0,6 × 100 = 60.\n\nConclusion : 60 % de la classe est présente."
  },

  {
    question: "Une somme de 12 000 HTG est partagée également entre 6 personnes. Combien reçoit chaque personne ?",
    answer: "2 000 HTG",
    solution: "Puisque la somme est partagée également, on divise la somme totale par le nombre de personnes.\n\nÉtape 1 :\n12 000 ÷ 6.\n\nÉtape 2 :\n12 000 ÷ 6 = 2 000.\n\nConclusion : chaque personne reçoit 2 000 HTG."
  },

  {
    question: "Un rectangle a un périmètre de 30 cm et une longueur de 10 cm. Calculer sa largeur.",
    answer: "5 cm",
    solution: "La formule du périmètre est :\nP = 2(L + l).\n\nÉtape 1 :\n30 = 2(10 + l).\n\nÉtape 2 : On divise par 2 :\n15 = 10 + l.\n\nÉtape 3 : On soustrait 10 :\nl = 5.\n\nConclusion : la largeur est de 5 cm."
  },

  {
    question: "Calculer le volume d'un cylindre de rayon 3 cm et de hauteur 5 cm avec π ≈ 3,14.",
    answer: "141,3 cm³",
    solution: "La formule du volume d'un cylindre est :\nV = πr²h.\n\nÉtape 1 :\nr = 3 cm.\nh = 5 cm.\nπ ≈ 3,14.\n\nÉtape 2 :\nr² = 3² = 9.\n\nÉtape 3 :\nV = 3,14 × 9 × 5.\n\nÉtape 4 :\n9 × 5 = 45.\n\nDonc :\nV = 3,14 × 45 = 141,3.\n\nConclusion : le volume est environ 141,3 cm³."
  },

  {
    question: "Résoudre : x² - 3x - 10 = 0.",
    answer: "x = -2 ou x = 5",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut -10 et dont la somme vaut -3.\n\nCes nombres sont -5 et 2.\n\nEn effet :\n(-5) × 2 = -10.\n\nEt :\n(-5) + 2 = -3.\n\nÉtape 2 : On factorise :\nx² - 3x - 10 = (x - 5)(x + 2).\n\nÉtape 3 :\n(x - 5)(x + 2) = 0.\n\nDonc :\nx - 5 = 0 ou x + 2 = 0.\n\nÉtape 4 :\nx = 5 ou x = -2.\n\nConclusion : les solutions sont -2 et 5."
  },

  {
    question: "Calculer la dérivée de f(x) = 2x³ + 3x² - 4x + 1.",
    answer: "f'(x) = 6x² + 6x - 4",
    solution: "On dérive chaque terme séparément.\n\nÉtape 1 :\n(2x³)' = 2 × 3x² = 6x².\n\nÉtape 2 :\n(3x²)' = 3 × 2x = 6x.\n\nÉtape 3 :\n(-4x)' = -4.\n\nÉtape 4 :\n(1)' = 0.\n\nÉtape 5 : On rassemble :\nf'(x) = 6x² + 6x - 4.\n\nConclusion : f'(x) = 6x² + 6x - 4."
  },

  {
    question: "Calculer lim(x→0) (5x + 7).",
    answer: "7",
    solution: "La fonction 5x + 7 est continue.\n\nÉtape 1 : On remplace x par 0 :\n5(0) + 7.\n\nÉtape 2 :\n0 + 7 = 7.\n\nConclusion : la limite est 7."
  },

  {
    question: "Déterminer une primitive de f(x) = 6x⁵.",
    answer: "F(x) = x⁶ + C",
    solution: "On utilise la règle des primitives :\nUne primitive de xⁿ est xⁿ⁺¹/(n+1).\n\nÉtape 1 :\nf(x) = 6x⁵.\n\nÉtape 2 : Une primitive de 6x⁵ est x⁶ car :\n(x⁶)' = 6x⁵.\n\nÉtape 3 : On ajoute la constante C :\nF(x) = x⁶ + C.\n\nConclusion : F(x) = x⁶ + C."
  },

  {
    question: "Résoudre 10ˣ = 0,001.",
    answer: "x = -3",
    solution: "Étape 1 : On écrit 0,001 comme une puissance de 10.\n\n0,001 = 1/1000.\n\nOr :\n1000 = 10³.\n\nDonc :\n0,001 = 10⁻³.\n\nÉtape 2 : L'équation devient :\n10ˣ = 10⁻³.\n\nÉtape 3 : Les bases sont identiques :\nx = -3.\n\nConclusion : x = -3."
  },

  {
    question: "Calculer ln(1).",
    answer: "0",
    solution: "On utilise la propriété :\ne⁰ = 1.\n\nLe logarithme naturel ln(1) cherche donc l'exposant x tel que :\neˣ = 1.\n\nÉtape 1 :\ne⁰ = 1.\n\nÉtape 2 : Donc :\nln(1) = 0.\n\nConclusion : ln(1) = 0."
  },

  {
    question: "Calculer la somme des cinq premiers termes de la suite 2, 4, 6, 8, 10.",
    answer: "30",
    solution: "Étape 1 : On identifie les cinq termes :\n2, 4, 6, 8 et 10.\n\nÉtape 2 : On les additionne :\n2 + 4 + 6 + 8 + 10 = 30.\n\nConclusion : la somme est 30."
  },

  {
    question: "Un produit coûte 1 500 HTG et son prix augmente de 20 %. Quel est le nouveau prix ?",
    answer: "1 800 HTG",
    solution: "Étape 1 : Calculons l'augmentation :\n20 % de 1 500.\n\n1 500 × 0,20 = 300 HTG.\n\nÉtape 2 : On ajoute l'augmentation au prix initial :\n1 500 + 300 = 1 800 HTG.\n\nConclusion : le nouveau prix est 1 800 HTG."
  },

  {
    question: "Un élève obtient 45 bonnes réponses sur 50. Quel est son taux de réussite ?",
    answer: "90 %",
    solution: "Étape 1 : On calcule la proportion de bonnes réponses :\n45 ÷ 50 = 0,9.\n\nÉtape 2 : On convertit en pourcentage :\n0,9 × 100 = 90 %.\n\nConclusion : le taux de réussite est de 90 %."
  },

  {
    question: "Une voiture parcourt 150 km en 2 heures. Calculer sa vitesse moyenne.",
    answer: "75 km/h",
    solution: "La formule est :\nvitesse = distance ÷ temps.\n\nÉtape 1 :\nDistance = 150 km.\nTemps = 2 h.\n\nÉtape 2 :\nv = 150 ÷ 2.\n\nÉtape 3 :\nv = 75 km/h.\n\nConclusion : la vitesse moyenne est 75 km/h."
  },

  {
    question: "Résoudre : 9x - 18 = 27.",
    answer: "x = 5",
    solution: "Étape 1 :\n9x - 18 = 27.\n\nÉtape 2 : On ajoute 18 aux deux membres :\n9x = 45.\n\nÉtape 3 : On divise par 9 :\nx = 5.\n\nVérification :\n9(5) - 18 = 45 - 18 = 27.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 3/5 de 200.",
    answer: "120",
    solution: "Étape 1 : On écrit :\n3/5 × 200.\n\nÉtape 2 : On peut d'abord calculer 200 ÷ 5 :\n200 ÷ 5 = 40.\n\nÉtape 3 : On multiplie par 3 :\n40 × 3 = 120.\n\nConclusion : 3/5 de 200 = 120."
  },

  {
    question: "Un réservoir contient 500 litres. On retire 18 %. Combien reste-t-il ?",
    answer: "410 litres",
    solution: "Étape 1 : Calculons 18 % de 500 :\n500 × 0,18 = 90 litres.\n\nÉtape 2 : On retire ces 90 litres :\n500 - 90 = 410 litres.\n\nConclusion : il reste 410 litres."
  },

  {
    question: "Calculer l'aire d'un parallélogramme de base 12 cm et de hauteur 7 cm.",
    answer: "84 cm²",
    solution: "La formule de l'aire d'un parallélogramme est :\nA = base × hauteur.\n\nÉtape 1 :\nbase = 12 cm.\nhauteur = 7 cm.\n\nÉtape 2 :\nA = 12 × 7.\n\nÉtape 3 :\nA = 84 cm².\n\nConclusion : l'aire est 84 cm²."
  },

  {
    question: "Calculer le périmètre d'un triangle dont les côtés mesurent 7 cm, 9 cm et 12 cm.",
    answer: "28 cm",
    solution: "Le périmètre est la somme des trois côtés.\n\nÉtape 1 :\nP = 7 + 9 + 12.\n\nÉtape 2 :\n7 + 9 = 16.\n\nÉtape 3 :\n16 + 12 = 28.\n\nConclusion : le périmètre est 28 cm."
  },

  {
    question: "Résoudre : 2x² - 8 = 0.",
    answer: "x = -2 ou x = 2",
    solution: "Étape 1 :\n2x² - 8 = 0.\n\nÉtape 2 : On ajoute 8 :\n2x² = 8.\n\nÉtape 3 : On divise par 2 :\nx² = 4.\n\nÉtape 4 : On prend les deux racines carrées :\nx = 2 ou x = -2.\n\nConclusion : les solutions sont -2 et 2."
  },

  {
    question: "Calculer √81 + √25.",
    answer: "14",
    solution: "Étape 1 :\n√81 = 9 car 9² = 81.\n\nÉtape 2 :\n√25 = 5 car 5² = 25.\n\nÉtape 3 :\n9 + 5 = 14.\n\nConclusion : le résultat est 14."
  },

  {
    question: "Une suite arithmétique a pour premier terme 7 et pour raison 3. Calculer le 5e terme.",
    answer: "u₅ = 19",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁ = 7.\nr = 3.\nn = 5.\n\nÉtape 2 :\nu₅ = 7 + (5 - 1) × 3.\n\nÉtape 3 :\n5 - 1 = 4.\n\nDonc :\nu₅ = 7 + 4 × 3.\n\nÉtape 4 :\n4 × 3 = 12.\n\nDonc :\nu₅ = 19.\n\nConclusion : u₅ = 19."
  },

  {
    question: "Une suite géométrique a pour premier terme 4 et pour raison 2. Calculer le 5e terme.",
    answer: "u₅ = 64",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₁ = 4.\nq = 2.\nn = 5.\n\nÉtape 2 :\nu₅ = 4 × 2⁴.\n\nÉtape 3 :\n2⁴ = 16.\n\nÉtape 4 :\n4 × 16 = 64.\n\nConclusion : u₅ = 64."
  },

  {
    question: "Calculer la probabilité de tirer une boule rouge dans une urne contenant 5 boules rouges et 5 boules noires.",
    answer: "1/2",
    solution: "Étape 1 : Nombre total de boules :\n5 + 5 = 10.\n\nÉtape 2 : Nombre de boules rouges :\n5.\n\nÉtape 3 :\nP(rouge) = 5/10.\n\nÉtape 4 : On simplifie par 5 :\n5/10 = 1/2.\n\nConclusion : la probabilité est 1/2, soit 50 %."
  },

  {
    question: "Calculer la moyenne de 6, 8, 10, 12 et 14.",
    answer: "10",
    solution: "Étape 1 :\n6 + 8 + 10 + 12 + 14 = 50.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n50 ÷ 5 = 10.\n\nConclusion : la moyenne est 10."
  },

  {
    question: "Calculer le coefficient directeur de la droite passant par A(2,1) et B(4,5).",
    answer: "2",
    solution: "Formule :\na = (y₂ - y₁)/(x₂ - x₁).\n\nÉtape 1 :\ny₂ - y₁ = 5 - 1 = 4.\n\nÉtape 2 :\nx₂ - x₁ = 4 - 2 = 2.\n\nÉtape 3 :\na = 4/2 = 2.\n\nConclusion : le coefficient directeur est 2."
  },

  {
    question: "Calculer le milieu du segment A(1,3) et B(5,7).",
    answer: "M(3,5)",
    solution: "Formule :\nM((x₁+x₂)/2 ; (y₁+y₂)/2).\n\nÉtape 1 :\n(1 + 5) ÷ 2 = 6 ÷ 2 = 3.\n\nÉtape 2 :\n(3 + 7) ÷ 2 = 10 ÷ 2 = 5.\n\nConclusion : M(3,5)."
  },

  {
    question: "Calculer la distance entre A(1,1) et B(4,5).",
    answer: "5",
    solution: "Formule :\nAB = √[(x₂-x₁)² + (y₂-y₁)²].\n\nÉtape 1 :\n4 - 1 = 3.\n\nÉtape 2 :\n5 - 1 = 4.\n\nÉtape 3 :\nAB = √(3² + 4²).\n\nÉtape 4 :\nAB = √(9 + 16) = √25.\n\nÉtape 5 :\n√25 = 5.\n\nConclusion : AB = 5."
  },

  {
    question: "Calculer 30 % de 600.",
    answer: "180",
    solution: "Étape 1 :\n30 % = 0,30.\n\nÉtape 2 :\n600 × 0,30 = 180.\n\nConclusion : 30 % de 600 = 180."
  },

  {
    question: "Un prix de 800 HTG augmente de 15 %. Calculer le nouveau prix.",
    answer: "920 HTG",
    solution: "Étape 1 : Calcul de l'augmentation :\n800 × 0,15 = 120 HTG.\n\nÉtape 2 : On ajoute au prix initial :\n800 + 120 = 920 HTG.\n\nConclusion : le nouveau prix est 920 HTG."
  },

  {
    question: "Résoudre : 4x - 3 = 2x + 9.",
    answer: "x = 6",
    solution: "Étape 1 :\n4x - 3 = 2x + 9.\n\nÉtape 2 : On soustrait 2x :\n2x - 3 = 9.\n\nÉtape 3 : On ajoute 3 :\n2x = 12.\n\nÉtape 4 : On divise par 2 :\nx = 6.\n\nVérification :\n4(6) - 3 = 21.\n2(6) + 9 = 21.\n\nConclusion : x = 6."
  },

  {
    question: "Résoudre : x² - 16x + 64 = 0.",
    answer: "x = 8",
    solution: "Étape 1 : On reconnaît :\nx² - 16x + 64.\n\nÉtape 2 :\n64 = 8².\n\nEt :\n2 × x × 8 = 16x.\n\nDonc :\nx² - 16x + 64 = (x - 8)².\n\nÉtape 3 :\n(x - 8)² = 0.\n\nDonc :\nx - 8 = 0.\n\nConclusion : x = 8."
  },

  {
    question: "Calculer l'intégrale ∫₀² 2x dx.",
    answer: "4",
    solution: "Étape 1 : On cherche une primitive de 2x.\n\nUne primitive est x² car :\n(x²)' = 2x.\n\nÉtape 2 : On applique les bornes :\n∫₀² 2x dx = [x²]₀².\n\nÉtape 3 :\n= 2² - 0².\n\nÉtape 4 :\n= 4 - 0 = 4.\n\nConclusion : l'intégrale vaut 4."
  },

  {
    question: "Calculer lim(x→4) (2x - 1).",
    answer: "7",
    solution: "La fonction est continue, donc on peut remplacer directement x par 4.\n\nÉtape 1 :\n2(4) - 1.\n\nÉtape 2 :\n8 - 1 = 7.\n\nConclusion : la limite vaut 7."
  },

  {
    question: "Calculer 4!.",
    answer: "24",
    solution: "La factorielle de 4 est :\n4! = 4 × 3 × 2 × 1.\n\nÉtape 1 :\n4 × 3 = 12.\n\nÉtape 2 :\n12 × 2 = 24.\n\nÉtape 3 :\n24 × 1 = 24.\n\nConclusion : 4! = 24."
  },

  {
    question: "Calculer log₁₀(10 000).",
    answer: "4",
    solution: "On cherche l'exposant x tel que :\n10ˣ = 10 000.\n\nÉtape 1 :\n10 000 = 10⁴.\n\nÉtape 2 : Donc :\nlog₁₀(10 000) = 4.\n\nConclusion : le résultat est 4."
  },

  {
    question: "Résoudre 4ˣ = 64.",
    answer: "x = 3",
    solution: "Étape 1 : On écrit 64 comme une puissance de 4 :\n4 × 4 × 4 = 64.\n\nDonc :\n64 = 4³.\n\nÉtape 2 :\n4ˣ = 4³.\n\nÉtape 3 : Les bases étant identiques :\nx = 3.\n\nConclusion : x = 3."
  },

  {
    question: "Un capital de 15 000 HTG est placé à 5 % pendant 3 ans à intérêt simple. Calculer le montant total des intérêts.",
    answer: "2 250 HTG",
    solution: "Formule :\nI = C × t × n.\n\nÉtape 1 :\nC = 15 000 HTG.\nt = 5 % = 0,05.\nn = 3 ans.\n\nÉtape 2 :\nI = 15 000 × 0,05 × 3.\n\nÉtape 3 :\n15 000 × 0,05 = 750.\n\nÉtape 4 :\n750 × 3 = 2 250.\n\nConclusion : le montant total des intérêts est de 2 250 HTG."
  },

  {
    question: "Un étudiant obtient 15, 12, 18 et 11. Calculer sa moyenne.",
    answer: "14",
    solution: "Étape 1 : Additionnons les notes :\n15 + 12 + 18 + 11 = 56.\n\nÉtape 2 : Il y a 4 notes.\n\nÉtape 3 :\n56 ÷ 4 = 14.\n\nConclusion : la moyenne est 14."
  },

  {
    question: "Un rectangle mesure 15 m de longueur et 8 m de largeur. Calculer son aire et son périmètre.",
    answer: "Aire = 120 m² ; Périmètre = 46 m",
    solution: "On doit calculer deux grandeurs.\n\nÉtape 1 : Aire du rectangle.\nFormule : A = L × l.\n\nA = 15 × 8 = 120 m².\n\nÉtape 2 : Périmètre du rectangle.\nFormule : P = 2(L + l).\n\nP = 2(15 + 8).\n\n15 + 8 = 23.\n\nDonc :\nP = 2 × 23 = 46 m.\n\nConclusion : l'aire est 120 m² et le périmètre est 46 m."
  },

  {
    question: "Calculer la probabilité d'obtenir un multiple de 3 avec un dé équilibré à six faces.",
    answer: "1/3",
    solution: "Les résultats possibles sont 1, 2, 3, 4, 5 et 6.\n\nÉtape 1 : Les multiples de 3 sont 3 et 6.\n\nIl y a donc 2 cas favorables.\n\nÉtape 2 : Il y a 6 cas possibles.\n\nÉtape 3 :\nP = 2/6.\n\nÉtape 4 : On simplifie par 2 :\n2/6 = 1/3.\n\nConclusion : la probabilité est 1/3, soit environ 33,33 %."
  },

  {
    question: "Calculer la norme du vecteur u = (-6,8).",
    answer: "10",
    solution: "La norme est :\n||u|| = √(x² + y²).\n\nÉtape 1 :\n||u|| = √[(-6)² + 8²].\n\nÉtape 2 :\n(-6)² = 36.\n8² = 64.\n\nDonc :\n||u|| = √(36 + 64) = √100.\n\nÉtape 3 :\n√100 = 10.\n\nConclusion : ||u|| = 10."
  },

  {
    question: "Déterminer l'équation de la droite de coefficient directeur 3 passant par le point A(0,2).",
    answer: "y = 3x + 2",
    solution: "Une droite s'écrit :\ny = ax + b.\n\nÉtape 1 : Le coefficient directeur est a = 3.\n\nDonc :\ny = 3x + b.\n\nÉtape 2 : La droite passe par A(0,2).\nOn remplace x par 0 et y par 2 :\n2 = 3(0) + b.\n\nDonc :\nb = 2.\n\nÉtape 3 : On obtient :\ny = 3x + 2.\n\nConclusion : l'équation de la droite est y = 3x + 2."
  },

  {
    question: "Résoudre : 5(x - 1) = 3x + 7.",
    answer: "x = 6",
    solution: "Étape 1 : On développe :\n5(x - 1) = 5x - 5.\n\nL'équation devient :\n5x - 5 = 3x + 7.\n\nÉtape 2 : On soustrait 3x :\n2x - 5 = 7.\n\nÉtape 3 : On ajoute 5 :\n2x = 12.\n\nÉtape 4 : On divise par 2 :\nx = 6.\n\nVérification :\n5(6 - 1) = 25.\n3(6) + 7 = 25.\n\nConclusion : x = 6."
  },

  {
    question: "Calculer 7² - 5².",
    answer: "24",
    solution: "Étape 1 : Calculons les carrés :\n7² = 49.\n5² = 25.\n\nÉtape 2 : On soustrait :\n49 - 25 = 24.\n\nOn pouvait également utiliser :\na² - b² = (a-b)(a+b).\n\n7² - 5² = (7-5)(7+5) = 2 × 12 = 24.\n\nConclusion : le résultat est 24."
  },

  {
    question: "Calculer √400.",
    answer: "20",
    solution: "On cherche le nombre positif dont le carré vaut 400.\n\nÉtape 1 :\n20 × 20 = 400.\n\nÉtape 2 : Donc :\n√400 = 20.\n\nConclusion : √400 = 20."
  },

  {
    question: "Une classe de 50 élèves compte 35 élèves ayant réussi un examen. Quel est le taux de réussite ?",
    answer: "70 %",
    solution: "Étape 1 : On calcule la proportion :\n35 ÷ 50 = 0,70.\n\nÉtape 2 : On transforme en pourcentage :\n0,70 × 100 = 70 %.\n\nConclusion : le taux de réussite est de 70 %."
  },

  {
    question: "Un produit coûte 3 000 HTG. Une taxe de 10 % est ajoutée. Quel est le prix final ?",
    answer: "3 300 HTG",
    solution: "Étape 1 : Calculons la taxe :\n10 % de 3 000 = 3 000 × 0,10 = 300 HTG.\n\nÉtape 2 : On ajoute la taxe au prix initial :\n3 000 + 300 = 3 300 HTG.\n\nConclusion : le prix final est 3 300 HTG."
  },

  {
    question: "Calculer l'aire d'un triangle rectangle dont les côtés perpendiculaires mesurent 6 cm et 8 cm.",
    answer: "24 cm²",
    solution: "L'aire d'un triangle est :\nA = (base × hauteur) ÷ 2.\n\nDans un triangle rectangle, les deux côtés perpendiculaires peuvent servir de base et de hauteur.\n\nÉtape 1 :\nA = (6 × 8) ÷ 2.\n\nÉtape 2 :\n6 × 8 = 48.\n\nÉtape 3 :\n48 ÷ 2 = 24.\n\nConclusion : l'aire est 24 cm²."
  },

  {
    question: "Résoudre : x² - x - 12 = 0.",
    answer: "x = -3 ou x = 4",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut -12 et dont la somme vaut -1.\n\nCes nombres sont -4 et 3.\n\nEn effet :\n(-4) × 3 = -12.\n\nEt :\n(-4) + 3 = -1.\n\nÉtape 2 : On factorise :\nx² - x - 12 = (x - 4)(x + 3).\n\nÉtape 3 :\n(x - 4)(x + 3) = 0.\n\nDonc :\nx - 4 = 0 ou x + 3 = 0.\n\nÉtape 4 :\nx = 4 ou x = -3.\n\nConclusion : les solutions sont -3 et 4."
  },

  {
    question: "Calculer la limite lim(x→3) (x² - 9)/(x - 3).",
    answer: "6",
    solution: "En remplaçant directement x par 3, on obtient 0/0. Il faut factoriser.\n\nÉtape 1 :\nx² - 9 = (x - 3)(x + 3).\n\nDonc :\n(x² - 9)/(x - 3) = [(x - 3)(x + 3)]/(x - 3).\n\nÉtape 2 : On simplifie x - 3 :\n= x + 3.\n\nÉtape 3 : On calcule la limite :\nlim(x→3)(x + 3) = 3 + 3 = 6.\n\nConclusion : la limite vaut 6."
  },

  {
    question: "Déterminer une primitive de f(x) = 5x⁴.",
    answer: "F(x) = x⁵ + C",
    solution: "Étape 1 : On cherche une fonction dont la dérivée donne 5x⁴.\n\nOn sait que :\n(x⁵)' = 5x⁴.\n\nÉtape 2 : Donc une primitive est x⁵.\n\nÉtape 3 : On ajoute la constante d'intégration C :\nF(x) = x⁵ + C.\n\nConclusion : F(x) = x⁵ + C."
  },

  {
    question: "Calculer 3⁴.",
    answer: "81",
    solution: "Une puissance 4 signifie quatre multiplications successives.\n\nÉtape 1 :\n3⁴ = 3 × 3 × 3 × 3.\n\nÉtape 2 :\n3 × 3 = 9.\n\nÉtape 3 :\n9 × 3 = 27.\n\nÉtape 4 :\n27 × 3 = 81.\n\nConclusion : 3⁴ = 81."
  },

  {
    question: "Calculer 10⁻².",
    answer: "0,01",
    solution: "Une puissance négative signifie que l'on prend l'inverse.\n\nRègle :\n10⁻² = 1/10².\n\nÉtape 1 :\n10² = 100.\n\nÉtape 2 :\n1/100 = 0,01.\n\nConclusion : 10⁻² = 0,01."
  },

  {
    question: "Un capital de 25 000 HTG est placé à 4 % pendant 3 ans à intérêt simple. Quel est le capital final ?",
    answer: "28 000 HTG",
    solution: "Étape 1 : Calculons l'intérêt :\nI = C × t × n.\n\nC = 25 000.\nt = 4 % = 0,04.\nn = 3.\n\nDonc :\nI = 25 000 × 0,04 × 3.\n\nÉtape 2 :\n25 000 × 0,04 = 1 000.\n\nPuis :\n1 000 × 3 = 3 000 HTG.\n\nÉtape 3 : Le capital final est :\n25 000 + 3 000 = 28 000 HTG.\n\nConclusion : le capital final est 28 000 HTG."
  },

  {
    question: "Calculer la moyenne de 9, 11, 13, 15 et 17.",
    answer: "13",
    solution: "Étape 1 :\n9 + 11 + 13 + 15 + 17 = 65.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n65 ÷ 5 = 13.\n\nConclusion : la moyenne est 13."
  },

  {
    question: "Une urne contient 2 boules rouges et 8 boules blanches. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "1/5",
    solution: "Étape 1 : Nombre total de boules :\n2 + 8 = 10.\n\nÉtape 2 : Nombre de cas favorables :\n2 boules rouges.\n\nÉtape 3 :\nP(rouge) = 2/10.\n\nÉtape 4 : On simplifie par 2 :\n2/10 = 1/5.\n\nConclusion : la probabilité est 1/5, soit 20 %."
  },

  {
    question: "Une voiture roule à 72 km/h pendant 30 minutes. Quelle distance parcourt-elle ?",
    answer: "36 km",
    solution: "La formule est :\ndistance = vitesse × temps.\n\nAttention : le temps doit être exprimé en heures.\n\nÉtape 1 :\n30 minutes = 30/60 = 0,5 heure.\n\nÉtape 2 :\nd = 72 × 0,5.\n\nÉtape 3 :\nd = 36 km.\n\nConclusion : la voiture parcourt 36 km."
  },

  {
    question: "Un rectangle mesure 9 cm sur 4 cm. Calculer sa diagonale.",
    answer: "√97 cm ≈ 9,85 cm",
    solution: "La diagonale forme un triangle rectangle avec la longueur et la largeur.\n\nOn utilise Pythagore :\nd² = 9² + 4².\n\nÉtape 1 :\n9² = 81.\n4² = 16.\n\nÉtape 2 :\nd² = 81 + 16 = 97.\n\nÉtape 3 :\nd = √97.\n\nLa valeur approchée est :\n√97 ≈ 9,85.\n\nConclusion : la diagonale mesure environ 9,85 cm."
  },

  {
    question: "Résoudre : 2x + 10 = 30.",
    answer: "x = 10",
    solution: "Étape 1 :\n2x + 10 = 30.\n\nÉtape 2 : On soustrait 10 :\n2x = 20.\n\nÉtape 3 : On divise par 2 :\nx = 10.\n\nVérification :\n2 × 10 + 10 = 30.\n\nConclusion : x = 10."
  },

  {
    question: "Calculer 40 % de 750.",
    answer: "300",
    solution: "Étape 1 :\n40 % = 0,40.\n\nÉtape 2 :\n750 × 0,40 = 300.\n\nConclusion : 40 % de 750 = 300."
  },

  {
    question: "Une suite arithmétique a u₁ = 3 et r = 4. Calculer u₇.",
    answer: "u₇ = 27",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₇ = 3 + (7 - 1) × 4.\n\nÉtape 2 :\n7 - 1 = 6.\n\nDonc :\nu₇ = 3 + 6 × 4.\n\nÉtape 3 :\n6 × 4 = 24.\n\nDonc :\nu₇ = 27.\n\nConclusion : u₇ = 27."
  },

  {
    question: "Une suite géométrique a u₁ = 1 et q = 2. Calculer u₈.",
    answer: "u₈ = 128",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₈ = 1 × 2⁷.\n\nÉtape 2 :\n2⁷ = 128.\n\nÉtape 3 :\n1 × 128 = 128.\n\nConclusion : u₈ = 128."
  },

  {
    question: "Calculer la probabilité d'obtenir un nombre supérieur à 4 avec un dé équilibré.",
    answer: "1/3",
    solution: "Les résultats supérieurs à 4 sont 5 et 6.\n\nÉtape 1 : Il y a 2 cas favorables : 5 et 6.\n\nÉtape 2 : Le dé possède 6 résultats possibles.\n\nÉtape 3 :\nP = 2/6.\n\nÉtape 4 : On simplifie par 2 :\n2/6 = 1/3.\n\nConclusion : la probabilité est 1/3, soit environ 33,33 %."
  },

  {
    question: "Calculer l'aire d'un losange dont les diagonales mesurent 10 cm et 6 cm.",
    answer: "30 cm²",
    solution: "La formule de l'aire d'un losange est :\nA = (D × d) ÷ 2.\n\nÉtape 1 :\nD = 10 cm.\nd = 6 cm.\n\nÉtape 2 :\nA = (10 × 6) ÷ 2.\n\nÉtape 3 :\n10 × 6 = 60.\n\n60 ÷ 2 = 30.\n\nConclusion : l'aire du losange est 30 cm²."
  },

  {
    question: "Calculer le volume d'une sphère de rayon 3 cm avec π ≈ 3,14.",
    answer: "113,04 cm³",
    solution: "La formule du volume d'une sphère est :\nV = (4/3)πr³.\n\nÉtape 1 :\nr = 3 cm.\n\nÉtape 2 :\n3³ = 27.\n\nÉtape 3 :\nV = (4/3) × 3,14 × 27.\n\nÉtape 4 :\n27 ÷ 3 = 9.\n\nDonc :\nV = 4 × 3,14 × 9.\n\nÉtape 5 :\n4 × 9 = 36.\n\n36 × 3,14 = 113,04.\n\nConclusion : le volume est environ 113,04 cm³."
  },

  {
    question: "Résoudre : x² - 25 = 0.",
    answer: "x = -5 ou x = 5",
    solution: "Étape 1 : On reconnaît une différence de deux carrés :\nx² - 25 = x² - 5².\n\nÉtape 2 : On factorise :\n(x - 5)(x + 5) = 0.\n\nÉtape 3 :\nx - 5 = 0 donne x = 5.\n\nx + 5 = 0 donne x = -5.\n\nConclusion : les solutions sont x = -5 et x = 5."
  },

  {
    question: "Calculer la dérivée de f(x) = 8x² - 3x + 6.",
    answer: "f'(x) = 16x - 3",
    solution: "Étape 1 :\n(8x²)' = 8 × 2x = 16x.\n\nÉtape 2 :\n(-3x)' = -3.\n\nÉtape 3 :\n(6)' = 0.\n\nÉtape 4 : On rassemble :\nf'(x) = 16x - 3.\n\nConclusion : f'(x) = 16x - 3."
  },

  {
    question: "Calculer lim(x→5) (x² - 2x).",
    answer: "15",
    solution: "La fonction est polynomiale, donc continue.\n\nÉtape 1 : On remplace x par 5 :\n5² - 2(5).\n\nÉtape 2 :\n5² = 25.\n\n2 × 5 = 10.\n\nÉtape 3 :\n25 - 10 = 15.\n\nConclusion : la limite vaut 15."
  },

  {
    question: "Déterminer une primitive de f(x) = 2x + 3.",
    answer: "F(x) = x² + 3x + C",
    solution: "On cherche une primitive terme par terme.\n\nÉtape 1 : Une primitive de 2x est x² car :\n(x²)' = 2x.\n\nÉtape 2 : Une primitive de 3 est 3x car :\n(3x)' = 3.\n\nÉtape 3 : On rassemble et on ajoute C :\nF(x) = x² + 3x + C.\n\nVérification :\nF'(x) = 2x + 3.\n\nConclusion : F(x) = x² + 3x + C."
  },

  {
    question: "Résoudre 2ˣ = 1/8.",
    answer: "x = -3",
    solution: "Étape 1 : On écrit 1/8 comme une puissance de 2.\n\n8 = 2³.\n\nDonc :\n1/8 = 2⁻³.\n\nÉtape 2 : L'équation devient :\n2ˣ = 2⁻³.\n\nÉtape 3 : Les bases sont identiques :\nx = -3.\n\nConclusion : x = -3."
  },

  {
    question: "Calculer ln(e⁵).",
    answer: "5",
    solution: "On utilise la propriété :\nln(eˣ) = x.\n\nÉtape 1 :\nln(e⁵).\n\nÉtape 2 :\nln(e⁵) = 5.\n\nConclusion : le résultat est 5."
  },

  {
    question: "Un capital de 10 000 HTG est placé à 3 % pendant 4 ans à intérêt simple. Calculer le capital final.",
    answer: "11 200 HTG",
    solution: "Étape 1 : Formule de l'intérêt simple :\nI = C × t × n.\n\nC = 10 000.\nt = 3 % = 0,03.\nn = 4.\n\nÉtape 2 :\nI = 10 000 × 0,03 × 4.\n\nÉtape 3 :\n10 000 × 0,03 = 300.\n\n300 × 4 = 1 200.\n\nÉtape 4 : Capital final :\n10 000 + 1 200 = 11 200 HTG.\n\nConclusion : le capital final est 11 200 HTG."
  },

  {
    question: "Calculer la moyenne de 12, 14, 16, 18 et 20.",
    answer: "16",
    solution: "Étape 1 : Additionnons :\n12 + 14 + 16 + 18 + 20 = 80.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n80 ÷ 5 = 16.\n\nConclusion : la moyenne est 16."
  },

  {
    question: "Dans un jeu, 12 cartes sont disponibles dont 3 sont gagnantes. Quelle est la probabilité de tirer une carte gagnante ?",
    answer: "1/4",
    solution: "Étape 1 : Il y a 12 cartes au total.\n\nÉtape 2 : Il y a 3 cartes gagnantes.\n\nÉtape 3 :\nP(gagnante) = 3/12.\n\nÉtape 4 : On simplifie par 3 :\n3/12 = 1/4.\n\nConclusion : la probabilité est 1/4, soit 25 %."
  },

  {
    question: "Une distance de 240 km est parcourue en 3 heures. Calculer la vitesse moyenne.",
    answer: "80 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nd = 240 km.\nt = 3 h.\n\nÉtape 2 :\nv = 240 ÷ 3.\n\nÉtape 3 :\nv = 80 km/h.\n\nConclusion : la vitesse moyenne est de 80 km/h."
  },

  {
    question: "Calculer le périmètre d'un cercle de diamètre 20 cm avec π ≈ 3,14.",
    answer: "62,8 cm",
    solution: "Lorsque le diamètre est connu, la circonférence est :\nC = πd.\n\nÉtape 1 :\nd = 20 cm.\n\nÉtape 2 :\nC = 3,14 × 20.\n\nÉtape 3 :\nC = 62,8 cm.\n\nConclusion : le périmètre du cercle est environ 62,8 cm."
  },

  {
    question: "Résoudre : 3x + 4 = 25.",
    answer: "x = 7",
    solution: "Étape 1 :\n3x + 4 = 25.\n\nÉtape 2 : On soustrait 4 :\n3x = 21.\n\nÉtape 3 : On divise par 3 :\nx = 7.\n\nVérification :\n3 × 7 + 4 = 21 + 4 = 25.\n\nConclusion : x = 7."
  },

  {
    question: "Factoriser : x² + 10x + 25.",
    answer: "(x + 5)²",
    solution: "Étape 1 : On reconnaît :\na² + 2ab + b² = (a+b)².\n\nÉtape 2 :\n25 = 5².\n\nEt :\n2 × x × 5 = 10x.\n\nDonc :\nx² + 10x + 25 = (x + 5)².\n\nConclusion : la forme factorisée est (x + 5)²."
  },

  {
    question: "Calculer √169.",
    answer: "13",
    solution: "On cherche le nombre positif dont le carré vaut 169.\n\nÉtape 1 :\n13 × 13 = 169.\n\nÉtape 2 :\n√169 = 13.\n\nConclusion : √169 = 13."
  },

  {
    question: "Une suite arithmétique a u₁ = 1 et r = 5. Calculer u₆.",
    answer: "u₆ = 26",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₆ = 1 + (6 - 1) × 5.\n\nÉtape 2 :\n6 - 1 = 5.\n\nDonc :\nu₆ = 1 + 5 × 5.\n\nÉtape 3 :\n5 × 5 = 25.\n\nDonc :\nu₆ = 26.\n\nConclusion : u₆ = 26."
  },

  {
    question: "Une suite géométrique a u₁ = 2 et q = 2. Calculer u₇.",
    answer: "u₇ = 128",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₇ = 2 × 2⁶.\n\nÉtape 2 :\n2⁶ = 64.\n\nÉtape 3 :\n2 × 64 = 128.\n\nConclusion : u₇ = 128."
  },

  {
    question: "Calculer la probabilité d'obtenir un nombre inférieur à 3 avec un dé équilibré.",
    answer: "1/3",
    solution: "Les nombres inférieurs à 3 sont 1 et 2.\n\nÉtape 1 : Il y a 2 cas favorables.\n\nÉtape 2 : Il y a 6 résultats possibles.\n\nÉtape 3 :\nP = 2/6.\n\nÉtape 4 : On simplifie :\n2/6 = 1/3.\n\nConclusion : la probabilité est 1/3, soit environ 33,33 %."
  },

  {
    question: "Calculer l'aire d'un rectangle de longueur 25 cm et de largeur 4 cm.",
    answer: "100 cm²",
    solution: "Formule :\nA = L × l.\n\nÉtape 1 :\nA = 25 × 4.\n\nÉtape 2 :\nA = 100 cm².\n\nConclusion : l'aire est 100 cm²."
  },

  {
    question: "Un prix de 2 000 HTG est réduit de 10 %. Quel est le prix final ?",
    answer: "1 800 HTG",
    solution: "Étape 1 : Calcul de la réduction :\n2 000 × 0,10 = 200 HTG.\n\nÉtape 2 : Prix final :\n2 000 - 200 = 1 800 HTG.\n\nConclusion : le prix final est 1 800 HTG."
  },

  {
    question: "Résoudre : 8x - 16 = 24.",
    answer: "x = 5",
    solution: "Étape 1 :\n8x - 16 = 24.\n\nÉtape 2 : On ajoute 16 :\n8x = 40.\n\nÉtape 3 : On divise par 8 :\nx = 5.\n\nVérification :\n8 × 5 - 16 = 40 - 16 = 24.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 5² + 12².",
    answer: "169",
    solution: "Étape 1 :\n5² = 25.\n\nÉtape 2 :\n12² = 144.\n\nÉtape 3 :\n25 + 144 = 169.\n\nConclusion : 5² + 12² = 169."
  },

  {
    question: "Calculer √169 + √36.",
    answer: "19",
    solution: "Étape 1 :\n√169 = 13.\n\nÉtape 2 :\n√36 = 6.\n\nÉtape 3 :\n13 + 6 = 19.\n\nConclusion : le résultat est 19."
  },

  {
    question: "Calculer la dérivée de f(x) = 4x³ - 5x² + 2.",
    answer: "f'(x) = 12x² - 10x",
    solution: "Étape 1 :\n(4x³)' = 4 × 3x² = 12x².\n\nÉtape 2 :\n(-5x²)' = -5 × 2x = -10x.\n\nÉtape 3 :\n(2)' = 0.\n\nÉtape 4 :\nf'(x) = 12x² - 10x.\n\nConclusion : f'(x) = 12x² - 10x."
  },

  {
    question: "Calculer lim(x→2) (3x² + 1).",
    answer: "13",
    solution: "La fonction est polynomiale et continue.\n\nÉtape 1 : On remplace x par 2 :\n3(2²) + 1.\n\nÉtape 2 :\n2² = 4.\n\nDonc :\n3 × 4 + 1 = 12 + 1.\n\nÉtape 3 :\n12 + 1 = 13.\n\nConclusion : la limite vaut 13."
  },

  {
    question: "Déterminer une primitive de f(x) = 8x.",
    answer: "F(x) = 4x² + C",
    solution: "On cherche une fonction dont la dérivée est 8x.\n\nÉtape 1 : On sait que :\n(x²)' = 2x.\n\nÉtape 2 : Pour obtenir 8x, on multiplie x² par 4 :\n(4x²)' = 4 × 2x = 8x.\n\nÉtape 3 : On ajoute C :\nF(x) = 4x² + C.\n\nConclusion : F(x) = 4x² + C."
  },

  {
    question: "Résoudre : 3ˣ = 1/27.",
    answer: "x = -3",
    solution: "Étape 1 :\n27 = 3³.\n\nDonc :\n1/27 = 3⁻³.\n\nÉtape 2 : L'équation devient :\n3ˣ = 3⁻³.\n\nÉtape 3 : Les bases sont identiques :\nx = -3.\n\nConclusion : x = -3."
  },

  {
    question: "Calculer log₁₀(0,01).",
    answer: "-2",
    solution: "Étape 1 : On écrit 0,01 comme une puissance de 10.\n\n0,01 = 1/100.\n\nEt :\n100 = 10².\n\nDonc :\n0,01 = 10⁻².\n\nÉtape 2 :\nlog₁₀(0,01) = -2.\n\nConclusion : le résultat est -2."
  },

  {
    question: "Un capital de 30 000 HTG est placé à 2 % pendant 5 ans à intérêt simple. Calculer l'intérêt.",
    answer: "3 000 HTG",
    solution: "Formule :\nI = C × t × n.\n\nÉtape 1 :\nC = 30 000.\nt = 2 % = 0,02.\nn = 5.\n\nÉtape 2 :\nI = 30 000 × 0,02 × 5.\n\nÉtape 3 :\n30 000 × 0,02 = 600.\n\nÉtape 4 :\n600 × 5 = 3 000.\n\nConclusion : l'intérêt est de 3 000 HTG."
  },

  {
    question: "Un étudiant a obtenu 13, 15, 17 et 19. Calculer sa moyenne.",
    answer: "16",
    solution: "Étape 1 :\n13 + 15 + 17 + 19 = 64.\n\nÉtape 2 : Il y a 4 notes.\n\nÉtape 3 :\n64 ÷ 4 = 16.\n\nConclusion : la moyenne est 16."
  },

  {
    question: "Une boîte contient 20 objets dont 5 sont défectueux. Quelle est la probabilité de choisir un objet défectueux ?",
    answer: "1/4",
    solution: "Étape 1 : Nombre total d'objets : 20.\n\nÉtape 2 : Nombre d'objets défectueux : 5.\n\nÉtape 3 :\nP(défectueux) = 5/20.\n\nÉtape 4 : On simplifie par 5 :\n5/20 = 1/4.\n\nConclusion : la probabilité est 1/4, soit 25 %."
  },

  {
    question: "Un cycliste parcourt 45 km en 1,5 heure. Calculer sa vitesse moyenne.",
    answer: "30 km/h",
    solution: "Formule :\nv = distance ÷ temps.\n\nÉtape 1 :\nd = 45 km.\nt = 1,5 h.\n\nÉtape 2 :\nv = 45 ÷ 1,5.\n\nÉtape 3 :\nv = 30 km/h.\n\nConclusion : la vitesse moyenne est 30 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 18 cm et de largeur 7 cm.",
    answer: "50 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\nL + l = 18 + 7 = 25.\n\nÉtape 2 :\nP = 2 × 25 = 50 cm.\n\nConclusion : le périmètre est 50 cm."
  },

  {
    question: "Calculer l'aire d'un carré dont le périmètre est 20 cm.",
    answer: "25 cm²",
    solution: "Étape 1 : Un carré possède 4 côtés égaux.\n\nDonc :\ncôté = périmètre ÷ 4.\n\nÉtape 2 :\n20 ÷ 4 = 5 cm.\n\nÉtape 3 : L'aire est :\nA = côté².\n\nA = 5² = 25 cm².\n\nConclusion : l'aire du carré est 25 cm²."
  },

  {
    question: "Résoudre : 2x² - 18 = 0.",
    answer: "x = -3 ou x = 3",
    solution: "Étape 1 :\n2x² - 18 = 0.\n\nÉtape 2 : On ajoute 18 :\n2x² = 18.\n\nÉtape 3 : On divise par 2 :\nx² = 9.\n\nÉtape 4 :\n√9 = 3.\n\nComme x² = 9, deux valeurs sont possibles :\nx = 3 ou x = -3.\n\nConclusion : les solutions sont -3 et 3."
  },

  {
    question: "Calculer 60 % de 350.",
    answer: "210",
    solution: "Étape 1 :\n60 % = 0,60.\n\nÉtape 2 :\n350 × 0,60 = 210.\n\nConclusion : 60 % de 350 = 210."
  },

  {
    question: "Une population de 2 000 personnes augmente de 5 %. Quelle est la nouvelle population ?",
    answer: "2 100 personnes",
    solution: "Étape 1 : Calculons l'augmentation :\n2 000 × 0,05 = 100.\n\nÉtape 2 : On ajoute l'augmentation :\n2 000 + 100 = 2 100.\n\nConclusion : la nouvelle population est de 2 100 personnes."
  },

  {
    question: "Calculer la médiane de la série : 5, 8, 10, 12, 15, 18, 20.",
    answer: "12",
    solution: "Étape 1 : La série est déjà ordonnée.\n\n5, 8, 10, 12, 15, 18, 20.\n\nÉtape 2 : Il y a 7 valeurs.\n\nLa quatrième valeur est au centre.\n\nÉtape 3 : La quatrième valeur est 12.\n\nConclusion : la médiane est 12."
  },

  {
    question: "Calculer la norme du vecteur u = (5,12).",
    answer: "13",
    solution: "Formule :\n||u|| = √(x² + y²).\n\nÉtape 1 :\n||u|| = √(5² + 12²).\n\nÉtape 2 :\n5² = 25.\n12² = 144.\n\nÉtape 3 :\n25 + 144 = 169.\n\nÉtape 4 :\n√169 = 13.\n\nConclusion : ||u|| = 13."
  },

  {
    question: "Calculer (4 + i) + (2 + 3i).",
    answer: "6 + 4i",
    solution: "Étape 1 : Addition des parties réelles :\n4 + 2 = 6.\n\nÉtape 2 : Addition des parties imaginaires :\ni + 3i = 4i.\n\nÉtape 3 : On rassemble :\n6 + 4i.\n\nConclusion : le résultat est 6 + 4i."
  },

  {
    question: "Calculer (1 + i)².",
    answer: "2i",
    solution: "On utilise la formule :\n(a+b)² = a² + 2ab + b².\n\nÉtape 1 :\n(1+i)² = 1² + 2(1)(i) + i².\n\nÉtape 2 :\n1² = 1.\n\nEt :\ni² = -1.\n\nDonc :\n1 + 2i - 1.\n\nÉtape 3 :\n1 - 1 = 0.\n\nDonc :\n2i.\n\nConclusion : (1+i)² = 2i."
  },

  {
    question: "Calculer l'aire d'un triangle de base 15 cm et de hauteur 8 cm.",
    answer: "60 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (15 × 8) ÷ 2.\n\nÉtape 2 :\n15 × 8 = 120.\n\nÉtape 3 :\n120 ÷ 2 = 60.\n\nConclusion : l'aire est 60 cm²."
  },

  {
    question: "Résoudre : 7x + 1 = 36.",
    answer: "x = 5",
    solution: "Étape 1 :\n7x + 1 = 36.\n\nÉtape 2 : On soustrait 1 :\n7x = 35.\n\nÉtape 3 : On divise par 7 :\nx = 5.\n\nVérification :\n7 × 5 + 1 = 36.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 2⁶.",
    answer: "64",
    solution: "Étape 1 :\n2⁶ = 2 × 2 × 2 × 2 × 2 × 2.\n\nÉtape 2 :\n2 × 2 = 4.\n4 × 2 = 8.\n8 × 2 = 16.\n16 × 2 = 32.\n32 × 2 = 64.\n\nConclusion : 2⁶ = 64."
  },

  {
    question: "Un produit coûte 4 000 HTG et bénéficie d'une réduction de 15 %. Quel est le prix final ?",
    answer: "3 400 HTG",
    solution: "Étape 1 : Calculons la réduction :\n4 000 × 0,15 = 600 HTG.\n\nÉtape 2 : On retire la réduction :\n4 000 - 600 = 3 400 HTG.\n\nConclusion : le prix final est 3 400 HTG."
  },

  {
    question: "Une classe compte 45 élèves, dont 27 ont réussi. Quel est le pourcentage de réussite ?",
    answer: "60 %",
    solution: "Étape 1 :\n27 ÷ 45 = 0,6.\n\nÉtape 2 :\n0,6 × 100 = 60 %.\n\nConclusion : le taux de réussite est de 60 %."
  },

  {
    question: "Un triangle rectangle a une hypoténuse de 10 cm et un côté de 6 cm. Calculer l'autre côté.",
    answer: "8 cm",
    solution: "On utilise Pythagore :\nc² = a² + b².\n\nÉtape 1 :\n10² = 6² + b².\n\nÉtape 2 :\n100 = 36 + b².\n\nÉtape 3 :\nb² = 100 - 36 = 64.\n\nÉtape 4 :\nb = √64 = 8.\n\nConclusion : l'autre côté mesure 8 cm."
  },

  {
    question: "Calculer la primitive de f(x) = 10x.",
    answer: "F(x) = 5x² + C",
    solution: "Étape 1 : On cherche une fonction dont la dérivée est 10x.\n\nOn sait que :\n(x²)' = 2x.\n\nÉtape 2 : Pour obtenir 10x, on multiplie x² par 5 :\n(5x²)' = 10x.\n\nÉtape 3 : On ajoute C :\nF(x) = 5x² + C.\n\nConclusion : F(x) = 5x² + C."
  },

  {
    question: "Calculer lim(x→1) (x³ + 2x + 1).",
    answer: "4",
    solution: "La fonction est polynomiale et continue.\n\nÉtape 1 : On remplace x par 1 :\n1³ + 2(1) + 1.\n\nÉtape 2 :\n1 + 2 + 1 = 4.\n\nConclusion : la limite vaut 4."
  },

  {
    question: "Résoudre 2ˣ = 16.",
    answer: "x = 4",
    solution: "Étape 1 : On écrit 16 comme une puissance de 2 :\n16 = 2⁴.\n\nÉtape 2 :\n2ˣ = 2⁴.\n\nÉtape 3 : Les bases étant identiques :\nx = 4.\n\nConclusion : x = 4."
  },

  {
    question: "Calculer la probabilité d'obtenir exactement un six en lançant un dé deux fois.",
    answer: "5/18",
    solution: "On considère deux cas :\n\nCas 1 : obtenir 6 puis un nombre différent de 6.\n\nP = 1/6 × 5/6 = 5/36.\n\nCas 2 : obtenir un nombre différent de 6 puis 6.\n\nP = 5/6 × 1/6 = 5/36.\n\nÉtape 1 : On additionne les deux cas :\n5/36 + 5/36 = 10/36.\n\nÉtape 2 : On simplifie par 2 :\n10/36 = 5/18.\n\nConclusion : la probabilité d'obtenir exactement un six est 5/18."
  },

  {
    question: "Calculer la moyenne pondérée des notes 12, 15 et 18 avec les coefficients 1, 2 et 2.",
    answer: "15,6",
    solution: "Formule :\nM = somme(note × coefficient) ÷ somme des coefficients.\n\nÉtape 1 :\n12 × 1 = 12.\n15 × 2 = 30.\n18 × 2 = 36.\n\nÉtape 2 :\n12 + 30 + 36 = 78.\n\nÉtape 3 : Somme des coefficients :\n1 + 2 + 2 = 5.\n\nÉtape 4 :\n78 ÷ 5 = 15,6.\n\nConclusion : la moyenne pondérée est 15,6."
  },

  {
    question: "Calculer l'aire d'un cercle de rayon 10 cm avec π ≈ 3,14.",
    answer: "314 cm²",
    solution: "Formule :\nA = πr².\n\nÉtape 1 :\nr = 10 cm.\n\nÉtape 2 :\nr² = 10² = 100.\n\nÉtape 3 :\nA = 3,14 × 100.\n\nÉtape 4 :\nA = 314 cm².\n\nConclusion : l'aire du cercle est environ 314 cm²."
  },

  {
    question: "Un capital de 6 000 HTG est placé à 5 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "6 600 HTG",
    solution: "Étape 1 : Intérêt simple :\nI = C × t × n.\n\nC = 6 000.\nt = 0,05.\nn = 2.\n\nÉtape 2 :\nI = 6 000 × 0,05 × 2.\n\nÉtape 3 :\n6 000 × 0,05 = 300.\n\n300 × 2 = 600.\n\nÉtape 4 : Capital final :\n6 000 + 600 = 6 600 HTG.\n\nConclusion : le capital final est 6 600 HTG."
  },

  {
    question: "Une voiture parcourt 420 km à 70 km/h. Combien de temps dure le trajet ?",
    answer: "6 heures",
    solution: "Formule :\nt = distance ÷ vitesse.\n\nÉtape 1 :\nd = 420 km.\nv = 70 km/h.\n\nÉtape 2 :\nt = 420 ÷ 70.\n\nÉtape 3 :\nt = 6 heures.\n\nVérification :\n70 × 6 = 420 km.\n\nConclusion : le trajet dure 6 heures."
  },

  {
    question: "Calculer le périmètre d'un carré de côté 15 cm.",
    answer: "60 cm",
    solution: "Un carré possède quatre côtés égaux.\n\nFormule :\nP = 4c.\n\nÉtape 1 :\nP = 4 × 15.\n\nÉtape 2 :\nP = 60 cm.\n\nConclusion : le périmètre est 60 cm."
  },

  {
    question: "Résoudre : x² + 6x + 5 = 0.",
    answer: "x = -1 ou x = -5",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 5 et dont la somme vaut 6.\n\nComme le coefficient de x est positif, on cherche 1 et 5.\n\nÉtape 2 : Pour obtenir +6 :\n1 + 5 = 6.\n\nÉtape 3 : On factorise :\nx² + 6x + 5 = (x + 1)(x + 5).\n\nÉtape 4 :\n(x + 1)(x + 5) = 0.\n\nDonc :\nx + 1 = 0 ou x + 5 = 0.\n\nÉtape 5 :\nx = -1 ou x = -5.\n\nConclusion : les solutions sont -1 et -5."
  },

  {
    question: "Calculer 20 % de 1 250.",
    answer: "250",
    solution: "Étape 1 :\n20 % = 0,20.\n\nÉtape 2 :\n1 250 × 0,20 = 250.\n\nConclusion : 20 % de 1 250 = 250."
  },

  {
    question: "Une note de 16 sur 20 correspond à quel pourcentage ?",
    answer: "80 %",
    solution: "Étape 1 :\n16 ÷ 20 = 0,8.\n\nÉtape 2 :\n0,8 × 100 = 80 %.\n\nConclusion : 16/20 correspond à 80 %."
  },

  {
    question: "Calculer le volume d'un cube de côté 6 cm.",
    answer: "216 cm³",
    solution: "Formule :\nV = c³.\n\nÉtape 1 :\nV = 6³.\n\nÉtape 2 :\n6³ = 6 × 6 × 6.\n\nÉtape 3 :\n6 × 6 = 36.\n36 × 6 = 216.\n\nConclusion : le volume est 216 cm³."
  },

  {
    question: "Calculer l'aire d'un triangle de base 20 cm et de hauteur 9 cm.",
    answer: "90 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (20 × 9) ÷ 2.\n\nÉtape 2 :\n20 × 9 = 180.\n\nÉtape 3 :\n180 ÷ 2 = 90.\n\nConclusion : l'aire est 90 cm²."
  },

  {
    question: "Résoudre : 6x + 4 = 40.",
    answer: "x = 6",
    solution: "Étape 1 :\n6x + 4 = 40.\n\nÉtape 2 : On soustrait 4 :\n6x = 36.\n\nÉtape 3 : On divise par 6 :\nx = 6.\n\nVérification :\n6 × 6 + 4 = 40.\n\nConclusion : x = 6."
  },

  {
    question: "Calculer la distance entre A(-1,-2) et B(2,2).",
    answer: "5",
    solution: "Formule :\nAB = √[(x₂-x₁)² + (y₂-y₁)²].\n\nÉtape 1 :\nx₂ - x₁ = 2 - (-1) = 3.\n\nÉtape 2 :\ny₂ - y₁ = 2 - (-2) = 4.\n\nÉtape 3 :\nAB = √(3² + 4²).\n\nÉtape 4 :\nAB = √(9 + 16) = √25 = 5.\n\nConclusion : AB = 5."
  },

  {
    question: "Calculer la dérivée de f(x) = 9x² + 2x - 7.",
    answer: "f'(x) = 18x + 2",
    solution: "Étape 1 :\n(9x²)' = 18x.\n\nÉtape 2 :\n(2x)' = 2.\n\nÉtape 3 :\n(-7)' = 0.\n\nÉtape 4 :\nf'(x) = 18x + 2.\n\nConclusion : f'(x) = 18x + 2."
  },

  {
    question: "Calculer lim(x→0) (x² + 5).",
    answer: "5",
    solution: "La fonction est continue.\n\nÉtape 1 : On remplace x par 0 :\n0² + 5.\n\nÉtape 2 :\n0 + 5 = 5.\n\nConclusion : la limite vaut 5."
  },

  {
    question: "Déterminer une primitive de f(x) = 7x².",
    answer: "F(x) = (7/3)x³ + C",
    solution: "On utilise la règle :\nUne primitive de x² est x³/3.\n\nÉtape 1 :\nUne primitive de 7x² est :\n7 × x³/3.\n\nÉtape 2 : On ajoute la constante C.\n\nDonc :\nF(x) = (7/3)x³ + C.\n\nVérification :\nF'(x) = (7/3) × 3x² = 7x².\n\nConclusion : F(x) = (7/3)x³ + C."
  },

  {
    question: "Calculer ln(e²).",
    answer: "2",
    solution: "On utilise la propriété :\nln(eˣ) = x.\n\nDonc :\nln(e²) = 2.\n\nConclusion : le résultat est 2."
  },

  {
    question: "Calculer 5³.",
    answer: "125",
    solution: "Étape 1 :\n5³ = 5 × 5 × 5.\n\nÉtape 2 :\n5 × 5 = 25.\n\nÉtape 3 :\n25 × 5 = 125.\n\nConclusion : 5³ = 125."
  },

  {
    question: "Une suite arithmétique a u₁ = 6 et r = 2. Calculer u₁₅.",
    answer: "u₁₅ = 34",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₅ = 6 + (15 - 1) × 2.\n\nÉtape 2 :\n15 - 1 = 14.\n\nÉtape 3 :\n14 × 2 = 28.\n\nÉtape 4 :\n6 + 28 = 34.\n\nConclusion : u₁₅ = 34."
  },

  {
    question: "Une suite géométrique a u₁ = 3 et q = 2. Calculer u₇.",
    answer: "u₇ = 192",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₇ = 3 × 2⁶.\n\nÉtape 2 :\n2⁶ = 64.\n\nÉtape 3 :\n3 × 64 = 192.\n\nConclusion : u₇ = 192."
  },

  {
    question: "Calculer la probabilité d'obtenir un nombre impair avec un dé équilibré.",
    answer: "1/2",
    solution: "Les nombres impairs sur un dé sont 1, 3 et 5.\n\nÉtape 1 : Il y a 3 cas favorables.\n\nÉtape 2 : Il y a 6 cas possibles.\n\nÉtape 3 :\nP(impair) = 3/6.\n\nÉtape 4 :\n3/6 = 1/2.\n\nConclusion : la probabilité est 1/2, soit 50 %."
  },

  {
    question: "Calculer la moyenne de 20, 18, 16, 14 et 12.",
    answer: "16",
    solution: "Étape 1 :\n20 + 18 + 16 + 14 + 12 = 80.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n80 ÷ 5 = 16.\n\nConclusion : la moyenne est 16."
  },

  {
    question: "Calculer l'aire d'un cercle de rayon 4 cm avec π ≈ 3,14.",
    answer: "50,24 cm²",
    solution: "Formule :\nA = πr².\n\nÉtape 1 :\nr = 4 cm.\n\nÉtape 2 :\nr² = 4² = 16.\n\nÉtape 3 :\nA = 3,14 × 16.\n\nÉtape 4 :\n3,14 × 16 = 50,24.\n\nConclusion : l'aire est environ 50,24 cm²."
  },

  {
    question: "Résoudre : 5x - 15 = 10.",
    answer: "x = 5",
    solution: "Étape 1 :\n5x - 15 = 10.\n\nÉtape 2 : On ajoute 15 :\n5x = 25.\n\nÉtape 3 : On divise par 5 :\nx = 5.\n\nVérification :\n5 × 5 - 15 = 25 - 15 = 10.\n\nConclusion : x = 5."
  },

  {
    question: "Factoriser : x² - 12x + 36.",
    answer: "(x - 6)²",
    solution: "Étape 1 : On reconnaît l'identité :\na² - 2ab + b² = (a-b)².\n\nÉtape 2 :\n36 = 6².\n\nEt :\n2 × x × 6 = 12x.\n\nDonc :\nx² - 12x + 36 = (x - 6)².\n\nConclusion : la factorisation est (x - 6)²."
  },

  {
    question: "Calculer la longueur du côté d'un carré dont l'aire est 121 cm².",
    answer: "11 cm",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\n121 = c².\n\nÉtape 2 :\nc = √121.\n\nÉtape 3 :\n√121 = 11.\n\nComme une longueur est positive :\nc = 11 cm.\n\nConclusion : le côté mesure 11 cm."
  },

  {
    question: "Un produit coûte 2 000 HTG après une réduction de 20 %. Quel était son prix avant réduction ?",
    answer: "2 500 HTG",
    solution: "Après une réduction de 20 %, il reste 80 % du prix initial.\n\nÉtape 1 :\n80 % = 0,80.\n\nSi x est le prix initial :\n0,80x = 2 000.\n\nÉtape 2 :\nx = 2 000 ÷ 0,80.\n\nÉtape 3 :\nx = 2 500.\n\nVérification :\n20 % de 2 500 = 500.\n2 500 - 500 = 2 000.\n\nConclusion : le prix initial était 2 500 HTG."
  },

  {
    question: "Une voiture consomme 6 litres d'essence pour 100 km. Combien faut-il de litres pour 300 km ?",
    answer: "18 litres",
    solution: "Étape 1 : 300 km représentent trois fois 100 km.\n\nÉtape 2 : La consommation est donc :\n6 × 3 = 18 litres.\n\nConclusion : il faut 18 litres."
  },

  {
    question: "Calculer la somme des angles d'un triangle.",
    answer: "180°",
    solution: "La somme des angles intérieurs de tout triangle est toujours égale à 180°.\n\nConclusion : la somme des angles d'un triangle est 180°."
  },

  {
    question: "Calculer le complément d'un angle de 35°.",
    answer: "55°",
    solution: "Deux angles complémentaires ont une somme de 90°.\n\nÉtape 1 : On pose :\n35° + x = 90°.\n\nÉtape 2 : On soustrait 35° :\nx = 90° - 35°.\n\nÉtape 3 :\nx = 55°.\n\nConclusion : le complément de 35° est 55°."
  },

  {
    question: "Résoudre : 4x + 2 = 18.",
    answer: "x = 4",
    solution: "Étape 1 :\n4x + 2 = 18.\n\nÉtape 2 : On soustrait 2 :\n4x = 16.\n\nÉtape 3 : On divise par 4 :\nx = 4.\n\nVérification :\n4 × 4 + 2 = 18.\n\nConclusion : x = 4."
  },

  {
    question: "Calculer la probabilité d'obtenir exactement deux faces en lançant une pièce deux fois.",
    answer: "1/4",
    solution: "Pour obtenir deux faces, il faut obtenir face au premier lancer ET face au deuxième lancer.\n\nÉtape 1 :\nP(face) = 1/2.\n\nÉtape 2 : Les deux lancers sont indépendants :\nP(face et face) = 1/2 × 1/2.\n\nÉtape 3 :\n1/2 × 1/2 = 1/4.\n\nConclusion : la probabilité est 1/4, soit 25 %."
  },

  {
    question: "Calculer 75 % de 400.",
    answer: "300",
    solution: "Étape 1 :\n75 % = 0,75.\n\nÉtape 2 :\n400 × 0,75 = 300.\n\nConclusion : 75 % de 400 = 300."
  },

  {
    question: "Calculer le volume d'un pavé droit de longueur 10 cm, largeur 5 cm et hauteur 2 cm.",
    answer: "100 cm³",
    solution: "Formule :\nV = longueur × largeur × hauteur.\n\nÉtape 1 :\nV = 10 × 5 × 2.\n\nÉtape 2 :\n10 × 5 = 50.\n\nÉtape 3 :\n50 × 2 = 100.\n\nConclusion : le volume est 100 cm³."
  },

  {
    question: "Résoudre : x² - 6x + 8 = 0.",
    answer: "x = 2 ou x = 4",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 8 et dont la somme vaut -6.\n\nCes nombres sont -2 et -4.\n\nÉtape 2 :\nx² - 6x + 8 = (x - 2)(x - 4).\n\nÉtape 3 :\n(x - 2)(x - 4) = 0.\n\nDonc :\nx - 2 = 0 ou x - 4 = 0.\n\nÉtape 4 :\nx = 2 ou x = 4.\n\nConclusion : les solutions sont 2 et 4."
  },

  {
    question: "Calculer la dérivée de f(x) = x⁴.",
    answer: "f'(x) = 4x³",
    solution: "On utilise la règle :\n(xⁿ)' = nxⁿ⁻¹.\n\nÉtape 1 : Ici n = 4.\n\nDonc :\n(x⁴)' = 4x³.\n\nConclusion : f'(x) = 4x³."
  },

  {
    question: "Calculer lim(x→2) (x³ - x + 1).",
    answer: "7",
    solution: "La fonction est polynomiale et continue.\n\nÉtape 1 : On remplace x par 2 :\n2³ - 2 + 1.\n\nÉtape 2 :\n2³ = 8.\n\nDonc :\n8 - 2 + 1 = 7.\n\nConclusion : la limite vaut 7."
  },

  {
    question: "Déterminer une primitive de f(x) = 9.",
    answer: "F(x) = 9x + C",
    solution: "La dérivée de 9x est 9.\n\nÉtape 1 :\nf(x) = 9.\n\nÉtape 2 : Une primitive est donc :\nF(x) = 9x.\n\nÉtape 3 : On ajoute la constante d'intégration :\nF(x) = 9x + C.\n\nVérification :\nF'(x) = 9.\n\nConclusion : F(x) = 9x + C."
  },

  {
    question: "Calculer 7³.",
    answer: "343",
    solution: "Étape 1 :\n7³ = 7 × 7 × 7.\n\nÉtape 2 :\n7 × 7 = 49.\n\nÉtape 3 :\n49 × 7 = 343.\n\nConclusion : 7³ = 343."
  },

  {
    question: "Résoudre 10ˣ = 100 000.",
    answer: "x = 5",
    solution: "Étape 1 : On écrit 100 000 comme une puissance de 10 :\n100 000 = 10⁵.\n\nÉtape 2 :\n10ˣ = 10⁵.\n\nÉtape 3 : Les bases sont identiques :\nx = 5.\n\nConclusion : x = 5."
  },

  {
    question: "Un capital de 20 000 HTG est placé à 5 % pendant 1 an. Calculer le montant des intérêts.",
    answer: "1 000 HTG",
    solution: "Étape 1 :\nC = 20 000 HTG.\nt = 5 % = 0,05.\n\nÉtape 2 : Pour une année :\nI = C × t.\n\nDonc :\nI = 20 000 × 0,05.\n\nÉtape 3 :\nI = 1 000 HTG.\n\nConclusion : l'intérêt est de 1 000 HTG."
  },

  {
    question: "Calculer la moyenne de 10, 20 et 30.",
    answer: "20",
    solution: "Étape 1 :\n10 + 20 + 30 = 60.\n\nÉtape 2 : Il y a 3 valeurs.\n\nÉtape 3 :\n60 ÷ 3 = 20.\n\nConclusion : la moyenne est 20."
  },

  {
    question: "Une urne contient 6 boules vertes et 4 rouges. Quelle est la probabilité de tirer une boule verte ?",
    answer: "3/5",
    solution: "Étape 1 : Nombre total de boules :\n6 + 4 = 10.\n\nÉtape 2 : Nombre de boules vertes : 6.\n\nÉtape 3 :\nP(verte) = 6/10.\n\nÉtape 4 : On simplifie par 2 :\n6/10 = 3/5.\n\nConclusion : la probabilité est 3/5, soit 60 %."
  },

  {
    question: "Un avion parcourt 900 km en 1,5 heure. Calculer sa vitesse moyenne.",
    answer: "600 km/h",
    solution: "Formule :\nv = distance ÷ temps.\n\nÉtape 1 :\nd = 900 km.\nt = 1,5 h.\n\nÉtape 2 :\nv = 900 ÷ 1,5.\n\nÉtape 3 :\nv = 600 km/h.\n\nConclusion : la vitesse moyenne est 600 km/h."
  },

  {
    question: "Calculer le périmètre d'un triangle équilatéral de côté 9 cm.",
    answer: "27 cm",
    solution: "Un triangle équilatéral possède trois côtés égaux.\n\nFormule :\nP = 3 × côté.\n\nÉtape 1 :\nP = 3 × 9.\n\nÉtape 2 :\nP = 27 cm.\n\nConclusion : le périmètre est 27 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 13 cm.",
    answer: "169 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 13².\n\nÉtape 2 :\n13 × 13 = 169.\n\nConclusion : l'aire du carré est 169 cm²."
  },

  {
    question: "Résoudre : 9x + 3 = 48.",
    answer: "x = 5",
    solution: "Étape 1 :\n9x + 3 = 48.\n\nÉtape 2 : On soustrait 3 :\n9x = 45.\n\nÉtape 3 : On divise par 9 :\nx = 5.\n\nVérification :\n9 × 5 + 3 = 48.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 8² - 6².",
    answer: "28",
    solution: "Étape 1 :\n8² = 64.\n\nÉtape 2 :\n6² = 36.\n\nÉtape 3 :\n64 - 36 = 28.\n\nConclusion : le résultat est 28."
  },

  {
    question: "Calculer √256.",
    answer: "16",
    solution: "Étape 1 : On cherche le nombre dont le carré vaut 256.\n\n16 × 16 = 256.\n\nÉtape 2 : Donc :\n√256 = 16.\n\nConclusion : √256 = 16."
  },

  {
    question: "Une suite arithmétique a u₁ = 8 et r = 4. Calculer u₁₀.",
    answer: "u₁₀ = 44",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₀ = 8 + (10 - 1) × 4.\n\nÉtape 2 :\n10 - 1 = 9.\n\nÉtape 3 :\n9 × 4 = 36.\n\nÉtape 4 :\n8 + 36 = 44.\n\nConclusion : u₁₀ = 44."
  },

  {
    question: "Une suite géométrique a u₁ = 5 et q = 2. Calculer u₆.",
    answer: "u₆ = 160",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₆ = 5 × 2⁵.\n\nÉtape 2 :\n2⁵ = 32.\n\nÉtape 3 :\n5 × 32 = 160.\n\nConclusion : u₆ = 160."
  },

  {
    question: "Calculer la probabilité d'obtenir un nombre premier avec un dé équilibré.",
    answer: "1/2",
    solution: "Les nombres premiers parmi 1, 2, 3, 4, 5 et 6 sont 2, 3 et 5.\n\nÉtape 1 : Il y a 3 cas favorables.\n\nÉtape 2 : Il y a 6 cas possibles.\n\nÉtape 3 :\nP = 3/6.\n\nÉtape 4 :\n3/6 = 1/2.\n\nConclusion : la probabilité est 1/2, soit 50 %."
  },

  {
    question: "Calculer la médiane de la série : 4, 7, 9, 11, 13, 15, 18.",
    answer: "11",
    solution: "Étape 1 : La série est ordonnée.\n\n4, 7, 9, 11, 13, 15, 18.\n\nÉtape 2 : Il y a 7 valeurs.\n\nLa quatrième valeur est au centre.\n\nÉtape 3 : La quatrième valeur est 11.\n\nConclusion : la médiane est 11."
  },

  {
    question: "Calculer l'étendue de la série : 3, 9, 14, 20, 25.",
    answer: "22",
    solution: "Formule :\nÉtendue = maximum - minimum.\n\nÉtape 1 :\nMaximum = 25.\n\nÉtape 2 :\nMinimum = 3.\n\nÉtape 3 :\n25 - 3 = 22.\n\nConclusion : l'étendue est 22."
  },

  {
    question: "Calculer (3 + i)(3 - i).",
    answer: "10",
    solution: "On utilise :\n(a+b)(a-b) = a² - b².\n\nÉtape 1 :\n(3+i)(3-i) = 3² - i².\n\nÉtape 2 :\n3² = 9.\n\nEt :\ni² = -1.\n\nÉtape 3 :\n9 - (-1) = 10.\n\nConclusion : le résultat est 10."
  },

  {
    question: "Calculer l'aire d'un trapèze de bases 10 cm et 14 cm et de hauteur 6 cm.",
    answer: "72 cm²",
    solution: "Formule :\nA = [(B+b) × h] ÷ 2.\n\nÉtape 1 :\nB + b = 14 + 10 = 24.\n\nÉtape 2 :\n24 × 6 = 144.\n\nÉtape 3 :\n144 ÷ 2 = 72.\n\nConclusion : l'aire est 72 cm²."
  },

  {
    question: "Résoudre : x² - 9x + 20 = 0.",
    answer: "x = 4 ou x = 5",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 20 et dont la somme vaut -9.\n\nCes nombres sont -4 et -5.\n\nÉtape 2 :\nx² - 9x + 20 = (x - 4)(x - 5).\n\nÉtape 3 :\n(x - 4)(x - 5) = 0.\n\nDonc :\nx = 4 ou x = 5.\n\nConclusion : les solutions sont 4 et 5."
  },

  {
    question: "Calculer la dérivée de f(x) = 10x² - x + 4.",
    answer: "f'(x) = 20x - 1",
    solution: "Étape 1 :\n(10x²)' = 20x.\n\nÉtape 2 :\n(-x)' = -1.\n\nÉtape 3 :\n(4)' = 0.\n\nÉtape 4 :\nf'(x) = 20x - 1.\n\nConclusion : f'(x) = 20x - 1."
  },

  {
    question: "Calculer lim(x→3) (2x + 5).",
    answer: "11",
    solution: "La fonction est continue.\n\nÉtape 1 : On remplace x par 3 :\n2(3) + 5.\n\nÉtape 2 :\n6 + 5 = 11.\n\nConclusion : la limite vaut 11."
  },

  {
    question: "Déterminer une primitive de f(x) = 3x² + 2.",
    answer: "F(x) = x³ + 2x + C",
    solution: "On cherche une primitive de chaque terme.\n\nÉtape 1 : Une primitive de 3x² est x³ car :\n(x³)' = 3x².\n\nÉtape 2 : Une primitive de 2 est 2x car :\n(2x)' = 2.\n\nÉtape 3 : On ajoute C :\nF(x) = x³ + 2x + C.\n\nVérification :\nF'(x) = 3x² + 2.\n\nConclusion : F(x) = x³ + 2x + C."
  },

  {
    question: "Calculer log₁₀(1 000 000).",
    answer: "6",
    solution: "Étape 1 : On écrit le nombre comme une puissance de 10 :\n1 000 000 = 10⁶.\n\nÉtape 2 :\nlog₁₀(1 000 000) = 6.\n\nConclusion : le résultat est 6."
  },

  {
    question: "Résoudre 5ˣ = 625.",
    answer: "x = 4",
    solution: "Étape 1 :\n625 = 5 × 5 × 5 × 5 = 5⁴.\n\nÉtape 2 :\n5ˣ = 5⁴.\n\nÉtape 3 : Les bases sont identiques :\nx = 4.\n\nConclusion : x = 4."
  },

  {
    question: "Un capital de 12 000 HTG est placé à 4 % pendant 3 ans à intérêt simple. Calculer le capital final.",
    answer: "13 440 HTG",
    solution: "Étape 1 : Formule :\nI = C × t × n.\n\nC = 12 000.\nt = 0,04.\nn = 3.\n\nÉtape 2 :\nI = 12 000 × 0,04 × 3.\n\nÉtape 3 :\n12 000 × 0,04 = 480.\n\n480 × 3 = 1 440.\n\nÉtape 4 :\nCapital final = 12 000 + 1 440 = 13 440 HTG.\n\nConclusion : le capital final est 13 440 HTG."
  },

  {
    question: "Un étudiant obtient 10, 12, 14, 16 et 18. Calculer sa moyenne.",
    answer: "14",
    solution: "Étape 1 :\n10 + 12 + 14 + 16 + 18 = 70.\n\nÉtape 2 : Il y a 5 notes.\n\nÉtape 3 :\n70 ÷ 5 = 14.\n\nConclusion : la moyenne est 14."
  },

  {
    question: "Une urne contient 7 boules rouges et 3 boules bleues. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "7/10",
    solution: "Étape 1 : Nombre total de boules :\n7 + 3 = 10.\n\nÉtape 2 : Nombre de cas favorables : 7 boules rouges.\n\nÉtape 3 :\nP(rouge) = 7/10.\n\nÉtape 4 : En pourcentage :\n7/10 × 100 = 70 %.\n\nConclusion : la probabilité est 7/10, soit 70 %."
  },

  {
    question: "Un véhicule parcourt 300 km en 5 heures. Calculer sa vitesse moyenne.",
    answer: "60 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nd = 300 km.\nt = 5 h.\n\nÉtape 2 :\nv = 300 ÷ 5.\n\nÉtape 3 :\nv = 60 km/h.\n\nConclusion : la vitesse moyenne est 60 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 20 cm et de largeur 10 cm.",
    answer: "60 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\nL + l = 20 + 10 = 30.\n\nÉtape 2 :\nP = 2 × 30 = 60 cm.\n\nConclusion : le périmètre est 60 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 20 cm.",
    answer: "400 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 20².\n\nÉtape 2 :\n20 × 20 = 400.\n\nConclusion : l'aire est 400 cm²."
  },

  {
    question: "Résoudre : 2x + 6 = 20.",
    answer: "x = 7",
    solution: "Étape 1 :\n2x + 6 = 20.\n\nÉtape 2 : On soustrait 6 :\n2x = 14.\n\nÉtape 3 : On divise par 2 :\nx = 7.\n\nVérification :\n2 × 7 + 6 = 20.\n\nConclusion : x = 7."
  },

  {
    question: "Calculer 9² + 12².",
    answer: "225",
    solution: "Étape 1 :\n9² = 81.\n\nÉtape 2 :\n12² = 144.\n\nÉtape 3 :\n81 + 144 = 225.\n\nConclusion : 9² + 12² = 225."
  },

  {
    question: "Calculer √225 + √100.",
    answer: "25",
    solution: "Étape 1 :\n√225 = 15.\n\nÉtape 2 :\n√100 = 10.\n\nÉtape 3 :\n15 + 10 = 25.\n\nConclusion : le résultat est 25."
  },

  {
    question: "Calculer la dérivée de f(x) = 6x³ + 4x².",
    answer: "f'(x) = 18x² + 8x",
    solution: "Étape 1 :\n(6x³)' = 6 × 3x² = 18x².\n\nÉtape 2 :\n(4x²)' = 4 × 2x = 8x.\n\nÉtape 3 :\nf'(x) = 18x² + 8x.\n\nConclusion : f'(x) = 18x² + 8x."
  },

  {
    question: "Calculer lim(x→2) (4x + 3).",
    answer: "11",
    solution: "La fonction est continue.\n\nÉtape 1 :\n4(2) + 3.\n\nÉtape 2 :\n8 + 3 = 11.\n\nConclusion : la limite vaut 11."
  },

  {
    question: "Déterminer une primitive de f(x) = 4x² + 3x.",
    answer: "F(x) = (4/3)x³ + (3/2)x² + C",
    solution: "On cherche une primitive terme par terme.\n\nÉtape 1 : Une primitive de 4x² est :\n(4/3)x³.\n\nEn effet :\n[(4/3)x³]' = (4/3) × 3x² = 4x².\n\nÉtape 2 : Une primitive de 3x est :\n(3/2)x².\n\nEn effet :\n[(3/2)x²]' = (3/2) × 2x = 3x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (4/3)x³ + (3/2)x² + C.\n\nConclusion : cette fonction est une primitive de 4x² + 3x."
  },

  {
    question: "Résoudre 2ˣ = 64.",
    answer: "x = 6",
    solution: "Étape 1 : On écrit 64 comme une puissance de 2 :\n64 = 2⁶.\n\nÉtape 2 :\n2ˣ = 2⁶.\n\nÉtape 3 : Les bases sont identiques :\nx = 6.\n\nConclusion : x = 6."
  },

  {
    question: "Calculer ln(e⁷).",
    answer: "7",
    solution: "On utilise la propriété :\nln(eˣ) = x.\n\nDonc :\nln(e⁷) = 7.\n\nConclusion : le résultat est 7."
  },

  {
    question: "Calculer 50 % de 900.",
    answer: "450",
    solution: "Étape 1 :\n50 % = 0,50.\n\nÉtape 2 :\n900 × 0,50 = 450.\n\nConclusion : 50 % de 900 = 450."
  },

  {
    question: "Une somme de 18 000 HTG est partagée entre 9 personnes. Combien reçoit chaque personne ?",
    answer: "2 000 HTG",
    solution: "Étape 1 : On divise la somme totale par le nombre de personnes :\n18 000 ÷ 9.\n\nÉtape 2 :\n18 000 ÷ 9 = 2 000.\n\nConclusion : chaque personne reçoit 2 000 HTG."
  },

  {
    question: "Un rectangle a une aire de 120 cm² et une largeur de 10 cm. Calculer sa longueur.",
    answer: "12 cm",
    solution: "Formule :\nA = L × l.\n\nÉtape 1 :\n120 = L × 10.\n\nÉtape 2 : On divise par 10 :\nL = 120 ÷ 10.\n\nÉtape 3 :\nL = 12 cm.\n\nConclusion : la longueur est 12 cm."
  },

  {
    question: "Calculer le volume d'un cube de côté 10 cm.",
    answer: "1 000 cm³",
    solution: "Formule :\nV = c³.\n\nÉtape 1 :\nV = 10³.\n\nÉtape 2 :\n10 × 10 × 10 = 1 000.\n\nConclusion : le volume du cube est 1 000 cm³."
  },

  {
    question: "Résoudre : x² - 4x + 3 = 0.",
    answer: "x = 1 ou x = 3",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 3 et dont la somme vaut -4.\n\nCes nombres sont -1 et -3.\n\nÉtape 2 :\nx² - 4x + 3 = (x - 1)(x - 3).\n\nÉtape 3 :\n(x - 1)(x - 3) = 0.\n\nDonc :\nx = 1 ou x = 3.\n\nConclusion : les solutions sont 1 et 3."
  },

  {
    question: "Calculer 35 % de 200.",
    answer: "70",
    solution: "Étape 1 :\n35 % = 0,35.\n\nÉtape 2 :\n200 × 0,35 = 70.\n\nConclusion : 35 % de 200 = 70."
  },

  {
    question: "Une population de 10 000 habitants diminue de 5 %. Quelle est la nouvelle population ?",
    answer: "9 500 habitants",
    solution: "Étape 1 : Calculons la diminution :\n10 000 × 0,05 = 500.\n\nÉtape 2 : On retire cette diminution :\n10 000 - 500 = 9 500.\n\nConclusion : la nouvelle population est de 9 500 habitants."
  },

  {
    question: "Calculer la moyenne de 7, 9, 11, 13 et 15.",
    answer: "11",
    solution: "Étape 1 :\n7 + 9 + 11 + 13 + 15 = 55.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n55 ÷ 5 = 11.\n\nConclusion : la moyenne est 11."
  },

  {
    question: "Calculer la probabilité d'obtenir un nombre inférieur ou égal à 2 avec un dé équilibré.",
    answer: "1/3",
    solution: "Les résultats inférieurs ou égaux à 2 sont 1 et 2.\n\nÉtape 1 : Il y a 2 cas favorables.\n\nÉtape 2 : Il y a 6 cas possibles.\n\nÉtape 3 :\nP = 2/6.\n\nÉtape 4 : On simplifie :\n2/6 = 1/3.\n\nConclusion : la probabilité est 1/3, soit environ 33,33 %."
  },

  {
    question: "Calculer la distance entre A(2,1) et B(8,9).",
    answer: "10",
    solution: "Formule :\nAB = √[(x₂-x₁)² + (y₂-y₁)²].\n\nÉtape 1 :\n8 - 2 = 6.\n\nÉtape 2 :\n9 - 1 = 8.\n\nÉtape 3 :\nAB = √(6² + 8²).\n\nÉtape 4 :\nAB = √(36 + 64) = √100.\n\nÉtape 5 :\nAB = 10.\n\nConclusion : la distance AB est 10."
  },

  {
    question: "Calculer la circonférence d'un cercle de rayon 10 cm avec π ≈ 3,14.",
    answer: "62,8 cm",
    solution: "Formule :\nC = 2πr.\n\nÉtape 1 :\nr = 10 cm.\n\nÉtape 2 :\nC = 2 × 3,14 × 10.\n\nÉtape 3 :\n2 × 10 = 20.\n\nDonc :\nC = 3,14 × 20 = 62,8 cm.\n\nConclusion : la circonférence est environ 62,8 cm."
  },

  {
    question: "Calculer l'aire d'un triangle équilatéral de côté 6 cm.",
    answer: "9√3 cm²",
    solution: "Pour un triangle équilatéral de côté a, l'aire est :\nA = (√3/4)a².\n\nÉtape 1 :\na = 6 cm.\n\nÉtape 2 :\na² = 6² = 36.\n\nÉtape 3 :\nA = (√3/4) × 36.\n\nÉtape 4 :\n36 ÷ 4 = 9.\n\nDonc :\nA = 9√3 cm².\n\nConclusion : l'aire est 9√3 cm², soit environ 15,59 cm²."
  },

  {
    question: "Résoudre : 3x² - 12 = 0.",
    answer: "x = -2 ou x = 2",
    solution: "Étape 1 :\n3x² - 12 = 0.\n\nÉtape 2 : On ajoute 12 :\n3x² = 12.\n\nÉtape 3 : On divise par 3 :\nx² = 4.\n\nÉtape 4 :\nx = 2 ou x = -2.\n\nConclusion : les solutions sont -2 et 2."
  },

  {
    question: "Calculer la dérivée de f(x) = x⁵.",
    answer: "f'(x) = 5x⁴",
    solution: "On utilise la règle :\n(xⁿ)' = nxⁿ⁻¹.\n\nÉtape 1 : Ici n = 5.\n\nÉtape 2 :\n(x⁵)' = 5x⁴.\n\nConclusion : f'(x) = 5x⁴."
  },

  {
    question: "Calculer lim(x→1) (x² + x + 1).",
    answer: "3",
    solution: "La fonction est polynomiale et continue.\n\nÉtape 1 : On remplace x par 1 :\n1² + 1 + 1.\n\nÉtape 2 :\n1 + 1 + 1 = 3.\n\nConclusion : la limite vaut 3."
  },

  {
    question: "Déterminer une primitive de f(x) = 2x + 5.",
    answer: "F(x) = x² + 5x + C",
    solution: "Étape 1 : Une primitive de 2x est x².\n\nÉtape 2 : Une primitive de 5 est 5x.\n\nÉtape 3 : On ajoute la constante C.\n\nDonc :\nF(x) = x² + 5x + C.\n\nVérification :\nF'(x) = 2x + 5.\n\nConclusion : F(x) = x² + 5x + C."
  },

  {
    question: "Calculer 4⁻².",
    answer: "1/16",
    solution: "Règle :\na⁻ⁿ = 1/aⁿ.\n\nÉtape 1 :\n4⁻² = 1/4².\n\nÉtape 2 :\n4² = 16.\n\nDonc :\n4⁻² = 1/16.\n\nConclusion : le résultat est 1/16."
  },

  {
    question: "Calculer log₁₀(0,001).",
    answer: "-3",
    solution: "Étape 1 :\n0,001 = 1/1000.\n\nÉtape 2 :\n1000 = 10³.\n\nDonc :\n0,001 = 10⁻³.\n\nÉtape 3 :\nlog₁₀(0,001) = -3.\n\nConclusion : le résultat est -3."
  },

  {
    question: "Un capital de 50 000 HTG est placé à 4 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "54 000 HTG",
    solution: "Étape 1 :\nC = 50 000 HTG.\nt = 4 % = 0,04.\nn = 2.\n\nÉtape 2 : Intérêt :\nI = 50 000 × 0,04 × 2.\n\nÉtape 3 :\n50 000 × 0,04 = 2 000.\n\n2 000 × 2 = 4 000.\n\nÉtape 4 : Capital final :\n50 000 + 4 000 = 54 000 HTG.\n\nConclusion : le capital final est 54 000 HTG."
  },

  {
    question: "Calculer la moyenne de 5, 10, 15, 20 et 25.",
    answer: "15",
    solution: "Étape 1 :\n5 + 10 + 15 + 20 + 25 = 75.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n75 ÷ 5 = 15.\n\nConclusion : la moyenne est 15."
  },

  {
    question: "Une boîte contient 8 objets bons et 2 objets défectueux. Quelle est la probabilité de choisir un objet bon ?",
    answer: "4/5",
    solution: "Étape 1 : Nombre total d'objets :\n8 + 2 = 10.\n\nÉtape 2 : Cas favorables : 8 objets bons.\n\nÉtape 3 :\nP(bon) = 8/10.\n\nÉtape 4 : On simplifie par 2 :\n8/10 = 4/5.\n\nConclusion : la probabilité est 4/5, soit 80 %."
  },

  {
    question: "Une voiture parcourt 500 km en 5 heures. Calculer sa vitesse moyenne.",
    answer: "100 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nd = 500 km.\nt = 5 h.\n\nÉtape 2 :\nv = 500 ÷ 5.\n\nÉtape 3 :\nv = 100 km/h.\n\nConclusion : la vitesse moyenne est 100 km/h."
  },

  {
    question: "Calculer l'aire d'un rectangle de longueur 30 cm et largeur 12 cm.",
    answer: "360 cm²",
    solution: "Formule :\nA = L × l.\n\nÉtape 1 :\nA = 30 × 12.\n\nÉtape 2 :\n30 × 12 = 360.\n\nConclusion : l'aire est 360 cm²."
  },

  {
    question: "Calculer le périmètre d'un carré de côté 18 cm.",
    answer: "72 cm",
    solution: "Formule :\nP = 4 × côté.\n\nÉtape 1 :\nP = 4 × 18.\n\nÉtape 2 :\nP = 72 cm.\n\nConclusion : le périmètre est 72 cm."
  },

  {
    question: "Résoudre : 10x - 20 = 30.",
    answer: "x = 5",
    solution: "Étape 1 :\n10x - 20 = 30.\n\nÉtape 2 : On ajoute 20 :\n10x = 50.\n\nÉtape 3 : On divise par 10 :\nx = 5.\n\nVérification :\n10 × 5 - 20 = 30.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 11².",
    answer: "121",
    solution: "Étape 1 :\n11² = 11 × 11.\n\nÉtape 2 :\n11 × 11 = 121.\n\nConclusion : 11² = 121."
  },

  {
    question: "Calculer √324.",
    answer: "18",
    solution: "Étape 1 : On cherche le nombre dont le carré vaut 324.\n\n18 × 18 = 324.\n\nÉtape 2 :\n√324 = 18.\n\nConclusion : √324 = 18."
  },

  {
    question: "Une suite arithmétique a u₁ = 2 et r = 6. Calculer u₆.",
    answer: "u₆ = 32",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₆ = 2 + (6 - 1) × 6.\n\nÉtape 2 :\n6 - 1 = 5.\n\nÉtape 3 :\n5 × 6 = 30.\n\nÉtape 4 :\n2 + 30 = 32.\n\nConclusion : u₆ = 32."
  },

  {
    question: "Une suite géométrique a u₁ = 1 et q = 3. Calculer u₅.",
    answer: "u₅ = 81",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₅ = 1 × 3⁴.\n\nÉtape 2 :\n3⁴ = 81.\n\nÉtape 3 :\n1 × 81 = 81.\n\nConclusion : u₅ = 81."
  },

  {
    question: "Calculer la probabilité d'obtenir 1 ou 2 avec un dé équilibré.",
    answer: "1/3",
    solution: "Étape 1 : Les résultats favorables sont 1 et 2.\n\nIl y a donc 2 cas favorables.\n\nÉtape 2 : Il y a 6 résultats possibles.\n\nÉtape 3 :\nP = 2/6.\n\nÉtape 4 :\n2/6 = 1/3.\n\nConclusion : la probabilité est 1/3, soit environ 33,33 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 18 cm et hauteur 10 cm.",
    answer: "90 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (18 × 10) ÷ 2.\n\nÉtape 2 :\n18 × 10 = 180.\n\nÉtape 3 :\n180 ÷ 2 = 90.\n\nConclusion : l'aire est 90 cm²."
  },

  {
    question: "Calculer 45 % de 200.",
    answer: "90",
    solution: "Étape 1 :\n45 % = 0,45.\n\nÉtape 2 :\n200 × 0,45 = 90.\n\nConclusion : 45 % de 200 = 90."
  },

  {
    question: "Résoudre : x² - 7x + 10 = 0.",
    answer: "x = 2 ou x = 5",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 10 et dont la somme vaut -7.\n\nCes nombres sont -2 et -5.\n\nÉtape 2 :\nx² - 7x + 10 = (x - 2)(x - 5).\n\nÉtape 3 :\n(x - 2)(x - 5) = 0.\n\nDonc :\nx = 2 ou x = 5.\n\nConclusion : les solutions sont 2 et 5."
  },

  {
    question: "Calculer la dérivée de f(x) = 3x⁴.",
    answer: "f'(x) = 12x³",
    solution: "Règle :\n(xⁿ)' = nxⁿ⁻¹.\n\nÉtape 1 :\n(3x⁴)' = 3 × 4x³.\n\nÉtape 2 :\n3 × 4 = 12.\n\nConclusion : f'(x) = 12x³."
  },

  {
    question: "Calculer lim(x→2) (x + 8).",
    answer: "10",
    solution: "La fonction est continue.\n\nÉtape 1 : On remplace x par 2 :\n2 + 8.\n\nÉtape 2 :\n2 + 8 = 10.\n\nConclusion : la limite vaut 10."
  },

  {
    question: "Déterminer une primitive de f(x) = 5x² + 4.",
    answer: "F(x) = (5/3)x³ + 4x + C",
    solution: "Étape 1 : Une primitive de 5x² est :\n(5/3)x³.\n\nEn effet :\n[(5/3)x³]' = 5x².\n\nÉtape 2 : Une primitive de 4 est 4x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (5/3)x³ + 4x + C.\n\nConclusion : F(x) est une primitive de 5x² + 4."
  },

  {
    question: "Calculer 6³.",
    answer: "216",
    solution: "Étape 1 :\n6³ = 6 × 6 × 6.\n\nÉtape 2 :\n6 × 6 = 36.\n\nÉtape 3 :\n36 × 6 = 216.\n\nConclusion : 6³ = 216."
  },

  {
    question: "Résoudre 3ˣ = 27.",
    answer: "x = 3",
    solution: "Étape 1 :\n27 = 3³.\n\nÉtape 2 :\n3ˣ = 3³.\n\nÉtape 3 : Les bases sont identiques :\nx = 3.\n\nConclusion : x = 3."
  },

  {
    question: "Calculer ln(e).",
    answer: "1",
    solution: "Par définition, e¹ = e.\n\nDonc :\nln(e) = 1.\n\nConclusion : le résultat est 1."
  },

  {
    question: "Un capital de 40 000 HTG est placé à 3 % pendant 2 ans à intérêt simple. Calculer l'intérêt.",
    answer: "2 400 HTG",
    solution: "Formule :\nI = C × t × n.\n\nÉtape 1 :\nC = 40 000 HTG.\nt = 3 % = 0,03.\nn = 2.\n\nÉtape 2 :\nI = 40 000 × 0,03 × 2.\n\nÉtape 3 :\n40 000 × 0,03 = 1 200.\n\nÉtape 4 :\n1 200 × 2 = 2 400 HTG.\n\nConclusion : l'intérêt est de 2 400 HTG."
  },

  {
    question: "Calculer la moyenne de 4, 8, 12, 16 et 20.",
    answer: "12",
    solution: "Étape 1 :\n4 + 8 + 12 + 16 + 20 = 60.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n60 ÷ 5 = 12.\n\nConclusion : la moyenne est 12."
  },

  {
    question: "Une urne contient 4 boules rouges et 6 boules noires. Quelle est la probabilité de tirer une boule noire ?",
    answer: "3/5",
    solution: "Étape 1 : Nombre total de boules :\n4 + 6 = 10.\n\nÉtape 2 : Cas favorables : 6 boules noires.\n\nÉtape 3 :\nP(noire) = 6/10.\n\nÉtape 4 : On simplifie par 2 :\n6/10 = 3/5.\n\nConclusion : la probabilité est 3/5, soit 60 %."
  },

  {
    question: "Un bus parcourt 180 km en 3 heures. Calculer sa vitesse moyenne.",
    answer: "60 km/h",
    solution: "Formule :\nv = distance ÷ temps.\n\nÉtape 1 :\nv = 180 ÷ 3.\n\nÉtape 2 :\nv = 60 km/h.\n\nConclusion : la vitesse moyenne est 60 km/h."
  },

  {
    question: "Calculer le périmètre d'un triangle dont les côtés mesurent 10 cm, 12 cm et 15 cm.",
    answer: "37 cm",
    solution: "Étape 1 : On additionne les trois côtés :\n10 + 12 + 15.\n\nÉtape 2 :\n10 + 12 = 22.\n\nÉtape 3 :\n22 + 15 = 37.\n\nConclusion : le périmètre est 37 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 16 cm.",
    answer: "256 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 16².\n\nÉtape 2 :\n16 × 16 = 256.\n\nConclusion : l'aire est 256 cm²."
  },

  {
    question: "Résoudre : 3x + 9 = 30.",
    answer: "x = 7",
    solution: "Étape 1 :\n3x + 9 = 30.\n\nÉtape 2 : On soustrait 9 :\n3x = 21.\n\nÉtape 3 : On divise par 3 :\nx = 7.\n\nVérification :\n3 × 7 + 9 = 30.\n\nConclusion : x = 7."
  },

  {
    question: "Calculer 13².",
    answer: "169",
    solution: "Étape 1 :\n13² = 13 × 13.\n\nÉtape 2 :\n13 × 13 = 169.\n\nConclusion : 13² = 169."
  },

  {
    question: "Calculer √361.",
    answer: "19",
    solution: "Étape 1 : On cherche le nombre dont le carré vaut 361.\n\n19 × 19 = 361.\n\nÉtape 2 :\n√361 = 19.\n\nConclusion : √361 = 19."
  },

  {
    question: "Une suite arithmétique a u₁ = 5 et r = 7. Calculer u₅.",
    answer: "u₅ = 33",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₅ = 5 + (5 - 1) × 7.\n\nÉtape 2 :\n5 - 1 = 4.\n\nÉtape 3 :\n4 × 7 = 28.\n\nÉtape 4 :\n5 + 28 = 33.\n\nConclusion : u₅ = 33."
  },

  {
    question: "Une suite géométrique a u₁ = 2 et q = 3. Calculer u₅.",
    answer: "u₅ = 162",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₅ = 2 × 3⁴.\n\nÉtape 2 :\n3⁴ = 81.\n\nÉtape 3 :\n2 × 81 = 162.\n\nConclusion : u₅ = 162."
  },

  {
    question: "Calculer la probabilité d'obtenir un nombre supérieur ou égal à 5 avec un dé équilibré.",
    answer: "1/3",
    solution: "Les nombres supérieurs ou égaux à 5 sont 5 et 6.\n\nÉtape 1 : Il y a 2 cas favorables.\n\nÉtape 2 : Il y a 6 cas possibles.\n\nÉtape 3 :\nP = 2/6.\n\nÉtape 4 :\n2/6 = 1/3.\n\nConclusion : la probabilité est 1/3."
  },

  {
    question: "Calculer l'aire d'un parallélogramme de base 15 cm et hauteur 8 cm.",
    answer: "120 cm²",
    solution: "Formule :\nA = base × hauteur.\n\nÉtape 1 :\nA = 15 × 8.\n\nÉtape 2 :\nA = 120 cm².\n\nConclusion : l'aire est 120 cm²."
  },

  {
    question: "Calculer 80 % de 250.",
    answer: "200",
    solution: "Étape 1 :\n80 % = 0,80.\n\nÉtape 2 :\n250 × 0,80 = 200.\n\nConclusion : 80 % de 250 = 200."
  },

  {
    question: "Un article coûte 1 200 HTG et augmente de 25 %. Quel est son nouveau prix ?",
    answer: "1 500 HTG",
    solution: "Étape 1 : Calcul de l'augmentation :\n1 200 × 0,25 = 300 HTG.\n\nÉtape 2 : Nouveau prix :\n1 200 + 300 = 1 500 HTG.\n\nConclusion : le nouveau prix est 1 500 HTG."
  },

  {
    question: "Résoudre : x² - 5x + 4 = 0.",
    answer: "x = 1 ou x = 4",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 4 et dont la somme vaut -5.\n\nCes nombres sont -1 et -4.\n\nÉtape 2 :\nx² - 5x + 4 = (x - 1)(x - 4).\n\nÉtape 3 :\n(x - 1)(x - 4) = 0.\n\nDonc :\nx = 1 ou x = 4.\n\nConclusion : les solutions sont 1 et 4."
  },

  {
    question: "Calculer la dérivée de f(x) = 7x³.",
    answer: "f'(x) = 21x²",
    solution: "Règle :\n(xⁿ)' = nxⁿ⁻¹.\n\nÉtape 1 :\n(7x³)' = 7 × 3x².\n\nÉtape 2 :\n7 × 3 = 21.\n\nConclusion : f'(x) = 21x²."
  },

  {
    question: "Calculer lim(x→4) (x² + 1).",
    answer: "17",
    solution: "La fonction est continue.\n\nÉtape 1 :\n4² + 1.\n\nÉtape 2 :\n4² = 16.\n\nÉtape 3 :\n16 + 1 = 17.\n\nConclusion : la limite vaut 17."
  },

  {
    question: "Déterminer une primitive de f(x) = 6x + 2.",
    answer: "F(x) = 3x² + 2x + C",
    solution: "Étape 1 : Une primitive de 6x est 3x² car :\n(3x²)' = 6x.\n\nÉtape 2 : Une primitive de 2 est 2x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = 3x² + 2x + C.\n\nConclusion : F(x) = 3x² + 2x + C."
  },

  {
    question: "Calculer 9³.",
    answer: "729",
    solution: "Étape 1 :\n9³ = 9 × 9 × 9.\n\nÉtape 2 :\n9 × 9 = 81.\n\nÉtape 3 :\n81 × 9 = 729.\n\nConclusion : 9³ = 729."
  },

  {
    question: "Résoudre 4ˣ = 256.",
    answer: "x = 4",
    solution: "Étape 1 :\n256 = 4 × 4 × 4 × 4 = 4⁴.\n\nÉtape 2 :\n4ˣ = 4⁴.\n\nÉtape 3 : Les bases sont identiques :\nx = 4.\n\nConclusion : x = 4."
  },

  {
    question: "Calculer ln(e⁴).",
    answer: "4",
    solution: "On utilise la propriété :\nln(eˣ) = x.\n\nDonc :\nln(e⁴) = 4.\n\nConclusion : le résultat est 4."
  },

  {
    question: "Un capital de 10 000 HTG est placé à 10 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "12 000 HTG",
    solution: "Étape 1 :\nC = 10 000.\nt = 10 % = 0,10.\nn = 2.\n\nÉtape 2 :\nI = C × t × n.\n\nI = 10 000 × 0,10 × 2.\n\nÉtape 3 :\n10 000 × 0,10 = 1 000.\n\n1 000 × 2 = 2 000.\n\nÉtape 4 :\nCapital final = 10 000 + 2 000 = 12 000 HTG.\n\nConclusion : le capital final est 12 000 HTG."
  },

  {
    question: "Calculer la moyenne de 3, 6, 9, 12 et 15.",
    answer: "9",
    solution: "Étape 1 :\n3 + 6 + 9 + 12 + 15 = 45.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n45 ÷ 5 = 9.\n\nConclusion : la moyenne est 9."
  },

  {
    question: "Une urne contient 5 boules vertes et 5 boules rouges. Quelle est la probabilité de tirer une boule verte ?",
    answer: "1/2",
    solution: "Étape 1 : Nombre total de boules :\n5 + 5 = 10.\n\nÉtape 2 : Cas favorables : 5 boules vertes.\n\nÉtape 3 :\nP(verte) = 5/10.\n\nÉtape 4 :\n5/10 = 1/2.\n\nConclusion : la probabilité est 1/2, soit 50 %."
  },

  {
    question: "Un bateau parcourt 240 km en 4 heures. Calculer sa vitesse moyenne.",
    answer: "60 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 240 ÷ 4.\n\nÉtape 2 :\nv = 60 km/h.\n\nConclusion : la vitesse moyenne est 60 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 25 cm et largeur 15 cm.",
    answer: "80 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n25 + 15 = 40.\n\nÉtape 2 :\n2 × 40 = 80.\n\nConclusion : le périmètre est 80 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 25 cm.",
    answer: "625 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 25².\n\nÉtape 2 :\n25 × 25 = 625.\n\nConclusion : l'aire est 625 cm²."
  },

  {
    question: "Résoudre : 7x + 14 = 42.",
    answer: "x = 4",
    solution: "Étape 1 :\n7x + 14 = 42.\n\nÉtape 2 : On soustrait 14 :\n7x = 28.\n\nÉtape 3 : On divise par 7 :\nx = 4.\n\nVérification :\n7 × 4 + 14 = 42.\n\nConclusion : x = 4."
  },

  {
    question: "Calculer 14².",
    answer: "196",
    solution: "Étape 1 :\n14² = 14 × 14.\n\nÉtape 2 :\n14 × 14 = 196.\n\nConclusion : 14² = 196."
  },

  {
    question: "Calculer √400 + √81.",
    answer: "29",
    solution: "Étape 1 :\n√400 = 20.\n\nÉtape 2 :\n√81 = 9.\n\nÉtape 3 :\n20 + 9 = 29.\n\nConclusion : le résultat est 29."
  },

  {
    question: "Une suite arithmétique a u₁ = 10 et r = 3. Calculer u₁₂.",
    answer: "u₁₂ = 43",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₂ = 10 + (12 - 1) × 3.\n\nÉtape 2 :\n12 - 1 = 11.\n\nÉtape 3 :\n11 × 3 = 33.\n\nÉtape 4 :\n10 + 33 = 43.\n\nConclusion : u₁₂ = 43."
  },

  {
    question: "Une suite géométrique a u₁ = 4 et q = 3. Calculer u₄.",
    answer: "u₄ = 108",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₄ = 4 × 3³.\n\nÉtape 2 :\n3³ = 27.\n\nÉtape 3 :\n4 × 27 = 108.\n\nConclusion : u₄ = 108."
  },

  {
    question: "Calculer la probabilité d'obtenir un multiple de 2 avec un dé équilibré.",
    answer: "1/2",
    solution: "Les multiples de 2 sont 2, 4 et 6.\n\nÉtape 1 : Il y a 3 cas favorables.\n\nÉtape 2 : Il y a 6 cas possibles.\n\nÉtape 3 :\nP = 3/6.\n\nÉtape 4 :\n3/6 = 1/2.\n\nConclusion : la probabilité est 1/2, soit 50 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 24 cm et hauteur 5 cm.",
    answer: "60 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (24 × 5) ÷ 2.\n\nÉtape 2 :\n24 × 5 = 120.\n\nÉtape 3 :\n120 ÷ 2 = 60.\n\nConclusion : l'aire est 60 cm²."
  },

  {
    question: "Calculer 90 % de 500.",
    answer: "450",
    solution: "Étape 1 :\n90 % = 0,90.\n\nÉtape 2 :\n500 × 0,90 = 450.\n\nConclusion : 90 % de 500 = 450."
  },

  {
    question: "Un prix de 5 000 HTG diminue de 20 %. Quel est le nouveau prix ?",
    answer: "4 000 HTG",
    solution: "Étape 1 : Calcul de la réduction :\n5 000 × 0,20 = 1 000 HTG.\n\nÉtape 2 : On retire la réduction :\n5 000 - 1 000 = 4 000 HTG.\n\nConclusion : le nouveau prix est 4 000 HTG."
  },

  {
    question: "Résoudre : x² - 8x + 15 = 0.",
    answer: "x = 3 ou x = 5",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 15 et dont la somme vaut -8.\n\nCes nombres sont -3 et -5.\n\nÉtape 2 :\nx² - 8x + 15 = (x - 3)(x - 5).\n\nÉtape 3 :\n(x - 3)(x - 5) = 0.\n\nDonc :\nx = 3 ou x = 5.\n\nConclusion : les solutions sont 3 et 5."
  },

  {
    question: "Calculer la dérivée de f(x) = 5x³ + 2x.",
    answer: "f'(x) = 15x² + 2",
    solution: "Étape 1 :\n(5x³)' = 15x².\n\nÉtape 2 :\n(2x)' = 2.\n\nÉtape 3 :\nf'(x) = 15x² + 2.\n\nConclusion : f'(x) = 15x² + 2."
  },

  {
    question: "Calculer lim(x→5) (x² - x + 2).",
    answer: "22",
    solution: "La fonction est continue.\n\nÉtape 1 : On remplace x par 5 :\n5² - 5 + 2.\n\nÉtape 2 :\n25 - 5 + 2 = 22.\n\nConclusion : la limite vaut 22."
  },

  {
    question: "Déterminer une primitive de f(x) = 4x + 7.",
    answer: "F(x) = 2x² + 7x + C",
    solution: "Étape 1 : Une primitive de 4x est 2x² car :\n(2x²)' = 4x.\n\nÉtape 2 : Une primitive de 7 est 7x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = 2x² + 7x + C.\n\nConclusion : F(x) = 2x² + 7x + C."
  },

  {
    question: "Calculer 8³.",
    answer: "512",
    solution: "Étape 1 :\n8³ = 8 × 8 × 8.\n\nÉtape 2 :\n8 × 8 = 64.\n\nÉtape 3 :\n64 × 8 = 512.\n\nConclusion : 8³ = 512."
  },

  {
    question: "Résoudre 2ˣ = 128.",
    answer: "x = 7",
    solution: "Étape 1 :\n128 = 2⁷.\n\nÉtape 2 :\n2ˣ = 2⁷.\n\nÉtape 3 : Les bases sont identiques :\nx = 7.\n\nConclusion : x = 7."
  },

  {
    question: "Calculer ln(e⁶).",
    answer: "6",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e⁶) = 6.\n\nConclusion : le résultat est 6."
  },

  {
    question: "Un capital de 25 000 HTG est placé à 6 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "28 000 HTG",
    solution: "Étape 1 :\nC = 25 000.\nt = 6 % = 0,06.\nn = 2.\n\nÉtape 2 :\nI = C × t × n.\n\nI = 25 000 × 0,06 × 2.\n\nÉtape 3 :\n25 000 × 0,06 = 1 500.\n\n1 500 × 2 = 3 000.\n\nÉtape 4 :\nCapital final = 25 000 + 3 000 = 28 000 HTG.\n\nConclusion : le capital final est 28 000 HTG."
  },

  {
    question: "Calculer la moyenne de 2, 4, 6, 8 et 10.",
    answer: "6",
    solution: "Étape 1 :\n2 + 4 + 6 + 8 + 10 = 30.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n30 ÷ 5 = 6.\n\nConclusion : la moyenne est 6."
  },

  {
    question: "Une urne contient 9 boules rouges et 1 boule bleue. Quelle est la probabilité de tirer une boule bleue ?",
    answer: "1/10",
    solution: "Étape 1 : Nombre total de boules :\n9 + 1 = 10.\n\nÉtape 2 : Il y a 1 boule bleue.\n\nÉtape 3 :\nP(bleue) = 1/10.\n\nConclusion : la probabilité est 1/10, soit 10 %."
  },

  {
    question: "Un train parcourt 600 km en 8 heures. Calculer sa vitesse moyenne.",
    answer: "75 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 600 ÷ 8.\n\nÉtape 2 :\nv = 75 km/h.\n\nConclusion : la vitesse moyenne est 75 km/h."
  },

  {
    question: "Calculer l'aire d'un rectangle de longueur 40 cm et largeur 5 cm.",
    answer: "200 cm²",
    solution: "Formule :\nA = L × l.\n\nÉtape 1 :\nA = 40 × 5.\n\nÉtape 2 :\nA = 200 cm².\n\nConclusion : l'aire est 200 cm²."
  },

  {
    question: "Calculer le périmètre d'un carré de côté 22 cm.",
    answer: "88 cm",
    solution: "Formule :\nP = 4 × côté.\n\nÉtape 1 :\nP = 4 × 22.\n\nÉtape 2 :\nP = 88 cm.\n\nConclusion : le périmètre est 88 cm."
  },

  {
    question: "Résoudre : 5x + 5 = 30.",
    answer: "x = 5",
    solution: "Étape 1 :\n5x + 5 = 30.\n\nÉtape 2 : On soustrait 5 :\n5x = 25.\n\nÉtape 3 : On divise par 5 :\nx = 5.\n\nVérification :\n5 × 5 + 5 = 30.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 15².",
    answer: "225",
    solution: "Étape 1 :\n15² = 15 × 15.\n\nÉtape 2 :\n15 × 15 = 225.\n\nConclusion : 15² = 225."
  },

  {
    question: "Calculer √625.",
    answer: "25",
    solution: "Étape 1 : On cherche le nombre dont le carré vaut 625.\n\n25 × 25 = 625.\n\nÉtape 2 :\n√625 = 25.\n\nConclusion : √625 = 25."
  },

  {
    question: "Une suite arithmétique a u₁ = 4 et r = 5. Calculer u₁₀.",
    answer: "u₁₀ = 49",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₀ = 4 + (10 - 1) × 5.\n\nÉtape 2 :\n10 - 1 = 9.\n\nÉtape 3 :\n9 × 5 = 45.\n\nÉtape 4 :\n4 + 45 = 49.\n\nConclusion : u₁₀ = 49."
  },

  {
    question: "Une suite géométrique a u₁ = 2 et q = 4. Calculer u₄.",
    answer: "u₄ = 128",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₄ = 2 × 4³.\n\nÉtape 2 :\n4³ = 64.\n\nÉtape 3 :\n2 × 64 = 128.\n\nConclusion : u₄ = 128."
  },

  {
    question: "Calculer la probabilité d'obtenir un nombre pair ou égal à 1 avec un dé équilibré.",
    answer: "2/3",
    solution: "Les nombres pairs sont 2, 4 et 6.\n\nOn ajoute le nombre 1.\n\nLes résultats favorables sont donc :\n1, 2, 4 et 6.\n\nÉtape 1 : Il y a 4 cas favorables.\n\nÉtape 2 : Il y a 6 cas possibles.\n\nÉtape 3 :\nP = 4/6.\n\nÉtape 4 : On simplifie par 2 :\n4/6 = 2/3.\n\nConclusion : la probabilité est 2/3."
  },

  {
    question: "Calculer l'aire d'un triangle de base 30 cm et hauteur 4 cm.",
    answer: "60 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (30 × 4) ÷ 2.\n\nÉtape 2 :\n30 × 4 = 120.\n\nÉtape 3 :\n120 ÷ 2 = 60.\n\nConclusion : l'aire est 60 cm²."
  },

  {
    question: "Calculer 65 % de 200.",
    answer: "130",
    solution: "Étape 1 :\n65 % = 0,65.\n\nÉtape 2 :\n200 × 0,65 = 130.\n\nConclusion : 65 % de 200 = 130."
  },

  {
    question: "Un prix de 4 000 HTG augmente de 10 %. Quel est le nouveau prix ?",
    answer: "4 400 HTG",
    solution: "Étape 1 : Calcul de l'augmentation :\n4 000 × 0,10 = 400 HTG.\n\nÉtape 2 : Nouveau prix :\n4 000 + 400 = 4 400 HTG.\n\nConclusion : le nouveau prix est 4 400 HTG."
  },

  {
    question: "Résoudre : x² - 10x + 21 = 0.",
    answer: "x = 3 ou x = 7",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 21 et dont la somme vaut -10.\n\nCes nombres sont -3 et -7.\n\nÉtape 2 :\nx² - 10x + 21 = (x - 3)(x - 7).\n\nÉtape 3 :\n(x - 3)(x - 7) = 0.\n\nDonc :\nx = 3 ou x = 7.\n\nConclusion : les solutions sont 3 et 7."
  },

  {
    question: "Calculer la dérivée de f(x) = 2x⁴ + x.",
    answer: "f'(x) = 8x³ + 1",
    solution: "Étape 1 :\n(2x⁴)' = 2 × 4x³ = 8x³.\n\nÉtape 2 :\n(x)' = 1.\n\nÉtape 3 :\nf'(x) = 8x³ + 1.\n\nConclusion : f'(x) = 8x³ + 1."
  },

  {
    question: "Calculer lim(x→3) (x³ + 1).",
    answer: "28",
    solution: "La fonction est continue.\n\nÉtape 1 : On remplace x par 3 :\n3³ + 1.\n\nÉtape 2 :\n3³ = 27.\n\nÉtape 3 :\n27 + 1 = 28.\n\nConclusion : la limite vaut 28."
  },

  {
    question: "Déterminer une primitive de f(x) = 3x + 1.",
    answer: "F(x) = (3/2)x² + x + C",
    solution: "Étape 1 : Une primitive de 3x est :\n(3/2)x².\n\nEn effet :\n[(3/2)x²]' = 3x.\n\nÉtape 2 : Une primitive de 1 est x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (3/2)x² + x + C.\n\nConclusion : F(x) est une primitive de 3x + 1."
  },

  {
    question: "Calculer 10⁴.",
    answer: "10 000",
    solution: "Étape 1 :\n10⁴ = 10 × 10 × 10 × 10.\n\nÉtape 2 :\n10 × 10 = 100.\n\nÉtape 3 :\n100 × 10 = 1 000.\n\nÉtape 4 :\n1 000 × 10 = 10 000.\n\nConclusion : 10⁴ = 10 000."
  },

  {
    question: "Résoudre 10ˣ = 0,01.",
    answer: "x = -2",
    solution: "Étape 1 :\n0,01 = 1/100.\n\nÉtape 2 :\n100 = 10².\n\nDonc :\n0,01 = 10⁻².\n\nÉtape 3 :\n10ˣ = 10⁻².\n\nLes bases sont identiques :\nx = -2.\n\nConclusion : x = -2."
  },

  {
    question: "Calculer ln(e⁸).",
    answer: "8",
    solution: "On utilise la propriété :\nln(eˣ) = x.\n\nDonc :\nln(e⁸) = 8.\n\nConclusion : le résultat est 8."
  },

  {
    question: "Un capital de 18 000 HTG est placé à 5 % pendant 3 ans à intérêt simple. Calculer le capital final.",
    answer: "20 700 HTG",
    solution: "Étape 1 :\nC = 18 000.\nt = 5 % = 0,05.\nn = 3.\n\nÉtape 2 :\nI = C × t × n.\n\nI = 18 000 × 0,05 × 3.\n\nÉtape 3 :\n18 000 × 0,05 = 900.\n\n900 × 3 = 2 700.\n\nÉtape 4 :\nCapital final = 18 000 + 2 700 = 20 700 HTG.\n\nConclusion : le capital final est 20 700 HTG."
  },

  {
    question: "Calculer la moyenne de 6, 10, 14, 18 et 22.",
    answer: "14",
    solution: "Étape 1 :\n6 + 10 + 14 + 18 + 22 = 70.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n70 ÷ 5 = 14.\n\nConclusion : la moyenne est 14."
  },

  {
    question: "Une urne contient 3 boules rouges, 4 bleues et 3 vertes. Quelle est la probabilité de tirer une boule bleue ?",
    answer: "2/5",
    solution: "Étape 1 : Nombre total de boules :\n3 + 4 + 3 = 10.\n\nÉtape 2 : Nombre de boules bleues : 4.\n\nÉtape 3 :\nP(bleue) = 4/10.\n\nÉtape 4 : On simplifie par 2 :\n4/10 = 2/5.\n\nConclusion : la probabilité est 2/5, soit 40 %."
  },

  {
    question: "Un cycliste parcourt 120 km en 4 heures. Calculer sa vitesse moyenne.",
    answer: "30 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nd = 120 km.\nt = 4 h.\n\nÉtape 2 :\nv = 120 ÷ 4.\n\nÉtape 3 :\nv = 30 km/h.\n\nConclusion : la vitesse moyenne est 30 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 30 cm et largeur 20 cm.",
    answer: "100 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n30 + 20 = 50.\n\nÉtape 2 :\n2 × 50 = 100.\n\nConclusion : le périmètre est 100 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 30 cm.",
    answer: "900 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 30².\n\nÉtape 2 :\n30 × 30 = 900.\n\nConclusion : l'aire est 900 cm²."
  },

  {
    question: "Résoudre : 4x + 12 = 36.",
    answer: "x = 6",
    solution: "Étape 1 :\n4x + 12 = 36.\n\nÉtape 2 : On soustrait 12 :\n4x = 24.\n\nÉtape 3 : On divise par 4 :\nx = 6.\n\nVérification :\n4 × 6 + 12 = 36.\n\nConclusion : x = 6."
  },

  {
    question: "Calculer 16².",
    answer: "256",
    solution: "Étape 1 :\n16² = 16 × 16.\n\nÉtape 2 :\n16 × 16 = 256.\n\nConclusion : 16² = 256."
  },

  {
    question: "Calculer √729.",
    answer: "27",
    solution: "Étape 1 : On cherche le nombre dont le carré vaut 729.\n\n27 × 27 = 729.\n\nÉtape 2 :\n√729 = 27.\n\nConclusion : √729 = 27."
  },

  {
    question: "Une suite arithmétique a u₁ = 3 et r = 5. Calculer u₈.",
    answer: "u₈ = 38",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₈ = 3 + (8 - 1) × 5.\n\nÉtape 2 :\n8 - 1 = 7.\n\nÉtape 3 :\n7 × 5 = 35.\n\nÉtape 4 :\n3 + 35 = 38.\n\nConclusion : u₈ = 38."
  },

  {
    question: "Une suite géométrique a u₁ = 3 et q = 3. Calculer u₅.",
    answer: "u₅ = 243",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₅ = 3 × 3⁴.\n\nÉtape 2 :\n3⁴ = 81.\n\nÉtape 3 :\n3 × 81 = 243.\n\nConclusion : u₅ = 243."
  },

  {
    question: "Calculer la probabilité d'obtenir un nombre supérieur à 2 et inférieur à 6 avec un dé équilibré.",
    answer: "1/2",
    solution: "Les nombres strictement supérieurs à 2 et strictement inférieurs à 6 sont :\n3, 4 et 5.\n\nÉtape 1 : Il y a 3 cas favorables.\n\nÉtape 2 : Il y a 6 cas possibles.\n\nÉtape 3 :\nP = 3/6 = 1/2.\n\nConclusion : la probabilité est 1/2, soit 50 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 12 cm et hauteur 12 cm.",
    answer: "72 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (12 × 12) ÷ 2.\n\nÉtape 2 :\n12 × 12 = 144.\n\nÉtape 3 :\n144 ÷ 2 = 72.\n\nConclusion : l'aire est 72 cm²."
  },

  {
    question: "Calculer 55 % de 400.",
    answer: "220",
    solution: "Étape 1 :\n55 % = 0,55.\n\nÉtape 2 :\n400 × 0,55 = 220.\n\nConclusion : 55 % de 400 = 220."
  },

  {
    question: "Un prix de 3 000 HTG augmente de 15 %. Quel est le nouveau prix ?",
    answer: "3 450 HTG",
    solution: "Étape 1 : Calcul de l'augmentation :\n3 000 × 0,15 = 450 HTG.\n\nÉtape 2 : Nouveau prix :\n3 000 + 450 = 3 450 HTG.\n\nConclusion : le nouveau prix est 3 450 HTG."
  },

  {
    question: "Résoudre : x² - 11x + 30 = 0.",
    answer: "x = 5 ou x = 6",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 30 et dont la somme vaut -11.\n\nCes nombres sont -5 et -6.\n\nÉtape 2 :\nx² - 11x + 30 = (x - 5)(x - 6).\n\nÉtape 3 :\n(x - 5)(x - 6) = 0.\n\nDonc :\nx = 5 ou x = 6.\n\nConclusion : les solutions sont 5 et 6."
  },

  {
    question: "Calculer la dérivée de f(x) = 4x³ + 5x.",
    answer: "f'(x) = 12x² + 5",
    solution: "Étape 1 :\n(4x³)' = 4 × 3x² = 12x².\n\nÉtape 2 :\n(5x)' = 5.\n\nÉtape 3 :\nf'(x) = 12x² + 5.\n\nConclusion : f'(x) = 12x² + 5."
  },

  {
    question: "Calculer lim(x→1) (2x² + 3).",
    answer: "5",
    solution: "La fonction est continue.\n\nÉtape 1 :\n2(1²) + 3.\n\nÉtape 2 :\n2 × 1 + 3 = 5.\n\nConclusion : la limite vaut 5."
  },

  {
    question: "Déterminer une primitive de f(x) = 8x + 1.",
    answer: "F(x) = 4x² + x + C",
    solution: "Étape 1 : Une primitive de 8x est 4x².\n\nCar :\n(4x²)' = 8x.\n\nÉtape 2 : Une primitive de 1 est x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = 4x² + x + C.\n\nConclusion : F(x) = 4x² + x + C."
  },

  {
    question: "Calculer 12³.",
    answer: "1728",
    solution: "Étape 1 :\n12³ = 12 × 12 × 12.\n\nÉtape 2 :\n12 × 12 = 144.\n\nÉtape 3 :\n144 × 12 = 1 728.\n\nConclusion : 12³ = 1 728."
  },

  {
    question: "Résoudre 3ˣ = 243.",
    answer: "x = 5",
    solution: "Étape 1 :\n243 = 3⁵.\n\nÉtape 2 :\n3ˣ = 3⁵.\n\nÉtape 3 : Les bases sont identiques :\nx = 5.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer ln(e³).",
    answer: "3",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e³) = 3.\n\nConclusion : le résultat est 3."
  },

  {
    question: "Un capital de 15 000 HTG est placé à 4 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "16 200 HTG",
    solution: "Étape 1 :\nC = 15 000.\nt = 4 % = 0,04.\nn = 2.\n\nÉtape 2 :\nI = 15 000 × 0,04 × 2.\n\nÉtape 3 :\n15 000 × 0,04 = 600.\n\n600 × 2 = 1 200.\n\nÉtape 4 :\n15 000 + 1 200 = 16 200 HTG.\n\nConclusion : le capital final est 16 200 HTG."
  },

  {
    question: "Calculer la moyenne de 8, 12, 16, 20 et 24.",
    answer: "16",
    solution: "Étape 1 :\n8 + 12 + 16 + 20 + 24 = 80.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n80 ÷ 5 = 16.\n\nConclusion : la moyenne est 16."
  },

  {
    question: "Une urne contient 2 boules rouges et 8 boules bleues. Quelle est la probabilité de tirer une boule bleue ?",
    answer: "4/5",
    solution: "Étape 1 : Nombre total de boules :\n2 + 8 = 10.\n\nÉtape 2 : Cas favorables : 8 boules bleues.\n\nÉtape 3 :\nP(bleue) = 8/10.\n\nÉtape 4 : On simplifie par 2 :\n8/10 = 4/5.\n\nConclusion : la probabilité est 4/5, soit 80 %."
  },

  {
    question: "Un véhicule parcourt 360 km en 6 heures. Calculer sa vitesse moyenne.",
    answer: "60 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 360 ÷ 6.\n\nÉtape 2 :\nv = 60 km/h.\n\nConclusion : la vitesse moyenne est 60 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 35 cm et largeur 15 cm.",
    answer: "100 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n35 + 15 = 50.\n\nÉtape 2 :\n2 × 50 = 100 cm.\n\nConclusion : le périmètre est 100 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 35 cm.",
    answer: "1225 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 35².\n\nÉtape 2 :\n35 × 35 = 1 225.\n\nConclusion : l'aire est 1 225 cm²."
  },

  {
    question: "Résoudre : 6x + 6 = 42.",
    answer: "x = 6",
    solution: "Étape 1 :\n6x + 6 = 42.\n\nÉtape 2 : On soustrait 6 :\n6x = 36.\n\nÉtape 3 : On divise par 6 :\nx = 6.\n\nVérification :\n6 × 6 + 6 = 42.\n\nConclusion : x = 6."
  },

  {
    question: "Calculer 17².",
    answer: "289",
    solution: "Étape 1 :\n17² = 17 × 17.\n\nÉtape 2 :\n17 × 17 = 289.\n\nConclusion : 17² = 289."
  },

  {
    question: "Calculer √441.",
    answer: "21",
    solution: "Étape 1 :\n21 × 21 = 441.\n\nÉtape 2 :\n√441 = 21.\n\nConclusion : √441 = 21."
  },

  {
    question: "Une suite arithmétique a u₁ = 7 et r = 4. Calculer u₉.",
    answer: "u₉ = 39",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₉ = 7 + (9 - 1) × 4.\n\nÉtape 2 :\n9 - 1 = 8.\n\nÉtape 3 :\n8 × 4 = 32.\n\nÉtape 4 :\n7 + 32 = 39.\n\nConclusion : u₉ = 39."
  },

  {
    question: "Une suite géométrique a u₁ = 5 et q = 3. Calculer u₄.",
    answer: "u₄ = 135",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₄ = 5 × 3³.\n\nÉtape 2 :\n3³ = 27.\n\nÉtape 3 :\n5 × 27 = 135.\n\nConclusion : u₄ = 135."
  },

  {
    question: "Calculer la probabilité d'obtenir un nombre différent de 6 avec un dé équilibré.",
    answer: "5/6",
    solution: "Il y a 6 résultats possibles.\n\nÉtape 1 : Un seul résultat correspond à 6.\n\nÉtape 2 : Les résultats différents de 6 sont 1, 2, 3, 4 et 5.\n\nIl y a donc 5 cas favorables.\n\nÉtape 3 :\nP = 5/6.\n\nConclusion : la probabilité est 5/6, soit environ 83,33 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 16 cm et hauteur 9 cm.",
    answer: "72 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (16 × 9) ÷ 2.\n\nÉtape 2 :\n16 × 9 = 144.\n\nÉtape 3 :\n144 ÷ 2 = 72.\n\nConclusion : l'aire est 72 cm²."
  },

  {
    question: "Calculer 70 % de 300.",
    answer: "210",
    solution: "Étape 1 :\n70 % = 0,70.\n\nÉtape 2 :\n300 × 0,70 = 210.\n\nConclusion : 70 % de 300 = 210."
  },

  {
    question: "Un prix de 2 500 HTG diminue de 20 %. Quel est le nouveau prix ?",
    answer: "2 000 HTG",
    solution: "Étape 1 : Calcul de la réduction :\n2 500 × 0,20 = 500 HTG.\n\nÉtape 2 : Prix final :\n2 500 - 500 = 2 000 HTG.\n\nConclusion : le nouveau prix est 2 000 HTG."
  },

  {
    question: "Résoudre : x² - 12x + 35 = 0.",
    answer: "x = 5 ou x = 7",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 35 et dont la somme vaut -12.\n\nCes nombres sont -5 et -7.\n\nÉtape 2 :\nx² - 12x + 35 = (x - 5)(x - 7).\n\nÉtape 3 :\n(x - 5)(x - 7) = 0.\n\nDonc :\nx = 5 ou x = 7.\n\nConclusion : les solutions sont 5 et 7."
  },

  {
    question: "Calculer la dérivée de f(x) = 2x³ + 6x.",
    answer: "f'(x) = 6x² + 6",
    solution: "Étape 1 :\n(2x³)' = 6x².\n\nÉtape 2 :\n(6x)' = 6.\n\nÉtape 3 :\nf'(x) = 6x² + 6.\n\nConclusion : f'(x) = 6x² + 6."
  },

  {
    question: "Calculer lim(x→4) (3x - 2).",
    answer: "10",
    solution: "La fonction est continue.\n\nÉtape 1 :\n3(4) - 2.\n\nÉtape 2 :\n12 - 2 = 10.\n\nConclusion : la limite vaut 10."
  },

  {
    question: "Déterminer une primitive de f(x) = 10x + 3.",
    answer: "F(x) = 5x² + 3x + C",
    solution: "Étape 1 : Une primitive de 10x est 5x².\n\nCar :\n(5x²)' = 10x.\n\nÉtape 2 : Une primitive de 3 est 3x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = 5x² + 3x + C.\n\nConclusion : F(x) = 5x² + 3x + C."
  },

  {
    question: "Calculer 15³.",
    answer: "3375",
    solution: "Étape 1 :\n15³ = 15 × 15 × 15.\n\nÉtape 2 :\n15 × 15 = 225.\n\nÉtape 3 :\n225 × 15 = 3 375.\n\nConclusion : 15³ = 3 375."
  },

  {
    question: "Résoudre 2ˣ = 256.",
    answer: "x = 8",
    solution: "Étape 1 :\n256 = 2⁸.\n\nÉtape 2 :\n2ˣ = 2⁸.\n\nÉtape 3 : Les bases sont identiques :\nx = 8.\n\nConclusion : x = 8."
  },

  {
    question: "Calculer ln(e⁹).",
    answer: "9",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e⁹) = 9.\n\nConclusion : le résultat est 9."
  },

  {
    question: "Un capital de 10 000 HTG est placé à 4 % pendant 5 ans à intérêt simple. Calculer le capital final.",
    answer: "12 000 HTG",
    solution: "Étape 1 :\nC = 10 000.\nt = 0,04.\nn = 5.\n\nÉtape 2 :\nI = C × t × n.\n\nI = 10 000 × 0,04 × 5.\n\nÉtape 3 :\n10 000 × 0,04 = 400.\n\n400 × 5 = 2 000.\n\nÉtape 4 :\nCapital final = 10 000 + 2 000 = 12 000 HTG.\n\nConclusion : le capital final est 12 000 HTG."
  },

  {
    question: "Calculer la moyenne de 11, 13, 15, 17 et 19.",
    answer: "15",
    solution: "Étape 1 :\n11 + 13 + 15 + 17 + 19 = 75.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n75 ÷ 5 = 15.\n\nConclusion : la moyenne est 15."
  },

  {
    question: "Une urne contient 1 boule rouge et 9 boules blanches. Quelle est la probabilité de tirer la boule rouge ?",
    answer: "1/10",
    solution: "Étape 1 : Nombre total de boules :\n1 + 9 = 10.\n\nÉtape 2 : Il y a 1 cas favorable.\n\nÉtape 3 :\nP(rouge) = 1/10.\n\nConclusion : la probabilité est 1/10, soit 10 %."
  },

  {
    question: "Un véhicule parcourt 240 km en 3 heures. Calculer sa vitesse moyenne.",
    answer: "80 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 240 ÷ 3.\n\nÉtape 2 :\nv = 80 km/h.\n\nConclusion : la vitesse moyenne est 80 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 40 cm et largeur 10 cm.",
    answer: "100 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n40 + 10 = 50.\n\nÉtape 2 :\n2 × 50 = 100 cm.\n\nConclusion : le périmètre est 100 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 40 cm.",
    answer: "1600 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 40².\n\nÉtape 2 :\n40 × 40 = 1 600.\n\nConclusion : l'aire est 1 600 cm²."
  },

  {
    question: "Résoudre : 8x + 8 = 48.",
    answer: "x = 5",
    solution: "Étape 1 :\n8x + 8 = 48.\n\nÉtape 2 : On soustrait 8 :\n8x = 40.\n\nÉtape 3 : On divise par 8 :\nx = 5.\n\nVérification :\n8 × 5 + 8 = 48.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 18².",
    answer: "324",
    solution: "Étape 1 :\n18² = 18 × 18.\n\nÉtape 2 :\n18 × 18 = 324.\n\nConclusion : 18² = 324."
  },

  {
    question: "Calculer √529.",
    answer: "23",
    solution: "Étape 1 :\n23 × 23 = 529.\n\nÉtape 2 :\n√529 = 23.\n\nConclusion : √529 = 23."
  },

  {
    question: "Une suite arithmétique a u₁ = 9 et r = 3. Calculer u₁₀.",
    answer: "u₁₀ = 36",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₀ = 9 + (10 - 1) × 3.\n\nÉtape 2 :\n9 × 3 = 27.\n\nÉtape 3 :\n9 + 27 = 36.\n\nConclusion : u₁₀ = 36."
  },

  {
    question: "Une suite géométrique a u₁ = 2 et q = 5. Calculer u₄.",
    answer: "u₄ = 250",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₄ = 2 × 5³.\n\nÉtape 2 :\n5³ = 125.\n\nÉtape 3 :\n2 × 125 = 250.\n\nConclusion : u₄ = 250."
  },

  {
    question: "Calculer la probabilité d'obtenir un résultat inférieur à 5 avec un dé équilibré.",
    answer: "2/3",
    solution: "Les résultats inférieurs à 5 sont 1, 2, 3 et 4.\n\nÉtape 1 : Il y a 4 cas favorables.\n\nÉtape 2 : Il y a 6 cas possibles.\n\nÉtape 3 :\nP = 4/6.\n\nÉtape 4 : On simplifie par 2 :\n4/6 = 2/3.\n\nConclusion : la probabilité est 2/3, soit environ 66,67 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 14 cm et hauteur 10 cm.",
    answer: "70 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (14 × 10) ÷ 2.\n\nÉtape 2 :\n14 × 10 = 140.\n\nÉtape 3 :\n140 ÷ 2 = 70.\n\nConclusion : l'aire est 70 cm²."
  },

  {
    question: "Calculer 85 % de 200.",
    answer: "170",
    solution: "Étape 1 :\n85 % = 0,85.\n\nÉtape 2 :\n200 × 0,85 = 170.\n\nConclusion : 85 % de 200 = 170."
  },

  {
    question: "Un prix de 6 000 HTG diminue de 15 %. Quel est le nouveau prix ?",
    answer: "5 100 HTG",
    solution: "Étape 1 : Calcul de la réduction :\n6 000 × 0,15 = 900 HTG.\n\nÉtape 2 : Prix final :\n6 000 - 900 = 5 100 HTG.\n\nConclusion : le nouveau prix est 5 100 HTG."
  },

  {
    question: "Résoudre : x² - 13x + 36 = 0.",
    answer: "x = 4 ou x = 9",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 36 et dont la somme vaut -13.\n\nCes nombres sont -4 et -9.\n\nÉtape 2 :\nx² - 13x + 36 = (x - 4)(x - 9).\n\nÉtape 3 :\n(x - 4)(x - 9) = 0.\n\nDonc :\nx = 4 ou x = 9.\n\nConclusion : les solutions sont 4 et 9."
  },

  {
    question: "Calculer la dérivée de f(x) = 9x³ + x.",
    answer: "f'(x) = 27x² + 1",
    solution: "Étape 1 :\n(9x³)' = 9 × 3x² = 27x².\n\nÉtape 2 :\n(x)' = 1.\n\nÉtape 3 :\nf'(x) = 27x² + 1.\n\nConclusion : f'(x) = 27x² + 1."
  },

  {
    question: "Calculer lim(x→2) (5x² - 1).",
    answer: "19",
    solution: "La fonction est continue.\n\nÉtape 1 :\n5(2²) - 1.\n\nÉtape 2 :\n2² = 4.\n\nÉtape 3 :\n5 × 4 - 1 = 20 - 1 = 19.\n\nConclusion : la limite vaut 19."
  },

  {
    question: "Déterminer une primitive de f(x) = 2x² + 3.",
    answer: "F(x) = (2/3)x³ + 3x + C",
    solution: "Étape 1 : Une primitive de 2x² est :\n(2/3)x³.\n\nEn effet :\n[(2/3)x³]' = 2x².\n\nÉtape 2 : Une primitive de 3 est 3x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (2/3)x³ + 3x + C.\n\nConclusion : F(x) est une primitive de 2x² + 3."
  },

  {
    question: "Calculer 20³.",
    answer: "8000",
    solution: "Étape 1 :\n20³ = 20 × 20 × 20.\n\nÉtape 2 :\n20 × 20 = 400.\n\nÉtape 3 :\n400 × 20 = 8 000.\n\nConclusion : 20³ = 8 000."
  },

  {
    question: "Résoudre 5ˣ = 3 125.",
    answer: "x = 5",
    solution: "Étape 1 : On écrit 3 125 comme une puissance de 5.\n\n5⁵ = 5 × 5 × 5 × 5 × 5 = 3 125.\n\nÉtape 2 :\n5ˣ = 5⁵.\n\nÉtape 3 : Les bases sont identiques :\nx = 5.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer ln(e¹⁰).",
    answer: "10",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e¹⁰) = 10.\n\nConclusion : le résultat est 10."
  },

  {
    question: "Un capital de 20 000 HTG est placé à 5 % pendant 3 ans à intérêt simple. Calculer le capital final.",
    answer: "23 000 HTG",
    solution: "Étape 1 :\nC = 20 000.\nt = 5 % = 0,05.\nn = 3.\n\nÉtape 2 :\nI = C × t × n.\n\nI = 20 000 × 0,05 × 3.\n\nÉtape 3 :\n20 000 × 0,05 = 1 000.\n\n1 000 × 3 = 3 000.\n\nÉtape 4 :\n20 000 + 3 000 = 23 000 HTG.\n\nConclusion : le capital final est 23 000 HTG."
  },

  {
    question: "Calculer la moyenne de 1, 3, 5, 7 et 9.",
    answer: "5",
    solution: "Étape 1 :\n1 + 3 + 5 + 7 + 9 = 25.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n25 ÷ 5 = 5.\n\nConclusion : la moyenne est 5."
  },

  {
    question: "Une urne contient 7 boules rouges et 3 boules bleues. Quelle est la probabilité de tirer une boule bleue ?",
    answer: "3/10",
    solution: "Étape 1 : Nombre total de boules :\n7 + 3 = 10.\n\nÉtape 2 : Cas favorables : 3 boules bleues.\n\nÉtape 3 :\nP(bleue) = 3/10.\n\nConclusion : la probabilité est 3/10, soit 30 %."
  },

  {
    question: "Un véhicule parcourt 420 km en 7 heures. Calculer sa vitesse moyenne.",
    answer: "60 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 420 ÷ 7.\n\nÉtape 2 :\nv = 60 km/h.\n\nConclusion : la vitesse moyenne est 60 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 50 cm et largeur 20 cm.",
    answer: "140 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n50 + 20 = 70.\n\nÉtape 2 :\n2 × 70 = 140.\n\nConclusion : le périmètre est 140 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 50 cm.",
    answer: "2500 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 50².\n\nÉtape 2 :\n50 × 50 = 2 500.\n\nConclusion : l'aire est 2 500 cm²."
  },

  {
    question: "Résoudre : 9x + 9 = 54.",
    answer: "x = 5",
    solution: "Étape 1 :\n9x + 9 = 54.\n\nÉtape 2 : On soustrait 9 :\n9x = 45.\n\nÉtape 3 : On divise par 9 :\nx = 5.\n\nVérification :\n9 × 5 + 9 = 54.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 19².",
    answer: "361",
    solution: "Étape 1 :\n19² = 19 × 19.\n\nÉtape 2 :\n19 × 19 = 361.\n\nConclusion : 19² = 361."
  },

  {
    question: "Calculer √676.",
    answer: "26",
    solution: "Étape 1 :\n26 × 26 = 676.\n\nÉtape 2 :\n√676 = 26.\n\nConclusion : √676 = 26."
  },

  {
    question: "Une suite arithmétique a u₁ = 2 et r = 8. Calculer u₆.",
    answer: "u₆ = 42",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₆ = 2 + (6 - 1) × 8.\n\nÉtape 2 :\n6 - 1 = 5.\n\nÉtape 3 :\n5 × 8 = 40.\n\nÉtape 4 :\n2 + 40 = 42.\n\nConclusion : u₆ = 42."
  },

  {
    question: "Une suite géométrique a u₁ = 2 et q = 3. Calculer u₆.",
    answer: "u₆ = 486",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₆ = 2 × 3⁵.\n\nÉtape 2 :\n3⁵ = 243.\n\nÉtape 3 :\n2 × 243 = 486.\n\nConclusion : u₆ = 486."
  },

  {
    question: "Calculer la probabilité d'obtenir exactement un nombre pair en lançant un dé deux fois.",
    answer: "1/2",
    solution: "Un nombre pair a une probabilité de 1/2 et un nombre impair aussi.\n\nPour obtenir exactement un nombre pair, il y a deux cas :\n\nCas 1 : pair puis impair.\nP = 1/2 × 1/2 = 1/4.\n\nCas 2 : impair puis pair.\nP = 1/2 × 1/2 = 1/4.\n\nÉtape 1 : On additionne :\n1/4 + 1/4 = 2/4.\n\nÉtape 2 :\n2/4 = 1/2.\n\nConclusion : la probabilité est 1/2, soit 50 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 22 cm et hauteur 6 cm.",
    answer: "66 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (22 × 6) ÷ 2.\n\nÉtape 2 :\n22 × 6 = 132.\n\nÉtape 3 :\n132 ÷ 2 = 66.\n\nConclusion : l'aire est 66 cm²."
  },

  {
    question: "Calculer 95 % de 200.",
    answer: "190",
    solution: "Étape 1 :\n95 % = 0,95.\n\nÉtape 2 :\n200 × 0,95 = 190.\n\nConclusion : 95 % de 200 = 190."
  },

  {
    question: "Un prix de 10 000 HTG diminue de 10 %. Quel est le nouveau prix ?",
    answer: "9 000 HTG",
    solution: "Étape 1 : Calcul de la réduction :\n10 000 × 0,10 = 1 000 HTG.\n\nÉtape 2 : Prix final :\n10 000 - 1 000 = 9 000 HTG.\n\nConclusion : le nouveau prix est 9 000 HTG."
  },

  {
    question: "Résoudre : x² - 14x + 48 = 0.",
    answer: "x = 6 ou x = 8",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 48 et dont la somme vaut -14.\n\nCes nombres sont -6 et -8.\n\nÉtape 2 :\nx² - 14x + 48 = (x - 6)(x - 8).\n\nÉtape 3 :\n(x - 6)(x - 8) = 0.\n\nDonc :\nx = 6 ou x = 8.\n\nConclusion : les solutions sont 6 et 8."
  },

  {
    question: "Calculer la dérivée de f(x) = 10x³ + 2.",
    answer: "f'(x) = 30x²",
    solution: "Étape 1 :\n(10x³)' = 10 × 3x² = 30x².\n\nÉtape 2 :\n(2)' = 0.\n\nÉtape 3 :\nf'(x) = 30x².\n\nConclusion : f'(x) = 30x²."
  },

  {
    question: "Calculer lim(x→0) (7x² + 4).",
    answer: "4",
    solution: "La fonction est continue.\n\nÉtape 1 :\n7(0²) + 4.\n\nÉtape 2 :\n0 + 4 = 4.\n\nConclusion : la limite vaut 4."
  },

  {
    question: "Déterminer une primitive de f(x) = 12x.",
    answer: "F(x) = 6x² + C",
    solution: "On cherche une fonction dont la dérivée est 12x.\n\nÉtape 1 :\n(6x²)' = 12x.\n\nÉtape 2 : On ajoute la constante C.\n\nDonc :\nF(x) = 6x² + C.\n\nConclusion : F(x) = 6x² + C."
  },

  {
    question: "Calculer 11³.",
    answer: "1331",
    solution: "Étape 1 :\n11³ = 11 × 11 × 11.\n\nÉtape 2 :\n11 × 11 = 121.\n\nÉtape 3 :\n121 × 11 = 1 331.\n\nConclusion : 11³ = 1 331."
  },

  {
    question: "Résoudre 4ˣ = 1/64.",
    answer: "x = -3",
    solution: "Étape 1 :\n64 = 4³.\n\nDonc :\n1/64 = 4⁻³.\n\nÉtape 2 :\n4ˣ = 4⁻³.\n\nÉtape 3 : Les bases sont identiques :\nx = -3.\n\nConclusion : x = -3."
  },

  {
    question: "Calculer ln(e¹²).",
    answer: "12",
    solution: "On utilise la propriété :\nln(eˣ) = x.\n\nDonc :\nln(e¹²) = 12.\n\nConclusion : le résultat est 12."
  },

  {
    question: "Un capital de 30 000 HTG est placé à 5 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "33 000 HTG",
    solution: "Étape 1 :\nC = 30 000.\nt = 5 % = 0,05.\nn = 2.\n\nÉtape 2 :\nI = 30 000 × 0,05 × 2.\n\nÉtape 3 :\n30 000 × 0,05 = 1 500.\n\n1 500 × 2 = 3 000.\n\nÉtape 4 :\n30 000 + 3 000 = 33 000 HTG.\n\nConclusion : le capital final est 33 000 HTG."
  },

  {
    question: "Calculer la moyenne de 10, 15, 20, 25 et 30.",
    answer: "20",
    solution: "Étape 1 :\n10 + 15 + 20 + 25 + 30 = 100.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n100 ÷ 5 = 20.\n\nConclusion : la moyenne est 20."
  },

  {
    question: "Une urne contient 5 boules rouges et 15 boules bleues. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "1/4",
    solution: "Étape 1 : Nombre total de boules :\n5 + 15 = 20.\n\nÉtape 2 : Cas favorables : 5 boules rouges.\n\nÉtape 3 :\nP(rouge) = 5/20.\n\nÉtape 4 : On simplifie par 5 :\n5/20 = 1/4.\n\nConclusion : la probabilité est 1/4, soit 25 %."
  },

  {
    question: "Un véhicule parcourt 150 km en 2,5 heures. Calculer sa vitesse moyenne.",
    answer: "60 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nd = 150 km.\nt = 2,5 h.\n\nÉtape 2 :\nv = 150 ÷ 2,5.\n\nÉtape 3 :\nv = 60 km/h.\n\nConclusion : la vitesse moyenne est 60 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 45 cm et largeur 15 cm.",
    answer: "120 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n45 + 15 = 60.\n\nÉtape 2 :\n2 × 60 = 120 cm.\n\nConclusion : le périmètre est 120 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 45 cm.",
    answer: "2025 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 45².\n\nÉtape 2 :\n45 × 45 = 2 025.\n\nConclusion : l'aire est 2 025 cm²."
  },

  {
    question: "Résoudre : 10x + 10 = 60.",
    answer: "x = 5",
    solution: "Étape 1 :\n10x + 10 = 60.\n\nÉtape 2 : On soustrait 10 :\n10x = 50.\n\nÉtape 3 : On divise par 10 :\nx = 5.\n\nVérification :\n10 × 5 + 10 = 60.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 20².",
    answer: "400",
    solution: "Étape 1 :\n20² = 20 × 20.\n\nÉtape 2 :\n20 × 20 = 400.\n\nConclusion : 20² = 400."
  },

  {
    question: "Calculer √784.",
    answer: "28",
    solution: "Étape 1 :\n28 × 28 = 784.\n\nÉtape 2 :\n√784 = 28.\n\nConclusion : √784 = 28."
  },

  {
    question: "Une suite arithmétique a u₁ = 1 et r = 9. Calculer u₆.",
    answer: "u₆ = 46",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₆ = 1 + (6 - 1) × 9.\n\nÉtape 2 :\n6 - 1 = 5.\n\nÉtape 3 :\n5 × 9 = 45.\n\nÉtape 4 :\n1 + 45 = 46.\n\nConclusion : u₆ = 46."
  },

  {
    question: "Une suite géométrique a u₁ = 1 et q = 4. Calculer u₅.",
    answer: "u₅ = 256",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₅ = 1 × 4⁴.\n\nÉtape 2 :\n4⁴ = 256.\n\nConclusion : u₅ = 256."
  },

  {
    question: "Calculer la probabilité d'obtenir un nombre impair supérieur à 2 avec un dé équilibré.",
    answer: "1/3",
    solution: "Les nombres impairs du dé sont 1, 3 et 5.\n\nParmi eux, ceux qui sont supérieurs à 2 sont 3 et 5.\n\nÉtape 1 : Il y a 2 cas favorables.\n\nÉtape 2 : Il y a 6 cas possibles.\n\nÉtape 3 :\nP = 2/6 = 1/3.\n\nConclusion : la probabilité est 1/3."
  },

  {
    question: "Calculer l'aire d'un triangle de base 25 cm et hauteur 8 cm.",
    answer: "100 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (25 × 8) ÷ 2.\n\nÉtape 2 :\n25 × 8 = 200.\n\nÉtape 3 :\n200 ÷ 2 = 100.\n\nConclusion : l'aire est 100 cm²."
  },

  {
    question: "Calculer 75 % de 800.",
    answer: "600",
    solution: "Étape 1 :\n75 % = 0,75.\n\nÉtape 2 :\n800 × 0,75 = 600.\n\nConclusion : 75 % de 800 = 600."
  },

  {
    question: "Un prix de 8 000 HTG diminue de 25 %. Quel est le nouveau prix ?",
    answer: "6 000 HTG",
    solution: "Étape 1 : Calcul de la réduction :\n8 000 × 0,25 = 2 000 HTG.\n\nÉtape 2 : Prix final :\n8 000 - 2 000 = 6 000 HTG.\n\nConclusion : le nouveau prix est 6 000 HTG."
  },

  {
    question: "Résoudre : x² - 15x + 56 = 0.",
    answer: "x = 7 ou x = 8",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 56 et dont la somme vaut -15.\n\nCes nombres sont -7 et -8.\n\nÉtape 2 :\nx² - 15x + 56 = (x - 7)(x - 8).\n\nÉtape 3 :\n(x - 7)(x - 8) = 0.\n\nDonc :\nx = 7 ou x = 8.\n\nConclusion : les solutions sont 7 et 8."
  },

  {
    question: "Calculer la dérivée de f(x) = 3x⁴ + 2x.",
    answer: "f'(x) = 12x³ + 2",
    solution: "Étape 1 :\n(3x⁴)' = 3 × 4x³ = 12x³.\n\nÉtape 2 :\n(2x)' = 2.\n\nÉtape 3 :\nf'(x) = 12x³ + 2.\n\nConclusion : f'(x) = 12x³ + 2."
  },

  {
    question: "Calculer lim(x→3) (4x² + 2).",
    answer: "38",
    solution: "La fonction est continue.\n\nÉtape 1 :\n4(3²) + 2.\n\nÉtape 2 :\n3² = 9.\n\nÉtape 3 :\n4 × 9 + 2 = 36 + 2 = 38.\n\nConclusion : la limite vaut 38."
  },

  {
    question: "Déterminer une primitive de f(x) = 6x² + 4.",
    answer: "F(x) = 2x³ + 4x + C",
    solution: "Étape 1 : Une primitive de 6x² est 2x³.\n\nCar :\n(2x³)' = 6x².\n\nÉtape 2 : Une primitive de 4 est 4x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = 2x³ + 4x + C.\n\nConclusion : F(x) = 2x³ + 4x + C."
  },

  {
    question: "Calculer 25³.",
    answer: "15625",
    solution: "Étape 1 :\n25³ = 25 × 25 × 25.\n\nÉtape 2 :\n25 × 25 = 625.\n\nÉtape 3 :\n625 × 25 = 15 625.\n\nConclusion : 25³ = 15 625."
  },

  {
    question: "Résoudre 3ˣ = 729.",
    answer: "x = 6",
    solution: "Étape 1 :\n729 = 3⁶.\n\nÉtape 2 :\n3ˣ = 3⁶.\n\nÉtape 3 : Les bases sont identiques :\nx = 6.\n\nConclusion : x = 6."
  },

  {
    question: "Calculer ln(e¹¹).",
    answer: "11",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e¹¹) = 11.\n\nConclusion : le résultat est 11."
  },

  {
    question: "Un capital de 40 000 HTG est placé à 5 % pendant 3 ans à intérêt simple. Calculer le capital final.",
    answer: "46 000 HTG",
    solution: "Étape 1 :\nC = 40 000.\nt = 0,05.\nn = 3.\n\nÉtape 2 :\nI = 40 000 × 0,05 × 3.\n\nÉtape 3 :\n40 000 × 0,05 = 2 000.\n\n2 000 × 3 = 6 000.\n\nÉtape 4 :\n40 000 + 6 000 = 46 000 HTG.\n\nConclusion : le capital final est 46 000 HTG."
  },

  {
    question: "Calculer la moyenne de 14, 16, 18, 20 et 22.",
    answer: "18",
    solution: "Étape 1 :\n14 + 16 + 18 + 20 + 22 = 90.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n90 ÷ 5 = 18.\n\nConclusion : la moyenne est 18."
  },

  {
    question: "Une urne contient 8 boules rouges et 2 boules vertes. Quelle est la probabilité de tirer une boule verte ?",
    answer: "1/5",
    solution: "Étape 1 : Nombre total de boules :\n8 + 2 = 10.\n\nÉtape 2 : Cas favorables : 2 boules vertes.\n\nÉtape 3 :\nP(verte) = 2/10.\n\nÉtape 4 : On simplifie par 2 :\n2/10 = 1/5.\n\nConclusion : la probabilité est 1/5, soit 20 %."
  },

  {
    question: "Un véhicule parcourt 480 km en 6 heures. Calculer sa vitesse moyenne.",
    answer: "80 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 480 ÷ 6.\n\nÉtape 2 :\nv = 80 km/h.\n\nConclusion : la vitesse moyenne est 80 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 60 cm et largeur 20 cm.",
    answer: "160 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n60 + 20 = 80.\n\nÉtape 2 :\n2 × 80 = 160 cm.\n\nConclusion : le périmètre est 160 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 60 cm.",
    answer: "3600 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 60².\n\nÉtape 2 :\n60 × 60 = 3 600.\n\nConclusion : l'aire est 3 600 cm²."
  },

  {
    question: "Résoudre : 5x + 15 = 40.",
    answer: "x = 5",
    solution: "Étape 1 :\n5x + 15 = 40.\n\nÉtape 2 : On soustrait 15 :\n5x = 25.\n\nÉtape 3 : On divise par 5 :\nx = 5.\n\nVérification :\n5 × 5 + 15 = 40.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 21².",
    answer: "441",
    solution: "Étape 1 :\n21² = 21 × 21.\n\nÉtape 2 :\n21 × 21 = 441.\n\nConclusion : 21² = 441."
  },

  {
    question: "Calculer √841.",
    answer: "29",
    solution: "Étape 1 :\n29 × 29 = 841.\n\nÉtape 2 :\n√841 = 29.\n\nConclusion : √841 = 29."
  },

  {
    question: "Une suite arithmétique a u₁ = 5 et r = 5. Calculer u₁₀.",
    answer: "u₁₀ = 50",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₀ = 5 + (10 - 1) × 5.\n\nÉtape 2 :\n9 × 5 = 45.\n\nÉtape 3 :\n5 + 45 = 50.\n\nConclusion : u₁₀ = 50."
  },

  {
    question: "Une suite géométrique a u₁ = 3 et q = 2. Calculer u₈.",
    answer: "u₈ = 384",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₈ = 3 × 2⁷.\n\nÉtape 2 :\n2⁷ = 128.\n\nÉtape 3 :\n3 × 128 = 384.\n\nConclusion : u₈ = 384."
  },

  {
    question: "Calculer la probabilité d'obtenir un nombre inférieur ou égal à 4 avec un dé équilibré.",
    answer: "2/3",
    solution: "Les nombres inférieurs ou égaux à 4 sont 1, 2, 3 et 4.\n\nÉtape 1 : Il y a 4 cas favorables.\n\nÉtape 2 : Il y a 6 cas possibles.\n\nÉtape 3 :\nP = 4/6.\n\nÉtape 4 : On simplifie par 2 :\n4/6 = 2/3.\n\nConclusion : la probabilité est 2/3."
  },

  {
    question: "Calculer l'aire d'un triangle de base 10 cm et hauteur 12 cm.",
    answer: "60 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (10 × 12) ÷ 2.\n\nÉtape 2 :\n10 × 12 = 120.\n\nÉtape 3 :\n120 ÷ 2 = 60.\n\nConclusion : l'aire est 60 cm²."
  },

  {
    question: "Calculer 65 % de 400.",
    answer: "260",
    solution: "Étape 1 :\n65 % = 0,65.\n\nÉtape 2 :\n400 × 0,65 = 260.\n\nConclusion : 65 % de 400 = 260."
  },

  {
    question: "Un prix de 10 000 HTG augmente de 5 %. Quel est le nouveau prix ?",
    answer: "10 500 HTG",
    solution: "Étape 1 : Calcul de l'augmentation :\n10 000 × 0,05 = 500 HTG.\n\nÉtape 2 : Nouveau prix :\n10 000 + 500 = 10 500 HTG.\n\nConclusion : le nouveau prix est 10 500 HTG."
  },

  {
    question: "Résoudre : x² - 16x + 63 = 0.",
    answer: "x = 7 ou x = 9",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 63 et dont la somme vaut -16.\n\nCes nombres sont -7 et -9.\n\nÉtape 2 :\nx² - 16x + 63 = (x - 7)(x - 9).\n\nÉtape 3 :\n(x - 7)(x - 9) = 0.\n\nDonc :\nx = 7 ou x = 9.\n\nConclusion : les solutions sont 7 et 9."
  },

  {
    question: "Calculer la dérivée de f(x) = 4x⁴ + 3x².",
    answer: "f'(x) = 16x³ + 6x",
    solution: "Étape 1 :\n(4x⁴)' = 4 × 4x³ = 16x³.\n\nÉtape 2 :\n(3x²)' = 3 × 2x = 6x.\n\nÉtape 3 :\nf'(x) = 16x³ + 6x.\n\nConclusion : f'(x) = 16x³ + 6x."
  },

  {
    question: "Calculer lim(x→2) (6x + 1).",
    answer: "13",
    solution: "La fonction est continue.\n\nÉtape 1 :\n6(2) + 1.\n\nÉtape 2 :\n12 + 1 = 13.\n\nConclusion : la limite vaut 13."
  },

  {
    question: "Déterminer une primitive de f(x) = 10x² + 5.",
    answer: "F(x) = (10/3)x³ + 5x + C",
    solution: "Étape 1 : Une primitive de 10x² est :\n(10/3)x³.\n\nCar :\n[(10/3)x³]' = 10x².\n\nÉtape 2 : Une primitive de 5 est 5x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (10/3)x³ + 5x + C.\n\nConclusion : F(x) est une primitive de 10x² + 5."
  },

  {
    question: "Calculer 30³.",
    answer: "27000",
    solution: "Étape 1 :\n30³ = 30 × 30 × 30.\n\nÉtape 2 :\n30 × 30 = 900.\n\nÉtape 3 :\n900 × 30 = 27 000.\n\nConclusion : 30³ = 27 000."
  },

  {
    question: "Résoudre 2ˣ = 512.",
    answer: "x = 9",
    solution: "Étape 1 :\n512 = 2⁹.\n\nÉtape 2 :\n2ˣ = 2⁹.\n\nÉtape 3 : Les bases sont identiques :\nx = 9.\n\nConclusion : x = 9."
  },

  {
    question: "Calculer ln(e¹³).",
    answer: "13",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e¹³) = 13.\n\nConclusion : le résultat est 13."
  },

  {
    question: "Un capital de 50 000 HTG est placé à 4 % pendant 3 ans à intérêt simple. Calculer le capital final.",
    answer: "56 000 HTG",
    solution: "Étape 1 :\nC = 50 000.\nt = 4 % = 0,04.\nn = 3.\n\nÉtape 2 :\nI = 50 000 × 0,04 × 3.\n\nÉtape 3 :\n50 000 × 0,04 = 2 000.\n\n2 000 × 3 = 6 000.\n\nÉtape 4 :\n50 000 + 6 000 = 56 000 HTG.\n\nConclusion : le capital final est 56 000 HTG."
  },

  {
    question: "Calculer la moyenne de 5, 10, 15, 20 et 25.",
    answer: "15",
    solution: "Étape 1 :\n5 + 10 + 15 + 20 + 25 = 75.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n75 ÷ 5 = 15.\n\nConclusion : la moyenne est 15."
  },

  {
    question: "Une urne contient 10 boules, dont 4 sont rouges. Quelle est la probabilité de tirer une boule qui n'est pas rouge ?",
    answer: "3/5",
    solution: "Étape 1 : Il y a 10 boules au total.\n\nÉtape 2 : Il y a 4 boules rouges.\n\nDonc le nombre de boules non rouges est :\n10 - 4 = 6.\n\nÉtape 3 :\nP(non rouge) = 6/10.\n\nÉtape 4 : On simplifie par 2 :\n6/10 = 3/5.\n\nConclusion : la probabilité est 3/5, soit 60 %."
  },

  {
    question: "Un véhicule parcourt 600 km en 10 heures. Calculer sa vitesse moyenne.",
    answer: "60 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 600 ÷ 10.\n\nÉtape 2 :\nv = 60 km/h.\n\nConclusion : la vitesse moyenne est 60 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 70 cm et largeur 30 cm.",
    answer: "200 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n70 + 30 = 100.\n\nÉtape 2 :\n2 × 100 = 200 cm.\n\nConclusion : le périmètre est 200 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 70 cm.",
    answer: "4900 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 70².\n\nÉtape 2 :\n70 × 70 = 4 900.\n\nConclusion : l'aire est 4 900 cm²."
  },

  {
    question: "Résoudre : 4x + 16 = 36.",
    answer: "x = 5",
    solution: "Étape 1 :\n4x + 16 = 36.\n\nÉtape 2 : On soustrait 16 :\n4x = 20.\n\nÉtape 3 : On divise par 4 :\nx = 5.\n\nVérification :\n4 × 5 + 16 = 36.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 22².",
    answer: "484",
    solution: "Étape 1 :\n22² = 22 × 22.\n\nÉtape 2 :\n22 × 22 = 484.\n\nConclusion : 22² = 484."
  },

  {
    question: "Calculer √900.",
    answer: "30",
    solution: "Étape 1 :\n30 × 30 = 900.\n\nÉtape 2 :\n√900 = 30.\n\nConclusion : √900 = 30."
  },

  {
    question: "Une suite arithmétique a u₁ = 6 et r = 6. Calculer u₈.",
    answer: "u₈ = 48",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₈ = 6 + (8 - 1) × 6.\n\nÉtape 2 :\n7 × 6 = 42.\n\nÉtape 3 :\n6 + 42 = 48.\n\nConclusion : u₈ = 48."
  },

  {
    question: "Une suite géométrique a u₁ = 2 et q = 2. Calculer u₉.",
    answer: "u₉ = 512",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₉ = 2 × 2⁸.\n\nÉtape 2 :\n2⁸ = 256.\n\nÉtape 3 :\n2 × 256 = 512.\n\nConclusion : u₉ = 512."
  },

  {
    question: "Calculer la probabilité d'obtenir au moins un nombre pair en lançant un dé deux fois.",
    answer: "3/4",
    solution: "On utilise l'événement contraire.\n\nL'événement contraire de 'au moins un nombre pair' est 'obtenir deux nombres impairs'.\n\nÉtape 1 :\nP(impair) = 3/6 = 1/2.\n\nÉtape 2 :\nP(impair et impair) = 1/2 × 1/2 = 1/4.\n\nÉtape 3 :\nP(au moins un pair) = 1 - 1/4.\n\nÉtape 4 :\n1 - 1/4 = 3/4.\n\nConclusion : la probabilité est 3/4, soit 75 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 28 cm et hauteur 5 cm.",
    answer: "70 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (28 × 5) ÷ 2.\n\nÉtape 2 :\n28 × 5 = 140.\n\nÉtape 3 :\n140 ÷ 2 = 70.\n\nConclusion : l'aire est 70 cm²."
  },

  {
    question: "Calculer 45 % de 400.",
    answer: "180",
    solution: "Étape 1 :\n45 % = 0,45.\n\nÉtape 2 :\n400 × 0,45 = 180.\n\nConclusion : 45 % de 400 = 180."
  },

  {
    question: "Un prix de 12 000 HTG augmente de 10 %. Quel est le nouveau prix ?",
    answer: "13 200 HTG",
    solution: "Étape 1 : Calcul de l'augmentation :\n12 000 × 0,10 = 1 200 HTG.\n\nÉtape 2 : Nouveau prix :\n12 000 + 1 200 = 13 200 HTG.\n\nConclusion : le nouveau prix est 13 200 HTG."
  },

  {
    question: "Résoudre : x² - 17x + 72 = 0.",
    answer: "x = 8 ou x = 9",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 72 et dont la somme vaut -17.\n\nCes nombres sont -8 et -9.\n\nÉtape 2 :\nx² - 17x + 72 = (x - 8)(x - 9).\n\nÉtape 3 :\n(x - 8)(x - 9) = 0.\n\nDonc :\nx = 8 ou x = 9.\n\nConclusion : les solutions sont 8 et 9."
  },

  {
    question: "Calculer la dérivée de f(x) = 5x⁴ + 2x².",
    answer: "f'(x) = 20x³ + 4x",
    solution: "Étape 1 :\n(5x⁴)' = 5 × 4x³ = 20x³.\n\nÉtape 2 :\n(2x²)' = 2 × 2x = 4x.\n\nÉtape 3 :\nf'(x) = 20x³ + 4x.\n\nConclusion : f'(x) = 20x³ + 4x."
  },

  {
    question: "Calculer lim(x→1) (5x + 6).",
    answer: "11",
    solution: "La fonction est continue.\n\nÉtape 1 :\n5(1) + 6.\n\nÉtape 2 :\n5 + 6 = 11.\n\nConclusion : la limite vaut 11."
  },

  {
    question: "Déterminer une primitive de f(x) = 4x³ + 2.",
    answer: "F(x) = x⁴ + 2x + C",
    solution: "Étape 1 : Une primitive de 4x³ est x⁴.\n\nCar :\n(x⁴)' = 4x³.\n\nÉtape 2 : Une primitive de 2 est 2x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = x⁴ + 2x + C.\n\nConclusion : F(x) est une primitive de 4x³ + 2."
  },

  {
    question: "Calculer 13³.",
    answer: "2197",
    solution: "Étape 1 :\n13³ = 13 × 13 × 13.\n\nÉtape 2 :\n13 × 13 = 169.\n\nÉtape 3 :\n169 × 13 = 2 197.\n\nConclusion : 13³ = 2 197."
  },

  {
    question: "Résoudre 2ˣ = 1024.",
    answer: "x = 10",
    solution: "Étape 1 :\n1024 = 2¹⁰.\n\nÉtape 2 :\n2ˣ = 2¹⁰.\n\nÉtape 3 : Les bases sont identiques :\nx = 10.\n\nConclusion : x = 10."
  },

  {
    question: "Calculer ln(e¹⁴).",
    answer: "14",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e¹⁴) = 14.\n\nConclusion : le résultat est 14."
  },

  {
    question: "Un capital de 60 000 HTG est placé à 5 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "66 000 HTG",
    solution: "Étape 1 :\nC = 60 000.\nt = 0,05.\nn = 2.\n\nÉtape 2 :\nI = 60 000 × 0,05 × 2.\n\nÉtape 3 :\n60 000 × 0,05 = 3 000.\n\n3 000 × 2 = 6 000.\n\nÉtape 4 :\n60 000 + 6 000 = 66 000 HTG.\n\nConclusion : le capital final est 66 000 HTG."
  },

  {
    question: "Calculer la moyenne de 12, 14, 16, 18 et 20.",
    answer: "16",
    solution: "Étape 1 :\n12 + 14 + 16 + 18 + 20 = 80.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n80 ÷ 5 = 16.\n\nConclusion : la moyenne est 16."
  },

  {
    question: "Une urne contient 6 boules rouges et 4 boules vertes. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "3/5",
    solution: "Étape 1 : Nombre total de boules :\n6 + 4 = 10.\n\nÉtape 2 : Cas favorables : 6 boules rouges.\n\nÉtape 3 :\nP(rouge) = 6/10.\n\nÉtape 4 : On simplifie par 2 :\n6/10 = 3/5.\n\nConclusion : la probabilité est 3/5, soit 60 %."
  },

  {
    question: "Un véhicule parcourt 540 km en 6 heures. Calculer sa vitesse moyenne.",
    answer: "90 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 540 ÷ 6.\n\nÉtape 2 :\nv = 90 km/h.\n\nConclusion : la vitesse moyenne est 90 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 80 cm et largeur 20 cm.",
    answer: "200 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n80 + 20 = 100.\n\nÉtape 2 :\n2 × 100 = 200 cm.\n\nConclusion : le périmètre est 200 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 80 cm.",
    answer: "6400 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 80².\n\nÉtape 2 :\n80 × 80 = 6 400.\n\nConclusion : l'aire est 6 400 cm²."
  },

  {
    question: "Résoudre : 3x + 15 = 30.",
    answer: "x = 5",
    solution: "Étape 1 :\n3x + 15 = 30.\n\nÉtape 2 : On soustrait 15 :\n3x = 15.\n\nÉtape 3 : On divise par 3 :\nx = 5.\n\nVérification :\n3 × 5 + 15 = 30.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 23².",
    answer: "529",
    solution: "Étape 1 :\n23² = 23 × 23.\n\nÉtape 2 :\n23 × 23 = 529.\n\nConclusion : 23² = 529."
  },

  {
    question: "Calculer √961.",
    answer: "31",
    solution: "Étape 1 :\n31 × 31 = 961.\n\nÉtape 2 :\n√961 = 31.\n\nConclusion : √961 = 31."
  },

  {
    question: "Une suite arithmétique a u₁ = 8 et r = 4. Calculer u₁₁.",
    answer: "u₁₁ = 48",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₁ = 8 + (11 - 1) × 4.\n\nÉtape 2 :\n11 - 1 = 10.\n\nÉtape 3 :\n10 × 4 = 40.\n\nÉtape 4 :\n8 + 40 = 48.\n\nConclusion : u₁₁ = 48."
  },

  {
    question: "Une suite géométrique a u₁ = 4 et q = 2. Calculer u₈.",
    answer: "u₈ = 512",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₈ = 4 × 2⁷.\n\nÉtape 2 :\n2⁷ = 128.\n\nÉtape 3 :\n4 × 128 = 512.\n\nConclusion : u₈ = 512."
  },

  {
    question: "Calculer la probabilité d'obtenir un nombre premier avec un dé équilibré.",
    answer: "1/2",
    solution: "Les nombres premiers sur un dé sont 2, 3 et 5.\n\nÉtape 1 : Il y a 3 cas favorables.\n\nÉtape 2 : Il y a 6 cas possibles.\n\nÉtape 3 :\nP = 3/6.\n\nÉtape 4 :\n3/6 = 1/2.\n\nConclusion : la probabilité est 1/2, soit 50 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 32 cm et hauteur 5 cm.",
    answer: "80 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (32 × 5) ÷ 2.\n\nÉtape 2 :\n32 × 5 = 160.\n\nÉtape 3 :\n160 ÷ 2 = 80.\n\nConclusion : l'aire est 80 cm²."
  },

  {
    question: "Calculer 35 % de 400.",
    answer: "140",
    solution: "Étape 1 :\n35 % = 0,35.\n\nÉtape 2 :\n400 × 0,35 = 140.\n\nConclusion : 35 % de 400 = 140."
  },

  {
    question: "Un prix de 7 000 HTG augmente de 20 %. Quel est le nouveau prix ?",
    answer: "8 400 HTG",
    solution: "Étape 1 : Calcul de l'augmentation :\n7 000 × 0,20 = 1 400 HTG.\n\nÉtape 2 : Nouveau prix :\n7 000 + 1 400 = 8 400 HTG.\n\nConclusion : le nouveau prix est 8 400 HTG."
  },

  {
    question: "Résoudre : x² - 18x + 80 = 0.",
    answer: "x = 8 ou x = 10",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 80 et dont la somme vaut -18.\n\nCes nombres sont -8 et -10.\n\nÉtape 2 :\nx² - 18x + 80 = (x - 8)(x - 10).\n\nÉtape 3 :\n(x - 8)(x - 10) = 0.\n\nDonc :\nx = 8 ou x = 10.\n\nConclusion : les solutions sont 8 et 10."
  },

  {
    question: "Calculer la dérivée de f(x) = 6x⁴ + 4x².",
    answer: "f'(x) = 24x³ + 8x",
    solution: "Étape 1 :\n(6x⁴)' = 6 × 4x³ = 24x³.\n\nÉtape 2 :\n(4x²)' = 4 × 2x = 8x.\n\nÉtape 3 :\nf'(x) = 24x³ + 8x.\n\nConclusion : f'(x) = 24x³ + 8x."
  },

  {
    question: "Calculer lim(x→2) (7x + 4).",
    answer: "18",
    solution: "La fonction est continue.\n\nÉtape 1 :\n7(2) + 4.\n\nÉtape 2 :\n14 + 4 = 18.\n\nConclusion : la limite vaut 18."
  },

  {
    question: "Déterminer une primitive de f(x) = 8x² + 1.",
    answer: "F(x) = (8/3)x³ + x + C",
    solution: "Étape 1 : Une primitive de 8x² est :\n(8/3)x³.\n\nCar :\n[(8/3)x³]' = 8x².\n\nÉtape 2 : Une primitive de 1 est x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (8/3)x³ + x + C.\n\nConclusion : F(x) est une primitive de 8x² + 1."
  },

  {
    question: "Calculer 14³.",
    answer: "2744",
    solution: "Étape 1 :\n14³ = 14 × 14 × 14.\n\nÉtape 2 :\n14 × 14 = 196.\n\nÉtape 3 :\n196 × 14 = 2 744.\n\nConclusion : 14³ = 2 744."
  },

  {
    question: "Résoudre 3ˣ = 81.",
    answer: "x = 4",
    solution: "Étape 1 :\n81 = 3⁴.\n\nÉtape 2 :\n3ˣ = 3⁴.\n\nÉtape 3 : Les bases sont identiques :\nx = 4.\n\nConclusion : x = 4."
  },

  {
    question: "Calculer ln(e¹⁵).",
    answer: "15",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e¹⁵) = 15.\n\nConclusion : le résultat est 15."
  },

  {
    question: "Un capital de 70 000 HTG est placé à 4 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "75 600 HTG",
    solution: "Étape 1 :\nC = 70 000.\nt = 4 % = 0,04.\nn = 2.\n\nÉtape 2 :\nI = 70 000 × 0,04 × 2.\n\nÉtape 3 :\n70 000 × 0,04 = 2 800.\n\n2 800 × 2 = 5 600.\n\nÉtape 4 :\n70 000 + 5 600 = 75 600 HTG.\n\nConclusion : le capital final est 75 600 HTG."
  },

  {
    question: "Calculer la moyenne de 16, 18, 20, 22 et 24.",
    answer: "20",
    solution: "Étape 1 :\n16 + 18 + 20 + 22 + 24 = 100.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n100 ÷ 5 = 20.\n\nConclusion : la moyenne est 20."
  },

  {
    question: "Une urne contient 12 boules, dont 3 sont rouges. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "1/4",
    solution: "Étape 1 : Il y a 12 boules au total.\n\nÉtape 2 : Il y a 3 boules rouges.\n\nÉtape 3 :\nP(rouge) = 3/12.\n\nÉtape 4 : On simplifie par 3 :\n3/12 = 1/4.\n\nConclusion : la probabilité est 1/4, soit 25 %."
  },

  {
    question: "Un véhicule parcourt 720 km en 8 heures. Calculer sa vitesse moyenne.",
    answer: "90 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 720 ÷ 8.\n\nÉtape 2 :\nv = 90 km/h.\n\nConclusion : la vitesse moyenne est 90 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 90 cm et largeur 30 cm.",
    answer: "240 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n90 + 30 = 120.\n\nÉtape 2 :\n2 × 120 = 240 cm.\n\nConclusion : le périmètre est 240 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 90 cm.",
    answer: "8100 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 90².\n\nÉtape 2 :\n90 × 90 = 8 100.\n\nConclusion : l'aire est 8 100 cm²."
  },

  {
    question: "Résoudre : 2x + 20 = 40.",
    answer: "x = 10",
    solution: "Étape 1 :\n2x + 20 = 40.\n\nÉtape 2 : On soustrait 20 :\n2x = 20.\n\nÉtape 3 : On divise par 2 :\nx = 10.\n\nVérification :\n2 × 10 + 20 = 40.\n\nConclusion : x = 10."
  },

  {
    question: "Calculer 24².",
    answer: "576",
    solution: "Étape 1 :\n24² = 24 × 24.\n\nÉtape 2 :\n24 × 24 = 576.\n\nConclusion : 24² = 576."
  },

  {
    question: "Calculer √1024.",
    answer: "32",
    solution: "Étape 1 :\n32 × 32 = 1024.\n\nÉtape 2 :\n√1024 = 32.\n\nConclusion : √1024 = 32."
  },

  {
    question: "Une suite arithmétique a u₁ = 10 et r = 5. Calculer u₁₁.",
    answer: "u₁₁ = 60",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₁ = 10 + (11 - 1) × 5.\n\nÉtape 2 :\n10 × 5 = 50.\n\nÉtape 3 :\n10 + 50 = 60.\n\nConclusion : u₁₁ = 60."
  },

  {
    question: "Une suite géométrique a u₁ = 2 et q = 2. Calculer u₁₀.",
    answer: "u₁₀ = 1024",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₁₀ = 2 × 2⁹.\n\nÉtape 2 :\n2⁹ = 512.\n\nÉtape 3 :\n2 × 512 = 1024.\n\nConclusion : u₁₀ = 1024."
  },

  {
    question: "Calculer la probabilité d'obtenir exactement deux nombres pairs en lançant un dé deux fois.",
    answer: "1/4",
    solution: "Pour obtenir deux nombres pairs, il faut obtenir un nombre pair aux deux lancers.\n\nÉtape 1 :\nP(pair) = 3/6 = 1/2.\n\nÉtape 2 : Les deux lancers sont indépendants :\nP(pair et pair) = 1/2 × 1/2.\n\nÉtape 3 :\n1/2 × 1/2 = 1/4.\n\nConclusion : la probabilité est 1/4, soit 25 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 36 cm et hauteur 5 cm.",
    answer: "90 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (36 × 5) ÷ 2.\n\nÉtape 2 :\n36 × 5 = 180.\n\nÉtape 3 :\n180 ÷ 2 = 90.\n\nConclusion : l'aire est 90 cm²."
  },

  {
    question: "Calculer 25 % de 1 000.",
    answer: "250",
    solution: "Étape 1 :\n25 % = 0,25.\n\nÉtape 2 :\n1 000 × 0,25 = 250.\n\nConclusion : 25 % de 1 000 = 250."
  },

  {
    question: "Un prix de 10 000 HTG augmente de 15 %. Quel est le nouveau prix ?",
    answer: "11 500 HTG",
    solution: "Étape 1 : Calcul de l'augmentation :\n10 000 × 0,15 = 1 500 HTG.\n\nÉtape 2 : Nouveau prix :\n10 000 + 1 500 = 11 500 HTG.\n\nConclusion : le nouveau prix est 11 500 HTG."
  },

  {
    question: "Résoudre : x² - 19x + 90 = 0.",
    answer: "x = 9 ou x = 10",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 90 et dont la somme vaut -19.\n\nCes nombres sont -9 et -10.\n\nÉtape 2 :\nx² - 19x + 90 = (x - 9)(x - 10).\n\nÉtape 3 :\n(x - 9)(x - 10) = 0.\n\nDonc :\nx = 9 ou x = 10.\n\nConclusion : les solutions sont 9 et 10."
  },

  {
    question: "Calculer la dérivée de f(x) = 7x⁴ + x².",
    answer: "f'(x) = 28x³ + 2x",
    solution: "Étape 1 :\n(7x⁴)' = 7 × 4x³ = 28x³.\n\nÉtape 2 :\n(x²)' = 2x.\n\nÉtape 3 :\nf'(x) = 28x³ + 2x.\n\nConclusion : f'(x) = 28x³ + 2x."
  },

  {
    question: "Calculer lim(x→3) (5x + 1).",
    answer: "16",
    solution: "La fonction est continue.\n\nÉtape 1 :\n5(3) + 1.\n\nÉtape 2 :\n15 + 1 = 16.\n\nConclusion : la limite vaut 16."
  },

  {
    question: "Déterminer une primitive de f(x) = 5x³ + 2x.",
    answer: "F(x) = (5/4)x⁴ + x² + C",
    solution: "Étape 1 : Une primitive de 5x³ est :\n(5/4)x⁴.\n\nCar :\n[(5/4)x⁴]' = 5x³.\n\nÉtape 2 : Une primitive de 2x est x².\n\nCar :\n(x²)' = 2x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (5/4)x⁴ + x² + C.\n\nConclusion : F(x) est une primitive de 5x³ + 2x."
  },

  {
    question: "Calculer 16³.",
    answer: "4096",
    solution: "Étape 1 :\n16³ = 16 × 16 × 16.\n\nÉtape 2 :\n16 × 16 = 256.\n\nÉtape 3 :\n256 × 16 = 4 096.\n\nConclusion : 16³ = 4 096."
  },

  {
    question: "Résoudre 4ˣ = 1024.",
    answer: "x = 5",
    solution: "Étape 1 :\n1024 = 4⁵.\n\nÉtape 2 :\n4ˣ = 4⁵.\n\nÉtape 3 : Les bases sont identiques :\nx = 5.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer ln(e¹⁶).",
    answer: "16",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e¹⁶) = 16.\n\nConclusion : le résultat est 16."
  },

  {
    question: "Un capital de 80 000 HTG est placé à 5 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "88 000 HTG",
    solution: "Étape 1 :\nC = 80 000.\nt = 0,05.\nn = 2.\n\nÉtape 2 :\nI = 80 000 × 0,05 × 2.\n\nÉtape 3 :\n80 000 × 0,05 = 4 000.\n\n4 000 × 2 = 8 000.\n\nÉtape 4 :\n80 000 + 8 000 = 88 000 HTG.\n\nConclusion : le capital final est 88 000 HTG."
  },

  {
    question: "Calculer la moyenne de 18, 20, 22, 24 et 26.",
    answer: "22",
    solution: "Étape 1 :\n18 + 20 + 22 + 24 + 26 = 110.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n110 ÷ 5 = 22.\n\nConclusion : la moyenne est 22."
  },

  {
    question: "Une urne contient 15 boules, dont 5 sont rouges. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "1/3",
    solution: "Étape 1 : Il y a 15 boules au total.\n\nÉtape 2 : Il y a 5 boules rouges.\n\nÉtape 3 :\nP(rouge) = 5/15.\n\nÉtape 4 : On simplifie par 5 :\n5/15 = 1/3.\n\nConclusion : la probabilité est 1/3, soit environ 33,33 %."
  },

  {
    question: "Un véhicule parcourt 900 km en 10 heures. Calculer sa vitesse moyenne.",
    answer: "90 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 900 ÷ 10.\n\nÉtape 2 :\nv = 90 km/h.\n\nConclusion : la vitesse moyenne est 90 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 100 cm et largeur 50 cm.",
    answer: "300 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n100 + 50 = 150.\n\nÉtape 2 :\n2 × 150 = 300 cm.\n\nConclusion : le périmètre est 300 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 100 cm.",
    answer: "10 000 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 100².\n\nÉtape 2 :\n100 × 100 = 10 000.\n\nConclusion : l'aire est 10 000 cm²."
  },

  {
    question: "Résoudre : 2x + 30 = 50.",
    answer: "x = 10",
    solution: "Étape 1 :\n2x + 30 = 50.\n\nÉtape 2 : On soustrait 30 :\n2x = 20.\n\nÉtape 3 : On divise par 2 :\nx = 10.\n\nVérification :\n2 × 10 + 30 = 50.\n\nConclusion : x = 10."
  },

  {
    question: "Calculer 25².",
    answer: "625",
    solution: "Étape 1 :\n25² = 25 × 25.\n\nÉtape 2 :\n25 × 25 = 625.\n\nConclusion : 25² = 625."
  },

  {
    question: "Calculer √1089.",
    answer: "33",
    solution: "Étape 1 :\n33 × 33 = 1089.\n\nÉtape 2 :\n√1089 = 33.\n\nConclusion : √1089 = 33."
  },

  {
    question: "Une suite arithmétique a u₁ = 4 et r = 6. Calculer u₁₀.",
    answer: "u₁₀ = 58",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₀ = 4 + (10 - 1) × 6.\n\nÉtape 2 :\n9 × 6 = 54.\n\nÉtape 3 :\n4 + 54 = 58.\n\nConclusion : u₁₀ = 58."
  },

  {
    question: "Une suite géométrique a u₁ = 3 et q = 2. Calculer u₉.",
    answer: "u₉ = 768",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₉ = 3 × 2⁸.\n\nÉtape 2 :\n2⁸ = 256.\n\nÉtape 3 :\n3 × 256 = 768.\n\nConclusion : u₉ = 768."
  },

  {
    question: "Calculer la probabilité d'obtenir un nombre multiple de 3 avec un dé équilibré.",
    answer: "1/3",
    solution: "Les multiples de 3 sont 3 et 6.\n\nÉtape 1 : Il y a 2 cas favorables.\n\nÉtape 2 : Il y a 6 cas possibles.\n\nÉtape 3 :\nP = 2/6.\n\nÉtape 4 :\n2/6 = 1/3.\n\nConclusion : la probabilité est 1/3."
  },

  {
    question: "Calculer l'aire d'un triangle de base 40 cm et hauteur 5 cm.",
    answer: "100 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (40 × 5) ÷ 2.\n\nÉtape 2 :\n40 × 5 = 200.\n\nÉtape 3 :\n200 ÷ 2 = 100.\n\nConclusion : l'aire est 100 cm²."
  },

  {
    question: "Calculer 55 % de 500.",
    answer: "275",
    solution: "Étape 1 :\n55 % = 0,55.\n\nÉtape 2 :\n500 × 0,55 = 275.\n\nConclusion : 55 % de 500 = 275."
  },

  {
    question: "Un prix de 20 000 HTG diminue de 10 %. Quel est le nouveau prix ?",
    answer: "18 000 HTG",
    solution: "Étape 1 : Calcul de la réduction :\n20 000 × 0,10 = 2 000 HTG.\n\nÉtape 2 : Prix final :\n20 000 - 2 000 = 18 000 HTG.\n\nConclusion : le nouveau prix est 18 000 HTG."
  },

  {
    question: "Résoudre : x² - 20x + 96 = 0.",
    answer: "x = 8 ou x = 12",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 96 et dont la somme vaut -20.\n\nCes nombres sont -8 et -12.\n\nÉtape 2 :\nx² - 20x + 96 = (x - 8)(x - 12).\n\nÉtape 3 :\n(x - 8)(x - 12) = 0.\n\nDonc :\nx = 8 ou x = 12.\n\nConclusion : les solutions sont 8 et 12."
  },

  {
    question: "Calculer la dérivée de f(x) = 8x³ + 4x.",
    answer: "f'(x) = 24x² + 4",
    solution: "Étape 1 :\n(8x³)' = 8 × 3x² = 24x².\n\nÉtape 2 :\n(4x)' = 4.\n\nÉtape 3 :\nf'(x) = 24x² + 4.\n\nConclusion : f'(x) = 24x² + 4."
  },

  {
    question: "Calculer lim(x→4) (2x² + 3).",
    answer: "35",
    solution: "La fonction est continue.\n\nÉtape 1 :\n2(4²) + 3.\n\nÉtape 2 :\n4² = 16.\n\nÉtape 3 :\n2 × 16 + 3 = 32 + 3 = 35.\n\nConclusion : la limite vaut 35."
  },

  {
    question: "Déterminer une primitive de f(x) = 3x³ + 2x.",
    answer: "F(x) = (3/4)x⁴ + x² + C",
    solution: "Étape 1 : Une primitive de 3x³ est :\n(3/4)x⁴.\n\nCar :\n[(3/4)x⁴]' = 3x³.\n\nÉtape 2 : Une primitive de 2x est x².\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (3/4)x⁴ + x² + C.\n\nConclusion : F(x) est une primitive de 3x³ + 2x."
  },

  {
    question: "Calculer 18³.",
    answer: "5832",
    solution: "Étape 1 :\n18³ = 18 × 18 × 18.\n\nÉtape 2 :\n18 × 18 = 324.\n\nÉtape 3 :\n324 × 18 = 5 832.\n\nConclusion : 18³ = 5 832."
  },

  {
    question: "Résoudre 5ˣ = 3 125.",
    answer: "x = 5",
    solution: "Étape 1 :\n3 125 = 5⁵.\n\nÉtape 2 :\n5ˣ = 5⁵.\n\nÉtape 3 : Les bases sont identiques :\nx = 5.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer ln(e¹⁷).",
    answer: "17",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e¹⁷) = 17.\n\nConclusion : le résultat est 17."
  },

  {
    question: "Un capital de 100 000 HTG est placé à 4 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "108 000 HTG",
    solution: "Étape 1 :\nC = 100 000.\nt = 4 % = 0,04.\nn = 2.\n\nÉtape 2 :\nI = 100 000 × 0,04 × 2.\n\nÉtape 3 :\n100 000 × 0,04 = 4 000.\n\n4 000 × 2 = 8 000.\n\nÉtape 4 :\n100 000 + 8 000 = 108 000 HTG.\n\nConclusion : le capital final est 108 000 HTG."
  },

  {
    question: "Calculer la moyenne de 20, 22, 24, 26 et 28.",
    answer: "24",
    solution: "Étape 1 :\n20 + 22 + 24 + 26 + 28 = 120.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n120 ÷ 5 = 24.\n\nConclusion : la moyenne est 24."
  },

  {
    question: "Une urne contient 20 boules, dont 8 sont rouges. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "2/5",
    solution: "Étape 1 : Nombre total de boules : 20.\n\nÉtape 2 : Nombre de boules rouges : 8.\n\nÉtape 3 :\nP(rouge) = 8/20.\n\nÉtape 4 : On simplifie par 4 :\n8/20 = 2/5.\n\nConclusion : la probabilité est 2/5, soit 40 %."
  },

  {
    question: "Un véhicule parcourt 1 000 km en 10 heures. Calculer sa vitesse moyenne.",
    answer: "100 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 1 000 ÷ 10.\n\nÉtape 2 :\nv = 100 km/h.\n\nConclusion : la vitesse moyenne est 100 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 100 cm et largeur 25 cm.",
    answer: "250 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n100 + 25 = 125.\n\nÉtape 2 :\n2 × 125 = 250 cm.\n\nConclusion : le périmètre est 250 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 100 cm.",
    answer: "10 000 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 100².\n\nÉtape 2 :\n100 × 100 = 10 000.\n\nConclusion : l'aire est 10 000 cm²."
  },

  {
    question: "Résoudre : 4x + 4 = 24.",
    answer: "x = 5",
    solution: "Étape 1 :\n4x + 4 = 24.\n\nÉtape 2 : On soustrait 4 :\n4x = 20.\n\nÉtape 3 : On divise par 4 :\nx = 5.\n\nVérification :\n4 × 5 + 4 = 24.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 26².",
    answer: "676",
    solution: "Étape 1 :\n26² = 26 × 26.\n\nÉtape 2 :\n26 × 26 = 676.\n\nConclusion : 26² = 676."
  },

  {
    question: "Calculer √1156.",
    answer: "34",
    solution: "Étape 1 :\n34 × 34 = 1156.\n\nÉtape 2 :\n√1156 = 34.\n\nConclusion : √1156 = 34."
  },

  {
    question: "Une suite arithmétique a u₁ = 10 et r = 4. Calculer u₁₂.",
    answer: "u₁₂ = 54",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₂ = 10 + (12 - 1) × 4.\n\nÉtape 2 :\n11 × 4 = 44.\n\nÉtape 3 :\n10 + 44 = 54.\n\nConclusion : u₁₂ = 54."
  },

  {
    question: "Une suite géométrique a u₁ = 5 et q = 2. Calculer u₈.",
    answer: "u₈ = 640",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₈ = 5 × 2⁷.\n\nÉtape 2 :\n2⁷ = 128.\n\nÉtape 3 :\n5 × 128 = 640.\n\nConclusion : u₈ = 640."
  },

  {
    question: "Calculer la probabilité d'obtenir au moins un 6 en lançant un dé deux fois.",
    answer: "11/36",
    solution: "On utilise l'événement contraire.\n\nL'événement contraire de 'au moins un 6' est 'aucun 6'.\n\nÉtape 1 : La probabilité de ne pas obtenir 6 sur un lancer est :\n5/6.\n\nÉtape 2 : Pour deux lancers sans aucun 6 :\nP = 5/6 × 5/6 = 25/36.\n\nÉtape 3 :\nP(au moins un 6) = 1 - 25/36.\n\nÉtape 4 :\n1 = 36/36.\n\nDonc :\n36/36 - 25/36 = 11/36.\n\nConclusion : la probabilité est 11/36."
  },

  {
    question: "Calculer l'aire d'un triangle de base 50 cm et hauteur 4 cm.",
    answer: "100 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (50 × 4) ÷ 2.\n\nÉtape 2 :\n50 × 4 = 200.\n\nÉtape 3 :\n200 ÷ 2 = 100.\n\nConclusion : l'aire est 100 cm²."
  },

  {
    question: "Calculer 30 % de 1 000.",
    answer: "300",
    solution: "Étape 1 :\n30 % = 0,30.\n\nÉtape 2 :\n1 000 × 0,30 = 300.\n\nConclusion : 30 % de 1 000 = 300."
  },

  {
    question: "Un prix de 15 000 HTG diminue de 20 %. Quel est le nouveau prix ?",
    answer: "12 000 HTG",
    solution: "Étape 1 : Calcul de la réduction :\n15 000 × 0,20 = 3 000 HTG.\n\nÉtape 2 : Prix final :\n15 000 - 3 000 = 12 000 HTG.\n\nConclusion : le nouveau prix est 12 000 HTG."
  },

  {
    question: "Résoudre : x² - 21x + 110 = 0.",
    answer: "x = 10 ou x = 11",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 110 et dont la somme vaut -21.\n\nCes nombres sont -10 et -11.\n\nÉtape 2 :\nx² - 21x + 110 = (x - 10)(x - 11).\n\nÉtape 3 :\n(x - 10)(x - 11) = 0.\n\nDonc :\nx = 10 ou x = 11.\n\nConclusion : les solutions sont 10 et 11."
  },

  {
    question: "Calculer la dérivée de f(x) = 9x⁴ + 5x².",
    answer: "f'(x) = 36x³ + 10x",
    solution: "Étape 1 :\n(9x⁴)' = 9 × 4x³ = 36x³.\n\nÉtape 2 :\n(5x²)' = 5 × 2x = 10x.\n\nÉtape 3 :\nf'(x) = 36x³ + 10x.\n\nConclusion : f'(x) = 36x³ + 10x."
  },

  {
    question: "Calculer lim(x→5) (2x + 4).",
    answer: "14",
    solution: "La fonction est continue.\n\nÉtape 1 :\n2(5) + 4.\n\nÉtape 2 :\n10 + 4 = 14.\n\nConclusion : la limite vaut 14."
  },

  {
    question: "Déterminer une primitive de f(x) = 7x³ + 3x.",
    answer: "F(x) = (7/4)x⁴ + (3/2)x² + C",
    solution: "Étape 1 : Une primitive de 7x³ est :\n(7/4)x⁴.\n\nCar :\n[(7/4)x⁴]' = 7x³.\n\nÉtape 2 : Une primitive de 3x est :\n(3/2)x².\n\nCar :\n[(3/2)x²]' = 3x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (7/4)x⁴ + (3/2)x² + C.\n\nConclusion : F(x) est une primitive de 7x³ + 3x."
  },

  {
    question: "Calculer 17³.",
    answer: "4913",
    solution: "Étape 1 :\n17³ = 17 × 17 × 17.\n\nÉtape 2 :\n17 × 17 = 289.\n\nÉtape 3 :\n289 × 17 = 4 913.\n\nConclusion : 17³ = 4 913."
  },

  {
    question: "Résoudre 2ˣ = 2048.",
    answer: "x = 11",
    solution: "Étape 1 :\n2048 = 2¹¹.\n\nÉtape 2 :\n2ˣ = 2¹¹.\n\nÉtape 3 : Les bases sont identiques :\nx = 11.\n\nConclusion : x = 11."
  },

  {
    question: "Calculer ln(e¹⁸).",
    answer: "18",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e¹⁸) = 18.\n\nConclusion : le résultat est 18."
  },

  {
    question: "Un capital de 90 000 HTG est placé à 4 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "97 200 HTG",
    solution: "Étape 1 :\nC = 90 000.\nt = 0,04.\nn = 2.\n\nÉtape 2 :\nI = 90 000 × 0,04 × 2.\n\nÉtape 3 :\n90 000 × 0,04 = 3 600.\n\n3 600 × 2 = 7 200.\n\nÉtape 4 :\n90 000 + 7 200 = 97 200 HTG.\n\nConclusion : le capital final est 97 200 HTG."
  },

  {
    question: "Calculer la moyenne de 21, 23, 25, 27 et 29.",
    answer: "25",
    solution: "Étape 1 :\n21 + 23 + 25 + 27 + 29 = 125.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n125 ÷ 5 = 25.\n\nConclusion : la moyenne est 25."
  },

  {
    question: "Une urne contient 20 boules, dont 5 sont vertes. Quelle est la probabilité de tirer une boule verte ?",
    answer: "1/4",
    solution: "Étape 1 : Nombre total de boules : 20.\n\nÉtape 2 : Nombre de boules vertes : 5.\n\nÉtape 3 :\nP(verte) = 5/20.\n\nÉtape 4 : On simplifie par 5 :\n5/20 = 1/4.\n\nConclusion : la probabilité est 1/4, soit 25 %."
  },

  {
    question: "Un véhicule parcourt 1 200 km en 12 heures. Calculer sa vitesse moyenne.",
    answer: "100 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 1 200 ÷ 12.\n\nÉtape 2 :\nv = 100 km/h.\n\nConclusion : la vitesse moyenne est 100 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 120 cm et largeur 40 cm.",
    answer: "320 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n120 + 40 = 160.\n\nÉtape 2 :\n2 × 160 = 320 cm.\n\nConclusion : le périmètre est 320 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 120 cm.",
    answer: "14 400 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 120².\n\nÉtape 2 :\n120 × 120 = 14 400.\n\nConclusion : l'aire est 14 400 cm²."
  },

  {
    question: "Résoudre : 5x + 20 = 45.",
    answer: "x = 5",
    solution: "Étape 1 :\n5x + 20 = 45.\n\nÉtape 2 : On soustrait 20 :\n5x = 25.\n\nÉtape 3 : On divise par 5 :\nx = 5.\n\nVérification :\n5 × 5 + 20 = 45.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 27².",
    answer: "729",
    solution: "Étape 1 :\n27² = 27 × 27.\n\nÉtape 2 :\n27 × 27 = 729.\n\nConclusion : 27² = 729."
  },

  {
    question: "Calculer √1225.",
    answer: "35",
    solution: "Étape 1 :\n35 × 35 = 1225.\n\nÉtape 2 :\n√1225 = 35.\n\nConclusion : √1225 = 35."
  },

  {
    question: "Une suite arithmétique a u₁ = 2 et r = 10. Calculer u₆.",
    answer: "u₆ = 52",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₆ = 2 + (6 - 1) × 10.\n\nÉtape 2 :\n5 × 10 = 50.\n\nÉtape 3 :\n2 + 50 = 52.\n\nConclusion : u₆ = 52."
  },

  {
    question: "Une suite géométrique a u₁ = 1 et q = 5. Calculer u₆.",
    answer: "u₆ = 3125",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₆ = 1 × 5⁵.\n\nÉtape 2 :\n5⁵ = 3 125.\n\nConclusion : u₆ = 3 125."
  },

  {
    question: "Calculer la probabilité d'obtenir au moins un nombre impair en lançant un dé deux fois.",
    answer: "3/4",
    solution: "On utilise l'événement contraire.\n\nL'événement contraire de 'au moins un impair' est 'deux nombres pairs'.\n\nÉtape 1 :\nP(pair) = 1/2.\n\nÉtape 2 :\nP(pair et pair) = 1/2 × 1/2 = 1/4.\n\nÉtape 3 :\nP(au moins un impair) = 1 - 1/4.\n\nÉtape 4 :\n1 - 1/4 = 3/4.\n\nConclusion : la probabilité est 3/4, soit 75 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 60 cm et hauteur 3 cm.",
    answer: "90 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (60 × 3) ÷ 2.\n\nÉtape 2 :\n60 × 3 = 180.\n\nÉtape 3 :\n180 ÷ 2 = 90.\n\nConclusion : l'aire est 90 cm²."
  },

  {
    question: "Calculer 40 % de 1 000.",
    answer: "400",
    solution: "Étape 1 :\n40 % = 0,40.\n\nÉtape 2 :\n1 000 × 0,40 = 400.\n\nConclusion : 40 % de 1 000 = 400."
  },

  {
    question: "Un prix de 20 000 HTG augmente de 10 %. Quel est le nouveau prix ?",
    answer: "22 000 HTG",
    solution: "Étape 1 : Calcul de l'augmentation :\n20 000 × 0,10 = 2 000 HTG.\n\nÉtape 2 : Nouveau prix :\n20 000 + 2 000 = 22 000 HTG.\n\nConclusion : le nouveau prix est 22 000 HTG."
  },

  {
    question: "Résoudre : x² - 22x + 120 = 0.",
    answer: "x = 10 ou x = 12",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 120 et dont la somme vaut -22.\n\nCes nombres sont -10 et -12.\n\nÉtape 2 :\nx² - 22x + 120 = (x - 10)(x - 12).\n\nÉtape 3 :\n(x - 10)(x - 12) = 0.\n\nDonc :\nx = 10 ou x = 12.\n\nConclusion : les solutions sont 10 et 12."
  },

  {
    question: "Calculer la dérivée de f(x) = 10x⁴ + 2x³.",
    answer: "f'(x) = 40x³ + 6x²",
    solution: "Étape 1 :\n(10x⁴)' = 10 × 4x³ = 40x³.\n\nÉtape 2 :\n(2x³)' = 2 × 3x² = 6x².\n\nÉtape 3 :\nf'(x) = 40x³ + 6x².\n\nConclusion : f'(x) = 40x³ + 6x²."
  },

  {
    question: "Calculer lim(x→6) (2x + 3).",
    answer: "15",
    solution: "La fonction est continue.\n\nÉtape 1 :\n2(6) + 3.\n\nÉtape 2 :\n12 + 3 = 15.\n\nConclusion : la limite vaut 15."
  },

  {
    question: "Déterminer une primitive de f(x) = 9x² + 2x.",
    answer: "F(x) = 3x³ + x² + C",
    solution: "Étape 1 : Une primitive de 9x² est 3x³.\n\nCar :\n(3x³)' = 9x².\n\nÉtape 2 : Une primitive de 2x est x².\n\nCar :\n(x²)' = 2x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = 3x³ + x² + C.\n\nConclusion : F(x) est une primitive de 9x² + 2x."
  },

  {
    question: "Calculer 19³.",
    answer: "6859",
    solution: "Étape 1 :\n19³ = 19 × 19 × 19.\n\nÉtape 2 :\n19 × 19 = 361.\n\nÉtape 3 :\n361 × 19 = 6 859.\n\nConclusion : 19³ = 6 859."
  },

  {
    question: "Résoudre 3ˣ = 2187.",
    answer: "x = 7",
    solution: "Étape 1 :\n2187 = 3⁷.\n\nÉtape 2 :\n3ˣ = 3⁷.\n\nÉtape 3 : Les bases sont identiques :\nx = 7.\n\nConclusion : x = 7."
  },

  {
    question: "Calculer ln(e²⁰).",
    answer: "20",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e²⁰) = 20.\n\nConclusion : le résultat est 20."
  },

  {
    question: "Un capital de 100 000 HTG est placé à 5 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "110 000 HTG",
    solution: "Étape 1 :\nC = 100 000.\nt = 0,05.\nn = 2.\n\nÉtape 2 :\nI = 100 000 × 0,05 × 2.\n\nÉtape 3 :\n100 000 × 0,05 = 5 000.\n\n5 000 × 2 = 10 000.\n\nÉtape 4 :\n100 000 + 10 000 = 110 000 HTG.\n\nConclusion : le capital final est 110 000 HTG."
  },

  {
    question: "Calculer la moyenne de 25, 27, 29, 31 et 33.",
    answer: "29",
    solution: "Étape 1 :\n25 + 27 + 29 + 31 + 33 = 145.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n145 ÷ 5 = 29.\n\nConclusion : la moyenne est 29."
  },

  {
    question: "Une urne contient 25 boules, dont 10 sont rouges. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "2/5",
    solution: "Étape 1 : Il y a 25 boules au total.\n\nÉtape 2 : Il y a 10 boules rouges.\n\nÉtape 3 :\nP(rouge) = 10/25.\n\nÉtape 4 : On simplifie par 5 :\n10/25 = 2/5.\n\nConclusion : la probabilité est 2/5, soit 40 %."
  },

  {
    question: "Un véhicule parcourt 1 500 km en 15 heures. Calculer sa vitesse moyenne.",
    answer: "100 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 1 500 ÷ 15.\n\nÉtape 2 :\nv = 100 km/h.\n\nConclusion : la vitesse moyenne est 100 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 150 cm et largeur 50 cm.",
    answer: "400 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n150 + 50 = 200.\n\nÉtape 2 :\n2 × 200 = 400 cm.\n\nConclusion : le périmètre est 400 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 150 cm.",
    answer: "22 500 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 150².\n\nÉtape 2 :\n150 × 150 = 22 500.\n\nConclusion : l'aire est 22 500 cm²."
  },

  {
    question: "Résoudre : 3x + 21 = 36.",
    answer: "x = 5",
    solution: "Étape 1 :\n3x + 21 = 36.\n\nÉtape 2 : On soustrait 21 :\n3x = 15.\n\nÉtape 3 : On divise par 3 :\nx = 5.\n\nVérification :\n3 × 5 + 21 = 36.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 28².",
    answer: "784",
    solution: "Étape 1 :\n28² = 28 × 28.\n\nÉtape 2 :\n28 × 28 = 784.\n\nConclusion : 28² = 784."
  },

  {
    question: "Calculer √1296.",
    answer: "36",
    solution: "Étape 1 :\n36 × 36 = 1296.\n\nÉtape 2 :\n√1296 = 36.\n\nConclusion : √1296 = 36."
  },

  {
    question: "Une suite arithmétique a u₁ = 5 et r = 6. Calculer u₁₀.",
    answer: "u₁₀ = 59",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₀ = 5 + (10 - 1) × 6.\n\nÉtape 2 :\n9 × 6 = 54.\n\nÉtape 3 :\n5 + 54 = 59.\n\nConclusion : u₁₀ = 59."
  },

  {
    question: "Une suite géométrique a u₁ = 2 et q = 3. Calculer u₇.",
    answer: "u₇ = 1458",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₇ = 2 × 3⁶.\n\nÉtape 2 :\n3⁶ = 729.\n\nÉtape 3 :\n2 × 729 = 1 458.\n\nConclusion : u₇ = 1 458."
  },

  {
    question: "Calculer la probabilité d'obtenir deux nombres impairs en lançant un dé deux fois.",
    answer: "1/4",
    solution: "La probabilité d'obtenir un nombre impair avec un dé est 1/2.\n\nÉtape 1 :\nP(impair) = 1/2.\n\nÉtape 2 : Pour deux lancers indépendants :\nP(impair et impair) = 1/2 × 1/2.\n\nÉtape 3 :\n1/2 × 1/2 = 1/4.\n\nConclusion : la probabilité est 1/4, soit 25 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 44 cm et hauteur 5 cm.",
    answer: "110 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (44 × 5) ÷ 2.\n\nÉtape 2 :\n44 × 5 = 220.\n\nÉtape 3 :\n220 ÷ 2 = 110.\n\nConclusion : l'aire est 110 cm²."
  },

  {
    question: "Calculer 60 % de 1 000.",
    answer: "600",
    solution: "Étape 1 :\n60 % = 0,60.\n\nÉtape 2 :\n1 000 × 0,60 = 600.\n\nConclusion : 60 % de 1 000 = 600."
  },

  {
    question: "Un prix de 30 000 HTG diminue de 10 %. Quel est le nouveau prix ?",
    answer: "27 000 HTG",
    solution: "Étape 1 : Calcul de la réduction :\n30 000 × 0,10 = 3 000 HTG.\n\nÉtape 2 : Prix final :\n30 000 - 3 000 = 27 000 HTG.\n\nConclusion : le nouveau prix est 27 000 HTG."
  },

  {
    question: "Résoudre : x² - 23x + 132 = 0.",
    answer: "x = 11 ou x = 12",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 132 et dont la somme vaut -23.\n\nCes nombres sont -11 et -12.\n\nÉtape 2 :\nx² - 23x + 132 = (x - 11)(x - 12).\n\nÉtape 3 :\n(x - 11)(x - 12) = 0.\n\nDonc :\nx = 11 ou x = 12.\n\nConclusion : les solutions sont 11 et 12."
  },

  {
    question: "Calculer la dérivée de f(x) = 11x³ + 3x.",
    answer: "f'(x) = 33x² + 3",
    solution: "Étape 1 :\n(11x³)' = 11 × 3x² = 33x².\n\nÉtape 2 :\n(3x)' = 3.\n\nÉtape 3 :\nf'(x) = 33x² + 3.\n\nConclusion : f'(x) = 33x² + 3."
  },

  {
    question: "Calculer lim(x→7) (2x + 1).",
    answer: "15",
    solution: "La fonction est continue.\n\nÉtape 1 :\n2(7) + 1.\n\nÉtape 2 :\n14 + 1 = 15.\n\nConclusion : la limite vaut 15."
  },

  {
    question: "Déterminer une primitive de f(x) = 4x² + 6x.",
    answer: "F(x) = (4/3)x³ + 3x² + C",
    solution: "Étape 1 : Une primitive de 4x² est (4/3)x³.\n\nCar :\n[(4/3)x³]' = 4x².\n\nÉtape 2 : Une primitive de 6x est 3x².\n\nCar :\n(3x²)' = 6x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (4/3)x³ + 3x² + C.\n\nConclusion : F(x) est une primitive de 4x² + 6x."
  },

  {
    question: "Calculer 21³.",
    answer: "9261",
    solution: "Étape 1 :\n21³ = 21 × 21 × 21.\n\nÉtape 2 :\n21 × 21 = 441.\n\nÉtape 3 :\n441 × 21 = 9 261.\n\nConclusion : 21³ = 9 261."
  },

  {
    question: "Résoudre 5ˣ = 15 625.",
    answer: "x = 6",
    solution: "Étape 1 :\n15 625 = 5⁶.\n\nÉtape 2 :\n5ˣ = 5⁶.\n\nÉtape 3 : Les bases sont identiques :\nx = 6.\n\nConclusion : x = 6."
  },

  {
    question: "Calculer ln(e²¹).",
    answer: "21",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e²¹) = 21.\n\nConclusion : le résultat est 21."
  },

  {
    question: "Un capital de 120 000 HTG est placé à 5 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "132 000 HTG",
    solution: "Étape 1 :\nC = 120 000.\nt = 0,05.\nn = 2.\n\nÉtape 2 :\nI = 120 000 × 0,05 × 2.\n\nÉtape 3 :\n120 000 × 0,05 = 6 000.\n\n6 000 × 2 = 12 000.\n\nÉtape 4 :\n120 000 + 12 000 = 132 000 HTG.\n\nConclusion : le capital final est 132 000 HTG."
  },

  {
    question: "Calculer la moyenne de 30, 32, 34, 36 et 38.",
    answer: "34",
    solution: "Étape 1 :\n30 + 32 + 34 + 36 + 38 = 170.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n170 ÷ 5 = 34.\n\nConclusion : la moyenne est 34."
  },

  {
    question: "Une urne contient 30 boules, dont 10 sont rouges. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "1/3",
    solution: "Étape 1 : Il y a 30 boules au total.\n\nÉtape 2 : Il y a 10 boules rouges.\n\nÉtape 3 :\nP(rouge) = 10/30.\n\nÉtape 4 : On simplifie par 10 :\n10/30 = 1/3.\n\nConclusion : la probabilité est 1/3, soit environ 33,33 %."
  },

  {
    question: "Un véhicule parcourt 1 800 km en 20 heures. Calculer sa vitesse moyenne.",
    answer: "90 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 1 800 ÷ 20.\n\nÉtape 2 :\nv = 90 km/h.\n\nConclusion : la vitesse moyenne est 90 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 200 cm et largeur 50 cm.",
    answer: "500 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n200 + 50 = 250.\n\nÉtape 2 :\n2 × 250 = 500 cm.\n\nConclusion : le périmètre est 500 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 200 cm.",
    answer: "40 000 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 200².\n\nÉtape 2 :\n200 × 200 = 40 000.\n\nConclusion : l'aire est 40 000 cm²."
  },

  {
    question: "Résoudre : 6x + 24 = 54.",
    answer: "x = 5",
    solution: "Étape 1 :\n6x + 24 = 54.\n\nÉtape 2 : On soustrait 24 :\n6x = 30.\n\nÉtape 3 : On divise par 6 :\nx = 5.\n\nVérification :\n6 × 5 + 24 = 54.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 29².",
    answer: "841",
    solution: "Étape 1 :\n29² = 29 × 29.\n\nÉtape 2 :\n29 × 29 = 841.\n\nConclusion : 29² = 841."
  },

  {
    question: "Calculer √1444.",
    answer: "38",
    solution: "Étape 1 :\n38 × 38 = 1444.\n\nÉtape 2 :\n√1444 = 38.\n\nConclusion : √1444 = 38."
  },

  {
    question: "Une suite arithmétique a u₁ = 7 et r = 7. Calculer u₁₀.",
    answer: "u₁₀ = 70",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₀ = 7 + (10 - 1) × 7.\n\nÉtape 2 :\n9 × 7 = 63.\n\nÉtape 3 :\n7 + 63 = 70.\n\nConclusion : u₁₀ = 70."
  },

  {
    question: "Une suite géométrique a u₁ = 3 et q = 3. Calculer u₆.",
    answer: "u₆ = 729",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₆ = 3 × 3⁵.\n\nÉtape 2 :\n3⁵ = 243.\n\nÉtape 3 :\n3 × 243 = 729.\n\nConclusion : u₆ = 729."
  },

  {
    question: "Calculer la probabilité d'obtenir deux nombres pairs en lançant un dé deux fois.",
    answer: "1/4",
    solution: "Étape 1 : La probabilité d'obtenir un nombre pair est :\n3/6 = 1/2.\n\nÉtape 2 : Pour deux nombres pairs :\nP = 1/2 × 1/2.\n\nÉtape 3 :\nP = 1/4.\n\nConclusion : la probabilité est 1/4, soit 25 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 48 cm et hauteur 5 cm.",
    answer: "120 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (48 × 5) ÷ 2.\n\nÉtape 2 :\n48 × 5 = 240.\n\nÉtape 3 :\n240 ÷ 2 = 120.\n\nConclusion : l'aire est 120 cm²."
  },

  {
    question: "Calculer 70 % de 500.",
    answer: "350",
    solution: "Étape 1 :\n70 % = 0,70.\n\nÉtape 2 :\n500 × 0,70 = 350.\n\nConclusion : 70 % de 500 = 350."
  },

  {
    question: "Un prix de 25 000 HTG augmente de 20 %. Quel est le nouveau prix ?",
    answer: "30 000 HTG",
    solution: "Étape 1 : Calcul de l'augmentation :\n25 000 × 0,20 = 5 000 HTG.\n\nÉtape 2 : Nouveau prix :\n25 000 + 5 000 = 30 000 HTG.\n\nConclusion : le nouveau prix est 30 000 HTG."
  },

  {
    question: "Résoudre : x² - 24x + 143 = 0.",
    answer: "x = 11 ou x = 13",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 143 et dont la somme vaut -24.\n\nCes nombres sont -11 et -13.\n\nÉtape 2 :\nx² - 24x + 143 = (x - 11)(x - 13).\n\nÉtape 3 :\n(x - 11)(x - 13) = 0.\n\nDonc :\nx = 11 ou x = 13.\n\nConclusion : les solutions sont 11 et 13."
  },

  {
    question: "Calculer la dérivée de f(x) = 12x³ + 4x².",
    answer: "f'(x) = 36x² + 8x",
    solution: "Étape 1 :\n(12x³)' = 12 × 3x² = 36x².\n\nÉtape 2 :\n(4x²)' = 4 × 2x = 8x.\n\nÉtape 3 :\nf'(x) = 36x² + 8x.\n\nConclusion : f'(x) = 36x² + 8x."
  },

  {
    question: "Calculer lim(x→8) (x + 2).",
    answer: "10",
    solution: "La fonction est continue.\n\nÉtape 1 :\n8 + 2.\n\nÉtape 2 :\n8 + 2 = 10.\n\nConclusion : la limite vaut 10."
  },

  {
    question: "Déterminer une primitive de f(x) = 5x⁴ + x².",
    answer: "F(x) = x⁵ + (1/3)x³ + C",
    solution: "Étape 1 : Une primitive de 5x⁴ est x⁵.\n\nCar :\n(x⁵)' = 5x⁴.\n\nÉtape 2 : Une primitive de x² est x³/3.\n\nCar :\n(x³/3)' = x².\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = x⁵ + (1/3)x³ + C.\n\nConclusion : F(x) est une primitive de 5x⁴ + x²."
  },

  {
    question: "Calculer 22³.",
    answer: "10648",
    solution: "Étape 1 :\n22³ = 22 × 22 × 22.\n\nÉtape 2 :\n22 × 22 = 484.\n\nÉtape 3 :\n484 × 22 = 10 648.\n\nConclusion : 22³ = 10 648."
  },

  {
    question: "Résoudre 4ˣ = 4096.",
    answer: "x = 6",
    solution: "Étape 1 :\n4096 = 4⁶.\n\nÉtape 2 :\n4ˣ = 4⁶.\n\nÉtape 3 : Les bases sont identiques :\nx = 6.\n\nConclusion : x = 6."
  },

  {
    question: "Calculer ln(e²²).",
    answer: "22",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e²²) = 22.\n\nConclusion : le résultat est 22."
  },

  {
    question: "Un capital de 150 000 HTG est placé à 4 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "162 000 HTG",
    solution: "Étape 1 :\nC = 150 000.\nt = 0,04.\nn = 2.\n\nÉtape 2 :\nI = 150 000 × 0,04 × 2.\n\nÉtape 3 :\n150 000 × 0,04 = 6 000.\n\n6 000 × 2 = 12 000.\n\nÉtape 4 :\n150 000 + 12 000 = 162 000 HTG.\n\nConclusion : le capital final est 162 000 HTG."
  },

  {
    question: "Calculer la moyenne de 35, 37, 39, 41 et 43.",
    answer: "39",
    solution: "Étape 1 :\n35 + 37 + 39 + 41 + 43 = 195.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n195 ÷ 5 = 39.\n\nConclusion : la moyenne est 39."
  },

  {
    question: "Une urne contient 40 boules, dont 16 sont rouges. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "2/5",
    solution: "Étape 1 : Il y a 40 boules au total.\n\nÉtape 2 : Il y a 16 boules rouges.\n\nÉtape 3 :\nP(rouge) = 16/40.\n\nÉtape 4 : On simplifie par 8 :\n16/40 = 2/5.\n\nConclusion : la probabilité est 2/5, soit 40 %."
  },

  {
    question: "Un véhicule parcourt 2 000 km en 20 heures. Calculer sa vitesse moyenne.",
    answer: "100 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 2 000 ÷ 20.\n\nÉtape 2 :\nv = 100 km/h.\n\nConclusion : la vitesse moyenne est 100 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 200 cm et largeur 100 cm.",
    answer: "600 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n200 + 100 = 300.\n\nÉtape 2 :\n2 × 300 = 600 cm.\n\nConclusion : le périmètre est 600 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 200 cm.",
    answer: "40 000 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 200².\n\nÉtape 2 :\n200 × 200 = 40 000.\n\nConclusion : l'aire est 40 000 cm²."
  },

  {
    question: "Résoudre : 7x + 28 = 63.",
    answer: "x = 5",
    solution: "Étape 1 :\n7x + 28 = 63.\n\nÉtape 2 : On soustrait 28 :\n7x = 35.\n\nÉtape 3 : On divise par 7 :\nx = 5.\n\nVérification :\n7 × 5 + 28 = 63.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 30².",
    answer: "900",
    solution: "Étape 1 :\n30² = 30 × 30.\n\nÉtape 2 :\n30 × 30 = 900.\n\nConclusion : 30² = 900."
  },

  {
    question: "Calculer √1600.",
    answer: "40",
    solution: "Étape 1 :\n40 × 40 = 1600.\n\nÉtape 2 :\n√1600 = 40.\n\nConclusion : √1600 = 40."
  },

  {
    question: "Une suite arithmétique a u₁ = 1 et r = 10. Calculer u₁₀.",
    answer: "u₁₀ = 91",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₀ = 1 + (10 - 1) × 10.\n\nÉtape 2 :\n9 × 10 = 90.\n\nÉtape 3 :\n1 + 90 = 91.\n\nConclusion : u₁₀ = 91."
  },

  {
    question: "Une suite géométrique a u₁ = 1 et q = 2. Calculer u₁₀.",
    answer: "u₁₀ = 512",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₁₀ = 1 × 2⁹.\n\nÉtape 2 :\n2⁹ = 512.\n\nConclusion : u₁₀ = 512."
  },

  {
    question: "Calculer la probabilité d'obtenir au moins un nombre pair en lançant une pièce deux fois.",
    answer: "3/4",
    solution: "Pour une pièce, il n'y a pas de nombre pair ou impair. Cette question n'est donc pas applicable à une pièce.\n\nPour une pièce équilibrée, les résultats sont pile et face.\n\nLa probabilité d'obtenir au moins un résultat donné en deux lancers est :\n1 - probabilité de ne jamais obtenir ce résultat.\n\nPar exemple, pour au moins un pile :\nP(aucun pile) = P(face et face) = 1/2 × 1/2 = 1/4.\n\nDonc :\nP(au moins un pile) = 1 - 1/4 = 3/4.\n\nConclusion : pour 'au moins un pile', la probabilité est 3/4."
  },

  {
    question: "Calculer l'aire d'un triangle de base 52 cm et hauteur 5 cm.",
    answer: "130 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (52 × 5) ÷ 2.\n\nÉtape 2 :\n52 × 5 = 260.\n\nÉtape 3 :\n260 ÷ 2 = 130.\n\nConclusion : l'aire est 130 cm²."
  },

  {
    question: "Calculer 80 % de 500.",
    answer: "400",
    solution: "Étape 1 :\n80 % = 0,80.\n\nÉtape 2 :\n500 × 0,80 = 400.\n\nConclusion : 80 % de 500 = 400."
  },

  {
    question: "Un prix de 40 000 HTG diminue de 25 %. Quel est le nouveau prix ?",
    answer: "30 000 HTG",
    solution: "Étape 1 : Calcul de la réduction :\n40 000 × 0,25 = 10 000 HTG.\n\nÉtape 2 : Prix final :\n40 000 - 10 000 = 30 000 HTG.\n\nConclusion : le nouveau prix est 30 000 HTG."
  },

  {
    question: "Résoudre : x² - 25x + 144 = 0.",
    answer: "x = 9 ou x = 16",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 144 et dont la somme vaut -25.\n\nCes nombres sont -9 et -16.\n\nÉtape 2 :\nx² - 25x + 144 = (x - 9)(x - 16).\n\nÉtape 3 :\n(x - 9)(x - 16) = 0.\n\nDonc :\nx = 9 ou x = 16.\n\nConclusion : les solutions sont 9 et 16."
  },

  {
    question: "Calculer la dérivée de f(x) = 13x² + 4x.",
    answer: "f'(x) = 26x + 4",
    solution: "Étape 1 :\n(13x²)' = 13 × 2x = 26x.\n\nÉtape 2 :\n(4x)' = 4.\n\nÉtape 3 :\nf'(x) = 26x + 4.\n\nConclusion : f'(x) = 26x + 4."
  },

  {
    question: "Calculer lim(x→9) (x + 1).",
    answer: "10",
    solution: "La fonction est continue.\n\nÉtape 1 :\n9 + 1.\n\nÉtape 2 :\n9 + 1 = 10.\n\nConclusion : la limite vaut 10."
  },

  {
    question: "Déterminer une primitive de f(x) = 2x³ + 4x.",
    answer: "F(x) = (1/2)x⁴ + 2x² + C",
    solution: "Étape 1 : Une primitive de 2x³ est (1/2)x⁴.\n\nCar :\n[(1/2)x⁴]' = 2x³.\n\nÉtape 2 : Une primitive de 4x est 2x².\n\nCar :\n(2x²)' = 4x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (1/2)x⁴ + 2x² + C.\n\nConclusion : F(x) est une primitive de 2x³ + 4x."
  },

  {
    question: "Calculer 23³.",
    answer: "12167",
    solution: "Étape 1 :\n23³ = 23 × 23 × 23.\n\nÉtape 2 :\n23 × 23 = 529.\n\nÉtape 3 :\n529 × 23 = 12 167.\n\nConclusion : 23³ = 12 167."
  },

  {
    question: "Résoudre 3ˣ = 6561.",
    answer: "x = 8",
    solution: "Étape 1 :\n6561 = 3⁸.\n\nÉtape 2 :\n3ˣ = 3⁸.\n\nÉtape 3 : Les bases sont identiques :\nx = 8.\n\nConclusion : x = 8."
  },

  {
    question: "Calculer ln(e²³).",
    answer: "23",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e²³) = 23.\n\nConclusion : le résultat est 23."
  },

  {
    question: "Un capital de 200 000 HTG est placé à 5 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "220 000 HTG",
    solution: "Étape 1 :\nC = 200 000.\nt = 0,05.\nn = 2.\n\nÉtape 2 :\nI = 200 000 × 0,05 × 2.\n\nÉtape 3 :\n200 000 × 0,05 = 10 000.\n\n10 000 × 2 = 20 000.\n\nÉtape 4 :\n200 000 + 20 000 = 220 000 HTG.\n\nConclusion : le capital final est 220 000 HTG."
  },

  {
    question: "Calculer la moyenne de 40, 42, 44, 46 et 48.",
    answer: "44",
    solution: "Étape 1 :\n40 + 42 + 44 + 46 + 48 = 220.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n220 ÷ 5 = 44.\n\nConclusion : la moyenne est 44."
  },

  {
    question: "Une urne contient 50 boules, dont 20 sont rouges. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "2/5",
    solution: "Étape 1 : Il y a 50 boules au total.\n\nÉtape 2 : Il y a 20 boules rouges.\n\nÉtape 3 :\nP(rouge) = 20/50.\n\nÉtape 4 : On simplifie par 10 :\n20/50 = 2/5.\n\nConclusion : la probabilité est 2/5, soit 40 %."
  },

  {
    question: "Un véhicule parcourt 2 400 km en 24 heures. Calculer sa vitesse moyenne.",
    answer: "100 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 2 400 ÷ 24.\n\nÉtape 2 :\nv = 100 km/h.\n\nConclusion : la vitesse moyenne est 100 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 250 cm et largeur 50 cm.",
    answer: "600 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n250 + 50 = 300.\n\nÉtape 2 :\n2 × 300 = 600 cm.\n\nConclusion : le périmètre est 600 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 250 cm.",
    answer: "62 500 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 250².\n\nÉtape 2 :\n250 × 250 = 62 500.\n\nConclusion : l'aire est 62 500 cm²."
  },

  {
    question: "Résoudre : 5x + 25 = 50.",
    answer: "x = 5",
    solution: "Étape 1 :\n5x + 25 = 50.\n\nÉtape 2 : On soustrait 25 :\n5x = 25.\n\nÉtape 3 : On divise par 5 :\nx = 5.\n\nVérification :\n5 × 5 + 25 = 50.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 31².",
    answer: "961",
    solution: "Étape 1 :\n31² = 31 × 31.\n\nÉtape 2 :\n31 × 31 = 961.\n\nConclusion : 31² = 961."
  },

  {
    question: "Calculer √1369.",
    answer: "37",
    solution: "Étape 1 :\n37 × 37 = 1369.\n\nÉtape 2 :\n√1369 = 37.\n\nConclusion : √1369 = 37."
  },

  {
    question: "Une suite arithmétique a u₁ = 10 et r = 10. Calculer u₁₀.",
    answer: "u₁₀ = 100",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₀ = 10 + (10 - 1) × 10.\n\nÉtape 2 :\n9 × 10 = 90.\n\nÉtape 3 :\n10 + 90 = 100.\n\nConclusion : u₁₀ = 100."
  },

  {
    question: "Une suite géométrique a u₁ = 2 et q = 2. Calculer u₁₁.",
    answer: "u₁₁ = 2048",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₁₁ = 2 × 2¹⁰.\n\nÉtape 2 :\n2¹⁰ = 1024.\n\nÉtape 3 :\n2 × 1024 = 2048.\n\nConclusion : u₁₁ = 2048."
  },

  {
    question: "Calculer la probabilité d'obtenir exactement un nombre impair en lançant un dé deux fois.",
    answer: "1/2",
    solution: "Un nombre impair a une probabilité de 1/2 et un nombre pair aussi.\n\nIl y a deux cas favorables :\n\nCas 1 : impair puis pair :\n1/2 × 1/2 = 1/4.\n\nCas 2 : pair puis impair :\n1/2 × 1/2 = 1/4.\n\nÉtape 1 :\n1/4 + 1/4 = 2/4.\n\nÉtape 2 :\n2/4 = 1/2.\n\nConclusion : la probabilité est 1/2, soit 50 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 60 cm et hauteur 4 cm.",
    answer: "120 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (60 × 4) ÷ 2.\n\nÉtape 2 :\n60 × 4 = 240.\n\nÉtape 3 :\n240 ÷ 2 = 120.\n\nConclusion : l'aire est 120 cm²."
  },

  {
    question: "Calculer 90 % de 1 000.",
    answer: "900",
    solution: "Étape 1 :\n90 % = 0,90.\n\nÉtape 2 :\n1 000 × 0,90 = 900.\n\nConclusion : 90 % de 1 000 = 900."
  },

  {
    question: "Un prix de 50 000 HTG diminue de 10 %. Quel est le nouveau prix ?",
    answer: "45 000 HTG",
    solution: "Étape 1 : Calcul de la réduction :\n50 000 × 0,10 = 5 000 HTG.\n\nÉtape 2 : Prix final :\n50 000 - 5 000 = 45 000 HTG.\n\nConclusion : le nouveau prix est 45 000 HTG."
  },

  {
    question: "Résoudre : x² - 26x + 165 = 0.",
    answer: "x = 11 ou x = 15",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 165 et dont la somme vaut -26.\n\nCes nombres sont -11 et -15.\n\nÉtape 2 :\nx² - 26x + 165 = (x - 11)(x - 15).\n\nÉtape 3 :\n(x - 11)(x - 15) = 0.\n\nDonc :\nx = 11 ou x = 15.\n\nConclusion : les solutions sont 11 et 15."
  },

  {
    question: "Calculer la dérivée de f(x) = 14x² + 5x.",
    answer: "f'(x) = 28x + 5",
    solution: "Étape 1 :\n(14x²)' = 14 × 2x = 28x.\n\nÉtape 2 :\n(5x)' = 5.\n\nÉtape 3 :\nf'(x) = 28x + 5.\n\nConclusion : f'(x) = 28x + 5."
  },

  {
    question: "Calculer lim(x→10) (x - 3).",
    answer: "7",
    solution: "La fonction est continue.\n\nÉtape 1 :\n10 - 3.\n\nÉtape 2 :\n10 - 3 = 7.\n\nConclusion : la limite vaut 7."
  },

  {
    question: "Déterminer une primitive de f(x) = 6x³ + 2x.",
    answer: "F(x) = (3/2)x⁴ + x² + C",
    solution: "Étape 1 : Une primitive de 6x³ est (3/2)x⁴.\n\nCar :\n[(3/2)x⁴]' = 6x³.\n\nÉtape 2 : Une primitive de 2x est x².\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (3/2)x⁴ + x² + C.\n\nConclusion : F(x) est une primitive de 6x³ + 2x."
  },

  {
    question: "Calculer 24³.",
    answer: "13824",
    solution: "Étape 1 :\n24³ = 24 × 24 × 24.\n\nÉtape 2 :\n24 × 24 = 576.\n\nÉtape 3 :\n576 × 24 = 13 824.\n\nConclusion : 24³ = 13 824."
  },

  {
    question: "Résoudre 4ˣ = 16 384.",
    answer: "x = 7",
    solution: "Étape 1 :\n16 384 = 4⁷.\n\nÉtape 2 :\n4ˣ = 4⁷.\n\nÉtape 3 : Les bases sont identiques :\nx = 7.\n\nConclusion : x = 7."
  },

  {
    question: "Calculer ln(e²⁴).",
    answer: "24",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e²⁴) = 24.\n\nConclusion : le résultat est 24."
  },

  {
    question: "Un capital de 250 000 HTG est placé à 4 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "270 000 HTG",
    solution: "Étape 1 :\nC = 250 000.\nt = 0,04.\nn = 2.\n\nÉtape 2 :\nI = 250 000 × 0,04 × 2.\n\nÉtape 3 :\n250 000 × 0,04 = 10 000.\n\n10 000 × 2 = 20 000.\n\nÉtape 4 :\n250 000 + 20 000 = 270 000 HTG.\n\nConclusion : le capital final est 270 000 HTG."
  },

  {
    question: "Calculer la moyenne de 45, 47, 49, 51 et 53.",
    answer: "49",
    solution: "Étape 1 :\n45 + 47 + 49 + 51 + 53 = 245.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n245 ÷ 5 = 49.\n\nConclusion : la moyenne est 49."
  },

  {
    question: "Une urne contient 100 boules, dont 25 sont rouges. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "1/4",
    solution: "Étape 1 : Il y a 100 boules au total.\n\nÉtape 2 : Il y a 25 boules rouges.\n\nÉtape 3 :\nP(rouge) = 25/100.\n\nÉtape 4 : On simplifie :\n25/100 = 1/4.\n\nConclusion : la probabilité est 1/4, soit 25 %."
  },

  {
    question: "Un véhicule parcourt 3 000 km en 30 heures. Calculer sa vitesse moyenne.",
    answer: "100 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 3 000 ÷ 30.\n\nÉtape 2 :\nv = 100 km/h.\n\nConclusion : la vitesse moyenne est 100 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 300 cm et largeur 100 cm.",
    answer: "800 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n300 + 100 = 400.\n\nÉtape 2 :\n2 × 400 = 800 cm.\n\nConclusion : le périmètre est 800 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 300 cm.",
    answer: "90 000 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 300².\n\nÉtape 2 :\n300 × 300 = 90 000.\n\nConclusion : l'aire est 90 000 cm²."
  },

  {
    question: "Résoudre : 8x + 32 = 72.",
    answer: "x = 5",
    solution: "Étape 1 :\n8x + 32 = 72.\n\nÉtape 2 : On soustrait 32 :\n8x = 40.\n\nÉtape 3 : On divise par 8 :\nx = 5.\n\nVérification :\n8 × 5 + 32 = 72.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 32².",
    answer: "1024",
    solution: "Étape 1 :\n32² = 32 × 32.\n\nÉtape 2 :\n32 × 32 = 1024.\n\nConclusion : 32² = 1024."
  },

  {
    question: "Calculer √1521.",
    answer: "39",
    solution: "Étape 1 :\n39 × 39 = 1521.\n\nÉtape 2 :\n√1521 = 39.\n\nConclusion : √1521 = 39."
  },

  {
    question: "Une suite arithmétique a u₁ = 1 et r = 11. Calculer u₆.",
    answer: "u₆ = 56",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₆ = 1 + (6 - 1) × 11.\n\nÉtape 2 :\n5 × 11 = 55.\n\nÉtape 3 :\n1 + 55 = 56.\n\nConclusion : u₆ = 56."
  },

  {
    question: "Une suite géométrique a u₁ = 2 et q = 3. Calculer u₈.",
    answer: "u₈ = 4374",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₈ = 2 × 3⁷.\n\nÉtape 2 :\n3⁷ = 2 187.\n\nÉtape 3 :\n2 × 2 187 = 4 374.\n\nConclusion : u₈ = 4 374."
  },

  {
    question: "Calculer la probabilité d'obtenir un résultat différent de 1 en lançant un dé équilibré.",
    answer: "5/6",
    solution: "Étape 1 : Il y a 6 résultats possibles.\n\nÉtape 2 : Un seul résultat est égal à 1.\n\nDonc 5 résultats sont différents de 1.\n\nÉtape 3 :\nP(différent de 1) = 5/6.\n\nConclusion : la probabilité est 5/6, soit environ 83,33 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 64 cm et hauteur 5 cm.",
    answer: "160 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (64 × 5) ÷ 2.\n\nÉtape 2 :\n64 × 5 = 320.\n\nÉtape 3 :\n320 ÷ 2 = 160.\n\nConclusion : l'aire est 160 cm²."
  },

  {
    question: "Calculer 50 % de 1 000.",
    answer: "500",
    solution: "Étape 1 :\n50 % = 0,50.\n\nÉtape 2 :\n1 000 × 0,50 = 500.\n\nConclusion : 50 % de 1 000 = 500."
  },

  {
    question: "Un prix de 50 000 HTG augmente de 10 %. Quel est le nouveau prix ?",
    answer: "55 000 HTG",
    solution: "Étape 1 : Calcul de l'augmentation :\n50 000 × 0,10 = 5 000 HTG.\n\nÉtape 2 : Nouveau prix :\n50 000 + 5 000 = 55 000 HTG.\n\nConclusion : le nouveau prix est 55 000 HTG."
  },

  {
    question: "Résoudre : x² - 27x + 182 = 0.",
    answer: "x = 13 ou x = 14",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 182 et dont la somme vaut -27.\n\nCes nombres sont -13 et -14.\n\nÉtape 2 :\nx² - 27x + 182 = (x - 13)(x - 14).\n\nÉtape 3 :\n(x - 13)(x - 14) = 0.\n\nDonc :\nx = 13 ou x = 14.\n\nConclusion : les solutions sont 13 et 14."
  },

  {
    question: "Calculer la dérivée de f(x) = 15x² + 2x.",
    answer: "f'(x) = 30x + 2",
    solution: "Étape 1 :\n(15x²)' = 15 × 2x = 30x.\n\nÉtape 2 :\n(2x)' = 2.\n\nÉtape 3 :\nf'(x) = 30x + 2.\n\nConclusion : f'(x) = 30x + 2."
  },

  {
    question: "Calculer lim(x→11) (x - 1).",
    answer: "10",
    solution: "La fonction est continue.\n\nÉtape 1 :\n11 - 1.\n\nÉtape 2 :\n11 - 1 = 10.\n\nConclusion : la limite vaut 10."
  },

  {
    question: "Déterminer une primitive de f(x) = 10x³ + 4x.",
    answer: "F(x) = (5/2)x⁴ + 2x² + C",
    solution: "Étape 1 : Une primitive de 10x³ est :\n(5/2)x⁴.\n\nCar :\n[(5/2)x⁴]' = 10x³.\n\nÉtape 2 : Une primitive de 4x est 2x².\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (5/2)x⁴ + 2x² + C.\n\nConclusion : F(x) est une primitive de 10x³ + 4x."
  },

  {
    question: "Calculer 25³.",
    answer: "15625",
    solution: "Étape 1 :\n25³ = 25 × 25 × 25.\n\nÉtape 2 :\n25 × 25 = 625.\n\nÉtape 3 :\n625 × 25 = 15 625.\n\nConclusion : 25³ = 15 625."
  },

  {
    question: "Résoudre 2ˣ = 4096.",
    answer: "x = 12",
    solution: "Étape 1 :\n4096 = 2¹².\n\nÉtape 2 :\n2ˣ = 2¹².\n\nÉtape 3 : Les bases sont identiques :\nx = 12.\n\nConclusion : x = 12."
  },

  {
    question: "Calculer ln(e²⁵).",
    answer: "25",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e²⁵) = 25.\n\nConclusion : le résultat est 25."
  },

  {
    question: "Un capital de 300 000 HTG est placé à 5 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "330 000 HTG",
    solution: "Étape 1 :\nC = 300 000.\nt = 0,05.\nn = 2.\n\nÉtape 2 :\nI = 300 000 × 0,05 × 2.\n\nÉtape 3 :\n300 000 × 0,05 = 15 000.\n\n15 000 × 2 = 30 000.\n\nÉtape 4 :\n300 000 + 30 000 = 330 000 HTG.\n\nConclusion : le capital final est 330 000 HTG."
  },

  {
    question: "Calculer la moyenne de 50, 52, 54, 56 et 58.",
    answer: "54",
    solution: "Étape 1 :\n50 + 52 + 54 + 56 + 58 = 270.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n270 ÷ 5 = 54.\n\nConclusion : la moyenne est 54."
  },

  {
    question: "Une urne contient 60 boules, dont 15 sont rouges. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "1/4",
    solution: "Étape 1 : Il y a 60 boules au total.\n\nÉtape 2 : Il y a 15 boules rouges.\n\nÉtape 3 :\nP(rouge) = 15/60.\n\nÉtape 4 : On simplifie par 15 :\n15/60 = 1/4.\n\nConclusion : la probabilité est 1/4, soit 25 %."
  },

  {
    question: "Un véhicule parcourt 3 600 km en 40 heures. Calculer sa vitesse moyenne.",
    answer: "90 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 3 600 ÷ 40.\n\nÉtape 2 :\nv = 90 km/h.\n\nConclusion : la vitesse moyenne est 90 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 400 cm et largeur 100 cm.",
    answer: "1000 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n400 + 100 = 500.\n\nÉtape 2 :\n2 × 500 = 1 000 cm.\n\nConclusion : le périmètre est 1 000 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 400 cm.",
    answer: "160 000 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 400².\n\nÉtape 2 :\n400 × 400 = 160 000.\n\nConclusion : l'aire est 160 000 cm²."
  },

  {
    question: "Résoudre : 9x + 36 = 81.",
    answer: "x = 5",
    solution: "Étape 1 :\n9x + 36 = 81.\n\nÉtape 2 : On soustrait 36 :\n9x = 45.\n\nÉtape 3 : On divise par 9 :\nx = 5.\n\nVérification :\n9 × 5 + 36 = 81.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 33².",
    answer: "1089",
    solution: "Étape 1 :\n33² = 33 × 33.\n\nÉtape 2 :\n33 × 33 = 1 089.\n\nConclusion : 33² = 1 089."
  },

  {
    question: "Calculer √1681.",
    answer: "41",
    solution: "Étape 1 :\n41 × 41 = 1681.\n\nÉtape 2 :\n√1681 = 41.\n\nConclusion : √1681 = 41."
  },

  {
    question: "Une suite arithmétique a u₁ = 2 et r = 12. Calculer u₆.",
    answer: "u₆ = 62",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₆ = 2 + (6 - 1) × 12.\n\nÉtape 2 :\n5 × 12 = 60.\n\nÉtape 3 :\n2 + 60 = 62.\n\nConclusion : u₆ = 62."
  },

  {
    question: "Une suite géométrique a u₁ = 2 et q = 4. Calculer u₅.",
    answer: "u₅ = 512",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₅ = 2 × 4⁴.\n\nÉtape 2 :\n4⁴ = 256.\n\nÉtape 3 :\n2 × 256 = 512.\n\nConclusion : u₅ = 512."
  },

  {
    question: "Calculer la probabilité d'obtenir au moins un 5 en lançant un dé deux fois.",
    answer: "11/36",
    solution: "On utilise l'événement contraire.\n\nÉtape 1 : La probabilité de ne pas obtenir 5 sur un lancer est :\n5/6.\n\nÉtape 2 : Pour deux lancers sans 5 :\n5/6 × 5/6 = 25/36.\n\nÉtape 3 :\nP(au moins un 5) = 1 - 25/36.\n\nÉtape 4 :\n36/36 - 25/36 = 11/36.\n\nConclusion : la probabilité est 11/36."
  },

  {
    question: "Calculer l'aire d'un triangle de base 72 cm et hauteur 5 cm.",
    answer: "180 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (72 × 5) ÷ 2.\n\nÉtape 2 :\n72 × 5 = 360.\n\nÉtape 3 :\n360 ÷ 2 = 180.\n\nConclusion : l'aire est 180 cm²."
  },

  {
    question: "Calculer 20 % de 2 000.",
    answer: "400",
    solution: "Étape 1 :\n20 % = 0,20.\n\nÉtape 2 :\n2 000 × 0,20 = 400.\n\nConclusion : 20 % de 2 000 = 400."
  },

  {
    question: "Un prix de 50 000 HTG augmente de 20 %. Quel est le nouveau prix ?",
    answer: "60 000 HTG",
    solution: "Étape 1 : Calcul de l'augmentation :\n50 000 × 0,20 = 10 000 HTG.\n\nÉtape 2 : Nouveau prix :\n50 000 + 10 000 = 60 000 HTG.\n\nConclusion : le nouveau prix est 60 000 HTG."
  },

  {
    question: "Résoudre : x² - 28x + 195 = 0.",
    answer: "x = 13 ou x = 15",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 195 et dont la somme vaut -28.\n\nCes nombres sont -13 et -15.\n\nÉtape 2 :\nx² - 28x + 195 = (x - 13)(x - 15).\n\nÉtape 3 :\n(x - 13)(x - 15) = 0.\n\nDonc :\nx = 13 ou x = 15.\n\nConclusion : les solutions sont 13 et 15."
  },

  {
    question: "Calculer la dérivée de f(x) = 16x² + 3x.",
    answer: "f'(x) = 32x + 3",
    solution: "Étape 1 :\n(16x²)' = 16 × 2x = 32x.\n\nÉtape 2 :\n(3x)' = 3.\n\nÉtape 3 :\nf'(x) = 32x + 3.\n\nConclusion : f'(x) = 32x + 3."
  },

  {
    question: "Calculer lim(x→12) (x - 2).",
    answer: "10",
    solution: "La fonction est continue.\n\nÉtape 1 :\n12 - 2.\n\nÉtape 2 :\n12 - 2 = 10.\n\nConclusion : la limite vaut 10."
  },

  {
    question: "Déterminer une primitive de f(x) = 3x⁴ + 2x².",
    answer: "F(x) = (3/5)x⁵ + (2/3)x³ + C",
    solution: "Étape 1 : Une primitive de 3x⁴ est :\n(3/5)x⁵.\n\nCar :\n[(3/5)x⁵]' = 3x⁴.\n\nÉtape 2 : Une primitive de 2x² est :\n(2/3)x³.\n\nCar :\n[(2/3)x³]' = 2x².\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (3/5)x⁵ + (2/3)x³ + C.\n\nConclusion : F(x) est une primitive de 3x⁴ + 2x²."
  },

  {
    question: "Calculer 26³.",
    answer: "17576",
    solution: "Étape 1 :\n26³ = 26 × 26 × 26.\n\nÉtape 2 :\n26 × 26 = 676.\n\nÉtape 3 :\n676 × 26 = 17 576.\n\nConclusion : 26³ = 17 576."
  },

  {
    question: "Résoudre 3ˣ = 6561.",
    answer: "x = 8",
    solution: "Étape 1 :\n6561 = 3⁸.\n\nÉtape 2 :\n3ˣ = 3⁸.\n\nÉtape 3 : Les bases sont identiques :\nx = 8.\n\nConclusion : x = 8."
  },

  {
    question: "Calculer ln(e²⁶).",
    answer: "26",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e²⁶) = 26.\n\nConclusion : le résultat est 26."
  },

  {
    question: "Un capital de 400 000 HTG est placé à 5 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "440 000 HTG",
    solution: "Étape 1 :\nC = 400 000.\nt = 0,05.\nn = 2.\n\nÉtape 2 :\nI = 400 000 × 0,05 × 2.\n\nÉtape 3 :\n400 000 × 0,05 = 20 000.\n\n20 000 × 2 = 40 000.\n\nÉtape 4 :\n400 000 + 40 000 = 440 000 HTG.\n\nConclusion : le capital final est 440 000 HTG."
  },

  {
    question: "Calculer la moyenne de 60, 62, 64, 66 et 68.",
    answer: "64",
    solution: "Étape 1 :\n60 + 62 + 64 + 66 + 68 = 320.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n320 ÷ 5 = 64.\n\nConclusion : la moyenne est 64."
  },

  {
    question: "Une urne contient 80 boules, dont 20 sont rouges. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "1/4",
    solution: "Étape 1 : Il y a 80 boules au total.\n\nÉtape 2 : Il y a 20 boules rouges.\n\nÉtape 3 :\nP(rouge) = 20/80.\n\nÉtape 4 : On simplifie par 20 :\n20/80 = 1/4.\n\nConclusion : la probabilité est 1/4, soit 25 %."
  },

  {
    question: "Un véhicule parcourt 4 000 km en 40 heures. Calculer sa vitesse moyenne.",
    answer: "100 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 4 000 ÷ 40.\n\nÉtape 2 :\nv = 100 km/h.\n\nConclusion : la vitesse moyenne est 100 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 500 cm et largeur 100 cm.",
    answer: "1200 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n500 + 100 = 600.\n\nÉtape 2 :\n2 × 600 = 1 200 cm.\n\nConclusion : le périmètre est 1 200 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 500 cm.",
    answer: "250 000 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 500².\n\nÉtape 2 :\n500 × 500 = 250 000.\n\nConclusion : l'aire est 250 000 cm²."
  },

  {
    question: "Résoudre : 10x + 40 = 90.",
    answer: "x = 5",
    solution: "Étape 1 :\n10x + 40 = 90.\n\nÉtape 2 : On soustrait 40 :\n10x = 50.\n\nÉtape 3 : On divise par 10 :\nx = 5.\n\nVérification :\n10 × 5 + 40 = 90.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 34².",
    answer: "1156",
    solution: "Étape 1 :\n34² = 34 × 34.\n\nÉtape 2 :\n34 × 34 = 1 156.\n\nConclusion : 34² = 1 156."
  },

  {
    question: "Calculer √1764.",
    answer: "42",
    solution: "Étape 1 :\n42 × 42 = 1764.\n\nÉtape 2 :\n√1764 = 42.\n\nConclusion : √1764 = 42."
  },

  {
    question: "Une suite arithmétique a u₁ = 3 et r = 12. Calculer u₁₀.",
    answer: "u₁₀ = 111",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₀ = 3 + (10 - 1) × 12.\n\nÉtape 2 :\n9 × 12 = 108.\n\nÉtape 3 :\n3 + 108 = 111.\n\nConclusion : u₁₀ = 111."
  },

  {
    question: "Une suite géométrique a u₁ = 2 et q = 5. Calculer u₇.",
    answer: "u₇ = 31250",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₇ = 2 × 5⁶.\n\nÉtape 2 :\n5⁶ = 15 625.\n\nÉtape 3 :\n2 × 15 625 = 31 250.\n\nConclusion : u₇ = 31 250."
  },

  {
    question: "Calculer la probabilité d'obtenir au moins un 1 en lançant un dé deux fois.",
    answer: "11/36",
    solution: "On utilise l'événement contraire.\n\nÉtape 1 : La probabilité de ne pas obtenir 1 sur un lancer est 5/6.\n\nÉtape 2 : Sur deux lancers :\nP(aucun 1) = 5/6 × 5/6 = 25/36.\n\nÉtape 3 :\nP(au moins un 1) = 1 - 25/36.\n\nÉtape 4 :\n36/36 - 25/36 = 11/36.\n\nConclusion : la probabilité est 11/36."
  },

  {
    question: "Calculer l'aire d'un triangle de base 80 cm et hauteur 5 cm.",
    answer: "200 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (80 × 5) ÷ 2.\n\nÉtape 2 :\n80 × 5 = 400.\n\nÉtape 3 :\n400 ÷ 2 = 200.\n\nConclusion : l'aire est 200 cm²."
  },

  {
    question: "Calculer 10 % de 2 000.",
    answer: "200",
    solution: "Étape 1 :\n10 % = 0,10.\n\nÉtape 2 :\n2 000 × 0,10 = 200.\n\nConclusion : 10 % de 2 000 = 200."
  },

  {
    question: "Un prix de 100 000 HTG diminue de 15 %. Quel est le nouveau prix ?",
    answer: "85 000 HTG",
    solution: "Étape 1 : Calcul de la réduction :\n100 000 × 0,15 = 15 000 HTG.\n\nÉtape 2 : Prix final :\n100 000 - 15 000 = 85 000 HTG.\n\nConclusion : le nouveau prix est 85 000 HTG."
  },

  {
    question: "Résoudre : x² - 29x + 204 = 0.",
    answer: "x = 12 ou x = 17",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 204 et dont la somme vaut -29.\n\nCes nombres sont -12 et -17.\n\nÉtape 2 :\nx² - 29x + 204 = (x - 12)(x - 17).\n\nÉtape 3 :\n(x - 12)(x - 17) = 0.\n\nDonc :\nx = 12 ou x = 17.\n\nConclusion : les solutions sont 12 et 17."
  },

  {
    question: "Calculer la dérivée de f(x) = 17x² + x.",
    answer: "f'(x) = 34x + 1",
    solution: "Étape 1 :\n(17x²)' = 17 × 2x = 34x.\n\nÉtape 2 :\n(x)' = 1.\n\nÉtape 3 :\nf'(x) = 34x + 1.\n\nConclusion : f'(x) = 34x + 1."
  },

  {
    question: "Calculer lim(x→13) (x - 3).",
    answer: "10",
    solution: "La fonction est continue.\n\nÉtape 1 :\n13 - 3.\n\nÉtape 2 :\n13 - 3 = 10.\n\nConclusion : la limite vaut 10."
  },

  {
    question: "Déterminer une primitive de f(x) = 8x³ + 4x.",
    answer: "F(x) = 2x⁴ + 2x² + C",
    solution: "Étape 1 : Une primitive de 8x³ est 2x⁴.\n\nCar :\n(2x⁴)' = 8x³.\n\nÉtape 2 : Une primitive de 4x est 2x².\n\nCar :\n(2x²)' = 4x.\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = 2x⁴ + 2x² + C.\n\nConclusion : F(x) est une primitive de 8x³ + 4x."
  },

  {
    question: "Calculer 27³.",
    answer: "19683",
    solution: "Étape 1 :\n27³ = 27 × 27 × 27.\n\nÉtape 2 :\n27 × 27 = 729.\n\nÉtape 3 :\n729 × 27 = 19 683.\n\nConclusion : 27³ = 19 683."
  },

  {
    question: "Résoudre 5ˣ = 15 625.",
    answer: "x = 6",
    solution: "Étape 1 :\n15 625 = 5⁶.\n\nÉtape 2 :\n5ˣ = 5⁶.\n\nÉtape 3 : Les bases sont identiques :\nx = 6.\n\nConclusion : x = 6."
  },

  {
    question: "Calculer ln(e²⁷).",
    answer: "27",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e²⁷) = 27.\n\nConclusion : le résultat est 27."
  },

  {
    question: "Un capital de 500 000 HTG est placé à 5 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "550 000 HTG",
    solution: "Étape 1 :\nC = 500 000.\nt = 0,05.\nn = 2.\n\nÉtape 2 :\nI = 500 000 × 0,05 × 2.\n\nÉtape 3 :\n500 000 × 0,05 = 25 000.\n\n25 000 × 2 = 50 000.\n\nÉtape 4 :\n500 000 + 50 000 = 550 000 HTG.\n\nConclusion : le capital final est 550 000 HTG."
  },

  {
    question: "Calculer la moyenne de 70, 72, 74, 76 et 78.",
    answer: "74",
    solution: "Étape 1 :\n70 + 72 + 74 + 76 + 78 = 370.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n370 ÷ 5 = 74.\n\nConclusion : la moyenne est 74."
  },

  {
    question: "Une urne contient 100 boules, dont 30 sont rouges. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "3/10",
    solution: "Étape 1 : Il y a 100 boules au total.\n\nÉtape 2 : Il y a 30 boules rouges.\n\nÉtape 3 :\nP(rouge) = 30/100.\n\nÉtape 4 : On simplifie par 10 :\n30/100 = 3/10.\n\nConclusion : la probabilité est 3/10, soit 30 %."
  },

  {
    question: "Un véhicule parcourt 5 000 km en 50 heures. Calculer sa vitesse moyenne.",
    answer: "100 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 5 000 ÷ 50.\n\nÉtape 2 :\nv = 100 km/h.\n\nConclusion : la vitesse moyenne est 100 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 600 cm et largeur 200 cm.",
    answer: "1600 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n600 + 200 = 800.\n\nÉtape 2 :\n2 × 800 = 1 600 cm.\n\nConclusion : le périmètre est 1 600 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 600 cm.",
    answer: "360 000 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 600².\n\nÉtape 2 :\n600 × 600 = 360 000.\n\nConclusion : l'aire est 360 000 cm²."
  },

  {
    question: "Résoudre : 10x + 50 = 100.",
    answer: "x = 5",
    solution: "Étape 1 :\n10x + 50 = 100.\n\nÉtape 2 : On soustrait 50 :\n10x = 50.\n\nÉtape 3 : On divise par 10 :\nx = 5.\n\nVérification :\n10 × 5 + 50 = 100.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 35².",
    answer: "1225",
    solution: "Étape 1 :\n35² = 35 × 35.\n\nÉtape 2 :\n35 × 35 = 1 225.\n\nConclusion : 35² = 1 225."
  },

  {
    question: "Calculer √1849.",
    answer: "43",
    solution: "Étape 1 :\n43 × 43 = 1849.\n\nÉtape 2 :\n√1849 = 43.\n\nConclusion : √1849 = 43."
  },

  {
    question: "Une suite arithmétique a u₁ = 4 et r = 8. Calculer u₁₀.",
    answer: "u₁₀ = 76",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₀ = 4 + (10 - 1) × 8.\n\nÉtape 2 :\n9 × 8 = 72.\n\nÉtape 3 :\n4 + 72 = 76.\n\nConclusion : u₁₀ = 76."
  },

  {
    question: "Une suite géométrique a u₁ = 1 et q = 3. Calculer u₈.",
    answer: "u₈ = 2187",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₈ = 1 × 3⁷.\n\nÉtape 2 :\n3⁷ = 2 187.\n\nConclusion : u₈ = 2 187."
  },

  {
    question: "Calculer la probabilité d'obtenir exactement un nombre 6 en lançant un dé deux fois.",
    answer: "5/18",
    solution: "Deux cas sont possibles.\n\nCas 1 : 6 puis non-6 :\nP = 1/6 × 5/6 = 5/36.\n\nCas 2 : non-6 puis 6 :\nP = 5/6 × 1/6 = 5/36.\n\nÉtape 1 : On additionne :\n5/36 + 5/36 = 10/36.\n\nÉtape 2 : On simplifie par 2 :\n10/36 = 5/18.\n\nConclusion : la probabilité est 5/18."
  },

  {
    question: "Calculer l'aire d'un triangle de base 100 cm et hauteur 5 cm.",
    answer: "250 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (100 × 5) ÷ 2.\n\nÉtape 2 :\n100 × 5 = 500.\n\nÉtape 3 :\n500 ÷ 2 = 250.\n\nConclusion : l'aire est 250 cm²."
  },

  {
    question: "Calculer 15 % de 2 000.",
    answer: "300",
    solution: "Étape 1 :\n15 % = 0,15.\n\nÉtape 2 :\n2 000 × 0,15 = 300.\n\nConclusion : 15 % de 2 000 = 300."
  },

  {
    question: "Un prix de 100 000 HTG augmente de 10 %. Quel est le nouveau prix ?",
    answer: "110 000 HTG",
    solution: "Étape 1 : Calcul de l'augmentation :\n100 000 × 0,10 = 10 000 HTG.\n\nÉtape 2 : Nouveau prix :\n100 000 + 10 000 = 110 000 HTG.\n\nConclusion : le nouveau prix est 110 000 HTG."
  },

  {
    question: "Résoudre : x² - 30x + 221 = 0.",
    answer: "x = 13 ou x = 17",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 221 et dont la somme vaut -30.\n\nCes nombres sont -13 et -17.\n\nÉtape 2 :\nx² - 30x + 221 = (x - 13)(x - 17).\n\nÉtape 3 :\n(x - 13)(x - 17) = 0.\n\nDonc :\nx = 13 ou x = 17.\n\nConclusion : les solutions sont 13 et 17."
  },

  {
    question: "Calculer la dérivée de f(x) = 18x² + 2x.",
    answer: "f'(x) = 36x + 2",
    solution: "Étape 1 :\n(18x²)' = 18 × 2x = 36x.\n\nÉtape 2 :\n(2x)' = 2.\n\nÉtape 3 :\nf'(x) = 36x + 2.\n\nConclusion : f'(x) = 36x + 2."
  },

  {
    question: "Calculer lim(x→14) (x - 4).",
    answer: "10",
    solution: "La fonction est continue.\n\nÉtape 1 :\n14 - 4.\n\nÉtape 2 :\n14 - 4 = 10.\n\nConclusion : la limite vaut 10."
  },

  {
    question: "Déterminer une primitive de f(x) = 4x⁴ + 2x.",
    answer: "F(x) = (4/5)x⁵ + x² + C",
    solution: "Étape 1 : Une primitive de 4x⁴ est :\n(4/5)x⁵.\n\nCar :\n[(4/5)x⁵]' = 4x⁴.\n\nÉtape 2 : Une primitive de 2x est x².\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (4/5)x⁵ + x² + C.\n\nConclusion : F(x) est une primitive de 4x⁴ + 2x."
  },

  {
    question: "Calculer 28³.",
    answer: "21952",
    solution: "Étape 1 :\n28³ = 28 × 28 × 28.\n\nÉtape 2 :\n28 × 28 = 784.\n\nÉtape 3 :\n784 × 28 = 21 952.\n\nConclusion : 28³ = 21 952."
  },

  {
    question: "Résoudre 4ˣ = 65 536.",
    answer: "x = 8",
    solution: "Étape 1 :\n65 536 = 4⁸.\n\nÉtape 2 :\n4ˣ = 4⁸.\n\nÉtape 3 : Les bases sont identiques :\nx = 8.\n\nConclusion : x = 8."
  },

  {
    question: "Calculer ln(e²⁸).",
    answer: "28",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e²⁸) = 28.\n\nConclusion : le résultat est 28."
  },

  {
    question: "Un capital de 600 000 HTG est placé à 5 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "660 000 HTG",
    solution: "Étape 1 :\nC = 600 000.\nt = 0,05.\nn = 2.\n\nÉtape 2 :\nI = 600 000 × 0,05 × 2.\n\nÉtape 3 :\n600 000 × 0,05 = 30 000.\n\n30 000 × 2 = 60 000.\n\nÉtape 4 :\n600 000 + 60 000 = 660 000 HTG.\n\nConclusion : le capital final est 660 000 HTG."
  },

  {
    question: "Calculer la moyenne de 80, 82, 84, 86 et 88.",
    answer: "84",
    solution: "Étape 1 :\n80 + 82 + 84 + 86 + 88 = 420.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n420 ÷ 5 = 84.\n\nConclusion : la moyenne est 84."
  },

  {
    question: "Une urne contient 100 boules, dont 40 sont rouges. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "2/5",
    solution: "Étape 1 : Il y a 100 boules au total.\n\nÉtape 2 : Il y a 40 boules rouges.\n\nÉtape 3 :\nP(rouge) = 40/100.\n\nÉtape 4 : On simplifie par 20 :\n40/100 = 2/5.\n\nConclusion : la probabilité est 2/5, soit 40 %."
  },

  {
    question: "Un véhicule parcourt 4 500 km en 50 heures. Calculer sa vitesse moyenne.",
    answer: "90 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 4 500 ÷ 50.\n\nÉtape 2 :\nv = 90 km/h.\n\nConclusion : la vitesse moyenne est 90 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 700 cm et largeur 150 cm.",
    answer: "1700 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n700 + 150 = 850.\n\nÉtape 2 :\n2 × 850 = 1 700 cm.\n\nConclusion : le périmètre est 1 700 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 700 cm.",
    answer: "490 000 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 700².\n\nÉtape 2 :\n700 × 700 = 490 000.\n\nConclusion : l'aire est 490 000 cm²."
  },

  {
    question: "Résoudre : 4x + 40 = 60.",
    answer: "x = 5",
    solution: "Étape 1 :\n4x + 40 = 60.\n\nÉtape 2 : On soustrait 40 :\n4x = 20.\n\nÉtape 3 : On divise par 4 :\nx = 5.\n\nVérification :\n4 × 5 + 40 = 60.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 36².",
    answer: "1296",
    solution: "Étape 1 :\n36² = 36 × 36.\n\nÉtape 2 :\n36 × 36 = 1 296.\n\nConclusion : 36² = 1 296."
  },

  {
    question: "Calculer √1936.",
    answer: "44",
    solution: "Étape 1 :\n44 × 44 = 1936.\n\nÉtape 2 :\n√1936 = 44.\n\nConclusion : √1936 = 44."
  },

  {
    question: "Une suite arithmétique a u₁ = 5 et r = 10. Calculer u₆.",
    answer: "u₆ = 55",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₆ = 5 + (6 - 1) × 10.\n\nÉtape 2 :\n5 × 10 = 50.\n\nÉtape 3 :\n5 + 50 = 55.\n\nConclusion : u₆ = 55."
  },

  {
    question: "Une suite géométrique a u₁ = 1 et q = 2. Calculer u₁₁.",
    answer: "u₁₁ = 1024",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₁₁ = 1 × 2¹⁰.\n\nÉtape 2 :\n2¹⁰ = 1024.\n\nConclusion : u₁₁ = 1024."
  },

  {
    question: "Calculer la probabilité d'obtenir au moins un nombre supérieur à 4 en lançant un dé deux fois.",
    answer: "5/9",
    solution: "Les nombres supérieurs à 4 sont 5 et 6.\n\nDonc la probabilité d'obtenir un nombre supérieur à 4 sur un lancer est :\n2/6 = 1/3.\n\nÉtape 1 : La probabilité de ne pas obtenir un nombre supérieur à 4 est :\n1 - 1/3 = 2/3.\n\nÉtape 2 : Sur deux lancers, ne jamais obtenir un nombre supérieur à 4 donne :\n2/3 × 2/3 = 4/9.\n\nÉtape 3 :\nP(au moins un) = 1 - 4/9.\n\nÉtape 4 :\n9/9 - 4/9 = 5/9.\n\nConclusion : la probabilité est 5/9."
  },

  {
    question: "Calculer l'aire d'un triangle de base 90 cm et hauteur 4 cm.",
    answer: "180 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (90 × 4) ÷ 2.\n\nÉtape 2 :\n90 × 4 = 360.\n\nÉtape 3 :\n360 ÷ 2 = 180.\n\nConclusion : l'aire est 180 cm²."
  },

  {
    question: "Calculer 5 % de 2 000.",
    answer: "100",
    solution: "Étape 1 :\n5 % = 0,05.\n\nÉtape 2 :\n2 000 × 0,05 = 100.\n\nConclusion : 5 % de 2 000 = 100."
  },

  {
    question: "Un prix de 100 000 HTG augmente de 25 %. Quel est le nouveau prix ?",
    answer: "125 000 HTG",
    solution: "Étape 1 : Calcul de l'augmentation :\n100 000 × 0,25 = 25 000 HTG.\n\nÉtape 2 : Nouveau prix :\n100 000 + 25 000 = 125 000 HTG.\n\nConclusion : le nouveau prix est 125 000 HTG."
  },

  {
    question: "Résoudre : x² - 31x + 240 = 0.",
    answer: "x = 15 ou x = 16",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 240 et dont la somme vaut -31.\n\nCes nombres sont -15 et -16.\n\nÉtape 2 :\nx² - 31x + 240 = (x - 15)(x - 16).\n\nÉtape 3 :\n(x - 15)(x - 16) = 0.\n\nDonc :\nx = 15 ou x = 16.\n\nConclusion : les solutions sont 15 et 16."
  },

  {
    question: "Calculer la dérivée de f(x) = 20x² + 3x.",
    answer: "f'(x) = 40x + 3",
    solution: "Étape 1 :\n(20x²)' = 20 × 2x = 40x.\n\nÉtape 2 :\n(3x)' = 3.\n\nÉtape 3 :\nf'(x) = 40x + 3.\n\nConclusion : f'(x) = 40x + 3."
  },

  {
    question: "Calculer lim(x→15) (x - 5).",
    answer: "10",
    solution: "La fonction est continue.\n\nÉtape 1 :\n15 - 5.\n\nÉtape 2 :\n15 - 5 = 10.\n\nConclusion : la limite vaut 10."
  },

  {
    question: "Déterminer une primitive de f(x) = 2x⁴ + 3x².",
    answer: "F(x) = (2/5)x⁵ + x³ + C",
    solution: "Étape 1 : Une primitive de 2x⁴ est :\n(2/5)x⁵.\n\nCar :\n[(2/5)x⁵]' = 2x⁴.\n\nÉtape 2 : Une primitive de 3x² est x³.\n\nCar :\n(x³)' = 3x².\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (2/5)x⁵ + x³ + C.\n\nConclusion : F(x) est une primitive de 2x⁴ + 3x²."
  },

  {
    question: "Calculer 29³.",
    answer: "24389",
    solution: "Étape 1 :\n29³ = 29 × 29 × 29.\n\nÉtape 2 :\n29 × 29 = 841.\n\nÉtape 3 :\n841 × 29 = 24 389.\n\nConclusion : 29³ = 24 389."
  },

  {
    question: "Résoudre 2ˣ = 8192.",
    answer: "x = 13",
    solution: "Étape 1 :\n8192 = 2¹³.\n\nÉtape 2 :\n2ˣ = 2¹³.\n\nÉtape 3 : Les bases sont identiques :\nx = 13.\n\nConclusion : x = 13."
  },

  {
    question: "Calculer ln(e²⁹).",
    answer: "29",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e²⁹) = 29.\n\nConclusion : le résultat est 29."
  },

  {
    question: "Un capital de 1 000 000 HTG est placé à 5 % pendant 2 ans à intérêt simple. Calculer le capital final.",
    answer: "1 100 000 HTG",
    solution: "Étape 1 :\nC = 1 000 000.\nt = 0,05.\nn = 2.\n\nÉtape 2 :\nI = 1 000 000 × 0,05 × 2.\n\nÉtape 3 :\n1 000 000 × 0,05 = 50 000.\n\n50 000 × 2 = 100 000.\n\nÉtape 4 :\n1 000 000 + 100 000 = 1 100 000 HTG.\n\nConclusion : le capital final est 1 100 000 HTG."
  },

  {
    question: "Calculer la moyenne de 90, 92, 94, 96 et 98.",
    answer: "94",
    solution: "Étape 1 :\n90 + 92 + 94 + 96 + 98 = 470.\n\nÉtape 2 : Il y a 5 valeurs.\n\nÉtape 3 :\n470 ÷ 5 = 94.\n\nConclusion : la moyenne est 94."
  },

  {
    question: "Une urne contient 100 boules, dont 50 sont rouges. Quelle est la probabilité de tirer une boule rouge ?",
    answer: "1/2",
    solution: "Étape 1 : Il y a 100 boules au total.\n\nÉtape 2 : Il y a 50 boules rouges.\n\nÉtape 3 :\nP(rouge) = 50/100.\n\nÉtape 4 :\n50/100 = 1/2.\n\nConclusion : la probabilité est 1/2, soit 50 %."
  },

  {
    question: "Un véhicule parcourt 6 000 km en 60 heures. Calculer sa vitesse moyenne.",
    answer: "100 km/h",
    solution: "Formule :\nv = d ÷ t.\n\nÉtape 1 :\nv = 6 000 ÷ 60.\n\nÉtape 2 :\nv = 100 km/h.\n\nConclusion : la vitesse moyenne est 100 km/h."
  },

  {
    question: "Calculer le périmètre d'un rectangle de longueur 800 cm et largeur 200 cm.",
    answer: "2000 cm",
    solution: "Formule :\nP = 2(L + l).\n\nÉtape 1 :\n800 + 200 = 1 000.\n\nÉtape 2 :\n2 × 1 000 = 2 000 cm.\n\nConclusion : le périmètre est 2 000 cm."
  },

  {
    question: "Calculer l'aire d'un carré de côté 800 cm.",
    answer: "640 000 cm²",
    solution: "Formule :\nA = c².\n\nÉtape 1 :\nA = 800².\n\nÉtape 2 :\n800 × 800 = 640 000.\n\nConclusion : l'aire est 640 000 cm²."
  },

  {
    question: "Résoudre : 5x + 50 = 75.",
    answer: "x = 5",
    solution: "Étape 1 :\n5x + 50 = 75.\n\nÉtape 2 : On soustrait 50 :\n5x = 25.\n\nÉtape 3 : On divise par 5 :\nx = 5.\n\nVérification :\n5 × 5 + 50 = 75.\n\nConclusion : x = 5."
  },

  {
    question: "Calculer 37².",
    answer: "1369",
    solution: "Étape 1 :\n37² = 37 × 37.\n\nÉtape 2 :\n37 × 37 = 1 369.\n\nConclusion : 37² = 1 369."
  },

  {
    question: "Calculer √2025.",
    answer: "45",
    solution: "Étape 1 :\n45 × 45 = 2025.\n\nÉtape 2 :\n√2025 = 45.\n\nConclusion : √2025 = 45."
  },

  {
    question: "Une suite arithmétique a u₁ = 6 et r = 10. Calculer u₁₀.",
    answer: "u₁₀ = 96",
    solution: "Formule :\nuₙ = u₁ + (n - 1)r.\n\nÉtape 1 :\nu₁₀ = 6 + (10 - 1) × 10.\n\nÉtape 2 :\n9 × 10 = 90.\n\nÉtape 3 :\n6 + 90 = 96.\n\nConclusion : u₁₀ = 96."
  },

  {
    question: "Une suite géométrique a u₁ = 1 et q = 2. Calculer u₁₂.",
    answer: "u₁₂ = 2048",
    solution: "Formule :\nuₙ = u₁ × qⁿ⁻¹.\n\nÉtape 1 :\nu₁₂ = 1 × 2¹¹.\n\nÉtape 2 :\n2¹¹ = 2 048.\n\nConclusion : u₁₂ = 2 048."
  },

  {
    question: "Calculer la probabilité d'obtenir au moins un nombre pair en lançant un dé deux fois.",
    answer: "3/4",
    solution: "On utilise l'événement contraire.\n\nL'événement contraire est d'obtenir deux nombres impairs.\n\nÉtape 1 :\nP(impair) = 3/6 = 1/2.\n\nÉtape 2 :\nP(deux impairs) = 1/2 × 1/2 = 1/4.\n\nÉtape 3 :\nP(au moins un pair) = 1 - 1/4.\n\nÉtape 4 :\n1 - 1/4 = 3/4.\n\nConclusion : la probabilité est 3/4, soit 75 %."
  },

  {
    question: "Calculer l'aire d'un triangle de base 100 cm et hauteur 10 cm.",
    answer: "500 cm²",
    solution: "Formule :\nA = (base × hauteur) ÷ 2.\n\nÉtape 1 :\nA = (100 × 10) ÷ 2.\n\nÉtape 2 :\n100 × 10 = 1 000.\n\nÉtape 3 :\n1 000 ÷ 2 = 500.\n\nConclusion : l'aire est 500 cm²."
  },

  {
    question: "Calculer 25 % de 2 000.",
    answer: "500",
    solution: "Étape 1 :\n25 % = 0,25.\n\nÉtape 2 :\n2 000 × 0,25 = 500.\n\nConclusion : 25 % de 2 000 = 500."
  },

  {
    question: "Un prix de 100 000 HTG diminue de 20 %. Quel est le nouveau prix ?",
    answer: "80 000 HTG",
    solution: "Étape 1 : Calcul de la réduction :\n100 000 × 0,20 = 20 000 HTG.\n\nÉtape 2 : Prix final :\n100 000 - 20 000 = 80 000 HTG.\n\nConclusion : le nouveau prix est 80 000 HTG."
  },

  {
    question: "Résoudre : x² - 32x + 255 = 0.",
    answer: "x = 15 ou x = 17",
    solution: "Étape 1 : On cherche deux nombres dont le produit vaut 255 et dont la somme vaut -32.\n\nCes nombres sont -15 et -17.\n\nÉtape 2 :\nx² - 32x + 255 = (x - 15)(x - 17).\n\nÉtape 3 :\n(x - 15)(x - 17) = 0.\n\nDonc :\nx = 15 ou x = 17.\n\nConclusion : les solutions sont 15 et 17."
  },

  {
    question: "Calculer la dérivée de f(x) = 19x² + 2x.",
    answer: "f'(x) = 38x + 2",
    solution: "Étape 1 :\n(19x²)' = 19 × 2x = 38x.\n\nÉtape 2 :\n(2x)' = 2.\n\nÉtape 3 :\nf'(x) = 38x + 2.\n\nConclusion : f'(x) = 38x + 2."
  },

  {
    question: "Calculer lim(x→16) (x - 6).",
    answer: "10",
    solution: "La fonction est continue.\n\nÉtape 1 :\n16 - 6.\n\nÉtape 2 :\n16 - 6 = 10.\n\nConclusion : la limite vaut 10."
  },

  {
    question: "Déterminer une primitive de f(x) = 6x⁴ + 4x².",
    answer: "F(x) = (6/5)x⁵ + (4/3)x³ + C",
    solution: "Étape 1 : Une primitive de 6x⁴ est :\n(6/5)x⁵.\n\nCar :\n[(6/5)x⁵]' = 6x⁴.\n\nÉtape 2 : Une primitive de 4x² est :\n(4/3)x³.\n\nCar :\n[(4/3)x³]' = 4x².\n\nÉtape 3 : On ajoute C.\n\nDonc :\nF(x) = (6/5)x⁵ + (4/3)x³ + C.\n\nConclusion : F(x) est une primitive de 6x⁴ + 4x²."
  },

  {
    question: "Calculer 30³.",
    answer: "27000",
    solution: "Étape 1 :\n30³ = 30 × 30 × 30.\n\nÉtape 2 :\n30 × 30 = 900.\n\nÉtape 3 :\n900 × 30 = 27 000.\n\nConclusion : 30³ = 27 000."
  },

  {
    question: "Résoudre 4ˣ = 262 144.",
    answer: "x = 9",
    solution: "Étape 1 :\n262 144 = 4⁹.\n\nÉtape 2 :\n4ˣ = 4⁹.\n\nÉtape 3 : Les bases sont identiques :\nx = 9.\n\nConclusion : x = 9."
  },

  {
    question: "Calculer ln(e³⁰).",
    answer: "30",
    solution: "On utilise :\nln(eˣ) = x.\n\nDonc :\nln(e³⁰) = 30.\n\nConclusion : le résultat est 30."
  }

];

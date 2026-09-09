export const physiqueQuestions = [

  // =====================================================
  // 1. MOUVEMENT CIRCULAIRE — 10 EXERCICES
  // =====================================================

  {
    question: "Une voiture de masse 1200 kg décrit une trajectoire circulaire de rayon 50 m à la vitesse constante de 15 m/s. Déterminer son accélération centripète puis la force centripète exercée sur la voiture.",
    answer: "Démarche : On utilise ac = v²/r. Avec v = 15 m/s et r = 50 m, ac = 15²/50 = 225/50 = 4,5 m/s². Ensuite Fc = mac = 1200 × 4,5 = 5400 N. Réponse : l’accélération centripète est de 4,5 m/s² et la force centripète est de 5400 N."
  },

  {
    question: "Une roue de rayon 0,40 m tourne à 300 tours par minute. Calculer sa fréquence, sa période et la vitesse linéaire d’un point situé sur sa circonférence.",
    answer: "Démarche : 300 tours/min = 300/60 = 5 tours/s. Donc f = 5 Hz. La période est T = 1/f = 1/5 = 0,20 s. La vitesse linéaire est v = 2πrf = 2π × 0,40 × 5 ≈ 12,57 m/s. Réponse : f = 5 Hz, T = 0,20 s et v ≈ 12,57 m/s."
  },

  {
    question: "Un disque de rayon 0,25 m effectue 120 tours par minute. Calculer sa vitesse angulaire en rad/s puis la vitesse d’un point situé sur son bord.",
    answer: "Démarche : f = 120/60 = 2 Hz. La vitesse angulaire est ω = 2πf = 4π ≈ 12,57 rad/s. Puis v = ωr = 12,57 × 0,25 ≈ 3,14 m/s. Réponse : ω ≈ 12,57 rad/s et v ≈ 3,14 m/s."
  },

  {
    question: "Un cycliste parcourt un virage circulaire de rayon 20 m à 36 km/h. Calculer sa vitesse en m/s, son accélération centripète et la force centripète si la masse totale du cycliste et du vélo est de 80 kg.",
    answer: "Démarche : 36 km/h = 36/3,6 = 10 m/s. L’accélération centripète est ac = v²/r = 10²/20 = 5 m/s². La force est Fc = mac = 80 × 5 = 400 N. Réponse : v = 10 m/s, ac = 5 m/s² et Fc = 400 N."
  },

  {
    question: "Une machine possède une roue de rayon 0,50 m tournant à 600 tours/minute. Déterminer sa fréquence, sa vitesse angulaire et la vitesse linéaire d’un point de la périphérie.",
    answer: "Démarche : f = 600/60 = 10 Hz. Donc ω = 2πf = 20π ≈ 62,83 rad/s. La vitesse linéaire est v = ωr = 62,83 × 0,50 ≈ 31,42 m/s. Réponse : f = 10 Hz, ω ≈ 62,83 rad/s et v ≈ 31,42 m/s."
  },

  {
    question: "Une masse de 2 kg est attachée à une corde de longueur 1,5 m et tourne horizontalement à une vitesse de 6 m/s. Calculer l’accélération centripète et la tension de la corde.",
    answer: "Démarche : L’accélération centripète vaut ac = v²/r = 6²/1,5 = 36/1,5 = 24 m/s². La force centripète est fournie par la tension : F = mac = 2 × 24 = 48 N. Réponse : ac = 24 m/s² et la tension est de 48 N."
  },

  {
    question: "Une roue effectue 900 tours en 3 minutes. Son rayon est de 0,30 m. Calculer sa fréquence, sa période et la distance parcourue par un point de sa circonférence pendant 10 secondes.",
    answer: "Démarche : En 3 min = 180 s, la fréquence est f = 900/180 = 5 Hz. La période est T = 1/5 = 0,20 s. En 10 s, le nombre de tours est N = 5 × 10 = 50. La circonférence vaut 2πr = 2π × 0,30 ≈ 1,885 m. Distance = 50 × 1,885 ≈ 94,25 m. Réponse : f = 5 Hz, T = 0,20 s et la distance est ≈ 94,25 m."
  },

  {
    question: "Une voiture de masse 1000 kg roule à 20 m/s sur une route circulaire de rayon 100 m. Une seconde voiture roule sur le même virage à 10 m/s. Comparer les forces centripètes exercées sur les deux voitures.",
    answer: "Démarche : Fc = mv²/r. Pour la première voiture : Fc1 = 1000 × 20²/100 = 4000 N. Pour la deuxième : Fc2 = 1000 × 10²/100 = 1000 N. Le rapport est 4000/1000 = 4. Réponse : la première voiture subit une force centripète quatre fois plus grande."
  },

  {
    question: "Une roue tourne avec une vitesse angulaire de 10 rad/s et possède un rayon de 0,80 m. Calculer sa vitesse linéaire et son accélération centripète.",
    answer: "Démarche : La vitesse linéaire est v = ωr = 10 × 0,80 = 8 m/s. L’accélération centripète est ac = ω²r = 10² × 0,80 = 80 m/s². Réponse : v = 8 m/s et ac = 80 m/s²."
  },

  {
    question: "Un objet de masse 0,5 kg effectue un mouvement circulaire uniforme de rayon 2 m avec une période de 4 s. Calculer sa vitesse, son accélération centripète et la force centripète.",
    answer: "Démarche : v = 2πr/T = 2π × 2/4 = π ≈ 3,14 m/s. Puis ac = v²/r = 3,14²/2 ≈ 4,93 m/s². Enfin Fc = mac = 0,5 × 4,93 ≈ 2,47 N. Réponse : v ≈ 3,14 m/s, ac ≈ 4,93 m/s² et Fc ≈ 2,47 N."
  },

  // =====================================================
  // 2. TRAVAIL ET ÉNERGIE — 10 EXERCICES
  // =====================================================

  {
    question: "Un élève pousse une caisse de masse 20 kg sur une distance de 8 m avec une force horizontale constante de 50 N. Calculer le travail effectué par cette force.",
    answer: "Démarche : Le travail est W = Fd cosθ. La force et le déplacement sont dans la même direction, donc θ = 0° et cos0° = 1. W = 50 × 8 = 400 J. Réponse : le travail effectué est de 400 J."
  },

  {
    question: "Une force de 100 N tire une caisse sur 5 m en faisant un angle de 60° avec l’horizontale. Calculer le travail de cette force.",
    answer: "Démarche : W = Fd cosθ. Donc W = 100 × 5 × cos60°. Comme cos60° = 0,5, W = 250 J. Réponse : le travail est de 250 J."
  },

  {
    question: "Un objet de masse 4 kg se déplace à 10 m/s. Calculer son énergie cinétique. Que devient cette énergie si sa vitesse double ?",
    answer: "Démarche : Ec = 1/2 mv². À 10 m/s : Ec = 1/2 × 4 × 10² = 200 J. À 20 m/s : Ec = 1/2 × 4 × 20² = 800 J. Réponse : l’énergie passe de 200 J à 800 J, donc elle est multipliée par 4."
  },

  {
    question: "Une pierre de masse 3 kg est placée à une hauteur de 12 m. En prenant g = 10 m/s², calculer son énergie potentielle de pesanteur.",
    answer: "Démarche : Ep = mgh. Donc Ep = 3 × 10 × 12 = 360 J. Réponse : l’énergie potentielle est de 360 J."
  },

  {
    question: "Une balle de masse 0,5 kg est lancée verticalement avec une vitesse initiale de 20 m/s. En négligeant les frottements et en prenant g = 10 m/s², déterminer la hauteur maximale atteinte.",
    answer: "Démarche : Au départ, Ec = 1/2 mv² = 1/2 × 0,5 × 20² = 100 J. Au sommet, toute cette énergie devient potentielle : mgh = 100. Donc 0,5 × 10 × h = 100, d’où h = 20 m. Réponse : la hauteur maximale est de 20 m."
  },

  {
    question: "Un moteur fournit un travail de 18 000 J en 30 secondes. Calculer sa puissance mécanique moyenne.",
    answer: "Démarche : P = W/t. Donc P = 18 000/30 = 600 W. Réponse : la puissance moyenne est de 600 W."
  },

  {
    question: "Une machine reçoit une énergie de 5000 J et fournit une énergie utile de 3500 J. Calculer son rendement.",
    answer: "Démarche : η = (Énergie utile/Énergie reçue) × 100. η = (3500/5000) × 100 = 70 %. Réponse : le rendement de la machine est de 70 %."
  },

  {
    question: "Un objet de masse 10 kg passe d’une vitesse de 4 m/s à une vitesse de 12 m/s. Calculer la variation de son énergie cinétique.",
    answer: "Démarche : Ec initiale = 1/2 × 10 × 4² = 80 J. Ec finale = 1/2 × 10 × 12² = 720 J. ΔEc = 720 - 80 = 640 J. Réponse : la variation d’énergie cinétique est de 640 J."
  },

  {
    question: "Une caisse de masse 15 kg est tirée sur une distance de 10 m par une force de 80 N parallèle au déplacement. Les frottements exercent une force opposée de 20 N. Calculer le travail de chaque force et le travail total.",
    answer: "Démarche : Travail de la force motrice : W1 = 80 × 10 = 800 J. Travail des frottements : Wf = -20 × 10 = -200 J. Travail total : Wtotal = 800 - 200 = 600 J. Réponse : W1 = 800 J, Wf = -200 J et Wtotal = 600 J."
  },

  {
    question: "Un objet de masse 2 kg est lâché sans vitesse initiale d’une hauteur de 15 m. En négligeant les frottements et avec g = 10 m/s², calculer sa vitesse juste avant d’atteindre le sol.",
    answer: "Démarche : Conservation de l’énergie mécanique : mgh = 1/2 mv². La masse se simplifie : gh = v²/2. Donc v² = 2gh = 2 × 10 × 15 = 300. v = √300 ≈ 17,32 m/s. Réponse : v ≈ 17,32 m/s."
  },

  // =====================================================
  // 3. LOI D’OHM — 8 EXERCICES
  // =====================================================

  {
    question: "Une résistance de 20 Ω est branchée aux bornes d’une source de tension de 12 V. Calculer l’intensité du courant qui la traverse.",
    answer: "Démarche : D’après la loi d’Ohm, I = U/R. I = 12/20 = 0,6 A. Réponse : l’intensité est de 0,6 A."
  },

  {
    question: "Un conducteur est traversé par un courant de 2 A lorsqu’il est soumis à une tension de 24 V. Déterminer sa résistance.",
    answer: "Démarche : R = U/I. R = 24/2 = 12 Ω. Réponse : la résistance vaut 12 Ω."
  },

  {
    question: "Une résistance de 15 Ω est traversée par un courant de 0,8 A. Calculer la tension à ses bornes et la puissance électrique consommée.",
    answer: "Démarche : U = RI = 15 × 0,8 = 12 V. Puis P = UI = 12 × 0,8 = 9,6 W. Réponse : U = 12 V et P = 9,6 W."
  },

  {
    question: "Un appareil électrique fonctionne sous une tension de 120 V et consomme un courant de 2,5 A. Calculer sa résistance et sa puissance.",
    answer: "Démarche : R = U/I = 120/2,5 = 48 Ω. P = UI = 120 × 2,5 = 300 W. Réponse : R = 48 Ω et P = 300 W."
  },

  {
    question: "Une résistance de 40 Ω dissipe une puissance de 90 W. Calculer l’intensité du courant qui la traverse.",
    answer: "Démarche : P = RI². Donc I² = P/R = 90/40 = 2,25. I = √2,25 = 1,5 A. Réponse : I = 1,5 A."
  },

  {
    question: "Une résistance de 10 Ω est traversée par un courant de 3 A. Calculer la tension à ses bornes et la puissance dissipée.",
    answer: "Démarche : U = RI = 10 × 3 = 30 V. P = RI² = 10 × 3² = 90 W. Réponse : U = 30 V et P = 90 W."
  },

  {
    question: "Un générateur de 24 V alimente une résistance. Le courant mesuré est de 1,2 A. Calculer la résistance puis l’énergie consommée en 5 minutes.",
    answer: "Démarche : R = U/I = 24/1,2 = 20 Ω. La puissance est P = UI = 24 × 1,2 = 28,8 W. 5 min = 300 s. Énergie E = Pt = 28,8 × 300 = 8640 J. Réponse : R = 20 Ω et E = 8640 J."
  },

  {
    question: "Une lampe possède une résistance de 60 Ω et est alimentée sous 120 V. Calculer le courant qui la traverse et sa puissance électrique.",
    answer: "Démarche : I = U/R = 120/60 = 2 A. P = UI = 120 × 2 = 240 W. Réponse : I = 2 A et P = 240 W."
  },

  // =====================================================
  // 4. RÉSISTANCES — 10 EXERCICES
  // =====================================================

  {
    question: "Deux résistances de 10 Ω et 20 Ω sont montées en série. Calculer leur résistance équivalente.",
    answer: "Démarche : En série, Req = R1 + R2. Req = 10 + 20 = 30 Ω. Réponse : Req = 30 Ω."
  },

  {
    question: "Trois résistances de 5 Ω, 10 Ω et 15 Ω sont branchées en série sur une source de 60 V. Calculer la résistance équivalente et le courant du circuit.",
    answer: "Démarche : Req = 5 + 10 + 15 = 30 Ω. D’après Ohm, I = U/Req = 60/30 = 2 A. Réponse : Req = 30 Ω et I = 2 A."
  },

  {
    question: "Deux résistances de 6 Ω et 3 Ω sont montées en parallèle. Calculer leur résistance équivalente.",
    answer: "Démarche : 1/Req = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Donc Req = 2 Ω. Réponse : Req = 2 Ω."
  },

  {
    question: "Deux résistances de 12 Ω et 4 Ω sont branchées en parallèle sous 24 V. Calculer le courant dans chaque résistance et le courant total.",
    answer: "Démarche : La tension est la même dans chaque branche. I1 = 24/12 = 2 A. I2 = 24/4 = 6 A. Courant total : I = I1 + I2 = 8 A. Réponse : I1 = 2 A, I2 = 6 A et I = 8 A."
  },

  {
    question: "Une résistance de 5 Ω est montée en série avec deux résistances de 10 Ω et 10 Ω en parallèle. Calculer la résistance équivalente du montage.",
    answer: "Démarche : Les deux résistances parallèles donnent Rp = (10 × 10)/(10 + 10) = 100/20 = 5 Ω. Elles sont ensuite en série avec 5 Ω. Req = 5 + 5 = 10 Ω. Réponse : Req = 10 Ω."
  },

  {
    question: "Une source de 30 V alimente une résistance de 5 Ω en série avec un groupement parallèle de deux résistances de 10 Ω. Calculer le courant total.",
    answer: "Démarche : Le parallèle donne Rp = 5 Ω. Donc Req = 5 + 5 = 10 Ω. Le courant total est I = 30/10 = 3 A. Réponse : I = 3 A."
  },

  {
    question: "Deux résistances de 20 Ω et 30 Ω sont montées en série sur une source de 100 V. Calculer la tension aux bornes de chaque résistance.",
    answer: "Démarche : Req = 20 + 30 = 50 Ω. Courant I = 100/50 = 2 A. Donc U1 = R1I = 20 × 2 = 40 V et U2 = 30 × 2 = 60 V. Réponse : U1 = 40 V et U2 = 60 V."
  },

  {
    question: "Deux résistances de 8 Ω et 24 Ω sont branchées en parallèle sur une tension de 12 V. Calculer la résistance équivalente puis le courant total.",
    answer: "Démarche : Req = (8 × 24)/(8 + 24) = 192/32 = 6 Ω. I = U/Req = 12/6 = 2 A. Réponse : Req = 6 Ω et I = 2 A."
  },

  {
    question: "Un montage comporte une résistance de 4 Ω en série avec deux résistances de 6 Ω et 3 Ω en parallèle. Il est alimenté sous 18 V. Calculer la résistance totale et le courant fourni par la source.",
    answer: "Démarche : Le parallèle vaut Rp = (6 × 3)/(6 + 3) = 18/9 = 2 Ω. Donc Req = 4 + 2 = 6 Ω. Courant total I = 18/6 = 3 A. Réponse : Req = 6 Ω et I = 3 A."
  },

  {
    question: "Trois résistances identiques de 9 Ω sont utilisées. Deux sont montées en parallèle puis l’ensemble est monté en série avec la troisième. Calculer la résistance équivalente.",
    answer: "Démarche : Deux résistances de 9 Ω en parallèle donnent Rp = 9/2 = 4,5 Ω. En série avec la troisième : Req = 4,5 + 9 = 13,5 Ω. Réponse : Req = 13,5 Ω."
  },

  // =====================================================
  // 5. EFFET DE JOULE — 8 EXERCICES
  // =====================================================

  {
    question: "Une résistance de 10 Ω est parcourue par un courant de 2 A pendant 5 minutes. Calculer l’énergie thermique produite par effet Joule.",
    answer: "Démarche : E = RI²t. Avec t = 5 × 60 = 300 s. E = 10 × 2² × 300 = 10 × 4 × 300 = 12 000 J. Réponse : l’énergie produite est de 12 000 J."
  },

  {
    question: "Un radiateur électrique de résistance 20 Ω est alimenté sous 220 V. Calculer sa puissance puis l’énergie consommée pendant 10 minutes.",
    answer: "Démarche : P = U²/R = 220²/20 = 2420 W. Pour 10 min = 600 s, E = Pt = 2420 × 600 = 1 452 000 J. Réponse : P = 2420 W et E = 1 452 000 J."
  },

  {
    question: "Un conducteur de résistance 5 Ω est parcouru par un courant de 4 A pendant 2 minutes. Calculer la puissance dissipée et l’énergie produite.",
    answer: "Démarche : P = RI² = 5 × 4² = 80 W. t = 120 s. E = Pt = 80 × 120 = 9600 J. Réponse : P = 80 W et E = 9600 J."
  },

  {
    question: "Une résistance dissipe une puissance de 100 W lorsqu’elle est traversée par un courant de 2 A. Déterminer sa résistance.",
    answer: "Démarche : P = RI². Donc R = P/I² = 100/4 = 25 Ω. Réponse : R = 25 Ω."
  },

  {
    question: "Une résistance de 44 Ω est branchée sous 220 V. Calculer le courant puis la puissance dissipée par effet Joule.",
    answer: "Démarche : I = U/R = 220/44 = 5 A. Puis P = UI = 220 × 5 = 1100 W. Réponse : I = 5 A et P = 1100 W."
  },

  {
    question: "Un appareil de puissance 800 W fonctionne pendant 15 minutes. Calculer l’énergie électrique consommée en joules.",
    answer: "Démarche : t = 15 × 60 = 900 s. E = Pt = 800 × 900 = 720 000 J. Réponse : E = 720 000 J."
  },

  {
    question: "Une résistance de 50 Ω est traversée par un courant de 1,5 A pendant 4 minutes. Calculer l’énergie thermique dégagée.",
    answer: "Démarche : t = 4 × 60 = 240 s. E = RI²t = 50 × 1,5² × 240 = 50 × 2,25 × 240 = 27 000 J. Réponse : E = 27 000 J."
  },

  {
    question: "Un chauffe-eau électrique de 2000 W fonctionne pendant 30 minutes. Calculer l’énergie transformée en chaleur.",
    answer: "Démarche : 30 min = 1800 s. E = Pt = 2000 × 1800 = 3 600 000 J. Réponse : l’énergie thermique produite est de 3,6 × 10⁶ J."
  },

  // =====================================================
  // 6. CIRCUITS COMPLEXES — 10 EXERCICES
  // =====================================================

  {
    question: "Dans un circuit, un courant de 5 A arrive à un nœud. Il se divise en deux branches. La première branche reçoit 2 A. Déterminer le courant dans la deuxième branche.",
    answer: "Démarche : D’après la loi des nœuds, le courant entrant est égal à la somme des courants sortants. 5 = 2 + I2. Donc I2 = 3 A. Réponse : le courant dans la deuxième branche est de 3 A."
  },

  {
    question: "Un générateur de 24 V alimente deux résistances de 4 Ω et 8 Ω montées en série. Vérifier que la somme des tensions aux bornes des résistances est égale à la tension du générateur.",
    answer: "Démarche : Req = 4 + 8 = 12 Ω. I = 24/12 = 2 A. U1 = 4 × 2 = 8 V. U2 = 8 × 2 = 16 V. U1 + U2 = 24 V. Réponse : la loi des mailles est vérifiée."
  },

  {
    question: "Un générateur de 30 V alimente une résistance de 5 Ω en série avec deux résistances de 10 Ω et 10 Ω en parallèle. Déterminer le courant total et les courants dans les deux branches parallèles.",
    answer: "Démarche : Le parallèle vaut 5 Ω. Req = 5 + 5 = 10 Ω. Courant total I = 30/10 = 3 A. La tension sur la partie parallèle est U = 3 × 5 = 15 V. Chaque branche de 10 Ω reçoit I = 15/10 = 1,5 A. Vérification : 1,5 + 1,5 = 3 A. Réponse : courant total = 3 A et chaque branche = 1,5 A."
  },

  {
    question: "Dans une maille contenant un générateur de 12 V et deux résistances de 2 Ω et 4 Ω en série, calculer le courant en appliquant la loi des mailles.",
    answer: "Démarche : Loi des mailles : 12 - 2I - 4I = 0. Donc 12 - 6I = 0, d’où I = 2 A. Réponse : le courant est de 2 A."
  },

  {
    question: "Un circuit comporte deux branches parallèles. La première est constituée d’une résistance de 6 Ω et la deuxième d’une résistance de 3 Ω. La tension du générateur est de 12 V. Déterminer les courants de branche et le courant total.",
    answer: "Démarche : Dans chaque branche, U = 12 V. I1 = 12/6 = 2 A. I2 = 12/3 = 4 A. Au nœud, I = I1 + I2 = 6 A. Réponse : I1 = 2 A, I2 = 4 A et Itotal = 6 A."
  },

  {
    question: "Un circuit comporte une résistance de 2 Ω en série avec un parallèle constitué de 6 Ω et 3 Ω. Le générateur fournit 16 V. Calculer le courant total et la tension sur le parallèle.",
    answer: "Démarche : Rp = (6 × 3)/(6 + 3) = 2 Ω. Req = 2 + 2 = 4 Ω. I = 16/4 = 4 A. La tension sur la résistance série est U1 = 2 × 4 = 8 V. Donc la tension sur le parallèle est Up = 16 - 8 = 8 V. Réponse : I = 4 A et Up = 8 V."
  },

  {
    question: "Un générateur de 20 V alimente deux résistances de 5 Ω et 15 Ω en série. Calculer le courant puis les tensions aux bornes des deux résistances.",
    answer: "Démarche : Req = 20 Ω. I = 20/20 = 1 A. U1 = 5 × 1 = 5 V. U2 = 15 × 1 = 15 V. Vérification : 5 + 15 = 20 V. Réponse : I = 1 A, U1 = 5 V et U2 = 15 V."
  },

  {
    question: "Un nœud reçoit deux courants de 4 A et 3 A. Trois courants sortent du nœud : 2 A, 1 A et I. Déterminer I.",
    answer: "Démarche : Loi des nœuds : 4 + 3 = 2 + 1 + I. Donc 7 = 3 + I, d’où I = 4 A. Réponse : I = 4 A."
  },

  {
    question: "Deux résistances de 4 Ω et 12 Ω sont montées en parallèle puis connectées en série avec une résistance de 5 Ω. Le générateur fournit 20 V. Calculer la résistance totale et le courant total.",
    answer: "Démarche : Rp = (4 × 12)/(4 + 12) = 48/16 = 3 Ω. Req = 3 + 5 = 8 Ω. I = 20/8 = 2,5 A. Réponse : Req = 8 Ω et I = 2,5 A."
  },

  {
    question: "Dans une maille, un générateur de 18 V alimente trois résistances de 2 Ω, 4 Ω et 3 Ω en série. Calculer le courant et vérifier la loi des mailles.",
    answer: "Démarche : Req = 2 + 4 + 3 = 9 Ω. I = 18/9 = 2 A. Les chutes de tension sont 4 V, 8 V et 6 V. Leur somme vaut 18 V. Donc 18 - 4 - 8 - 6 = 0. Réponse : I = 2 A et la loi des mailles est vérifiée."
  },

  // =====================================================
  // 7. CONDENSATEUR — 8 EXERCICES
  // =====================================================

  {
    question: "Un condensateur de capacité 100 μF est branché sous une tension de 12 V. Calculer la charge électrique accumulée.",
    answer: "Démarche : Q = CU. C = 100 μF = 100 × 10⁻⁶ F. Q = 100 × 10⁻⁶ × 12 = 1,2 × 10⁻³ C. Réponse : Q = 1,2 mC."
  },

  {
    question: "Un condensateur de 50 μF est chargé sous 20 V. Calculer l’énergie électrique qu’il emmagasine.",
    answer: "Démarche : E = 1/2 CU². E = 1/2 × 50 × 10⁻⁶ × 20² = 0,01 J. Réponse : l’énergie stockée est de 0,01 J."
  },

  {
    question: "Un condensateur porte une charge de 4 mC lorsqu’il est soumis à une tension de 20 V. Déterminer sa capacité.",
    answer: "Démarche : C = Q/U. C = 4 × 10⁻³/20 = 2 × 10⁻⁴ F = 200 μF. Réponse : C = 200 μF."
  },

  {
    question: "Deux condensateurs de 10 μF et 20 μF sont branchés en parallèle. Calculer leur capacité équivalente.",
    answer: "Démarche : En parallèle, Ceq = C1 + C2. Ceq = 10 + 20 = 30 μF. Réponse : Ceq = 30 μF."
  },

  {
    question: "Deux condensateurs de 6 μF et 3 μF sont branchés en série. Calculer leur capacité équivalente.",
    answer: "Démarche : 1/Ceq = 1/6 + 1/3 = 1/6 + 2/6 = 3/6. Donc Ceq = 2 μF. Réponse : Ceq = 2 μF."
  },

  {
    question: "Un condensateur de capacité 200 μF est chargé à 50 V. Calculer la charge accumulée puis l’énergie stockée.",
    answer: "Démarche : Q = CU = 200 × 10⁻⁶ × 50 = 0,01 C. Énergie : E = 1/2 CU² = 1/2 × 200 × 10⁻⁶ × 2500 = 0,25 J. Réponse : Q = 0,01 C et E = 0,25 J."
  },

  {
    question: "Trois condensateurs de 4 μF sont montés en parallèle. Ils sont ensuite branchés sous 12 V. Calculer la capacité équivalente et la charge totale.",
    answer: "Démarche : Ceq = 4 + 4 + 4 = 12 μF. Q = CeqU = 12 × 10⁻⁶ × 12 = 144 × 10⁻⁶ C = 144 μC. Réponse : Ceq = 12 μF et Q = 144 μC."
  },

  {
    question: "Un condensateur de 80 μF emmagasine une charge de 2,4 mC. Calculer la tension à ses bornes puis l’énergie stockée.",
    answer: "Démarche : U = Q/C = 2,4 × 10⁻³/(80 × 10⁻⁶) = 30 V. Puis E = 1/2 QU = 1/2 × 2,4 × 10⁻³ × 30 = 0,036 J. Réponse : U = 30 V et E = 0,036 J."
  },

  // =====================================================
  // 8. COURANT CONTINU — 8 EXERCICES
  // =====================================================

  {
    question: "Une pile possède une force électromotrice de 12 V et une résistance interne de 1 Ω. Elle alimente une résistance extérieure de 5 Ω. Calculer le courant fourni par la pile.",
    answer: "Démarche : Le courant est I = E/(R + r). Donc I = 12/(5 + 1) = 2 A. Réponse : le courant fourni est de 2 A."
  },

  {
    question: "Une source possède une f.é.m. de 24 V et une résistance interne de 2 Ω. Elle débite un courant de 3 A. Calculer la résistance extérieure.",
    answer: "Démarche : E = I(R + r). Donc R + r = E/I = 24/3 = 8 Ω. Ainsi R = 8 - 2 = 6 Ω. Réponse : la résistance extérieure est de 6 Ω."
  },

  {
    question: "Une batterie de f.é.m. 12 V possède une résistance interne de 0,5 Ω et alimente une résistance de 5,5 Ω. Calculer le courant et la tension disponible aux bornes de la résistance extérieure.",
    answer: "Démarche : I = E/(R+r) = 12/(5,5+0,5) = 2 A. La tension utile est U = RI = 5,5 × 2 = 11 V. Réponse : I = 2 A et U = 11 V."
  },

  {
    question: "Un générateur de f.é.m. 18 V et de résistance interne 1 Ω débite un courant de 2 A. Calculer la puissance fournie par le générateur et la puissance dissipée dans sa résistance interne.",
    answer: "Démarche : Puissance totale fournie par la f.é.m. : P = EI = 18 × 2 = 36 W. Pertes internes : Pinterne = rI² = 1 × 2² = 4 W. Réponse : puissance fournie = 36 W et pertes internes = 4 W."
  },

  {
    question: "Une batterie de 9 V possède une résistance interne de 0,5 Ω et alimente une résistance de 8,5 Ω. Calculer le courant puis la tension aux bornes de la batterie en fonctionnement.",
    answer: "Démarche : I = 9/(8,5 + 0,5) = 1 A. La tension aux bornes est U = E - rI = 9 - 0,5 × 1 = 8,5 V. Réponse : I = 1 A et U = 8,5 V."
  },

  {
    question: "Un générateur fournit un courant continu de 4 A sous une tension de 15 V pendant 10 minutes. Calculer l’énergie électrique fournie.",
    answer: "Démarche : P = UI = 15 × 4 = 60 W. t = 10 × 60 = 600 s. E = Pt = 60 × 600 = 36 000 J. Réponse : E = 36 000 J."
  },

  {
    question: "Une source de 20 V possède une résistance interne de 2 Ω et alimente une résistance extérieure de 8 Ω. Calculer le courant, la tension aux bornes de la charge et la puissance reçue par la charge.",
    answer: "Démarche : I = 20/(8+2) = 2 A. U = RI = 8 × 2 = 16 V. Pcharge = UI = 16 × 2 = 32 W. Réponse : I = 2 A, U = 16 V et P = 32 W."
  },

  {
    question: "Une batterie possède une f.é.m. de 12 V et une résistance interne de 1 Ω. Pour quel courant la puissance dissipée dans la résistance interne est-elle de 9 W ?",
    answer: "Démarche : Pinterne = rI². Donc 9 = 1 × I². Ainsi I² = 9 et I = 3 A. Réponse : le courant est de 3 A."
  },

  // =====================================================
  // 9. CHAMP D’UN SOLÉNOÏDE — 8 EXERCICES
  // =====================================================

  {
    question: "Un solénoïde de longueur 0,50 m possède 1000 spires et est parcouru par un courant de 2 A. Calculer le champ magnétique intérieur. On prendra μ0 = 4π × 10⁻⁷ T·m/A.",
    answer: "Démarche : B = μ0(N/L)I. N/L = 1000/0,50 = 2000 spires/m. Donc B = 4π × 10⁻⁷ × 2000 × 2 ≈ 5,03 × 10⁻³ T. Réponse : B ≈ 5,03 mT."
  },

  {
    question: "Un solénoïde de 0,20 m comporte 500 spires et est parcouru par un courant de 1,5 A. Calculer son champ magnétique.",
    answer: "Démarche : N/L = 500/0,20 = 2500 spires/m. B = μ0nI = 4π × 10⁻⁷ × 2500 × 1,5 ≈ 4,71 × 10⁻³ T. Réponse : B ≈ 4,71 mT."
  },

  {
    question: "Un solénoïde de 0,40 m doit produire un champ de 2 × 10⁻³ T avec un courant de 1 A. Déterminer le nombre de spires nécessaires.",
    answer: "Démarche : B = μ0(N/L)I. Donc N = BL/(μ0I). N = (2 × 10⁻³ × 0,40)/(4π × 10⁻⁷ × 1) ≈ 637 spires. Réponse : il faut environ 637 spires."
  },

  {
    question: "Un solénoïde possède 2000 spires réparties sur une longueur de 1 m. Quel courant faut-il pour obtenir un champ de 5 mT ?",
    answer: "Démarche : I = B/(μ0N/L). Ici N/L = 2000 m⁻¹. I = 5 × 10⁻³/(4π × 10⁻⁷ × 2000) ≈ 1,99 A. Réponse : I ≈ 1,99 A."
  },

  {
    question: "Deux solénoïdes ont le même nombre de spires et sont parcourus par le même courant. Le premier mesure 20 cm et le second 40 cm. Comparer leurs champs magnétiques intérieurs.",
    answer: "Démarche : B = μ0(N/L)I. À N et I constants, B est inversement proportionnel à L. Le deuxième solénoïde est deux fois plus long, donc son champ est deux fois plus faible. Réponse : B2 = B1/2."
  },

  {
    question: "Un solénoïde de 0,30 m possède 1500 spires. Il est parcouru par un courant de 0,8 A. Calculer le nombre de spires par mètre puis le champ magnétique.",
    answer: "Démarche : n = N/L = 1500/0,30 = 5000 spires/m. B = μ0nI = 4π × 10⁻⁷ × 5000 × 0,8 ≈ 5,03 × 10⁻³ T. Réponse : n = 5000 spires/m et B ≈ 5,03 mT."
  },

  {
    question: "Le champ magnétique au centre d’un solénoïde est de 3 mT lorsqu’il est parcouru par un courant de 2 A. Si le courant est doublé sans modifier le solénoïde, quel sera le nouveau champ ?",
    answer: "Démarche : Pour un solénoïde fixe, B est proportionnel à I. Si I est multiplié par 2, B est aussi multiplié par 2. B2 = 2 × 3 = 6 mT. Réponse : B = 6 mT."
  },

  {
    question: "Un solénoïde possède 800 spires sur une longueur de 0,40 m. Il produit un champ de 2,01 mT. Déterminer approximativement le courant qui le traverse.",
    answer: "Démarche : B = μ0(N/L)I. Donc I = B/[μ0(N/L)]. N/L = 800/0,40 = 2000 m⁻¹. I = 2,01 × 10⁻³/(4π × 10⁻⁷ × 2000) ≈ 0,80 A. Réponse : I ≈ 0,80 A."
  },

  // =====================================================
  // 10. INDUCTION ÉLECTROMAGNÉTIQUE — 10 EXERCICES
  // =====================================================

  {
    question: "Une bobine de 200 spires voit son flux magnétique moyen passer de 0,01 Wb à 0,04 Wb en 0,5 s. Calculer la valeur absolue de la f.é.m. moyenne induite.",
    answer: "Démarche : |e| = N|ΔΦ|/Δt. ΔΦ = 0,04 - 0,01 = 0,03 Wb. Donc |e| = 200 × 0,03/0,5 = 12 V. Réponse : la f.é.m. moyenne induite est de 12 V."
  },

  {
    question: "Une bobine de 100 spires est soumise à un champ magnétique uniforme. Le flux par spire varie de 0,02 Wb à 0 en 0,1 s. Calculer la f.é.m. moyenne induite.",
    answer: "Démarche : |ΔΦ| = 0,02 Wb. |e| = N|ΔΦ|/Δt = 100 × 0,02/0,1 = 20 V. Réponse : |e| = 20 V."
  },

  {
    question: "Une barre conductrice de longueur 0,50 m se déplace à 8 m/s perpendiculairement à un champ magnétique de 0,4 T. Calculer la f.é.m. induite.",
    answer: "Démarche : Pour un déplacement perpendiculaire, e = BLv. Donc e = 0,4 × 0,50 × 8 = 1,6 V. Réponse : la f.é.m. induite est de 1,6 V."
  },

  {
    question: "Une barre de longueur 0,80 m se déplace à 5 m/s dans un champ magnétique de 0,6 T, perpendiculairement au champ. Calculer la tension induite.",
    answer: "Démarche : e = BLv. Donc e = 0,6 × 0,80 × 5 = 2,4 V. Réponse : e = 2,4 V."
  },

  {
    question: "Une bobine de 500 spires est placée dans un champ magnétique. Le flux par spire augmente de 0,005 Wb à 0,025 Wb en 0,2 s. Déterminer la f.é.m. induite moyenne.",
    answer: "Démarche : ΔΦ = 0,025 - 0,005 = 0,020 Wb. |e| = NΔΦ/Δt = 500 × 0,020/0,2 = 50 V. Réponse : |e| = 50 V."
  },

  {
    question: "Une bobine de 250 spires possède un flux magnétique de 4 × 10⁻³ Wb par spire. Le flux devient nul en 0,05 s. Calculer la f.é.m. moyenne induite.",
    answer: "Démarche : |e| = N|ΔΦ|/Δt = 250 × 4 × 10⁻³/0,05 = 20 V. Réponse : |e| = 20 V."
  },

  {
    question: "Une barre de longueur 0,25 m se déplace à 12 m/s dans un champ magnétique de 0,8 T. Le mouvement est perpendiculaire au champ. Calculer la f.é.m. induite.",
    answer: "Démarche : e = BLv = 0,8 × 0,25 × 12 = 2,4 V. Réponse : e = 2,4 V."
  },

  {
    question: "Une bobine comporte 1000 spires. Son flux magnétique passe de 6 × 10⁻³ Wb à 2 × 10⁻³ Wb en 0,4 s. Calculer la valeur absolue de la f.é.m. induite moyenne.",
    answer: "Démarche : |ΔΦ| = |2 × 10⁻³ - 6 × 10⁻³| = 4 × 10⁻³ Wb. |e| = 1000 × 4 × 10⁻³/0,4 = 10 V. Réponse : |e| = 10 V."
  },

  {
    question: "Une barre conductrice de longueur 0,40 m doit produire une f.é.m. de 3,2 V lorsqu’elle se déplace à 10 m/s perpendiculairement au champ. Déterminer l’intensité du champ magnétique nécessaire.",
    answer: "Démarche : e = BLv. Donc B = e/(Lv) = 3,2/(0,40 × 10) = 0,8 T. Réponse : B = 0,8 T."
  },

  {
    question: "Une bobine est placée dans un champ magnétique variable. Son flux par spire passe de 0,03 Wb à 0,01 Wb en 0,1 s. La bobine possède 300 spires. Déterminer la f.é.m. moyenne induite et préciser que son sens s’oppose à la variation du flux.",
    answer: "Démarche : |ΔΦ| = 0,02 Wb. |e| = N|ΔΦ|/Δt = 300 × 0,02/0,1 = 60 V. D’après la loi de Lenz, le courant induit crée un champ qui s’oppose à la diminution du flux. Réponse : |e| = 60 V et le sens du courant s’oppose à la diminution du flux."
  },

  // =====================================================
  // 11. FORCE SUR UN CONDUCTEUR — 10 EXERCICES
  // =====================================================

  {
    question: "Un conducteur de longueur 0,50 m est parcouru par un courant de 4 A et placé perpendiculairement dans un champ magnétique de 0,8 T. Calculer la force magnétique exercée sur le conducteur.",
    answer: "Démarche : F = BIL sinθ. Le conducteur est perpendiculaire au champ, donc θ = 90° et sin90° = 1. F = 0,8 × 4 × 0,50 = 1,6 N. Réponse : F = 1,6 N."
  },

  {
    question: "Un conducteur de longueur 0,20 m est parcouru par un courant de 3 A dans un champ magnétique de 0,5 T. Le conducteur est perpendiculaire au champ. Déterminer la force exercée.",
    answer: "Démarche : F = BIL. F = 0,5 × 3 × 0,20 = 0,30 N. Réponse : F = 0,30 N."
  },

  {
    question: "Un conducteur de 0,80 m placé perpendiculairement à un champ magnétique de 0,25 T subit une force de 2 N. Déterminer le courant qui le traverse.",
    answer: "Démarche : F = BIL. Donc I = F/(BL) = 2/(0,25 × 0,80) = 10 A. Réponse : I = 10 A."
  },

  {
    question: "Un fil parcouru par un courant de 5 A est soumis à une force magnétique de 1,5 N lorsqu’il est perpendiculaire à un champ de 0,3 T. Déterminer sa longueur située dans le champ.",
    answer: "Démarche : F = BIL. Donc L = F/(BI) = 1,5/(0,3 × 5) = 1 m. Réponse : L = 1 m."
  },

  {
    question: "Un conducteur de longueur 0,40 m est parcouru par un courant de 6 A dans un champ magnétique de 0,5 T. Le conducteur fait un angle de 30° avec le champ. Calculer la force magnétique.",
    answer: "Démarche : F = BIL sinθ. F = 0,5 × 6 × 0,40 × sin30°. Comme sin30° = 0,5, F = 0,6 N. Réponse : F = 0,6 N."
  },

  {
    question: "Un conducteur de longueur 0,60 m est parcouru par un courant de 2 A. Il est placé dans un champ magnétique de 0,4 T sous un angle de 90°. Calculer la force puis déterminer cette force si l’angle devient 0°.",
    answer: "Démarche : À 90°, F = BIL = 0,4 × 2 × 0,60 = 0,48 N. À 0°, sin0° = 0, donc F = 0. Réponse : F = 0,48 N à 90° et F = 0 N à 0°."
  },

  {
    question: "Un conducteur de longueur 0,25 m est parcouru par un courant de 8 A dans un champ magnétique de 0,75 T. Il est perpendiculaire au champ. Calculer la force exercée.",
    answer: "Démarche : F = BIL = 0,75 × 8 × 0,25 = 1,5 N. Réponse : F = 1,5 N."
  },

  {
    question: "Un conducteur placé dans un champ magnétique de 0,6 T subit une force de 1,8 N lorsqu’il est parcouru par un courant de 3 A et placé perpendiculairement au champ. Déterminer sa longueur.",
    answer: "Démarche : L = F/(BI) = 1,8/(0,6 × 3) = 1 m. Réponse : la longueur du conducteur dans le champ est de 1 m."
  },

  {
    question: "Un conducteur de longueur 0,50 m et parcouru par un courant de 4 A subit une force de 0,5 N dans un champ de 0,5 T. Déterminer l’angle entre le conducteur et le champ magnétique.",
    answer: "Démarche : F = BIL sinθ. Donc sinθ = F/(BIL) = 0,5/(0,5 × 4 × 0,5) = 0,5. L’angle correspondant est θ = 30°. Réponse : θ = 30°."
  },

  {
    question: "Un conducteur de longueur 0,40 m est parcouru par un courant de 5 A dans un champ magnétique uniforme de 0,2 T. Comparer la force magnétique lorsqu’il est perpendiculaire au champ puis lorsqu’il fait un angle de 60° avec le champ.",
    answer: "Démarche : À 90° : F1 = BIL = 0,2 × 5 × 0,40 = 0,40 N. À 60° : F2 = BIL sin60° = 0,40 × 0,866 ≈ 0,346 N. Réponse : F1 = 0,40 N et F2 ≈ 0,346 N."
  }

];

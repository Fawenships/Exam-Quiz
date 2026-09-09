export const physiqueQuestions = [

  // =========================================================
  // ⚙️ MÉCANIQUE — NIVEAU BACC II — 40 EXERCICES
  // =========================================================

  {
    question: "Une voiture part du repos et atteint une vitesse de 25 m/s en 10 s avec une accélération constante. Calculer son accélération.",
    answer: "Démarche : On utilise a = (vf - vi)/t. Données : vi = 0 m/s, vf = 25 m/s et t = 10 s. Calcul : a = (25 - 0)/10 = 2,5 m/s². Réponse : l'accélération est de 2,5 m/s²."
  },

  {
    question: "Une voiture initialement à 10 m/s accélère à 2 m/s² pendant 8 s. Calculer sa vitesse finale.",
    answer: "Démarche : On utilise vf = vi + at. Données : vi = 10 m/s, a = 2 m/s² et t = 8 s. Calcul : vf = 10 + 2 × 8 = 26 m/s. Réponse : la vitesse finale est de 26 m/s."
  },

  {
    question: "Une voiture part du repos avec une accélération constante de 3 m/s² pendant 6 s. Calculer la distance parcourue.",
    answer: "Démarche : Pour un mouvement uniformément accéléré, d = vi t + 1/2 at². Comme vi = 0, d = 1/2 × 3 × 6² = 1,5 × 36 = 54 m. Réponse : la distance parcourue est de 54 m."
  },

  {
    question: "Un véhicule roule à 20 m/s et freine avec une accélération constante de -4 m/s². Calculer le temps nécessaire pour s'arrêter.",
    answer: "Démarche : On utilise vf = vi + at. À l'arrêt, vf = 0. Donc 0 = 20 - 4t. Ainsi 4t = 20 et t = 5 s. Réponse : le véhicule s'arrête après 5 s."
  },

  {
    question: "Une voiture roule à 25 m/s et s'arrête après 5 s. Calculer la distance de freinage en supposant une décélération constante.",
    answer: "Démarche : On utilise d = (vi + vf)t/2. Données : vi = 25 m/s, vf = 0 et t = 5 s. Calcul : d = (25 + 0) × 5/2 = 62,5 m. Réponse : la distance de freinage est de 62,5 m."
  },

  {
    question: "Un objet est lancé verticalement vers le haut avec une vitesse initiale de 20 m/s. En prenant g = 10 m/s², calculer la hauteur maximale atteinte.",
    answer: "Démarche : Au sommet, vf = 0. On utilise vf² = vi² - 2gh. Donc h = vi²/(2g). Calcul : h = 20²/(2 × 10) = 400/20 = 20 m. Réponse : la hauteur maximale est de 20 m."
  },

  {
    question: "Un objet est lancé verticalement vers le haut à 30 m/s. Avec g = 10 m/s², calculer le temps nécessaire pour atteindre le sommet.",
    answer: "Démarche : Au sommet vf = 0. On utilise vf = vi - gt. Donc 0 = 30 - 10t. Ainsi t = 3 s. Réponse : l'objet atteint son sommet après 3 s."
  },

  {
    question: "Un corps tombe librement pendant 4 s à partir du repos. Avec g = 10 m/s², calculer sa vitesse finale.",
    answer: "Démarche : En chute libre, vf = gt lorsque vi = 0. Calcul : vf = 10 × 4 = 40 m/s. Réponse : la vitesse finale est de 40 m/s."
  },

  {
    question: "Un corps tombe librement pendant 3 s à partir du repos. Avec g = 10 m/s², calculer la distance parcourue.",
    answer: "Démarche : d = 1/2 gt². Calcul : d = 1/2 × 10 × 3² = 5 × 9 = 45 m. Réponse : le corps parcourt 45 m."
  },

  {
    question: "Une force horizontale de 50 N agit sur un bloc de 10 kg. Les frottements valent 10 N. Calculer l'accélération du bloc.",
    answer: "Démarche : La force résultante est Fr = 50 - 10 = 40 N. Puis F = ma, donc a = Fr/m = 40/10 = 4 m/s². Réponse : l'accélération est de 4 m/s²."
  },

  {
    question: "Un bloc de 5 kg est tiré par une force de 30 N sur une surface horizontale. Les frottements valent 5 N. Calculer son accélération.",
    answer: "Démarche : Fr = 30 - 5 = 25 N. Avec F = ma, a = 25/5 = 5 m/s². Réponse : l'accélération est de 5 m/s²."
  },

  {
    question: "Un objet de 8 kg est soumis à deux forces horizontales opposées de 50 N et 18 N. Calculer son accélération.",
    answer: "Démarche : La force résultante est Fr = 50 - 18 = 32 N. Donc a = Fr/m = 32/8 = 4 m/s². Réponse : l'accélération est de 4 m/s² dans le sens de la force de 50 N."
  },

  {
    question: "Un corps de 10 kg est tiré par une force de 60 N faisant un angle de 30° avec l'horizontale. Calculer la composante horizontale de la force.",
    answer: "Démarche : La composante horizontale est Fx = F cos(30°). Avec cos(30°) ≈ 0,866. Calcul : Fx = 60 × 0,866 ≈ 51,96 N. Réponse : Fx ≈ 52 N."
  },

  {
    question: "Une force de 100 N agit sur un objet en le déplaçant de 8 m dans la même direction. Calculer le travail effectué.",
    answer: "Démarche : W = Fd cos(θ). Ici θ = 0°, donc cos(0°) = 1. Calcul : W = 100 × 8 = 800 J. Réponse : le travail est de 800 J."
  },

  {
    question: "Une force de 50 N agit sur un objet qui se déplace de 10 m avec un angle de 60° entre la force et le déplacement. Calculer le travail.",
    answer: "Démarche : W = Fd cos(θ). cos(60°) = 0,5. Calcul : W = 50 × 10 × 0,5 = 250 J. Réponse : le travail est de 250 J."
  },

  {
    question: "Un moteur effectue un travail de 12000 J en 30 s. Calculer sa puissance moyenne.",
    answer: "Démarche : P = W/t. Calcul : P = 12000/30 = 400 W. Réponse : la puissance moyenne est de 400 W."
  },

  {
    question: "Un moteur de 2 kW soulève une charge pendant 20 s. Calculer le travail fourni.",
    answer: "Démarche : On convertit 2 kW = 2000 W. Puis W = Pt. Calcul : W = 2000 × 20 = 40000 J. Réponse : le travail est de 40000 J."
  },

  {
    question: "Un objet de masse 5 kg se déplace à 12 m/s. Calculer son énergie cinétique.",
    answer: "Démarche : Ec = 1/2 mv². Calcul : Ec = 1/2 × 5 × 12² = 2,5 × 144 = 360 J. Réponse : l'énergie cinétique est de 360 J."
  },

  {
    question: "Un objet de masse 10 kg possède une énergie cinétique de 500 J. Calculer sa vitesse.",
    answer: "Démarche : Ec = 1/2 mv². Donc v = √(2Ec/m). Calcul : v = √(1000/10) = √100 = 10 m/s. Réponse : la vitesse est de 10 m/s."
  },

  {
    question: "Une masse de 4 kg est élevée à une hauteur de 15 m. Avec g = 10 m/s², calculer son énergie potentielle.",
    answer: "Démarche : Ep = mgh. Calcul : Ep = 4 × 10 × 15 = 600 J. Réponse : l'énergie potentielle est de 600 J."
  },

  {
    question: "Un objet de 2 kg tombe d'une hauteur de 20 m sans frottement. Avec g = 10 m/s², calculer sa vitesse juste avant le sol.",
    answer: "Démarche : Par conservation de l'énergie, mgh = 1/2 mv². La masse se simplifie : v = √(2gh). Calcul : v = √(2 × 10 × 20) = √400 = 20 m/s. Réponse : la vitesse est de 20 m/s."
  },

  {
    question: "Un objet possède une énergie mécanique de 500 J et une énergie potentielle de 180 J. Calculer son énergie cinétique.",
    answer: "Démarche : Em = Ec + Ep. Donc Ec = Em - Ep. Calcul : Ec = 500 - 180 = 320 J. Réponse : l'énergie cinétique est de 320 J."
  },

  {
    question: "Un corps de masse 4 kg se déplace à 5 m/s. Calculer sa quantité de mouvement.",
    answer: "Démarche : p = mv. Calcul : p = 4 × 5 = 20 kg·m/s. Réponse : la quantité de mouvement est de 20 kg·m/s."
  },

  {
    question: "Une voiture de 1000 kg roule à 20 m/s. Calculer sa quantité de mouvement.",
    answer: "Démarche : p = mv. Calcul : p = 1000 × 20 = 20000 kg·m/s. Réponse : la quantité de mouvement est de 20000 kg·m/s."
  },

  {
    question: "Une force constante de 200 N agit pendant 5 s sur un objet initialement au repos de masse 20 kg. Calculer sa vitesse finale en négligeant les frottements.",
    answer: "Démarche : F = ma, donc a = F/m = 200/20 = 10 m/s². Ensuite vf = vi + at = 0 + 10 × 5 = 50 m/s. Réponse : la vitesse finale est de 50 m/s."
  },

  {
    question: "Une force de 80 N déplace un objet de 10 m en 4 s. Calculer le travail puis la puissance moyenne.",
    answer: "Démarche : W = Fd = 80 × 10 = 800 J. Puis P = W/t = 800/4 = 200 W. Réponse : le travail est de 800 J et la puissance moyenne est de 200 W."
  },

  {
    question: "Une force de 40 N agit sur un objet de 5 kg pendant 6 s, sans frottement, à partir du repos. Calculer sa vitesse finale.",
    answer: "Démarche : a = F/m = 40/5 = 8 m/s². Puis vf = at = 8 × 6 = 48 m/s. Réponse : la vitesse finale est de 48 m/s."
  },

  {
    question: "Un objet de 2 kg est lancé à 15 m/s. Calculer son énergie cinétique puis son énergie potentielle maximale lorsqu'il monte sans frottement, avec g = 10 m/s².",
    answer: "Démarche : Ec initiale = 1/2 mv² = 1/2 × 2 × 15² = 225 J. Au sommet, l'énergie cinétique devient nulle et toute l'énergie devient potentielle. Donc Ep maximale = 225 J. Réponse : l'énergie potentielle maximale est de 225 J."
  },

  {
    question: "Un bloc de 10 kg glisse sur une surface avec une force de frottement de 20 N. Une force motrice de 50 N agit pendant 5 s à partir du repos. Calculer sa vitesse finale.",
    answer: "Démarche : Fr = 50 - 20 = 30 N. Donc a = Fr/m = 30/10 = 3 m/s². Puis vf = at = 3 × 5 = 15 m/s. Réponse : la vitesse finale est de 15 m/s."
  },

  {
    question: "Un objet de 1000 kg se déplace sur une trajectoire circulaire de rayon 50 m à une vitesse de 10 m/s. Calculer la force centripète.",
    answer: "Démarche : Fc = mv²/r. Calcul : Fc = 1000 × 10²/50 = 100000/50 = 2000 N. Réponse : la force centripète est de 2000 N."
  },

  {
    question: "Une voiture de 1200 kg prend un virage de rayon 100 m à 20 m/s. Calculer son accélération centripète.",
    answer: "Démarche : ac = v²/r. Calcul : ac = 20²/100 = 400/100 = 4 m/s². Réponse : l'accélération centripète est de 4 m/s²."
  },

  {
    question: "Une force de 100 N agit à 0,4 m d'un axe de rotation avec un angle de 90°. Calculer le moment de cette force.",
    answer: "Démarche : M = Fd sin(θ). Comme θ = 90°, sin(90°) = 1. Calcul : M = 100 × 0,4 = 40 N·m. Réponse : le moment est de 40 N·m."
  },

  {
    question: "Une force de 60 N agit à 0,5 m d'un axe avec un angle de 30°. Calculer son moment.",
    answer: "Démarche : M = Fd sin(θ). sin(30°) = 0,5. Calcul : M = 60 × 0,5 × 0,5 = 15 N·m. Réponse : le moment est de 15 N·m."
  },

  {
    question: "Une force de 500 N agit sur une surface de 0,25 m². Calculer la pression exercée.",
    answer: "Démarche : P = F/S. Calcul : P = 500/0,25 = 2000 Pa. Réponse : la pression est de 2000 Pa."
  },

  {
    question: "Un liquide de masse volumique 1000 kg/m³ exerce une pression hydrostatique à 5 m de profondeur. Avec g = 10 m/s², calculer cette pression.",
    answer: "Démarche : La pression hydrostatique est P = ρgh. Calcul : P = 1000 × 10 × 5 = 50000 Pa. Réponse : la pression hydrostatique est de 50000 Pa."
  },

  {
    question: "Un objet de volume 0,05 m³ est totalement immergé dans l'eau. Avec ρ = 1000 kg/m³ et g = 10 m/s², calculer la poussée d'Archimède.",
    answer: "Démarche : FA = ρVg. Calcul : FA = 1000 × 0,05 × 10 = 500 N. Réponse : la poussée d'Archimède est de 500 N."
  },

  {
    question: "Un objet de masse 30 kg et de volume 0,02 m³ est immergé dans l'eau. Déterminer s'il monte ou descend. On prend g = 10 m/s².",
    answer: "Démarche : Poids P = mg = 30 × 10 = 300 N. Poussée d'Archimède FA = ρVg = 1000 × 0,02 × 10 = 200 N. Comme P > FA, la résultante est dirigée vers le bas. Réponse : l'objet descend."
  },

  {
    question: "Un satellite se déplace autour de la Terre. Pourquoi ne tombe-t-il pas directement sur la Terre malgré l'attraction gravitationnelle ?",
    answer: "Démarche : La gravitation fournit la force centripète tandis que la vitesse tangentielle du satellite tend à le faire avancer. La combinaison des deux produit une orbite. Réponse : le satellite est continuellement en chute libre autour de la Terre."
  },

  {
    question: "Deux masses de 10 kg et 20 kg sont séparées de 2 m. Calculer leur force gravitationnelle avec G = 6,67 × 10^-11 N·m²/kg².",
    answer: "Démarche : F = Gm1m2/r². Calcul : F = 6,67 × 10^-11 × 10 × 20 / 2² = 6,67 × 10^-9 / 4 = 1,6675 × 10^-9 N. Réponse : F ≈ 1,67 × 10^-9 N."
  },


  // =========================================================
  // ⚡ ÉLECTRICITÉ — NIVEAU BACC II — 35 EXERCICES
  // =========================================================

  {
    question: "Une résistance de 12 Ω est branchée sur une tension de 24 V. Calculer l'intensité du courant et la puissance consommée.",
    answer: "Démarche : Loi d'Ohm : I = U/R = 24/12 = 2 A. Puis P = UI = 24 × 2 = 48 W. Réponse : I = 2 A et P = 48 W."
  },

  {
    question: "Un appareil de 1200 W fonctionne sous 240 V. Calculer le courant absorbé.",
    answer: "Démarche : P = UI, donc I = P/U. Calcul : I = 1200/240 = 5 A. Réponse : le courant est de 5 A."
  },

  {
    question: "Une résistance de 20 Ω est traversée par un courant de 3 A pendant 10 s. Calculer l'énergie dissipée par effet Joule.",
    answer: "Démarche : P = RI² = 20 × 3² = 180 W. Puis E = Pt = 180 × 10 = 1800 J. Réponse : l'énergie dissipée est de 1800 J."
  },

  {
    question: "Trois résistances de 4 Ω, 6 Ω et 10 Ω sont montées en série sur une source de 40 V. Calculer le courant total.",
    answer: "Démarche : Req = 4 + 6 + 10 = 20 Ω. Puis I = U/Req = 40/20 = 2 A. Réponse : le courant total est de 2 A."
  },

  {
    question: "Deux résistances de 6 Ω et 12 Ω sont montées en parallèle sur une source de 24 V. Calculer la résistance équivalente.",
    answer: "Démarche : Req = R1R2/(R1 + R2). Calcul : Req = (6 × 12)/(6 + 12) = 72/18 = 4 Ω. Réponse : la résistance équivalente est de 4 Ω."
  },

  {
    question: "Deux résistances de 6 Ω et 12 Ω sont en parallèle sous 24 V. Calculer le courant dans chaque branche.",
    answer: "Démarche : La tension est la même dans chaque branche. Pour 6 Ω : I1 = 24/6 = 4 A. Pour 12 Ω : I2 = 24/12 = 2 A. Réponse : I1 = 4 A et I2 = 2 A."
  },

  {
    question: "Deux résistances de 6 Ω et 12 Ω sont en parallèle sous 24 V. Calculer le courant total.",
    answer: "Démarche : D'après la loi des nœuds, It = I1 + I2. On a I1 = 4 A et I2 = 2 A. Donc It = 6 A. Réponse : le courant total est de 6 A."
  },

  {
    question: "Un circuit possède deux résistances de 5 Ω et 15 Ω en série sous 40 V. Calculer la tension aux bornes de chaque résistance.",
    answer: "Démarche : Req = 5 + 15 = 20 Ω. Courant I = 40/20 = 2 A. Alors U1 = R1I = 5 × 2 = 10 V et U2 = 15 × 2 = 30 V. Réponse : U1 = 10 V et U2 = 30 V."
  },

  {
    question: "Un circuit en série possède trois résistances de 2 Ω, 4 Ω et 6 Ω et une source de 24 V. Calculer la puissance totale.",
    answer: "Démarche : Req = 2 + 4 + 6 = 12 Ω. I = 24/12 = 2 A. Puis P = UI = 24 × 2 = 48 W. Réponse : la puissance totale est de 48 W."
  },

  {
    question: "Une résistance de 10 Ω dissipe une puissance de 90 W. Calculer le courant qui la traverse.",
    answer: "Démarche : P = RI². Donc I = √(P/R). Calcul : I = √(90/10) = √9 = 3 A. Réponse : le courant est de 3 A."
  },

  {
    question: "Une résistance de 8 Ω est parcourue par un courant de 2 A. Calculer la puissance puis l'énergie dissipée en 30 s.",
    answer: "Démarche : P = RI² = 8 × 2² = 32 W. Puis E = Pt = 32 × 30 = 960 J. Réponse : P = 32 W et E = 960 J."
  },

  {
    question: "Un appareil de 2,2 kW fonctionne pendant 3 h 30 min. Calculer l'énergie consommée en kWh.",
    answer: "Démarche : 3 h 30 min = 3,5 h. E = Pt = 2,2 × 3,5 = 7,7 kWh. Réponse : l'énergie consommée est de 7,7 kWh."
  },

  {
    question: "Une maison utilise un appareil de 1000 W pendant 4 h par jour durant 30 jours. Calculer l'énergie consommée en kWh.",
    answer: "Démarche : 1000 W = 1 kW. Durée totale = 4 × 30 = 120 h. E = 1 × 120 = 120 kWh. Réponse : la consommation est de 120 kWh."
  },

  {
    question: "Une résistance de 4 Ω est parcourue par un courant de 5 A. Calculer la tension et la puissance.",
    answer: "Démarche : U = RI = 4 × 5 = 20 V. Puis P = UI = 20 × 5 = 100 W. Réponse : U = 20 V et P = 100 W."
  },

  {
    question: "Une source de 30 V alimente deux résistances en série de 10 Ω et 20 Ω. Calculer la puissance dissipée par la résistance de 20 Ω.",
    answer: "Démarche : Req = 10 + 20 = 30 Ω. Courant I = 30/30 = 1 A. Puissance dans R2 : P2 = R2I² = 20 × 1² = 20 W. Réponse : la puissance est de 20 W."
  },

  {
    question: "Une source de 12 V alimente deux résistances parallèles de 4 Ω et 8 Ω. Calculer la puissance totale.",
    answer: "Démarche : Req = (4 × 8)/(4 + 8) = 32/12 = 8/3 Ω. Le courant total vaut It = 12/(8/3) = 4,5 A. Donc Pt = UIt = 12 × 4,5 = 54 W. Réponse : la puissance totale est de 54 W."
  },

  {
    question: "Dans un circuit, un courant de 5 A arrive à un nœud. Deux branches sortantes transportent respectivement 2 A et I. Calculer I.",
    answer: "Démarche : Loi des nœuds : somme des courants entrants = somme des courants sortants. Donc 5 = 2 + I. Ainsi I = 3 A. Réponse : I = 3 A."
  },

  {
    question: "Dans une maille, une source de 24 V alimente deux résistances en série de 4 Ω et 8 Ω. Vérifier la loi des mailles et calculer les tensions aux bornes des résistances.",
    answer: "Démarche : Req = 4 + 8 = 12 Ω. I = 24/12 = 2 A. U1 = 4 × 2 = 8 V et U2 = 8 × 2 = 16 V. Vérification : 8 + 16 = 24 V. Réponse : la loi des mailles est vérifiée."
  },

  {
    question: "Une résistance de 15 Ω est branchée sous 45 V. Calculer l'énergie consommée en 2 minutes.",
    answer: "Démarche : I = U/R = 45/15 = 3 A. Puissance P = UI = 45 × 3 = 135 W. Temps = 2 min = 120 s. E = Pt = 135 × 120 = 16200 J. Réponse : l'énergie consommée est de 16200 J."
  },

  {
    question: "Un appareil électrique de 1500 W fonctionne sous 250 V. Calculer sa résistance équivalente.",
    answer: "Démarche : P = U²/R. Donc R = U²/P. Calcul : R = 250²/1500 = 62500/1500 ≈ 41,67 Ω. Réponse : la résistance équivalente est d'environ 41,67 Ω."
  },

  {
    question: "Un générateur de 12 V possède une résistance interne de 1 Ω et alimente une résistance externe de 5 Ω. Calculer le courant dans le circuit.",
    answer: "Démarche : La résistance totale est Rtot = 1 + 5 = 6 Ω. Donc I = E/Rtot = 12/6 = 2 A. Réponse : le courant est de 2 A."
  },

  {
    question: "Un générateur de f.e.m. 24 V possède une résistance interne de 2 Ω et alimente une résistance de 10 Ω. Calculer la tension aux bornes de la résistance externe.",
    answer: "Démarche : Rtot = 2 + 10 = 12 Ω. I = 24/12 = 2 A. Tension externe : U = RI = 10 × 2 = 20 V. Réponse : la tension aux bornes de la résistance externe est de 20 V."
  },

  {
    question: "Un condensateur de capacité 100 μF est chargé sous une tension de 20 V. Calculer sa charge électrique.",
    answer: "Démarche : Q = CU. Convertir 100 μF = 100 × 10^-6 F. Calcul : Q = 100 × 10^-6 × 20 = 2 × 10^-3 C. Réponse : Q = 0,002 C."
  },

  {
    question: "Un condensateur de 50 μF est soumis à une tension de 100 V. Calculer l'énergie stockée.",
    answer: "Démarche : Ec = 1/2 CU². Convertir 50 μF = 50 × 10^-6 F. Calcul : Ec = 1/2 × 50 × 10^-6 × 100² = 0,25 J. Réponse : l'énergie stockée est de 0,25 J."
  },

  {
    question: "Deux condensateurs de 10 μF et 20 μF sont montés en parallèle. Calculer la capacité équivalente.",
    answer: "Démarche : En parallèle, Ceq = C1 + C2. Calcul : Ceq = 10 + 20 = 30 μF. Réponse : la capacité équivalente est de 30 μF."
  },

  {
    question: "Deux condensateurs de 10 μF et 20 μF sont montés en série. Calculer leur capacité équivalente.",
    answer: "Démarche : En série, 1/Ceq = 1/C1 + 1/C2. Donc Ceq = C1C2/(C1 + C2) = (10 × 20)/30 = 6,67 μF. Réponse : Ceq ≈ 6,67 μF."
  },

  {
    question: "Une résistance de 100 Ω est traversée par un courant de 0,2 A. Calculer la puissance et l'énergie dissipée pendant 1 minute.",
    answer: "Démarche : P = RI² = 100 × 0,2² = 4 W. Temps = 60 s. E = Pt = 4 × 60 = 240 J. Réponse : P = 4 W et E = 240 J."
  },

  {
    question: "Un appareil de 800 W fonctionne sous 200 V pendant 15 minutes. Calculer le courant puis l'énergie consommée en joules.",
    answer: "Démarche : I = P/U = 800/200 = 4 A. Temps = 15 × 60 = 900 s. E = Pt = 800 × 900 = 720000 J. Réponse : I = 4 A et E = 720000 J."
  },

  {
    question: "Une source de 18 V alimente trois résistances en série de 3 Ω, 6 Ω et 9 Ω. Calculer le courant et la tension sur chacune.",
    answer: "Démarche : Req = 3 + 6 + 9 = 18 Ω. I = 18/18 = 1 A. Donc U1 = 3 V, U2 = 6 V et U3 = 9 V. Vérification : 3 + 6 + 9 = 18 V. Réponse : I = 1 A et les tensions sont 3 V, 6 V et 9 V."
  },

  {
    question: "Un circuit possède une résistance de 10 Ω en série avec deux résistances parallèles de 20 Ω et 20 Ω. Il est alimenté sous 30 V. Calculer le courant total.",
    answer: "Démarche : Les deux résistances parallèles donnent Rp = 20/2 = 10 Ω. Donc Req = 10 + 10 = 20 Ω. Courant total : I = 30/20 = 1,5 A. Réponse : le courant total est de 1,5 A."
  },

  {
    question: "Dans le circuit précédent, calculer la tension aux bornes du groupe parallèle.",
    answer: "Démarche : Le courant total est 1,5 A et la résistance série vaut 10 Ω. La chute de tension sur cette résistance est U1 = RI = 10 × 1,5 = 15 V. La source fournit 30 V, donc Up = 30 - 15 = 15 V. Réponse : la tension du groupe parallèle est de 15 V."
  },

  {
    question: "Un appareil de puissance utile 900 W reçoit une puissance électrique de 1200 W. Calculer son rendement.",
    answer: "Démarche : η = Pu/Pr × 100. Calcul : η = 900/1200 × 100 = 75 %. Réponse : le rendement est de 75 %."
  },

  {
    question: "Un moteur électrique fonctionne sous 220 V avec un courant de 5 A et possède un rendement de 80 %. Calculer sa puissance mécanique utile.",
    answer: "Démarche : Puissance électrique reçue : Pe = UI = 220 × 5 = 1100 W. Puissance utile : Pu = ηPe = 0,80 × 1100 = 880 W. Réponse : la puissance mécanique utile est de 880 W."
  },


  // =========================================================
  // 🧲 MAGNÉTISME / ÉLECTROMAGNÉTISME — 25 EXERCICES
  // =========================================================

  {
    question: "Une charge de 2 × 10^-6 C se déplace à 3 × 10^4 m/s perpendiculairement à un champ magnétique de 0,5 T. Calculer la force magnétique.",
    answer: "Démarche : F = qvB sin(θ). Comme θ = 90°, sin(90°) = 1. Calcul : F = 2 × 10^-6 × 3 × 10^4 × 0,5 = 3 × 10^-2 N. Réponse : F = 0,03 N."
  },

  {
    question: "Une charge de 4 × 10^-6 C se déplace à 2 × 10^5 m/s perpendiculairement à un champ de 0,2 T. Calculer la force magnétique.",
    answer: "Démarche : F = qvB. Calcul : F = 4 × 10^-6 × 2 × 10^5 × 0,2 = 0,16 N. Réponse : la force magnétique est de 0,16 N."
  },

  {
    question: "Un conducteur de longueur 0,4 m est parcouru par un courant de 5 A dans un champ magnétique de 0,8 T, perpendiculairement au champ. Calculer la force.",
    answer: "Démarche : F = BIL sin(θ). À 90°, sin(90°) = 1. Calcul : F = 0,8 × 5 × 0,4 = 1,6 N. Réponse : la force magnétique est de 1,6 N."
  },

  {
    question: "Un conducteur de 0,5 m placé perpendiculairement à un champ de 0,6 T subit une force de 3 N. Si le courant vaut 10 A, vérifier la valeur de la force.",
    answer: "Démarche : F = BIL. Calcul : F = 0,6 × 10 × 0,5 = 3 N. Réponse : la valeur calculée confirme une force de 3 N."
  },

  {
    question: "Un conducteur de 2 m parcouru par un courant de 4 A subit une force de 8 N dans un champ perpendiculaire. Calculer le champ magnétique.",
    answer: "Démarche : F = BIL, donc B = F/(IL). Calcul : B = 8/(4 × 2) = 1 T. Réponse : le champ magnétique vaut 1 T."
  },

  {
    question: "Une bobine de 200 spires subit une variation de flux de 0,4 Wb à 0,1 Wb en 0,5 s. Calculer la valeur absolue de la f.e.m. moyenne induite.",
    answer: "Démarche : |e| = N|ΔΦ|/Δt. Variation : |ΔΦ| = |0,1 - 0,4| = 0,3 Wb. Calcul : e = 200 × 0,3/0,5 = 120 V. Réponse : la f.e.m. moyenne est de 120 V."
  },

  {
    question: "Une bobine de 500 spires voit son flux magnétique varier de 0,02 Wb à 0,08 Wb en 0,2 s. Calculer la f.e.m. induite moyenne.",
    answer: "Démarche : e = NΔΦ/Δt. ΔΦ = 0,08 - 0,02 = 0,06 Wb. Calcul : e = 500 × 0,06/0,2 = 150 V. Réponse : la f.e.m. moyenne est de 150 V."
  },

  {
    question: "Une bobine de 100 spires est traversée par un flux de 0,05 Wb. Le flux devient nul en 0,1 s. Calculer la f.e.m. moyenne induite.",
    answer: "Démarche : |e| = N|ΔΦ|/Δt. ΔΦ = 0 - 0,05 = -0,05 Wb. Valeur absolue : 0,05 Wb. Calcul : e = 100 × 0,05/0,1 = 50 V. Réponse : la f.e.m. moyenne est de 50 V."
  },

  {
    question: "Une surface de 0,5 m² est placée perpendiculairement à un champ magnétique de 2 T. Calculer le flux magnétique.",
    answer: "Démarche : Φ = BS cos(θ). Pour une surface perpendiculaire au champ, θ = 0° entre B et la normale à la surface. Donc cos(0°) = 1. Calcul : Φ = 2 × 0,5 = 1 Wb. Réponse : le flux est de 1 Wb."
  },

  {
    question: "Un champ magnétique de 0,8 T traverse une surface de 2 m². La normale à la surface fait un angle de 60° avec le champ. Calculer le flux.",
    answer: "Démarche : Φ = BS cos(θ). cos(60°) = 0,5. Calcul : Φ = 0,8 × 2 × 0,5 = 0,8 Wb. Réponse : le flux est de 0,8 Wb."
  },

  {
    question: "Un solénoïde de 1000 spires possède une longueur de 0,5 m et est parcouru par un courant de 2 A. Calculer son champ magnétique dans le vide avec μ0 = 4π × 10^-7 T·m/A.",
    answer: "Démarche : B = μ0NI/L. Calcul : B = 4π × 10^-7 × 1000 × 2/0,5 = 16π × 10^-4 T ≈ 5,03 × 10^-3 T. Réponse : B ≈ 5,03 mT."
  },

  {
    question: "Un solénoïde possède 500 spires sur une longueur de 0,25 m et est parcouru par un courant de 1,5 A. Calculer son champ magnétique dans le vide.",
    answer: "Démarche : B = μ0NI/L. Calcul : B = 4π × 10^-7 × 500 × 1,5/0,25 ≈ 3,77 × 10^-3 T. Réponse : B ≈ 3,77 mT."
  },

  {
    question: "Un transformateur possède 200 spires au primaire et 1000 au secondaire. La tension primaire est de 24 V. Calculer la tension secondaire.",
    answer: "Démarche : Us/Up = Ns/Np. Donc Us = Up × Ns/Np. Calcul : Us = 24 × 1000/200 = 120 V. Réponse : la tension secondaire est de 120 V."
  },

  {
    question: "Un transformateur abaisseur reçoit 240 V au primaire et possède 1200 spires. Le secondaire possède 200 spires. Calculer la tension secondaire.",
    answer: "Démarche : Us = Up × Ns/Np. Calcul : Us = 240 × 200/1200 = 40 V. Réponse : la tension secondaire est de 40 V."
  },

  {
    question: "Un transformateur idéal fournit 12 V au secondaire avec un courant de 5 A. Si le primaire reçoit 120 V, calculer le courant primaire.",
    answer: "Démarche : Pour un transformateur idéal, la puissance est conservée : UpIp = UsIs. Donc Ip = UsIs/Up. Calcul : Ip = 12 × 5/120 = 0,5 A. Réponse : le courant primaire est de 0,5 A."
  },

  {
    question: "Un transformateur possède 500 spires au primaire et 2500 au secondaire. Si le primaire reçoit 100 V, calculer le rapport de transformation et la tension secondaire.",
    answer: "Démarche : Rapport Ns/Np = 2500/500 = 5. Puis Us = Up × 5 = 100 × 5 = 500 V. Réponse : le rapport est 5 et la tension secondaire est de 500 V."
  },

  {
    question: "Un moteur électrique reçoit une puissance électrique de 1500 W et fournit une puissance mécanique de 1200 W. Calculer son rendement.",
    answer: "Démarche : η = Pu/Pr × 100. Calcul : η = 1200/1500 × 100 = 80 %. Réponse : le rendement du moteur est de 80 %."
  },

  {
    question: "Un générateur reçoit une puissance mécanique de 2000 W et fournit 1600 W de puissance électrique. Calculer les pertes et le rendement.",
    answer: "Démarche : Pertes = 2000 - 1600 = 400 W. Rendement : η = 1600/2000 × 100 = 80 %. Réponse : les pertes sont de 400 W et le rendement est de 80 %."
  },

  {
    question: "Une charge de 3 × 10^-6 C se déplace parallèlement à un champ magnétique. Quelle est la force magnétique exercée sur elle ?",
    answer: "Démarche : F = qvB sin(θ). Pour un déplacement parallèle au champ, θ = 0° et sin(0°) = 0. Donc F = 0. Réponse : la force magnétique est nulle."
  },

  {
    question: "Une particule chargée entre perpendiculairement dans un champ magnétique uniforme. Pourquoi sa trajectoire peut-elle devenir circulaire ?",
    answer: "Démarche : La force magnétique est perpendiculaire à la vitesse et joue le rôle de force centripète. On écrit qvB = mv²/r. En simplifiant, r = mv/(qB). Réponse : la force magnétique courbe continuellement la trajectoire et peut produire un mouvement circulaire."
  },

  {
    question: "Un proton possède une masse de 1,67 × 10^-27 kg, une charge de 1,6 × 10^-19 C et se déplace à 2 × 10^6 m/s dans un champ de 0,5 T perpendiculaire à sa vitesse. Calculer le rayon de sa trajectoire.",
    answer: "Démarche : Pour un mouvement circulaire, r = mv/(qB). Calcul : r = (1,67 × 10^-27 × 2 × 10^6)/(1,6 × 10^-19 × 0,5) ≈ 0,0418 m. Réponse : le rayon est d'environ 4,18 cm."
  },

  {
    question: "Selon la loi de Lenz, dans quel sens circule le courant induit lorsqu'un flux magnétique à travers une bobine augmente ?",
    answer: "Démarche : La loi de Lenz indique que le courant induit crée un champ magnétique qui s'oppose à la variation du flux qui l'a produit. Réponse : le courant induit circule dans le sens qui s'oppose à l'augmentation du flux."
  },

  {
    question: "Une bobine de 400 spires possède une surface de 0,02 m². Le champ magnétique passe de 0,1 T à 0,5 T en 0,4 s, perpendiculairement à la bobine. Calculer la f.e.m. moyenne induite.",
    answer: "Démarche : e = NΔΦ/Δt et Φ = BS. Donc ΔΦ = SΔB = 0,02 × (0,5 - 0,1) = 0,008 Wb. Puis e = 400 × 0,008/0,4 = 8 V. Réponse : la f.e.m. moyenne est de 8 V."
  },

  {
    question: "Une barre conductrice de longueur 0,8 m se déplace à 5 m/s perpendiculairement à un champ magnétique de 0,4 T. Calculer la f.e.m. motrice induite.",
    answer: "Démarche : Pour une barre en mouvement perpendiculaire au champ, e = BLv. Calcul : e = 0,4 × 0,8 × 5 = 1,6 V. Réponse : la f.e.m. induite est de 1,6 V."
  },

  {
    question: "Une barre de longueur 0,5 m se déplace à 10 m/s dans un champ magnétique de 0,6 T. Calculer la f.e.m. induite lorsqu'elle se déplace perpendiculairement au champ.",
    answer: "Démarche : e = BLv. Calcul : e = 0,6 × 0,5 × 10 = 3 V. Réponse : la f.e.m. induite est de 3 V."
  },

  {
    question: "Une bobine de 250 spires possède une surface de 0,04 m². Le champ magnétique de 0,2 T disparaît complètement en 0,1 s. Calculer la f.e.m. moyenne induite.",
    answer: "Démarche : Flux initial Φ = BS = 0,2 × 0,04 = 0,008 Wb. Le flux final est 0. Donc |ΔΦ| = 0,008 Wb. Loi de Faraday : e = N|ΔΦ|/Δt = 250 × 0,008/0,1 = 20 V. Réponse : la f.e.m. moyenne est de 20 V."
  },

  {
    question: "Un transformateur idéal possède 150 spires au primaire et 600 au secondaire. Il est alimenté sous 30 V et le secondaire délivre 2 A. Calculer la tension secondaire et le courant primaire.",
    answer: "Démarche : Us = Up × Ns/Np = 30 × 600/150 = 120 V. Pour un transformateur idéal, UpIp = UsIs. Donc Ip = 120 × 2/30 = 8 A. Réponse : Us = 120 V et Ip = 8 A."
  }

];

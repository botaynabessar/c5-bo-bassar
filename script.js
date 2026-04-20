// ── EXERCICE 1 — Changer le texte d'un élément ──
function changerTexte() {
    document.querySelector('#texte1').innerText = "Texte modifié !";
}

// ── EXERCICE 2 — Changer la couleur d'un élément ──
function changerCouleur()      { document.querySelector('#titre2').style.color = 'red'; }
function changerCouleurVert()  { document.querySelector('#titre2').style.color = 'green'; }
function changerCouleurBleu()  { document.querySelector('#titre2').style.color = 'blue'; }

// ── EXERCICE 3 — Ajouter du HTML dynamiquement ──
function ajouterContenu() {
    document.querySelector('#conteneur3').innerHTML = '<h4>Nouveau titre</h4><p>Nouveau paragraphe</p>';
}
function effacerContenu() {
    document.querySelector('#conteneur3').innerHTML = '';
}

// ── EXERCICE 4 — Ajouter et enlever des classes CSS ──
function ajouterClasse() {
    document.querySelector('#paragraphe4').classList.add('rouge', 'grand-texte');
}
function enleverClasse() {
    document.querySelector('#paragraphe4').classList.remove('rouge', 'grand-texte');
}
function basculerClasse() {
    document.querySelector('#paragraphe4').classList.toggle('bordure');
}

// ── EXERCICE 5 — Modifier plusieurs éléments ──
const itemsOriginal = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

function colorierTous() {
    document.querySelectorAll('.item').forEach(el => el.classList.add('fond-jaune'));
}
function numeroteTous() {
    const items = document.querySelectorAll('.item');
    for (let i = 0; i < items.length; i++) {
        items[i].innerText = (i + 1) + '. Item ' + (i + 1);
    }
}
function resetItems() {
    document.querySelectorAll('.item').forEach((el, i) => {
        el.classList.remove('fond-jaune');
        el.innerText = itemsOriginal[i];
    });
}

// ── EXERCICE 6 — Sélecteur de couleur de fond ──
function changerFond(zoneId, couleur, boiteCliquee) {
    document.getElementById(zoneId).style.backgroundColor = couleur;
    document.querySelectorAll('.boite').forEach(b => b.classList.remove('actif'));
    boiteCliquee.classList.add('actif');
}
function reinitialiserFond(zoneId) {
    document.getElementById(zoneId).style.backgroundColor = '';
    document.querySelectorAll('.boite').forEach(b => b.classList.remove('actif'));
}

// ── EXERCICE 7 — Formulaire dynamique ──
function afficherNom() {
    const nom = document.querySelector('#nom').value;
    document.querySelector('#affichage7').innerText =
        nom.trim() === '' ? 'Votre nom apparaîtra ici' : `Bonjour ${nom} !`;
}
function appliquerCouleur() {
    const couleur = document.querySelector('#couleur7').value;
    document.querySelector('#affichage7').style.color = couleur;
}

// ── EXERCICE 8 — Liste TODO ──
function ajouterTache() {
    const input = document.querySelector('#tache');
    const texte = input.value.trim();
    if (!texte) return;
    const li = document.createElement('li');
    li.innerHTML = `<span>${texte}</span><button onclick="supprimerTache(this)">X</button>`;
    document.querySelector('#listeTaches').appendChild(li);
    input.value = '';
    input.focus();
}
function supprimerTache(b) {
    b.parentElement.remove();
}
function effacerTout() {
    document.querySelector('#listeTaches').innerHTML = '';
}

// ── EXERCICE 9 — Compteur avec conditions de couleur ──
let valeur = 0;

function incrementer()  { valeur++; afficherCompteur(); }
function decrementer()  { valeur--; afficherCompteur(); }
function reinitialiser() { valeur = 0; afficherCompteur(); }

function afficherCompteur() {
    const el = document.querySelector('#compteur');
    el.innerText = valeur;
    el.classList.remove('rouge', 'vert');
    if (valeur < 0)      el.classList.add('rouge');
    else if (valeur > 0) el.classList.add('vert');
}

// ── EXERCICE 10 — Système d'onglets ──
function afficherOnglet(n) {
    document.querySelectorAll('.contenu-onglet').forEach(d => {
        d.classList.remove('visible');
        d.classList.add('cache');
    });
    document.querySelector(`#contenu${n}`).classList.replace('cache', 'visible');
    document.querySelectorAll('.onglet').forEach(b => b.classList.remove('actif'));
    document.querySelectorAll('.onglet')[n - 1].classList.add('actif');
}

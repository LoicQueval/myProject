
const me = {
    firstName: 'Loïc',
    lastName: 'Queval',
    usualName: 'Moreno',
    intro: 'Connaissances en language informatique et en électronique',

    address: '1 rue Pierre Dac',
    cityCode: 92110,
    city: 'Clichy',
    telephoneNumber: '06 38 86 99 73',
    mail: 'queval.loic@gmail.com',
    birthDay: '11 juin 1997',
    gender: 'H',
};

function findSelectorAndReplaceData(selector, data) {
    document.querySelector(selector).textContent = data
}

findSelectorAndReplaceData('h1',me.lastName + ' ' + me.usualName + ' ' + me.firstName);
findSelectorAndReplaceData('.intro', me.intro);



findSelectorAndReplaceData('#langues','Langues');

findSelectorAndReplaceData('#langue1-lu1','Anglais lu : Très bien');
findSelectorAndReplaceData('#langue1-lu2','Anglais lu : Très bien');

findSelectorAndReplaceData('#qualité','Qualités');

findSelectorAndReplaceData('#qualités','Organisé, Sérieux, Patient, Travail en équipe');

findSelectorAndReplaceData('#divers','Divers');

findSelectorAndReplaceData('#loisirs','Loisirs');

findSelectorAndReplaceData('#activité','Centres d\'intérêt : Livres, Informatique, Jeux Vidéo, Echecs');
findSelectorAndReplaceData('#sport','Sports : Judo (4 ans, Coupe Technique), Handball (3 ans, catégorie minimes, champion interdistrict), Badminton (2 ans, catégorie cadet)');

findSelectorAndReplaceData('#diplomes','Diplômes');

findSelectorAndReplaceData('#diplome1', 'Bac Technicien Supérieur 2017');
findSelectorAndReplaceData('#lycée1', 'Lycée Louis Armand à Nogent-sur-Marne');
findSelectorAndReplaceData('#matière1', 'Systèmes numériques - option électronique et communications');

findSelectorAndReplaceData('#diplome2', 'Baccalauréat Technique 2015');
findSelectorAndReplaceData('#lycée2', 'Lycée Newton à Clichy-sur-Seine :');
findSelectorAndReplaceData('#matière2','Sciences et technologies de l\'industrie et du développement durable - option Système d\'information numérique (mention assez bien)');

findSelectorAndReplaceData('#expériencepro','Expérience professionnel');

findSelectorAndReplaceData('#date1','Septembre 2018 / Février 2019');
findSelectorAndReplaceData('#entreprise1','Intérimaire chez Adecco');

findSelectorAndReplaceData('#date2', 'CDI Décembre 2017 / Avril 2018');
findSelectorAndReplaceData('#entreprise2','Leclerc à Gennevilliers :');
findSelectorAndReplaceData('#poste','Responsable du rayon liquide');

findSelectorAndReplaceData('#date3', 'Stage Mai / Juin 2017');
findSelectorAndReplaceData('#entreprise3','EANET à La Garenne Colombe :');
findSelectorAndReplaceData('#stage','Stage de 6 semaines dans une entreprise de site internet personnalisé à la demande');

const today = document.querySelector('#actual-date');
today.innerText = new Date().toLocaleDateString();

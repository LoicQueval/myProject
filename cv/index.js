
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


findSelectorAndReplaceData('.diplomes','Diplômes');

findSelectorAndReplaceData('.diplome1', 'Bac Technicien Supérieur 2017');
findSelectorAndReplaceData('.lycée1', 'Lycée Louis Armand à Nogent-sur-Marne');
findSelectorAndReplaceData('.matière1', 'Systèmes numériques - option électronique et communications');

findSelectorAndReplaceData('.diplome2', 'Baccalauréat Technique 2015');
findSelectorAndReplaceData('.lycée2', 'Lycée Newton à Clichy-sur-Seine :');
findSelectorAndReplaceData('.matière2','Sciences et technologies de l\'industrie et du développement durable - option Système d\'information numérique (mention assez bien)');

findSelectorAndReplaceData('.expériencepro','Expérience professionnel');

findSelectorAndReplaceData('.date1','Septembre 2018 / Février 2019');
findSelectorAndReplaceData('.entreprise1','Intérimaire chez Adecco');

findSelectorAndReplaceData('.date2', 'CDI Décembre 2017 / Avril 2018');
findSelectorAndReplaceData('.entreprise2','Leclerc à Gennevilliers :');

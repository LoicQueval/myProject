# GitHub

Git est un protocole qui permet d'échanger, de stocker et de mettre à jour du code sur GitHub    
Exemple de protocole connu : `http//`

## Comment ça marche ?

Lorsque l'on dépose un projet sur GitHub, on crée un `repository`

`Fichier local <=======> cloud <=======> Fichier extérieur`

* On `push` le fichier local sur le cloud, le cloud contient donc un repository des fichiers  
* On `revert` si le push/commit du fichier extérieur ne nous plait pas  
* On `merge` si le push/commit du fichier extérieur nous plait  
* On `pull` du cloud vers le fichier local ou extérieur pour récupérer la nouvelle version  
* On `pull request` pour demander à `merge` sa `branch annexe` sur la `branch master`
* On `commit` pour découper en plusieurs partie son pull et éviter un revert sur tout les fichiers

**Important** : Il peut y avoir conflit lorsque deux personne travaillant sur le même projet `push` en même temps.
Dans ce cas résoudre les conflits avec la seconde personne via Webstorm (possibilité de le faire avec des commandes)

Toute ses actions se fond sur une `branch master` destinée être la version final du code et des `branch annexe` destinée elle a développer des `feature` soit du contenu destinée à `master` que l'on sépare pour éviter tout problème et assurer une sauvegarde de secours

**Important** : Il faut vérifiez son mail lorsque l'on est invité sur le projet d'une autre personne


# Webstorm

Webstorm est un IDE soit une interface de programmation qui permet contrairement à un editeur de texte
une multitude d'aide pour le développeur et ainsi lui faire gagner du temps

## Importer un projet de GitHub avec Webstorm

1. Sur GitHub récupérer l'adresse du projet  
1. Sur Webstorm => File => Setting => GitHub => add accounts => login GitHub
1. Sur un navigateur télécharger Git 
1. Revenir sur le terminal local Webstorm et lancer "Git ini"
1. Setting => Git => Test => Vérifier la version de Git
1. Vérifier la présence d'une flèche bleu `pull` et vert `commit` en haut à droite de l'écran

**Important** : Créer un fichier `gitignore` contenant `/.idea` pour ignorer le fichier `.idea`

1. Pour `push` la première fois allez dans VCS => Git => Push => Define remote
1. Utiliser le lien de Git => Valider => Vérifier que le nom du nouveau dossier est en vert
1. `Pusher` et vérifiez sur GitHub

**Important** : Pour Commit décocher les cases `check todo` et `perform code analysis`
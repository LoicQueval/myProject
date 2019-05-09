# JavaScript

## Les variables

Contrairement à d'autre language (language C) en Javascript, il n'y a pas de notion de gérer la taille de ses variable.
Une variable JavaScript prend automatiquement ça taille maximal.

### Variable constante et réassignable  
`const` sert à déclarer une variable dont la valeur est assignée **qu'une seul fois**

```javascript
const today = 0;
console.log(today)
```

**Important** : on parle de réassignation lorsque le nom de la variable (sans propriété) est suivi d'un signe égal


`let` sert à déclarer une variable dont la valeur est assignée **plusieurs fois** (réassignation)


```javascript
let today = 0;
today = 1;
today = 2;
```

## Les propriétés

### La longueur d'une chaine de caractère

`.length` sert à obtenir une longueur de chaine de caractère

```javascript
const longueur = 'hello';
console.log(longueur.length);
// La réponse afficher sera donc 5
```

### Afficher le nombre d'élément 

`.size` sert à obtenir le nombre d'élément contenu dans un objet, tableau...

```javascript
const tab = ['Hello', 'day', 'one'];
console.log(tab.size);
// La réponse afficher sera donc 3
```

### Afficher un contenu

`console.log()` sert à afficher du contenu texte, une variable, un nombre...

```javascript
console.log('hello');
console.log(12);
```

### Trier un contenu

`.sort` sert à trier un contenu de façon croissante ou décroissante en fonction de la valeur retournée

```javascript
const hostels = ['A', 'B', 'AB', 'Z'];
hostels.sort((letter1, letter2) => letter1 < letter2? -1 : 1);
```

> Si -1 est retourné le contenu est trié du plus grand au plus petit (décroissant)  
> Si 1 est retourné le contenu est trié du plus petit au plus grand (croissant)  
> Si 0 est retourné le contenu ne change pas d'ordre

**Important** :  Peux aussi bien servire pour les nombres que pour les lettres, les lettres ayant des valeurs numériques leur correspondant 
A étant la valeur la plus forte et Z la moins forte 


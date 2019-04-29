# Flexbox

## Propriété pour le parent bloc

### Rendre un bloc flexible

La propriété `display: flex` et `display: inline-flex` on pour but de rendre les enfants de la cible modifiable par les autres propriété flexbox, `display: inline-flex` servant à mettre le parent en ligne d'un autre conteneur.

```css
  .container {
    display: flex; /* or inline-flex */
  }
```

### Choisir une direction pour un bloc

La propriété `flex-direction: row | row-reverse | column | column-reverse` sert à placer les bloc enfants dans le bloc parents

> `row` (par défaut) : place les blocs enfants en ligne de gauche à droite  
> `row-reverse` : place les blocs enfants en ligne de droite à gauche  
> `column` : place les blocs enfants en colonne de haut en bas  
> `column-reverse` : place les blocs enfants en colonne de bas en haut  

### Gérer l'étendu d'un parent

La propriété `flex-wrap` par défault

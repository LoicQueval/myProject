# Flexbox

## Propriété pour le bloc parent

### Rendre un bloc flexible

La propriété `display: flex` et `display: inline-flex` on pour but de rendre les enfants de la cible modifiable par les autres propriété flexbox, `display: inline-flex` servant à mettre le parent en ligne d'un autre conteneur.

```css
  .container {
    display: flex; /* or inline-flex */
  }
```

### Choisir une direction

Les propriétés `flex-direction: row | row-reverse | column | column-reverse` servent à placer les blocs enfants dans le bloc parents

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

> `row` (par défaut) : place les blocs enfants en ligne de gauche à droite  
> `row-reverse` : place les blocs enfants en ligne de droite à gauche  
> `column` : place les blocs enfants en colonne de haut en bas  
> `column-reverse` : place les blocs enfants en colonne de bas en haut  

### Gérer l'étendu d'un parent

Les propriétés `flex-wrap : nowrap | wrap | wrap-reverse` servent à placer les blocs enfants dans le bloc parents sur plusieurs lignes pour éviter une déformation de ceux-ci.

```css
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

> `nowrap` (par défaut) : met tous les blocs enfants sur une ligne (déformation possible)  
> `wrap` : met les blocs enfants sur plusieurs ligne de haut en bas  
> `wrap-reverse` : met les blocs enfants sur plusieurs ligne de bas en haut  

### Choisir un alignement sur une ligne

Les propriétés `justify-content : flex-start | flex-end | center | space-between | space-around | space-evenly` servent à définir le placement des enfants sur une ligne.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

> `flex-start` (par défaut) : met tous les blocs enfants de gauche à droite  
> `flex-end`: met tous les blocs enfants de droite à gauche  
> `center` : met tous les blocs enfants au centre  
> `space-between` : éloigne le plus possible les blocs les uns des autres (très grand espace)  
> `space-around` : laisse un espace de même taille entre chaque blocs enfants (espace moyen)  
> `space-evenly` : laisse un espace de même taille entre chaque blocs enfants ainsi que la bordure (espace petit)  

### Choisir un alignement sur plusieurs ligne

Les propriétés `align-content : flex-start | flex-end | center | space-between | space-around | stretch` servent à définir le placement des enfants sur une ligne.

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

> `flex-start` : met tous les blocs enfants de haut en bas  
> `flex-end`: met tous les blocs enfants de bas en haut  
> `center` : met tous les blocs enfants au milieu  
> `space-between` : éloigne le plus possible les blocs les uns des autres (très grand espace)  
> `space-around` : laisse un espace de même taille entre chaque blocs enfants (espace moyen)  
> `stretch` (par défaut) : place tout les bocs enfants de sorte à prendre le plus d'espace possible   

## Propriété pour le bloc enfant

### Définir un ordre d'affichage

La propriété `order : 0->99` sert à définir un ordre de priorité d'affichage

```css
.item {
  order: <nombre entier>;
}
```

Plus le nombre sera proche de 1 plus le bloc enfant sera prioritaire dans l'ordre d'affichage

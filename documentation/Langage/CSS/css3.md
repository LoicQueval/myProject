# CSS3

## Color et Background-color

`Background-color` sert à assigner une couleur à **toute une zone**  
`color` permet de changer **uniquement** la couleur d'écriture du contenu

```css
  background-color: blue;
  color: white;
```

## Width et height

`width` représente la largeur et `height` représente la hauteur  
Ils servent à définir la taille d'une zone en px (pixel) ou en % (pourcentage)

```css
    width: 50%;
    height: 50px;
```

## Définir un style d'écriture

`font-family` sert à appliquer un style d'écriture comme `arial` ou `fantasy` généralement sur la balise
`body`

```css
    font-family:"Arial", sans-serif;
```

## Marge intérieur et extérieur

`margin` sert à définir une marge extérieur pour le placement et `padding` une marge intérieur pour le texte

```css
margin : 0
padding : 0
// On obtient une marge de 0 toute direction confondu 
margin : 0 5px
padding : 0 5px
// On obtient une marge de 0 en haut et en bas et 5 pixel à gauche et à droite
// On peux très bien remplacer px par %
margin : 0 5px 10px 20px
padding : 0 5px 10px 20px
//Dans l\'ordre on a une marge haut de 0 droite de 5px bas de 10px et gauche de 20px 
``` 
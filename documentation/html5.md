# HTML5
  
HTML5 (*HyperText Markup Language 5*) est la dernière révision du HTML finaliser le 28 octobre 2014, c'est un langage de balisage principalement utiliser avec CSS3 et Javascript.

## Titre

La balise `<h1>` est une balise pour un titre de page

```html
<h1>Mon premier titre le plus important</h1>
<h2>Mon deuxième titre le plus important</h2>
<h3>Mon troisième titre le plus important</h3>
<h4>Mon quatrième titre le plus important</h4>
<h5>Mon cinquième titre le plus important</h5>
<h6>Mon sixième titre le plus important</h6>
```

**Important** : Uniquement un `<h1>` par page, toujours conserver une logique dans les titres (pas de `<h1>` puis de `<h3>`)

## Paragraphe

La baliste paragraphe `<p>` est souvent associer à un titre `<h1>` dans le but d'émettre un contenu **en rapport** avec le titre

```html
<h2>Mon deuxième titre le plus important</h2>
  <p>Mon super paragraphe 1</p>
  <p>Mon super paragraphe 2</p>
```

## Section, div et article

### Article

La balise `<article>` est une balise destiner à contenir du contenu indépendant du reste de la page web, il est généralement dans une balise `<section>`


```html
    <article>
      <h2>Mon deuxième titre le plus important</h2>
        <p>Mon super paragraphe 1</p>
        <p>Mon super paragraphe 2</p>
    </article>
```

### Section

La balise `<section>` est similaire à la balise `<div>`, elle divise la page mais contrairement à `<div>` elle a pour but de regrouper du contenu généralement dans une balise `<article>`

```html
  <section>
    <article>
      <h2>Mon deuxième titre le plus important</h2>
        <p>Mon super paragraphe 1</p>
        <p>Mon super paragraphe 2</p>
    </article>
  </section>
```


### Div

**Important** : Les `<div>` servent à diviser la page en plusieurs parties pour des raisons de design et *ne doit donc **pas** servire à **contenir** du texte* (Voir Section) 

```html
<div class=decoGauche>
  <section>
    <article>
      <h2>Mon deuxième titre le plus important</h2>
        <p>Mon super paragraphe 1</p>
        <p>Mon super paragraphe 2</p>
    </article>
    
    <article>
      <h2>Mon deuxième titre le plus important</h2>
        <p>Mon super paragraphe 1</p>
        <p>Mon super paragraphe 2</p>
    </article>
  </section>
</div>

<div class=decoDroit>
  <section>
      <article>
        <h2>Mon deuxième titre le plus important</h2>
          <p>Mon super paragraphe 1</p>
          <p>Mon super paragraphe 2</p>
      </article>
    
      <article>
        <h2>Mon deuxième titre le plus important</h2>
          <p>Mon super paragraphe 1</p>
          <p>Mon super paragraphe 2</p>
     </article>
   </section>
</div>
```

## Listes

### Non-Ordonnée

La balise `<ul>` sert à faire des listes non-ordonnée, la balise `<li>` servent à sélectionnner les éléments de cette liste

```html
<ul>
  <li>Mon premier élément</li>
  <li>Mon deuxième élément</li>
  <li>Mon troisième élément</li>
</ul>
```

### Ordonnée

La balise `<ol>` sert à faire des liste ordonnée, la balise `<li>` servent à nouveau à sélectionner les éléments de cette liste

```html
<ol>
  <li>Mon premier élément</li>
  <li>Mon deuxième élément</li>
  <li>Mon troisième élément</li>
</ol>
```

## Lier

La balise `<link>` sert à lier des ressources entre elle, le plus souvent une page CSS

#### 1. `href` et `rel`

`href` est un attribut qui renseigne sur l'endroit (URL) où est le fichier à lier  
Il est souvent utiliser avec `rel` qui lui renseigne sur la relation entre le document et le document lier



## nav


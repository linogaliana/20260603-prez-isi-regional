# Presentation Quarto

Template de support de présentation dynamique en quarto markdown (.qmd) et reveal.js intégrant les chartes graphiques de communication interne, tout public et entreprises de l'Insee.

## Changement de theme

Par défaut, la présentation est "branchée" sur la charte graphique interne (Insee rouge).

Pour changer de thème, vous devez remplacer, dans le fichier **_quarto.yml**, l'occurence de la couleur associée au thème de la charte graphique souhaitée.

Exemple :

```{r}
...

format:
  insee-vert-revealjs:
  
  ...

```

## Déploiement du support

Le support de présentation est consultable sur internet via l'url suivante :

<http://pole-bpe.gitlab-pages.insee.fr/presentations-formations/presentation-quarto/presentation-quarto.html>

Il s'agit de l'uri présente dans le dépôt à la page suivante : "settings → pages" à laquelle on concatène le nom du fichier html en output.

## Contribution

Si vous avez remarqué des bugs, des dysfonctionnalités ou des points d'amélioration, hésitez pas à en faire part et à transmettre ces informations. Tout enrichissement est bon à prendre.

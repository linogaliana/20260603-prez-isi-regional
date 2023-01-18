# Presentation Quarto

Template de support de présentation dynamique en quarto markdown (.qmd) et reveal.js intégrant les chartes graphiques de communication interne, tout public et entreprises.

## Changement de theme

Par défaut, la présentation est "branchée" sur la charte graphique interne (Insee rouge).

Pour changer de thème, il suffit de remplacer, dans la partie de l'entête du fichier **presentation-quarto.qmd**, les occurences suivantes "com_interne" et "insee_rouge_interne" par la charte graphique souhaitée.

Exemple :

```{r}

title-slide-attributes:
  data-background-image: img/com_toutPublic/TitlePage.svg
  
...
format:
  revealjs:
    theme: css/Insee_Commun.scss 
    css: [css/Insee_Jaune_toutPublic.css, css/stylePerso.css]

```

## Déploiement du support

Le support de présentation est consultable sur internet via l'url suivante :

<http://pole-bpe.gitlab-pages.insee.fr/presentations-formations/presentation-quarto/presentation-quarto.html>

Il s'agit de l'uri présente dans le dépôt à la page suivante : "settings &rarr; pages" à laquelle on concatène le nom du fichier html en output.

## Contribution

Si vous avez remarqué des bugs, des dysfonctionnalités ou des points d'amélioration, hésitez pas à en faire part et à transmettre ces informations. Tout enrichissement est bon à prendre.

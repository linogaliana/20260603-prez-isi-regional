# Presentation Quarto

Template de support de présentation dynamique en quarto markdown (.qmd) et reveal.js avec les chartes graphiques de communication interne, tout public et entreprises.

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

Le support de présentation est accessible sur internet via l'url suivante :

<http://pole-bpe.gitlab-pages.insee.fr/presentations-formations/presentation-quarto/presentation-quarto.html>

Il s'agit de l'uri présente dans votre dépôt à la page suivante : "settings -\> pages" à laquelle on concatène le nom du fichier html en output.

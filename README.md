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
    theme: [Insee_Commun.scss, Insee_Jaune_toutPublic.scss]

```

## Précaution d'usage

Les images utilisées par le support sont partagées entre 2 répertoires :

- img/ -> pour la première page
- presentation-quarto_files/libs/revealjs/dist/theme/img -> pour les autres pages

Si vous passez l'option `embed-resources: false` à `true` (cas où vous souhaitez partager votre support de présentation avec une tierce personne), alors le dossier "presentation-quarto_files" disparaîtra et sera intégré dans le fichier html généré en sortie.

Si vous souhaitez rebasculer l'option `embed-resources: true` à `false`, alors cela va re-généré le dossier "presentation-quarto_files" au moment de lancer le programme (clique sur "render"). Néanmoins, celui-ci sera vidé des images qu'il contenait. Il faudra alors copier et coller les images utilisées du premier répertoire sus-nommé dans le 2ème pour rétablir la situation.

## Déploiement du support

Le support de présentation est accessible sur internet via l'url suivante :

<http://pole-bpe.gitlab-pages.insee.fr/presentations-formations/presentation-quarto/presentation-quarto.html>

Il s'agit de l'uri présente dans votre dépôt à la page suivante : "settings -> pages" à laquelle on concatène le nom du fichier html en output.


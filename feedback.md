# Feedback sur les projets proposés par les étudiants :

## Projet 1 - Le Formulaire de contact

### 01-project-form

Les plus : 

- Le projet respecte les attentes visuellement parlant.
- le projet est bien structurer niveau HTML (fieldset, legend, label, etc.) - assez peu de choses à redire dessus.
- Projet en mobile-first.
- Cool pour les selecteurs avancés à la ligne 157 (essayer de les utiliser au maximum)
- Globalement, le projet répond aux attentes :).


Axes d'améliorations : 
- Sémantique et SEO : h2 (il devrait y en avoir plusieurs, voir maquette - newsletter et contact information)
- Utilisation d'un reset CSS - normalize.css
- Privilégier les margin-bottom au margin-top (pour créer de l'espace)
- Eviter les ID
- Pour les width tel que zip-code, éviter les pourcentages (tu peux mettre un width fixe) OU si tu dois utiliser les pourcentages, penser à lui donner un max-width en px.


Remarques : 

- lang="fr" alors que le wording est en anglais.
- Pourquoi y-a-t-il des id sur certains champs ? (ligne 356, ligne 25)
- Même si la version tablette est proche de la desktop, pense à utiliser les média queries pour les deux.
- Partie required : attention le texte s'écrit à droite.

### 02-project-form

Les plus :
- Le projet répond visuellement aux attentes.
- L'utilisation des class center (permet de faire du code un peu générique).
- Bonne utilisation des vendor prefix css (moz, webkit, etc.)
- Comme le premier projet, globalement, le projet répond aux attentes.

Axes d'améliorations :
- Peut-être un peu trop large sur ipad.
- Légers problèmes d'indentation.
- Comme pour le premier projet, évite les id le plus possible.
- Niveau CSS : essaye de faire quelques commentaires / organisation.
- Attention au em et rem : c'est une excellente idée niveau accessibilité mais ça peut rapidement devenir difficile à maintenir :).
- input avec un width en % : à éviter, préfère des valeurs fixes.

Remarques :
- Essayer de faire un wrapper pour le projet (entre la classbody et le début de l'html).
- Ligne 130/132 : max-width puis min-width, un oubli ?
- Toujours privilégier les min-width au max-width (mobile first)
- Sep/sep-double = ?
- De façon globale, ne jamais oublier l'alpha order.



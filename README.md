# WebMobilEval

I - Workbox 
1) liste des fonctionnalités offertes 
2) Méthodes de cache et utilisations possibles 
3) uses cases à intégrer dans le projet doctoliberal 

II - Page d'incitation à l'installation de PWA 
1 ) Créer un composant (React / Vue / angular / HTML+CSS) pour inciter et surtout guider un utilisateur à installer la PWA - navigateur nécessaire - compatibilité du device - capacités supplémentaires, etc... 
2 ) Expliquer en quoi il serait interessant de mettre en place une telle page

#-----------------------------------------------------------------------------


I - Workbox 
  1) liste des fonctionnalités offertes 

  -  Gestion du cache: WorkBox offre plusieurs stratégies de mise en cache des fichiers statiques.
  -  Gestion de la mise à jour du cache: Mise à jour du cache en utilisant une stratégie de mise à jour comme par exemple "StaleWhileRevalidate".
  -  Gestion des erreurs: Plusieurs stratégie pour gérer les erreurs comme "OfflineFallBackPage" qui permet d'afficher une page en cas d'erreur réseau.
  -  Préchargement des fichiers: Améliore les performances de l'application en préchargent les fichiers statiques dans le cache.

  2) Méthodes de cache et utilisations possibles

  StaleWhileRevalidate -> cette stratégie renvoie la version en cache de la ressource tout en la téléchargeant en arrière-plan.
  Cache First -> cette stratégie recherche d'abord la ressource dans le cache.
  Network First -> cette stratégie recherche d'abord la ressource sur le réseau.
  Network Only ->  cette stratégie utilise seulement la ressource sur le réseau.
  Cache Only -> cette stratégie utilise seulement la ressource dans cache.
  
  3) uses cases à intégrer dans le projet doctoliberal 

  Mise en cache des images et fichiers statiques
  Utilisation de la stratégie "CacheFirst" pour les pages importantes et de la stratégie "NetworkFirst" pour les ressources importantes.
  
  Ca permet ainsi d'avoir une application rapide et avec des les données importantes à jour.


II - Page d'incitation à l'installation de PWA 

  2 ) Expliquer en quoi il serait interessant de mettre en place une telle page
  
  Une page pour inciter l'installation de PWA serait intéressante, car la plupart des utilisateurs ne connaîtront pas l'existence ou la procédure pour mettre   en place la PWA et avoir un bouton permet de simplifier l'installation et ainsi le nombre d'utilisateur de la PWA. Ca permet aussi une utilisation au plein   potentiel de l'application, avec une icone sur l'écran d'accueil de l'utilisateur, une utilisation hors ligne, la réception de notifications.



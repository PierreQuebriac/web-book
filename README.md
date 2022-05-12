# Rapport d'exercice

## Premier essai

Pour mon premier essai (dans le dossier \_old) j'ai voulu faire la partie front en Next.JS et la partie back via express et un serveur SQL en nodeJS (le même à peu de chose près que celui fait lors de la semaine départementale consacrée au développement web).

Malheureusement, la communication entre ces 2 serveurs se faisait mal et le navigateur bloquait les échanges à cause de la sécurité CORS

## Deuxième essai

J'ai donc, suite au premier essai décidé de repartir de 0 et d'utiliser au maximum la technologie React afin d'avoir une application single page gérant le back et le front en un seul projet. Cette méthode s'est révélée plus efficace.

J'ai par ailleurs décidé de coder en TypeScript afin de m'imposer une certaine rigueur qui m'a été fort utile.

Malheureusement, je n'ai pas réussi à faire communiquer la base de données en SQLite avec l'API. Cependant les changements de pages et l'ajout de pages sont en théorie fonctionnelle.

Vous pouvez voir la page actuelle dans le nom de l'onglet de l'application.

Pour lancer le projet, placez-vous dans le dossier my-book et lancez la commande :

```bash

npm run dev

```

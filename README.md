# Documentation test-inte eS

### installation et dépendances

#### Node et le gestionnaire de paquet NPM

Vérifier la dispo des  commandes suivantes :

```JS
node -v
npm -v
```

installer nodejs dans le cas contraire : http://nodejs.org/


#### Bower, Compass, Gulp

```JS
npm install -g bower
npm install -g compass
npm install -g gulp
```

Note : argument "-g" met à disposition globalement la commande


#### Install Ruby, Compass, imagemagick

[Ruby](http://www.ruby-lang.org/en/downloads/)
[Sass](http://sass-lang.com/tutorial.html)

#### Récupération des dépendances JS/CSS

```JS
bower install (project directory)
```

Note : bower.json charge les dépendances dans "bower_components"



#### Récupération des dépendances Node

```JS
npm install
```

Note : package.json charge les paquets dans "node_modules"


### Commandes Gulp

Lancer le serveur et scruter les changements :

```JS
gulp watch
```

Build le projet dans dist/ :

```JS
gulp build
```

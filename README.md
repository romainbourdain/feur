# Bot Feur

---

## Installation

**⚠️ Attention ⚠️ : Il faut avoir installé node.js sur votre machine. Je vous laisse regarder sur la documentation officielle comment faire si ce n'est pas le cas !**

### Création d'un Bot Discord

**Se rendre sur le [portail développeur de Discord](https://discord.com/developers/applications)**

- 📶 Création de l'application : Cliquer sur le bouton `New Application` puis entrer le nom de l'application, accepter les conditions et enfin appuyer sur le bouton `Create`
- 🤖 Création du Bot : Une fois l'application créée, aller dans l'onglet `Bot` et cliquer sur le bouton `Add Bot`
- 📜 Activation des `Gateway Intents` : Toujours dans l'onglet `Bot`, activer les trois paramètres `Privileged Gateway Intents` et sauvegarder les changements
- ➕ Ajout du Bot sur un serveur : Aller dans l'onglet `OAuth2` puis `URL Generator` puis cocher la case `bot`
  Dans le menu de permissions, cocher `Send Messages`, `Embed Links` et `Attach Files` (ces permissions sont nécessaires au bon fonctionnement du bot)
  Copier le lien généré en dessous et le coller dans un nouvel onglet et choisir le serveur dans lequel on veut ajouter le bot puis cliquer sur `Continuer`

**✅ C'est bon, le bot est opérationnel !**

---

### Lien entre le Bot Discord et le projet

- ⚖️ Cloner le projet git dans un dossier vide avec
  `git clone https://github.com/romainbourdain/feur.git`
- 🪙 Récupération du Token du bot : Dans l'onglet `bot` de votre application, cliquer sur `Reset Token` et copier le Token généré
- 🗒️ Créer un fichier `.env` à la racine du projet et coller la ligne suivante en remplaçant `<Votre-Token>` par le Token de votre bot puis sauvegarder le fichier
  `BOT_TOKEN=<Votre-Token>`
- ⬇️ Installation des modules : Télécharger les modules nécessaires pour le bot en tapant à la racine du projet dans un terminal :
  `npm install`

**✅ L'installation du bot est maintenant terminée !**

---

## Lancement du Bot

Une fois le bot installé, il ne reste plus qu'à taper dans un terminal à la racine du projet `npm start`
Le message `<Votre Bot> est connecté` devrait alors apparaître

---

## Personnalisation du Bot

Pour personnaliser les réponses du Bot, il faut modifier le fichier [answers.json](./answers.json)
Il est possible de choisir les fins de messages qui feront réagir le bot ainsi que la réponse du bot (texte + images)

### Exemples

##### Répondre feur quand on envoie quoi

```
[
    {
        "suffix": [
            "quoi"
        ],
        "answer": {
            "title": "feur"
        }
    }
]
```

##### Ajout de nouveaux quoi

L'expression mise dans `suffix` correspond à la fin du message sans espaces ni majuscules

```
[
    {
        "suffix": [
            "quoi",
            "koi",
            "coi",
            "qoi"
        ],
        "answer": {
            "title": "feur"
        }
    }
]
```

##### Ajout de ouistiti

```
[
    {
        "suffix": [
            "quoi"
        ],
        "answer": {
            "title": "feur"
        }
    },
    {
        "suffix": [
            "oui"
        ],
        "answer": {
            "title": "stiti"
        }
    }
]
```

##### Ajout d'image dans la réponse

Il est possible d'ajouter autant d'images qu'on veut dans `images`. Une seule sera séléctionnée aléatoirement puis envoyée

```
[
    {
        "suffix": [
            "quoi"
        ],
        "answer": {
            "title": "feur",
            "images": [
                "https://media.tenor.com/CJIntL3axZUAAAAd/feur-meme.gif"
            ]
        }
    }
]
```

//  Résolution des exercices sur les objets 

//  Question 1
// Un objet est une collection de propriétés où chaque propriété est une association de clé et de valeur.

//  Question 2
// La notation par points est plus rapide à écrire et plus claire à lire mais n'accepte pas les caractères spéciaux. La notation entre crochets permet d'accéder aux propriétés contenant des caractères spéciaux et de sélectionner des propriétés à l'aide de variables.


//  Question 3
// Pour parcourir les propriétés d'un objet en js on peut utililser la boucle `for in`

//  Question 4
// La difference entre un objet et un tableau est que: un objet est une collection de propriétés tandisqu'un tableau est un conteneur dans le quel nous pouvons stocker plusieurs valeurs.

// Question 5
const fruits = { 1:"mangue", 2:'banane'}
function conversion(objet){
    return Object.entries(objet)
}
console.log(conversion(fruits))


// Question 6
function myName (nom, prenom){
    const nomComplet = {
        nom,
        prenom 
    }
    console.log (`${nomComplet.nom} ${nomComplet.prenom}`)
        
}
myName('Barry', 'Aliou')


// Question 7
const maPersonne = {
    nom: "Barry",
    prenom: "Mamadou Ramadane",
    age: 18
}

const clés = Object.keys(maPersonne).sort()
console.log(clés)


// Question 8
const maPersonneDetail = {
    nom: "Barry",
    prenom: "Mamadou",
    profession: "Etudiant"
}

const filtrerValeur = Object.values(maPersonneDetail)
filtrerValeur.sort()
filtrerValeur.reverse()
console.log(filtrerValeur)


// Question 9
const recette = {
    titre: "Mole",
    portion: 2,
    ingredients : ["canelle", "cumin", "cacao"]
}

let key = Object.keys(recette)

console.log(recette.titre)
console.log(`${key[1]} : ${recette.portion}`)
console.log(`${key[2]} :`)
for (let i=0;i<recette.ingredients.length;i++){
    console.log(`${recette.ingredients[i]}`)  
}


// Question 10
const maxNumber = {
    maximum: function(){
        const plusGrand = Math.max(5, 2, 3)
        return plusGrand
    }
}
console.log(maxNumber.maximum())

// Exercice sur les objets

// Question 1
const string = 'you code very good'
function verification(phrase){
    const index = phrase.indexOf("code")
    if (index === 4){
        const remplace = phrase.replace('code', "")
        console.log(remplace)
    }else {
        console.log(phrase)
    }
}

verification(string)


// Question 2
function capitaliserPremiereLettre(phrase){
    return phrase.split(' ').map(x => {
        return x.charAt(0).toUpperCase() + x.slice(1)
    }).join(' ')
}

const phrase = 'le renard brun rapide'

console.log(capitaliserPremiereLettre(phrase))


// Question 3
function chiffreIdentique(nombre){
    chaine = nombre.toString()
    
    for (let i=0;i<chaine.length;i++){
        if (chaine[i] !== chaine[0]){
            return false
        }
    }
    return true
}

if (chiffreIdentique(112)){
    console.log('Tous les chiffres sont les mêmes')
}else {
    console.log('Tous les chiffres ne sont pas les mêmes')
}


// Question 7
function searchWord(phrase, mot){
    if (phrase.includes(mot)){
        console.log(`Le mot ${mot} a été trouvé`)
    }
}

searchWord('Le renard brun rapide', 'rapide')
searchWord('aa, bb, cc, dd, aa', 'aa')


// Question 8
const tab = [2, 30, 5, 36, 50, 34]
let tabFiltrer = tab.filter(filter)
let tabFiltrerAjouter = []

function filter(nb){
    return nb>= 30 && nb<=50
}

// Affichage du tableau filtrer
console.log(tabFiltrer)
// Ajout de 20 à chaque nombre du tableau filter
tabFiltrerAjouter = tabFiltrer.map(x => x + 20)
console.log(tabFiltrerAjouter)
// Somme de tous les nombres en utilisant la fn reduce
let som = tabFiltrerAjouter.reduce((a,b) => a+b)
console.log(som)
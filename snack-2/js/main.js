/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

let squadre = [
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Liverpool',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Barcellona',
        puntiFatti: 0,
        falliSubiti: 0
    },
]


function random(){
    for(let i = 0; i < 20; i++){
        return Math.floor(Math.random()* 20) + 1;
    }
}


squadre.forEach((element) => {
 
    element.puntiFatti = random()
    element.falliSubiti = random()

})

console.log(squadre)


let newArray = squadre.map((element) => {

    let {nome, falliSubiti} = element;
    return {nome, falliSubiti}
})

console.log(newArray)




    
    




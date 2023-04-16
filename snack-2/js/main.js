/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadre = [
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juventus',
        puntiFatti: null,
        falliSubiti: null
    },
    {
        nome: 'Milan',
        puntiFatti: null,
        falliSubiti: null
    },
    {
        nome: 'Liverpool',
        puntiFatti: null,
        falliSubiti: null
    },
    {
        nome: 'Inter',
        puntiFatti: null,
        falliSubiti: null
    },
    {
        nome: 'Barcellona',
        puntiFatti: null,
        falliSubiti: null
    },
]


function random(){

    for(let i = 0; i < 20; i++){
        return Math.floor(Math.random()* 20);
    }
}


    squadre.forEach(element => {
        
        let {puntiFatti, falliSubiti} = element;
            
        puntiFatti = random();
        falliSubiti = random();
        console.log(puntiFatti, falliSubiti)

        return falliSubiti
    });

    const newArray = squadre.map((element) => {

        let {nome, falliSubiti} = element;
        console.log(nome, falliSubiti)
    })




    
    




/*
Creare un array di oggetti:

Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/


const bikes = [
    {
        nome: 'Bianchi',
        peso: 7.2
    },
    {
        nome: 'Atala',
        peso: 6.5
    },
    {
        nome: 'Olmo',
        peso: 7.5
    },
    {
        nome: 'Casati',
        peso: 6.8
    },
    {
        nome: 'Colnago',
        peso: 6.7
    }
]


let biciPesante = bikes[0]

    
for(let i = 0; i < bikes.length; i++){
    if(bikes[i].peso > biciPesante.peso){
        biciPesante = bikes[i]
    }
}

let {nome, peso} = biciPesante;

document.querySelector('.container').innerHTML += `
    <p class="bg-info-subtle w-50 m-auto">La bici con peso maggiore è : ${nome} </p>
    <p class="bg-info-subtle w-50 m-auto">Il suo peso è : ${peso}</p>
    `




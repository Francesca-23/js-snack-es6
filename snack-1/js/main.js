/*
Creare un array di oggetti:

Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/


const bikes = [
    {
        nome: 'Bianchi',
        peso: 7.5
    },
    {
        nome: 'Atala',
        peso: 6.5
    },
    {
        nome: 'Olmo',
        peso: 7.2
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


function bici(){
    
    for(let i = 0; i < bikes.length; i++){
        let {peso} = bikes[i]
        return peso
    }

    let max = Math.max(peso);
    return max
}

document.querySelector('.container').innerHTML += `
    <p class="bg-info-subtle w-50 m-auto">La bici con peso maggiore è : ${bikes[0].nome} </p>
    <p class="bg-info-subtle w-50 m-auto">Il suo peso è : ${bici()}</p>
    `




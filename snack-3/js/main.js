/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3

La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/


let arrayNomi = ['Maria', 'Bianca', 'Alice', 'Sofia', 'Giada', 'Luisa'];


function myFunction(array, num1, num2){

    const newArray = array.filter((element, index) => {

        if(index > num1 && index < num2){
            return element
        }
    })

    return newArray
}

console.log(myFunction(arrayNomi, 1, 5))


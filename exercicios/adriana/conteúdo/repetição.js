// for (expressaoInicial; condição; incremento){
//     o código vai aqui
// }

// for (let i = 0; i <= 10; i++){
//     console.log(`numero ${i}`);
// }


let numero = 2
let numeros = [3, 1, 5, 8, 10, 20, 2, 7];
// console.log(numeros.length);

// for (let i = 0; i<= numeros.length; i++){
//     const dobro = numeros[i] * 2
//     console.log(dobro);
// }

// while (condição de parada){
//     codigo vai aqui
// }

// let i = 0
// while (i < numeros.length){
//     const dobro = numeros[i] * 2
//     console.log(dobro)
//     i++
// }

// for e of = ele corre o array!
// for (variavel of iteravel = array){
//     declaração
// }
for (let numero of numeros){
    const dobro = numero * 2;
    console.log(dobro);
}
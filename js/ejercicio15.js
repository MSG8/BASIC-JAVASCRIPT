'use strict'
// MANUEL SOLIS GOMEZ (masogo008@gmail.com)
let numero = 0;
let dividen = [];
let indice = 0;

do
{
  if (isNaN(numero) ==true)
  {
    alert(`Tipo de valor equivocado, por favor, introduzca un numero`)
  }
  numero = prompt ('Digame un numero y yo le dire por que valores es divible');
} while (isNaN(numero) == true);

for (let indiceNumeros = 0; indiceNumeros <= numero ; indiceNumeros++)
{
  if (numero % indiceNumeros == 0)
  {
    dividen[indice] = indiceNumeros; //hago un array dinamico dependiendo de los divisbles
    indice++;
  }
}

if (indice >= 1)
{
  alert(`Su numero es divisible por ${dividen} numeros`);
}
else
{
  alert(`Su numero no es divisible por ningun numeros`);
}

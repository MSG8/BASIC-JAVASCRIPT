'use strict'
// MANUEL SOLIS GOMEZ (masogo008@gmail.com)
let divisibles = [2,3,5,7];
let confirmar = false;
let numero = 0;

alert('Hola, soy tu amigo la pagina web');
do
{
  if (isNaN(numero) ==true)
  {
    alert(`Tipo de valor equivocado, por favor, introduzca un numero`)
  }
  numero = prompt ('Digame un numero y yo le dire si es divisible por 2,3,5 o 7');
} while (isNaN(numero) == true);

// if (isNaN(numero)) Es un metodo que dice si no es un numero
// {
//   alert('NO es un numero');
// }
// else
// {
//   alert('Es un numero');
// }

for (let indiceNumeros = 0; indiceNumeros < divisibles.length && confirmar == false; indiceNumeros++)
{
  if (numero % divisibles[indiceNumeros] == 0)
  {
    confirmar = true;
  }
}

if (confirmar == true)
{
  alert (`Su numero (${numero}) si es divisible`);
}
else
{
  alert (`Su numero (${numero}) NO es divisible`);
}

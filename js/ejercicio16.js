'use strict'
// MANUEL SOLIS GOMEZ (masogo008@gmail.com)
let numero = 0;
let numero2 = 0;
let dividen = [];
let dividen2 = [];
let dividenComunes = [];
let indice = 0;
let indice2 = 0;
let indiceComun = 0

do
{
  if (isNaN(numero) ==true)
  {
    alert(`Tipo de valor equivocado, por favor, introduzca un numero`)
  }
  numero = prompt ('Digame un numero ');
} while (isNaN(numero) == true);

do
{
  if (isNaN(numero2) ==true)
  {
    alert(`Tipo de valor equivocado, por favor, introduzca un numero`)
  }
  numero2 = prompt ('Digame otro numero y yo te dire sus divisores comunes');
} while (isNaN(numero2) == true);

for (let indiceNumeros = 0; indiceNumeros <= numero ; indiceNumeros++)
{
  if (numero % indiceNumeros == 0)
  {
    dividen[indice] = indiceNumeros; //hago un array dinamico dependiendo de los divisbles
    indice++;
  }
}

for (let indiceNumeros = 0; indiceNumeros <= numero2 ; indiceNumeros++)
{
  if (numero2 % indiceNumeros == 0)
  {
    dividen2[indice2] = indiceNumeros; //hago un array dinamico dependiendo de los divisbles
    indice2++;
  }
}

if (indice == 0 || indice2 == 0)
{
  alert(`No tienen divisores comunes`);
}
else
{
  for (let divisor1 of dividen)
  {
    for (let divisor2 of dividen2)
    {
      if (divisor1 == divisor2)
      {
        dividenComunes[indiceComun] = divisor1;
        indiceComun++;
      }
    }
  }
  alert(`Tienes estos divisores comunes (${dividenComunes})`);
}

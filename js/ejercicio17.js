'use strict'
// MANUEL SOLIS GOMEZ (masogo008@gmail.com)
let numero = 0;
let division = 0;

do
{
  if (isNaN(numero) ==true)
  {
    alert(`Tipo de valor equivocado, por favor, introduzca un numero`);
  }
  numero = prompt ('Digame un numero ');
} while (isNaN(numero) == true);

for (let indiceNumero = 0; indiceNumero <= numero  && division < 3; indiceNumero++)
{
  if (numero % indiceNumero == 0)
  {
    division++;
  }
}

if (division == 2)
{
  alert(`Es un número primo`);
}
else
{
  alert(`No es un número primo`);
}

'use strict'
//Manuel Solis Gomez (masogo008@gmail.com)
let numero1 = Number(prompt(`Buenas, diga un numero`));
let numero2 = Number(prompt(`Buenas, diga otro numero`));

if (numero1 > numero2)
{
  alert(`Su primer número (${numero1}) es mayor que el segundo`);
}
else
{
  if (numero1 < numero2)
  {
    alert(`Su segundo número (${numero2}) es mayor que el primero`);
  }
  else
  {
    alert(`Su primer número (${numero1}) y su segundo número (${numero2}) son iguales`);
  }
}

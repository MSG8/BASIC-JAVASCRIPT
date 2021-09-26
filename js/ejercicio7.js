'use strict'
//Manuel Solis Gomez (masogo008@gmail.com)
let numero1 = Number(prompt(`Buenas, diga su primer número`));
let numero2 = Number(prompt(`Buenas, diga su segundo número`));
let numero3 = Number(prompt(`Buenas, diga su tercer número`));

if ((numero1 > numero2) && (numero1 > numero3))
{
  alert(`Su primer número (${numero1}) es mayor que el segundo y el tercero`);
}
else
{
  if ((numero2 > numero1) && (numero2 > numero3))
  {
    alert(`Su segundo número (${numero2}) es mayor que el primero y el tercero`);
  }
  else
  {
    if ((numero3 > numero1) && (numero3 > numero2))
    {
      alert(`Su tercer número (${numero3}) es mayor que el primero y el segundo`);
    }
    else
    {
      if ((numero1 == numero2) && (numero1 > numero3))
      {
        alert(`Su primer número (${numero1}) y su segundo número (${numero2}) son iguales entre si y mayores al tercero`);
      }
      else
      {
        if ((numero2 == numero3) && (numero2 > numero1))
        {
          alert(`Su segundo número (${numero2}) y su tercer número (${numero3}) son iguales entre si y mayores al primero`);
        }
        else
        {
          if ((numero1 == numero3) && (numero1 > numero2))
          {
            alert(`Su primer número (${numero1}) y su tercer número (${numero3}) son iguales entre si y mayores al segundo`);
          }
          else
          {
            alert(`Son todos iguales`);
          }
        }
      }
    }
  }
}

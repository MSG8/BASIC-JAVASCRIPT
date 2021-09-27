'use strict'
//Manuel Solis Gomez (masogo008@gmail.com)
alert('Hola, soy tu amigo la pagina web');
let frase = prompt ('Cuentame que te preocupa, yo te escucho :D');
let tiposA = ['a','A','á','Á'];
let repeticion = 0;

for (let indiceFrase = 0; indiceFrase < frase.length; indiceFrase++)
{
  for (let indiceVocales = 0; indiceVocales < tiposA.length; indiceVocales++)
  {
    if (frase.charAt(indiceFrase) == tiposA[indiceVocales])
    {
      repeticion++;
    }
  }
}

alert(`Estas son todas las repeticiones de a que tiene la frase : ${repeticion}`);

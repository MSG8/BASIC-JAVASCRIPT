'use strict'
//Manuel Solis Gomez (masogo008@gmail.com)
alert('Hola, soy tu amigo la pagina web');
let frase = prompt ('Cuentame que te preocupa, yo te escucho :D');
let vocal = ['a','A'];
let repeticion = 0;

for (var indiceFrase = 0; indiceFrase < frase.length; indiceFrase++)
{
  for (var indiceVocales = 0; indiceVocales < vocal.length; indiceVocales++)
  {
    if (frase.charAt(indiceFrase) == vocales[indiceVocales])
    {
      repeticion++;
    }
  }
}

alert(`Estas son todas las repeticiones de a que tiene la frase : ${repeticion}`);

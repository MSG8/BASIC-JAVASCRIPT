'use strict'
//Manuel Solis Gomez (masogo008@gmail.com)
alert('Hola, soy tu amigo la pagina web');
let frase = prompt ('Cuentame que te preocupa, yo te escucho :D');
let vocales = ['a','e','i','o','u','A','E','I','O','U'];
let fraseVocales = '';

for (var indiceFrase = 0; indiceFrase < frase.length; indiceFrase++)
{
  for (var indiceVocales = 0; indiceVocales < vocales.length; indiceVocales++)
  {
    if (frase.charAt(indiceFrase) == vocales[indiceVocales])
    {
      fraseVocales = fraseVocales + frase.charAt(indiceFrase);
    }
  }
}

alert(`Estas son todas las vocales que hay en lo que te preocupa : ${fraseVocales}`);

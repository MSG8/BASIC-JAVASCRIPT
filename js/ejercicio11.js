'use strict'
//Manuel Solis Gomez (masogo008@gmail.com)
alert('Hola, soy tu amigo la pagina web');
let frase = prompt ('Cuentame que te preocupa, yo te escucho :D');
let vocales = ['a','e','i','o','u','A','E','I','O','U','á','é','í','ó','ú','Á','É','Í','Ó','Ú','ü','Ü'];
let vocalesRepetidas = 0;

for (let indiceFrase = 0; indiceFrase < frase.length; indiceFrase++)
{
  for (let indiceVocales = 0; indiceVocales < vocales.length; indiceVocales++)
  {
    if (frase.charAt(indiceFrase) == vocales[indiceVocales])
    {
      vocalesRepetidas++;
    }
  }
}

alert(`Estas son todas las repeticiones de las vocales que tiene la frase -> ${vocalesRepetidas}`);

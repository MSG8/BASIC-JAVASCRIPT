'use strict'
//Manuel Solis Gomez (masogo008@gmail.com)
alert('Hola, soy tu amigo la pagina web');
let frase = prompt ('Cuentame que te preocupa, yo te escucho :D');
let vocales = ['a','e','i','o','u','A','E','I','O','U','á','é','í','ó','ú','Á','É','Í','Ó','Ú','ü','Ü'];
let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;

for (let indiceFrase = 0; indiceFrase < frase.length; indiceFrase++)
{
  for (let indiceVocales = 0; indiceVocales < vocales.length; indiceVocales++)
  {
    if (frase.charAt(indiceFrase) == vocales[indiceVocales])
    {
      if (frase.charAt(indiceFrase) == 'a' || frase.charAt(indiceFrase) == 'á' || frase.charAt(indiceFrase) == 'A' || frase.charAt(indiceFrase) == 'Á')
      {
        a++;
      }
      else
      {
        if (frase.charAt(indiceFrase) == 'e' || frase.charAt(indiceFrase) == 'é' || frase.charAt(indiceFrase) == 'E' || frase.charAt(indiceFrase) == 'É')
        {
          e++;
        }
        else
        {
          if (frase.charAt(indiceFrase) == 'i' || frase.charAt(indiceFrase) == 'í' || frase.charAt(indiceFrase) == 'I' || frase.charAt(indiceFrase) == 'Í')
          {
            i++;
          }
          else
          {
            if (frase.charAt(indiceFrase) == 'o' || frase.charAt(indiceFrase) == 'ó' || frase.charAt(indiceFrase) == 'O' || frase.charAt(indiceFrase) == 'Ó')
            {
              o++;
            }
            else
            {
              if (frase.charAt(indiceFrase) == 'u' || frase.charAt(indiceFrase) == 'ú' || frase.charAt(indiceFrase) == 'U' || frase.charAt(indiceFrase) == 'Ú' || frase.charAt(indiceFrase) == 'ü' || frase.charAt(indiceFrase) == 'Ü') 
              {
                u++;
              }
            }
          }
        }
      }
    }
  }
}

alert(`Estas son todas las vocales que se encuentran en tu frase -> son ${a} a, ${e} e, ${i} i, ${o} o y ${u} u`);

/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   // let newArray = [];
   // for (const key in objeto) {

   //    newArray.push([key, objeto[key]])
   // }
   // return newArray;
   let newArray = [];

   let keys = Object.keys(objeto)
   keys.forEach(element => {newArray.push([element, objeto[element]])
      
   })
   return newArray;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   // perro
   let newObject = {};
   let array = string.split('').sort();
   array.forEach(element => {
      if (!newObject[element]) {newObject[element] = 1
         
      } else {newObject[element]++;
         
      }
   })
   return newObject;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayusculas = '';
   let minusculas = '';
   for (let index = 0; index < string.length; index++) {
      if (string[index] === string[index].toUpperCase()) {
      mayusculas += string[index]

      } else {minusculas += string[index]
         
      }
      
   }return mayusculas + minusculas
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const array = frase.split(' ') 
   array.forEach((element, index) => {var palabra = element.split('');
   array[index] = palabra.reverse().join('')})
   
   var stringReverse = array.join(' ');
   return stringReverse

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let string = numero.toString().split('').reverse().join('');
   let numCapicua = parseInt(string);

   if (numero === numCapicua) {
      return "Es capicua"
   } else {return "No es capicua"
      
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newArray = string.split('');
   var arrayFilter = newArray.filter((element) => element !== 'a' && element !== 'b' && element !== 'c')
   return arrayFilter.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   //["beautiful","You", "are", "looking"]
   return arrayOfStrings.sort((a, b) => (a.length - b.length))
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   return array1.filter(element => array2.includes(element))
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

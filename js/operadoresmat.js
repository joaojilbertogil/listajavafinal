let num = prompt("Digite um número inteiro que desejar:");
num = parseInt(num);

let raizQuadrada = Math.sqrt(num);
let raizCubica = Math.cbrt(num);
let potencia = Math.pow(num, 2);

alert("Raiz quadrada de: " + num + " é: " + raizQuadrada + "\n" +
      "Raiz cúbica de " + num + " é: " + raizCubica + "\n" +
      num + " ao quadrado é: " + potencia);
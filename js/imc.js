let Homens = 0;
let Mulheres = 0;

for (let i = 1; i <= 5; i++) {
  let altura = parseFloat(prompt("Por Favor Digite a altura da pessoa" + i + " (em metros):"));
  let peso = parseFloat(prompt("Por Favor Digite o peso da pessoa " + i + " (em kg):"));
  let sexo = prompt("Por Favor Digite o sexo da pessoa " + i + " (M para masculino ou F para feminino):");

  let imc = peso / (altura * altura);

  document.write("<p>Pessoa " + i + ":<br>" +
                 "Altura: " + altura.toFixed(2) + "m<br>" +
                 "Peso: " + peso.toFixed(2) + "kg<br>" +
                 "Sexo: " + sexo.toUpperCase() + "<br>" +
                 "IMC: " + imc.toFixed(2) + "</p>");


  if (sexo.toUpperCase() === "M") {
    Homens++;
  } else if (sexo.toUpperCase() === "F") {
    Mulheres++;
  }
}


document.write("<p><I>Número do sexo Masculino: " + Homens + "</I></p>");
document.write("<p><iNúmero do sexo Feminino: " + Mulheres + "</i></p>");
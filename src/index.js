const calcularInss = require("./calculo_inss")
const calcularImpRenda = require("./calculo_imposto_renda")
const calcSalarioLiquido = require("./calculo_salario_liquido")

const salarioBruto = 4500; // Exemplo de salário bruto
const outrosDescontos = 100; // Exemplo de outros descontos

const inss = calcularInss(salarioBruto);
const ir = calcularImpRenda(salarioBruto);
const salarioLiquido = calcSalarioLiquido(salarioBruto, outrosDescontos);

// const readline = require('readline')
// const PdfDocument = require('pdfkit')
// const fs = require('fs')

// const input = readline. createInterface(
//     process.stdin,
//     process.stdout
// );

// input.question("Nome do funcionário: ", (nomeDigitado) => {
//     const doc = new PdfDocument()
//     doc.pipe(fs.createWriteStream('holerite.pdf'))

//     doc.fontSize(16)

//     doc.text("Folha de Pagamento")
//     doc.text(`Funcionário: ${nomeDigitado}`)

//     doc.end()
// })

//console.log(calcularInss(8000))

// console.log(calcularImpRenda(4500))

console.log(`Salário Bruto: R$ ${salarioBruto}`);
console.log(`INSS: R$ ${inss}`);
console.log(`Imposto de Renda: R$ ${ir}`);
console.log(`Outros Descontos: R$ ${outrosDescontos}`);
console.log(`Salário Líquido: R$ ${salarioLiquido}`);

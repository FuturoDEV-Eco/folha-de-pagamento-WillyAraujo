const calcularInss = require("./calculo_inss")
const calcularImpRenda = require("./calculo_imposto_renda")
const calcSalarioLiquido = require("./calculo_salario_liquido")

const readline = require('readline')
const PdfDocument = require('pdfkit')
const fs = require('fs')

const input = readline. createInterface(
    process.stdin,
    process.stdout
);

input.question("Nome do funcionário: ", (nomeDigitado) => {
    input.question("CPF: ", (cpfDigitado) => {
        input.question("Mês do pagamento: ", (mesDigitado) => {
            input.question("Salário Bruto: R$ ", (salarioBruto) => {
                salarioBruto = parseFloat(salarioBruto);
                const outrosDescontos = 0;
                const inss = calcularInss(salarioBruto);
                const ir = calcularImpRenda(salarioBruto);
                const salarioLiquido = calcSalarioLiquido(salarioBruto, outrosDescontos);

                console.log("\n--- Folha de Pagamento ---");
                console.log(`Nome: ${nomeDigitado}`);
                console.log(`CPF: ${cpfDigitado}`);
                console.log(`Mês do pagamento: ${mesDigitado}`);
                console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
                console.log(`INSS: R$ ${parseFloat(inss).toFixed(2)}`);
                console.log(`Imposto de Renda: R$ ${parseFloat(ir).toFixed(2)}`);
                console.log(`Salário Líquido: R$ ${parseFloat(salarioLiquido).toFixed(2)}`);

                input.close()
            })
        })
    })
})
//     const doc = new PdfDocument()
//     doc.pipe(fs.createWriteStream('holerite.pdf'))

//     doc.fontSize(16)

//     doc.text("Folha de Pagamento")
//     doc.text(`Nome: ${nomeDigitado}`)

//     doc.end()
// })

//console.log(calcularInss(8000))

// console.log(calcularImpRenda(4500))
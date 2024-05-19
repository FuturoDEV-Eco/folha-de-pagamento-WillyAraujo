const calcularInss = require("./calculo_inss")
const calcularImpRenda = require("./calculo_imposto_renda")

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

console.log(calcularImpRenda(4500))

var valor = (process.argv[2]);

if(valor % 1 != 0)
{
    console.log("informe um valor valido");
    return;
}

console.log("Valor: R$ " + valor + ",00");

function calculaNotaX(nota, valor)
{
    var restoX = valor % nota;
    if (restoX < nota && restoX != 1 && restoX != 3) {
        console.log("Quantidade de R$ " + nota + ",00: " + parseInt(valor/nota) + "   ");
        return restoX;
    } else if (((valor / nota)|0) > 1 && (restoX == 1 || restoX == 3)) {
        var quantidadeNota = (((valor - nota) / nota)|0);
        console.log("Quantidade de R$ " + nota + ",00: " + quantidadeNota + "   ");
        valor = (valor - (nota * quantidadeNota)); 
        var valorSubtraido = (((valor-nota)/nota)|0); 
        return valor - valorSubtraido;
    }
    console.log("Quantidade de R$ " + nota + ",00: " + 0 + "  ");
    return valor;
}

valor = calculaNotaX(100, valor);
valor = calculaNotaX(50, valor);
valor = calculaNotaX(20, valor);
valor = calculaNotaX(10, valor);
valor = calculaNotaX(5, valor);
valor = calculaNotaX(2, valor);
console.log("sobra... " + valor);
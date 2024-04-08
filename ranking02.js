let vitorias = 82
let derrotas = 10

function calcularNivelRankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    switch(true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;
        case vitorias >= 10 && vitorias <=20:
            nivel = "Bronze";
            break;
        case vitorias >= 21 && vitorias <=50:
            nivel = "Prata";
            break;
        case vitorias >= 51 && vitorias <=80:
            nivel = "Ouro";
            break;
        case vitorias >= 81 && vitorias <=90:
            nivel = "Diamante";
            break;
        case vitorias >= 91 && vitorias <=100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";

    } 
    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

console.log(calcularNivelRankeadas(vitorias, derrotas));
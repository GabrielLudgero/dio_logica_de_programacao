
//Inserir manualmente o número de vitórias e o número de derrotas, respectivamente
let pontuacao = calcularSaldo(200, 50)

function calcularSaldo(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

let rankingFinal = DescobrirRanking(pontuacao)

function DescobrirRanking(tabela){

    if(tabela <= 10){
        let ranking = "Ferro"
        return ranking
    } else if(tabela >= 11 && tabela <= 20){
        let ranking = "Bronze"
        return ranking
    } else if(tabela >= 21 && tabela <= 50){
        let ranking = "Prata"
        return ranking
    } else if(tabela >= 51 && tabela <= 80){
        let ranking = "Ouro"
        return ranking
    } else if(tabela >= 81 && tabela <= 90){
        let ranking = "Diamante"
        return ranking
    } else if(tabela >= 91 && tabela <= 100){
        let ranking = "Lendário"
        return ranking
    } else if(tabela >= 101){
        let ranking = "Imortal"
        return ranking
    }
}

console.log(`O herói tem saldo de ${pontuacao} e se encontra no nível de ${rankingFinal}`)
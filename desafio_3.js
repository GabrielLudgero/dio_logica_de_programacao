//Classe com alguns dados básicos do herói
class Herois{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    //Método composto por estrutura de controle (variação de ataque de acordo com a classe) e impressão do ataque.
    atacar(){

        let ataque = ""
        switch (this.tipo){
            case "mago":
            ataque = "usou magia"
            break

            case "guerreiro":
            ataque = "usou espada"
            break

            case "monge":
            ataque = "usou artes marciais"
            break

            case "ninja":
            ataque = "usou shuriken"
        }      

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}

//Inserir nome, idade e classe, respectivamente.
let meuHeroi = new Herois("Harit", 121, "ninja")

meuHeroi.atacar()
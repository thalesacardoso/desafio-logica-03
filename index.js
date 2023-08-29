// Desafio de projeto 03
// Dev: Thales Cardoso
// Data: 29/08/2023

// Declarando a Classe heroi
class heroi {
    constructor(nome, idade , tipo){
        // Atributos
        this.nomeHeroi = nome
        this.idadeHeroi = idade
        this.tipoHeroi = tipo
        this.ataque
    }

    // Método Atacar
    atacar(){

        // Estrutura de Decisão
        switch(this.tipoHeroi){
            case "mago":
                this.ataque = "magia"
                break
            
            case "guerreiro":
                this.ataque = "espada"
                break

            case "monge":
                this.ataque = "artes marciais"
                break

            case "ninja":
                this.ataque = "shuriken"
                break
        }

        // mostra a mensagem do tipo do heroi e do ataque
        console.log("o " + this.tipoHeroi + " atacou usando " + this.ataque)
    }

    // Método esquivar (extra)
    esquivar(){
        console.log("O " + this.nomeHeroi + " esquivou do ataque inimigo")
    }

}

// Criação dos Objetos com uso de parâmetros
let hero1 = new heroi("Hércules" , 28 , "guerreiro")
let hero2 = new heroi("Shaolin", 30, "monge")
let hero3 = new heroi("Harry Potter", 20, "mago")

// Utilizando os objetos
hero1.atacar()
hero1.esquivar()
hero2.atacar()
hero3.atacar()
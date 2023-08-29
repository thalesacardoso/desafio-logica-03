// Desafio de projeto 03

class heroi {
    constructor(nome, idade , tipo){
        this.nomeHeroi = nome
        this.idadeHeroi = idade
        this.tipoHeroi = tipo
        this.ataque
    }

    escrever(){
        console.log("O nome do herói é " + this.nomeHeroi + " e tem " + this.idadeHeroi + " anos")
    }

}

let hero = new heroi("Batman" , 20 , "Mago")

console.log(hero.idadeHeroi)
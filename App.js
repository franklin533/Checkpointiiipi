let curso = require('./curso');

function Aluno(nome, quantidadeFaltas, notas){
    this.nome = nome;
    this.quantidadeFaltas = quantidadefaltas;
    this.notas = notas;
    this.faltas = function (){
        this.quantidadeFaltas +=1;
    },
    this.calcularMedia = function (){
        let soma = 0;
        for (let i = 0; i <this.notas.length; i++){
            soma += this.notas[i]; 
        }

        return soma / this.notas.length;
    }    
}

let aluno1 = new Aluno('Franklin', 4, [5, 5, 8, 8]);

curso.curso.listaEstudantes.push(aluno1);
//console.log(curso.curso);

//aluno1.faltas();

//console.log(aluno1.calcularMedia());

let aluno1 = new Aluno('Melo', 8, [5, 7, 7]);

curso.curso.novoEstudante(aluno2);

//console.log(curso.curso.listaEstudantes);

console.log(curso.curso.naMosca(aluno1));

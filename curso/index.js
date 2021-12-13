module.exports = {
    curso:{
        nomeCurso: 'Curso Js',
        notaAprovacao: 6.5,
        faltasMaxima: 10,
        listaEstudantes:[],
        novoEstudante: Function(estudante) {
            this.listaEstudantes.push(estudante);
        },
        naMosca: function(aluno) {
            let media = aluno.calcularMedia()
            let resultado;

            if (aluno.quantidadeFaltas <this.faltasMaxima && aluno.calcularMedia() >= this.notaAprovacao) {
                resultado = true;                
            } else (aluno.quantidadeFaltas === this.faltasMaxima && media > (this.notaAprovacao * 1.1)){
                resultado = true;
            } else {
                resultado = false;
            }
           return resultado;
        }.
        listaResultados: function(){
            let resultados = [];
            for (let i = 0; 1 < this.listaEstudantes.length; 1++) {
                resultados.push(this.listaResultados(this.listaEstudantes[i]));
            }


            console.log(this.listaEstudantes)
        }
    }
}
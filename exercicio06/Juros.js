export default class Juros {

    capitalInicial;
    taxaAplicada;
    tempo;

    constructor(capitalInicial, taxaAplicada, tempo) {
        this.capitalInicial = capitalInicial;
        this.taxaAplicada = taxaAplicada;
        this.tempo = tempo;
    }

    calcularJurosSimples() {        
        
        // const C = this.capitalInicial;
        // const i = this.taxaAplicada;
        // const t = this.tempo;
        // const J = C * i * t;
        // return J;
        
        const J = this.capitalInicial * this.taxaAplicada * this.tempo;
        return Math.floor ( this.capitalInicial + J ); // Arredonda pra baixo
        // return Math.round ( this.capitalInicial + J ); // Arredonda cima ou baixo
        // return Math.ceil ( this.capitalInicial + J ); // Arredonda pra cima

    }

    calcularJurosCompostos() {

        // const C = this.capitalInicial;
        // const i = this.taxaAplicada;
        // const t = this.tempo;
        // const M = C * (1 + i) ** t;
        // return M;

        // return this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo;

        const M = this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo;
        return Math.floor ( M ); // Arredonda pra baixo
        // return Math.round ( M ); // Arredonda cima ou baixo
        // return Math.ceil ( M ); // Arredonda pra cima


    }

}
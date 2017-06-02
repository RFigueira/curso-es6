class ListaNegociacoes {

    constructor() {
        this._negociacoes= [];
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        //programacao def. estou retornando uma copia da lista, sendo assim
        //nao será possivel add itens atraves do get, pois retorno uma copia :D
        // so será possivel add itens atravz do adiciona da minha classe
        return [].concat(this._negociacoes);
    }

    esvazia(){

        this._negociacoes = [];

    }
}
class ListaNegociacoes {

    constructor(funcao) {
        this._negociacoes= [];
        this._funcao = funcao;
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
        this._funcao(this)
    }

    get negociacoes() {
        //programacao def. estou retornando uma copia da lista, sendo assim
        //nao será possivel add itens atraves do get, pois retorno uma copia :D
        // so será possivel add itens atravz do adiciona da minha classe
        return [].concat(this._negociacoes);
    }

    esvazia(){

        this._negociacoes = [];
        this._funcao(this)
    }
}
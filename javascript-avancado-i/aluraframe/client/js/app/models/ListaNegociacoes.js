class ListaNegociacoes {

    constructor(contexto, funcao) {
        this._negociacoes= [];
        this._funcao = funcao;
        this._contexto = contexto;
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
        Reflect.apply(this._funcao, this._contexto,[this])
    }

    get negociacoes() {
        //programacao def. estou retornando uma copia da lista, sendo assim
        //nao será possivel add itens atraves do get, pois retorno uma copia :D
        // so será possivel add itens atravz do adiciona da minha classe
        return [].concat(this._negociacoes);
    }

    esvazia(){

        this._negociacoes = [];
        Reflect.apply(this._funcao, this._contexto,[this])
    }
}
class Message {

    //Com ES6 eu posso criar valores default para parâmetros do constructor
    //caso eu nao passe um valor para o parâmetro ele usará esse valor default atribuido
    //texto = ''
    constructor(texto='') {

        this._texto = texto;
    }

    get texto() {

        return this._texto;
    }

    set texto(texto) {

        this._texto = texto;
    }

}
class NegociacaoController {

    constructor() {
        // como o querySelector necessita do contexto this, ou seja
        // necessita de um objeto nesse caso o document,
        // por isso preciso usar o bind
        let $ = document.querySelector.bind(document);

        this._iputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        //new Date(this._iputData.value.replace(/-/g,',')) usando expressao regulares


        let data = new Date(...
            this._iputData.value
                .split('-')
                .map((item, index) => item - index % 2)
        );

        let negociacao = new  Negociacao(data, this._inputQuantidade.value, this._inputValor.value)

        console.log(negociacao);


    }
}
class NegociacaoController {

    constructor() {
        // como o querySelector necessita do contexto this, ou seja
        // necessita de um objeto nesse caso o document,
        // por isso preciso usar o bind
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoes-view'));

        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();

    }
    //a convenção é que apenas a classe pode chamar propriedade e os métodos sinalizados com '_'
    _criaNegociacao() {
        return new  Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();

    }
}
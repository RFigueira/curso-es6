class NegociacaoController {

    constructor() {
        // como o querySelector necessita do contexto this, ou seja
        // necessita de um objeto nesse caso o document,
        // por isso preciso usar o bind
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes(model =>
            this._negociacoesView.update(model)
        );

        this._negociacoesView = new NegociacoesView($('#negociacoes-view'));
        this._negociacoesView.update(this._listaNegociacoes);
        this._message = new Message();
        this._messageView = new MessageView($('#messages'));
        this._messageView.update(this._message);
    }

    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._message.texto = 'Negociação adicionada com sucesso.';
        this._messageView.update(this._message);
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
    
    excluir() {

        this._listaNegociacoes.esvazia();
        this._message.texto = 'Negociações apagadas ;(';
        this._messageView.update(this._message);
    }
}
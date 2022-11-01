import { eventImprimirElemento } from "../util/util-event.js";
export class nomeControl {
    constructor(divElementosID, paginacaoID) {
        this.qntLinhas = 5;
        this.paginaAtual = 6;
        this.divElementos = document.getElementById(divElementosID);
        this.divPaginacao = document.getElementById(paginacaoID);
    }
    adicionarElementos(listaNomes) {
        this.divElementos.innerHTML = "";
        this.paginaAtual--;
        let inicio = this.qntLinhas * this.paginaAtual;
        let fim = inicio + this.qntLinhas;
        let nomesPaginados = listaNomes.slice(inicio, fim);
        console.log(nomesPaginados);
        nomesPaginados.forEach((nome, index) => {
            let novoElemento = this.criarNovoElemento(nome, index);
            this.divElementos.appendChild(novoElemento);
        });
    }
    criarPaginacao(listaNomes) {
        this.divPaginacao.innerHTML = "";
        let qntPaginas = Math.ceil(listaNomes.length / this.qntLinhas);
        for (let i = 1; i < qntPaginas + 1; i++) {
            let button = this.construirButton(i, listaNomes);
            this.divPaginacao.appendChild(button);
        }
        console.log(this.divPaginacao);
    }
    construirButton(pagina, listaNomes) {
        let button = document.createElement('button');
        button.innerText = pagina.toString();
        if (this.paginaAtual == pagina)
            button.classList.add('active');
        button.addEventListener('click', () => {
            this.paginaAtual = pagina;
            let btnAtual = document.querySelector('button.active');
            btnAtual.classList.remove('active');
            this.adicionarElementos(listaNomes);
            button.classList.add('active');
        });
        return button;
    }
    criarNovoElemento(nome, index) {
        let novoElemento = document.createElement('div');
        novoElemento.innerText = nome;
        novoElemento.setAttribute('data-id', index.toString());
        novoElemento.classList.add('elemento');
        novoElemento.addEventListener('click', eventImprimirElemento);
        return novoElemento;
    }
}

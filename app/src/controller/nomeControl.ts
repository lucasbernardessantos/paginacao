import { eventImprimirElemento } from "../util/util-event.js"

export class nomeControl {

  private divElementos: HTMLDivElement
  private divPaginacao: HTMLDivElement
  private qntLinhas = 5
  private paginaAtual = 6

  constructor(divElementosID: string, paginacaoID: string) {
    this.divElementos = document.getElementById(divElementosID) as HTMLDivElement
    this.divPaginacao = document.getElementById(paginacaoID) as HTMLDivElement
  }

  adicionarElementos(listaNomes: string[]): void {
    this.divElementos.innerHTML = "" // Limpando a div
    this.paginaAtual--

    let inicio = this.qntLinhas * this.paginaAtual
    let fim = inicio + this.qntLinhas

    let nomesPaginados = listaNomes.slice(inicio, fim)

    console.log(nomesPaginados)

    nomesPaginados.forEach((nome, index) => {
      let novoElemento = this.criarNovoElemento(nome, index)

      this.divElementos.appendChild(novoElemento)
    })
  }

  criarPaginacao(listaNomes: string[]) {
    this.divPaginacao.innerHTML = "" // Limpando a div

    let qntPaginas = Math.ceil(listaNomes.length / this.qntLinhas)

    for(let i = 1; i < qntPaginas + 1; i++) {
      let button = this.construirButton(i, listaNomes)
      this.divPaginacao.appendChild(button)
    }
    console.log(this.divPaginacao)
  }

  construirButton(pagina: number, listaNomes: string[]): HTMLButtonElement {
    let button = document.createElement('button')

    button.innerText = pagina.toString()

    if(this.paginaAtual == pagina) button.classList.add('active')

    button.addEventListener('click', () => {
      this.paginaAtual = pagina

      let btnAtual = document.querySelector('button.active') as HTMLButtonElement
      btnAtual.classList.remove('active')

      this.adicionarElementos(listaNomes)

      button.classList.add('active')
    })
    return button
  }

  criarNovoElemento(nome: string, index: number): HTMLDivElement {
    let novoElemento = document.createElement('div')

    novoElemento.innerText = nome
    novoElemento.setAttribute('data-id', index.toString())
    novoElemento.classList.add('elemento')

    novoElemento.addEventListener('click', eventImprimirElemento)

    return novoElemento
  }
}
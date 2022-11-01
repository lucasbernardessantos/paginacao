import { nomeDAO } from "./dao/nomeDAO.js"
import { nomeControl } from "./view/nomeControl.js"

const controlNome = new nomeControl('div-elementos', 'div-paginacao-controle')

controlNome.adicionarElementos(nomeDAO.listaNomes)
controlNome.criarPaginacao(nomeDAO.listaNomes)
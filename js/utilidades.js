// utilidades.js

export function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function atualizarAnoCopyright(idAnoCopyright) {
    const anoAtual = new Date().getFullYear();
    const anoCopyright = document.getElementById(idAnoCopyright);
    anoCopyright.textContent = anoAtual;
}

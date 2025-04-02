// ordenacao.js

import {removerAcentos} from './utilidades.js';

export function ordenarLouvores(louvores) {
    return louvores.sort((a, b) => {
        const tituloA = removerAcentos(a.titulo.toUpperCase());
        const tituloB = removerAcentos(b.titulo.toUpperCase());
        if (tituloA < tituloB) {
            return -1;
        }
        if (tituloA > tituloB) {
            return 1;
        }
        return 0;
    });
}
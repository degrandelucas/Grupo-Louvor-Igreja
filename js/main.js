// main.js

import {louvoresEnsaiados, louvoresProximoEnsaio, louvoresFuturo} from './script-louvores.js';
import {ordenarLouvores} from './ordenacao.js';
import {renderizarLouvores} from './renderizacao.js';
import {atualizarAnoCopyright} from './utilidades.js';

ordenarLouvores(louvoresEnsaiados);
ordenarLouvores(louvoresProximoEnsaio);
ordenarLouvores(louvoresFuturo);

renderizarLouvores(louvoresEnsaiados, 'lista-louvores-ensaidos');
renderizarLouvores(louvoresProximoEnsaio, 'lista-proximo-ensaio');
renderizarLouvores(louvoresFuturo, 'lista-louvores-futuro');

atualizarAnoCopyright('ano-copyright');

// script-materialize.js para o framwork Materialize CSS, apos carregamento completo do DOM
import './script-materialize.js';
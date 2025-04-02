// renderizacao.js

export function renderizarLouvores(louvores, idUlLista) {
    const lista = document.getElementById(idUlLista);
    lista.innerHTML = '';

    louvores.forEach(louvor => {
        const li = document.createElement('li');
        li.className = 'collection-item';

        const div = document.createElement('div');

        const titulo = document.createTextNode(louvor.titulo);
        div.appendChild(titulo);

        const linkLetra = document.createElement('a');
        linkLetra.href = louvor.linkLetra;
        linkLetra.target = '_blank';
        linkLetra.className = 'secondary-content first-icon';

        const iconeLetra = document.createElement('i');
        iconeLetra.className = 'material-icons';
        iconeLetra.textContent = 'text_fields';
        linkLetra.appendChild(iconeLetra);

        const linkVideo = document.createElement('a');
        linkVideo.href = louvor.linkVideo;
        linkVideo.target = '_blank';
        linkVideo.className = 'secondary-content second-icon red-text';

        const iconeVideo = document.createElement('i');
        iconeVideo.className = 'material-icons';
        iconeVideo.textContent = 'ondemand_video';
        linkVideo.appendChild(iconeVideo);

        const linkCifra = document.createElement('a');
        linkCifra.href = louvor.linkCifra;
        linkCifra.target = '_blank';
        linkCifra.className = 'secondary-content third-icon blue-text';

        const iconeCifra = document.createElement('i');
        iconeCifra.className = 'material-icons';
        iconeCifra.textContent = 'queue_music';
        linkCifra.appendChild(iconeCifra);

        div.appendChild(linkLetra);
        div.appendChild(linkVideo);
        div.appendChild(linkCifra);
        li.appendChild(div);
        lista.appendChild(li);
    });
}
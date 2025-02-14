'use strict';

const images = [
    { 'id': '5', 'url': './img/konosuba.jpg' },
    { 'id': '1', 'url': './img/sololeveling.jpg' },
    { 'id': '2', 'url': './img/kimetsu.jpg' },
    { 'id': '3', 'url': './img/dandadan.jpg' },
    { 'id': '4', 'url': './img/kaijuu.jpg' },
];

const containerItems = document.querySelector('#container-items');

// Função para carregar as imagens na ordem do array
const loadImages = (images, container) => {
    container.innerHTML = ''; // Limpa o container antes de adicionar os itens
    images.forEach(image => {
        const div = document.createElement('div');
        div.classList.add('item');

        const img = document.createElement('img');
        img.src = image.url;

        div.appendChild(img);
        container.appendChild(div);
    });
};

loadImages(images, containerItems);
let items = document.querySelectorAll('.item'); // Atualiza a lista de itens

// Função para avançar os slides (próxima imagem)
const next = () => {
    containerItems.appendChild(items[0]); // Move o primeiro item para o final
    items = document.querySelectorAll('.item'); // Atualiza a lista
};

// Função para voltar os slides (imagem anterior)
const previous = () => {
    const lastItem = items[items.length - 1]; // Pega o último item
    containerItems.insertBefore(lastItem, items[0]); // Move o último item para o início
    items = document.querySelectorAll('.item'); // Atualiza a lista
};

// Adiciona eventos aos botões
document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

const menuPrincipal = document.querySelector('.menu-principal');
const navMenu = document.querySelector('.nav-menu');

// Verifica se os elementos foram encontrados no DOM
if (menuPrincipal && navMenu) {
    menuPrincipal.addEventListener('click', () => {
        menuPrincipal.classList.toggle('ativo');
        navMenu.classList.toggle('ativo');
    });
}

const menuIconVertical = document.querySelector('.menu-icon');
const verticalBar = document.querySelector('.vertical-bar');

// Verifica se os elementos foram encontrados no DOM
if (menuIconVertical && verticalBar) {
    // Adiciona um ouvinte de eventos ao ícone do menu
    menuIconVertical.addEventListener('click', () => {
        // Verifica se o menu vertical está visível
        const isVisible = getComputedStyle(verticalBar).left === '0px';

        // Alterna a visibilidade do menu vertical com base na condição
        if (isVisible) {
            verticalBar.style.left = '-220px'; // Esconde o menu
        } else {
            verticalBar.style.left = '0'; // Mostra o menu
        }
    });
}

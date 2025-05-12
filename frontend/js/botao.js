const botaoNao = document.querySelector('.nao');

botaoNao.addEventListener('mouseenter', () => {
    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;

    const maxX = window.innerWidth - larguraBotao;
    const maxY = window.innerHeight - alturaBotao;

    const novaPosX = Math.floor(Math.random() * maxX);
    const novaPosY = Math.floor(Math.random() * maxY);

    botaoNao.style.position = 'absolute';
    botaoNao.style.left = novaPosX + 'px';
    botaoNao.style.top = novaPosY + 'px';
});

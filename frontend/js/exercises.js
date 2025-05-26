//altera  os painéis ao colicar na seta
const botoes = document.querySelectorAll ('.botao');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const painel = botao.closest('.accordion').querySelector('.painel');
        const seta = botao.querySelector('.seta');

        const estaAberto = painel.style.display === 'block';
        painel.style.display = estaAberto ? 'none' : 'block';
        
        seta.classList.toggle('girada', !estaAberto);
    });
});

//Menu ativo ao clicar
const menuLinks = document.querySelectorAll('.menu ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menuLinks.forEach(l => l.classList.remove('ativo'));
        this.classList.add('ativo');
    });
});
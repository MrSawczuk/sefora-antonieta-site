document.querySelectorAll('.navegacao-principal a').forEach(link => {
    link.addEventListener('click', function (evento) {
        evento.preventDefault();
        const idSecao = this.getAttribute('href');
        const secao = document.querySelector(idSecao);
        
        if (secao) {
            const alturaHeader = document.querySelector('header').offsetHeight;
            const posicaoFinal = secao.offsetTop - alturaHeader - 20;
            
            window.scrollTo({
                top: posicaoFinal,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelector('.logo').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.botao-aba').forEach(botao => {
    botao.addEventListener('click', function() {
        const idAba = this.getAttribute('data-aba');
        document.querySelectorAll('.botao-aba').forEach(b => b.classList.remove('ativo'));
        document.querySelectorAll('.conteudo-aba').forEach(conteudo => conteudo.classList.remove('ativo'));
        this.classList.add('ativo');
        document.getElementById(idAba).classList.add('ativo');
    });
});
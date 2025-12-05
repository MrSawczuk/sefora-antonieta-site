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
    if (window.scrollY > 0) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        window.location.reload();
    }
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

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-hamburguer');
    const closeBtn = document.querySelector('.fechar-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.body;
    const menuLinks = document.querySelectorAll('.menu-mobile a');
    
    function configurarMenuResponsivo() {
        const largura = window.innerWidth;
        
        if (largura <= 1024) {
            if (menuBtn) menuBtn.style.display = 'flex';
        } else {
            if (menuBtn) menuBtn.style.display = 'none';
            if (menuOverlay) {
                menuOverlay.classList.remove('active');
            }
            if (menuBtn) menuBtn.classList.remove('active');
            body.classList.remove('menu-aberto');
        }
    }
    
    configurarMenuResponsivo();
    window.addEventListener('resize', configurarMenuResponsivo);
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            menuOverlay.classList.add('active');
            menuBtn.classList.add('active');
            body.classList.add('menu-aberto');
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            menuOverlay.classList.remove('active');
            menuBtn.classList.remove('active');
            body.classList.remove('menu-aberto');
        });
    }
    
    if (menuLinks.length > 0) {
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuOverlay.classList.remove('active');
                menuBtn.classList.remove('active');
                body.classList.remove('menu-aberto');
            });
        });
    }
    
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function(e) {
            if (e.target === menuOverlay) {
                menuOverlay.classList.remove('active');
                menuBtn.classList.remove('active');
                body.classList.remove('menu-aberto');
            }
        });
    }
    
    function configurarBotoesVerMais() {
        const largura = window.innerWidth;
        const botoes = document.querySelectorAll('.botao-ver-mais');
        
        if (largura <= 767) {
            botoes.forEach(botao => {
                botao.style.display = 'block';
            });
            
            document.querySelectorAll('.grade-projetos').forEach(grade => {
                const itens = grade.querySelectorAll('.item-projeto:nth-child(n+4)');
                itens.forEach(item => {
                    item.style.display = 'none';
                });
            });
        } else {
            botoes.forEach(botao => {
                botao.style.display = 'none';
            });
            
            document.querySelectorAll('.item-projeto').forEach(item => {
                item.style.display = 'block';
            });
        }
    }
    
    configurarBotoesVerMais();
    window.addEventListener('resize', configurarBotoesVerMais);
    
    document.querySelectorAll('.botao-ver-mais').forEach(botao => {
        botao.addEventListener('click', function() {
            const abaId = this.getAttribute('data-aba');
            const grade = document.querySelector(`#${abaId} .grade-projetos`);
            
            if (grade) {
                grade.querySelectorAll('.item-projeto').forEach(item => {
                    item.style.display = 'block';
                });
                this.style.display = 'none';
            }
        });
    });
});

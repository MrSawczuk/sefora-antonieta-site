document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-hamburguer');
    const closeBtn = document.querySelector('.fechar-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.body;

    function abrirMenu() {
        menuOverlay.classList.add('active');
        menuBtn.classList.add('active');
        body.classList.add('menu-aberto');
    }

    function fecharMenu() {
        menuOverlay.classList.remove('active');
        menuBtn.classList.remove('active');
        body.classList.remove('menu-aberto');
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            abrirMenu();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            fecharMenu();
        });
    }

    const menuLinks = document.querySelectorAll('.menu-mobile a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            fecharMenu();
            
            setTimeout(() => {
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const alturaHeader = document.querySelector('header').offsetHeight;
                    const offset = window.innerWidth <= 1024 ? 10 : 15;
                    const posicaoFinal = targetSection.offsetTop - alturaHeader - offset;
                    window.scrollTo({
                        top: posicaoFinal,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        });
    });

    if (menuOverlay) {
        menuOverlay.addEventListener('click', function(e) {
            if (e.target === menuOverlay) {
                fecharMenu();
            }
        });
    }

    document.querySelectorAll('.botao-aba').forEach(botao => {
        botao.addEventListener('click', function() {
            const idAba = this.getAttribute('data-aba');
            document.querySelectorAll('.botao-aba').forEach(b => b.classList.remove('ativo'));
            document.querySelectorAll('.conteudo-aba').forEach(conteudo => conteudo.classList.remove('ativo'));
            this.classList.add('ativo');
            document.getElementById(idAba).classList.add('ativo');
        });
    });

    document.querySelectorAll('.navegacao-principal a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const idSecao = this.getAttribute('href');
            const secao = document.querySelector(idSecao);
            if (secao) {
                const alturaHeader = document.querySelector('header').offsetHeight;
                const offset = 15;
                const posicaoFinal = secao.offsetTop - alturaHeader - offset;
                window.scrollTo({
                    top: posicaoFinal,
                    behavior: 'smooth'
                });
            }
        });
    });

    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (window.innerWidth <= 1024) {
                const logoPadrao = document.querySelector('.logo-padrao');
                const logoHover = document.querySelector('.logo-hover');
                
                if (logoPadrao) logoPadrao.style.opacity = '1';
                if (logoHover) logoHover.style.opacity = '0';
                
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                setTimeout(() => {
                    if (logoPadrao) logoPadrao.style.opacity = '';
                    if (logoHover) logoHover.style.opacity = '';
                }, 1000);
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            
            return false;
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            fecharMenu();
        }
    });

    document.addEventListener('click', function(e) {
        if (menuOverlay.classList.contains('active') && 
            !menuOverlay.contains(e.target) && 
            e.target !== menuBtn) {
            fecharMenu();
        }
    });
});
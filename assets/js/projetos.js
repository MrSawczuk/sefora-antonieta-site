document.addEventListener('DOMContentLoaded', function() {
    const botoesFiltro = document.querySelectorAll('.filtro-btn');
    const itensProjeto = document.querySelectorAll('.projeto-item');
    
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function() {
            botoesFiltro.forEach(b => b.classList.remove('ativo'));
            this.classList.add('ativo');
            
            const filtro = this.getAttribute('data-filtro');
            
            itensProjeto.forEach(item => {
                if (filtro === 'todos') {
                    item.style.display = 'block';
                } else {
                    if (item.getAttribute('data-categoria') === filtro) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});
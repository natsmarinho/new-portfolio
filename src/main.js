const abas = document.querySelectorAll('.aba');

abas.forEach(aba => {
    aba.addEventListener('click', function(){

        if(aba.classList.contains('selecionada')){
            return;
        }

        selecionarAba(aba);
        mostrarInfoDaAba(aba);
    });
});

function selecionarAba(aba){
    const abaSelecionada = document.querySelector('.aba.selecionada');

        abaSelecionada.classList.remove('selecionada');

        aba.classList.add('selecionada');
};

function mostrarInfoDaAba(aba){
    const infoSelecionada = document.querySelector('.informacao.selecionada');

        infoSelecionada.classList.remove('selecionada');

        const idElementoInfoAba = `info-${aba.id}`;

        const infoMostrada = document.getElementById(idElementoInfoAba);

        infoMostrada.classList.add('selecionada');
};

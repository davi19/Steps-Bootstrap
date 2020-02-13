count = 0;

function MudaPasso () {
    var linha = document.querySelectorAll("div.linha");
    if (count !== linha.length) {
        linha[count].className = "linha animacao";
        count++;

        const circulos = document.querySelectorAll("li.dot");
        const label = document.querySelectorAll("label.label-wizard");
        const icones = document.querySelectorAll("a.icone-step");
        const conteudo = document.querySelectorAll("div.conteudo-Passo");

        circulos[count].className = "nav-item dot text-center animacao-dot";
        icones[count].className = "nav-link icone-step animacao-icone";
        label[count].className = "label-wizard animacao-icone";
        var countAnterior = count - 1;
        $(conteudo[countAnterior]).fadeOut(function () {
            $(conteudo[count]).fadeIn();
        });


    }
}

function VoltaPasso () {

    var linha = document.querySelectorAll("div.linha");
    if (count !== 0) {
        if (count === 1) {
            linha[0].className = "linha animacao-volta";
        } else {
            var countLinha = count - 1;
            linha[countLinha].className = "linha animacao-volta";
        }

        const circulos = document.querySelectorAll("li.dot");
        const label = document.querySelectorAll("label.label-wizard");
        const icones = document.querySelectorAll("a.icone-step");
        const conteudo = document.querySelectorAll("div.conteudo-Passo");
        
        circulos[count].className = "nav-item dot text-center animacao-dot-volta";
        icones[count].className = "nav-link icone-step animacao-icone-volta ";
        label[count].className = "label-wizard animacao-icone-volta";
        var countAnterior = count - 1;
        $(conteudo[count]).fadeOut(function () {
            $(conteudo[countAnterior]).fadeIn();
        });
        count--;
    }

}
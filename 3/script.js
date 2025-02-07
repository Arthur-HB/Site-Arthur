function imgchange(n){
    var img = window.document.getElementById('imgfotografia')
    var escolha = window.document.querySelector('li.escolha')
    escolha.setAttribute('class', 'nescolhida')
    if(n==1){
        img.setAttribute('src', 'imagens/matria.png')
        img.setAttribute('alt', 'lago e ceu azul')
        let escolhida = window.document.getElementById('li1')
        escolhida.setAttribute('class', 'escolha')
    }else if(n==2){
        img.setAttribute('src', 'imagens/copas.png')
        img.setAttribute('alt', 'copas de arvores')
        let escolhida = window.document.getElementById('li2')
        escolhida.setAttribute('class', 'escolha')
    }else if(n==3){
        img.setAttribute('src', 'imagens/flor.png')
        img.setAttribute('alt', 'flores e abelha')
        let escolhida = window.document.getElementById('li3')
        escolhida.setAttribute('class', 'escolha')
    }else if(n==4){
        img.setAttribute('src', 'imagens/fogueira.png') 
        img.setAttribute('alt', 'fogueira')
        let escolhida = window.document.getElementById('li4')
        escolhida.setAttribute('class', 'escolha')
    }else if(n==5){
        img.setAttribute('src', 'imagens/mar.png') 
        img.setAttribute('alt', 'costa do mar')
        let escolhida = window.document.getElementById('li5')
        escolhida.setAttribute('class', 'escolha')
    }else if(n==6){
        img.setAttribute('src', 'imagens/pinus.png')
        img.setAttribute('alt', 'pinheiro sobre por do sol') 
        let escolhida = window.document.getElementById('li6')
        escolhida.setAttribute('class', 'escolha')
    }else{
        img.setAttribute('src', 'imagens/poa.png')
        img.setAttribute('alt', 'copas em meio a cidade')
        let escolhida = window.document.getElementById('li7')
        escolhida.setAttribute('class', 'escolha') 
    }
}
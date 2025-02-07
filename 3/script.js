function imgchange(n){
    var img = window.document.getElementById('imgfotografia')
    if(n==1){
        img.setAttribute('src', 'imagens/matria.png')
        img.setAttribute('alt', 'lago e ceu azul')
    }else if(n==2){
        img.setAttribute('src', 'imagens/copas.png')
        img.setAttribute('alt', 'copas de arvores')
    }else if(n==3){
        img.setAttribute('src', 'imagens/flor.png')
        img.setAttribute('alt', 'flores e abelha')
    }else if(n==4){
        img.setAttribute('src', 'imagens/fogueira.png') 
        img.setAttribute('alt', 'fogueira')
    }else if(n==5){
        img.setAttribute('src', 'imagens/mar.png') 
        img.setAttribute('alt', 'costa do mar')
    }else if(n==6){
        img.setAttribute('src', 'imagens/pinus.png')
        img.setAttribute('alt', 'pinheiro sobre por do sol') 
    }else{
        img.setAttribute('src', 'imagens/poa.png')
        img.setAttribute('alt', 'copas em meio a cidade') 
    }
}
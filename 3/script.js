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
    }else if(n==4){
        img.setAttribute('src', 'imagens/fogueira.png') 
    }else if(n==5){
        img.setAttribute('src', 'imagens/mar.png') 
    }else if(n==6){
        img.setAttribute('src', 'imagens/pinus.png') 
    }else{
        img.setAttribute('src', 'imagens/poa.png') 
    }
}
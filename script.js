function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var corte = document.querySelector('div#corte')
    var data = new Date()
    var hora = data.getHours()
    if(hora >= 0 && hora < 12){
        img.src = 'fotoManha.png'
        document.body.style.background = '#ffba67'
        corte.innerHTML = 'Bom Dia!!!'
        if(hora != 1){
            msg.innerHTML = `Agora são ${hora} horas da manhã.`
        }else{
            msg.innerHTML = `Agora são ${hora} hora da manhã.`
        }
    }else if(hora >= 12 && hora <= 18){
        img.src = 'fotoTarde.png'
        document.body.style.background = '#803924'
        msg.innerHTML = `Agora são ${hora} horas da tarde.`
        corte.innerHTML = 'Boa Tarde!!!'
    }else{
        img.src = 'fotoNoite.png'
        document.body.style.background = '#0e353e'
        msg.innerHTML = `Agora são ${hora} horas da noite.`
        corte.innerHTML = 'Boa Noite!!!'
    }
}

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s)!`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotodamanha.png'
        document.body.style.background = '#d8b69f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'fotodatarde.png'
        document.body.style.background = '#a56a67'
    }else {
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#2f79b6'
    }
}
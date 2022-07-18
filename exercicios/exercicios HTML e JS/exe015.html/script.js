function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', './imagensdaspessoas/meninobaby.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', './imagensdaspessoas/homemjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', './imagensdaspessoas/homemadulto.png')
            } else {
                //Idoso
                img.setAttribute('src', './imagensdaspessoas/homemidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', './imagensdaspessoas/meninababy.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', './imagensdaspessoas/mulherjovem.png')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', './imagensdaspessoas/mulheradulta.png')
            } else {
                //Idosa
                img.setAttribute('src', './imagensdaspessoas/mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} ano(s). `
        res.appendChild(img)
   }
}
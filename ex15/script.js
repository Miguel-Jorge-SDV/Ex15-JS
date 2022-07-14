function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        alert('ERRO')
    }
    else {
        var fsexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsexo[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'homemCrianca.jpg')
            }
            else if(idade >= 10 && idade < 21) {
                img.setAttribute('src', 'homemJovem.jpg')
            }
            else if(idade < 50){
                img.setAttribute('src', 'homemAdulto.jpg')
            }
            else{
                img.setAttribute('src', 'homemIdoso.jpg')
            }
        }
        else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mulherCrianca.jpg')
            }
            else if(idade >= 10 && idade < 21) {
                img.setAttribute('src', 'mulherJovem.jpg')
            }
            else if(idade < 50){
                img.setAttribute('src', 'mulherAdulta.jpg')
            }
            else{
                img.setAttribute('src', 'mulherIdosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
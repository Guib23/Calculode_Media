function calc_media(){
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    var n3 = Number(document.getElementById("n3").value)
    var media = (n1+n2+n3)/3
    document.getElementById("dis_media").value = media

    if (media <= 5) {
        document.getElementById("dis_aprovacao").value = "reprovado"
    } else if ((media > 5) && (media <= 7)) {
        document.getElementById("dis_aprovacao").value = "recuperação"
    } if (media >= 7) {
        document.getElementById("dis_aprovacao").value = "aprovado"

    //disabled <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
    }   
}

function mostra_info(){

    document.getElementById("n12").value = document.getElementById("n1").value
    document.getElementById("n22").value = document.getElementById("n2").value
    document.getElementById("n32").value = document.getElementById("n3").value
    document.getElementById("nome2").value = document.getElementById("nome").value
    document.getElementById("rg2").value = document.getElementById("rg").value
    document.getElementById("cpf2").value = document.getElementById("cpf").value
    document.getElementById("email2").value = document.getElementById("email").value
    document.getElementById("dis_media2").value = document.getElementById("dis_media").value
    document.getElementById("dis_aprovacao2").value = document.getElementById("dis_aprovacao").value
}
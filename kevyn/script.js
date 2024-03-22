const mudar_foto = function(){

    
    let selecionar_mapa = document.getElementById("seletor_de_mapa");
    let imagem = selecionar_mapa.value;

    if (imagem === "none"){

        let img2 = document.getElementById("foto")
        img2.src = "https://conteudo.imguol.com.br/c/esporte/d5/2022/11/19/cristiano-ronaldo-e-messi-jogam-xadrez-em-campanha-publicitaria-1668881343916_v2_1080x1350.jpg"

    }
    else{
        let img = document.getElementById("foto")
        img.src = "./imagens/" +imagem+ ".gif"
    }

} 
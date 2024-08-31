const $galeria = document.querySelector(".sec-galeria-js");
const $modalImgGaleria = document.querySelector(".img-modal-js");

$galeria.addEventListener("click", (e) =>{
    if(e.target.classList.contains("img-btn-modal-js")){
            //SRC
        let urlImg = e.target.attributes[0].nodeValue
        //Añadir modal
        $modalImgGaleria.src = urlImg;


        }
});



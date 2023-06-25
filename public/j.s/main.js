
var boton= document.querySelector (".header_icono " )
var menu= document.querySelector(".header_navegation")
var cont= 0

boton.onclick = function () {

    if (cont % 2 == 0) {

        menu.classList.add ("header_navegation-active")
        menu.classList.remove("header_navegation-disabled")

    }

    else  {
        menu.classList.remove("header_navegation-action")
        menu.classList.add ( "header_navegation-disabled")


    }
    cont++

}
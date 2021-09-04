window.addEventListener('scroll',()=>{
    let animacion = document.getElementById('service')
    let section = document.querySelector('checklist-servicio')
    let posicion = animacion.getBoundingClientRect().top
                    console.log(section)
    console.log(posicion)


    let tamanioPantalla = window.innerHeight/3.5;
    console.log(tamanioPantalla)
    if(posicion < tamanioPantalla){
       section.classList.add('animate__animated')
    }
})
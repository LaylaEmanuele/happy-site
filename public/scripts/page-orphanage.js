const options ={
    dragging: false, 
    touchZoom: false, 
    doubleClickZoom: false, 
    scrollWheelZoom: false, 
    zoomControl: false
}

const map = L.map('mapid', options).setView([-27.1724347,-49.5991834], 15); //criando o mapa

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg", 
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,27]
})

//create and add maker 
L.marker([-27.1724347,-49.5991834],{icon})
  .addTo(map);
  

function selectImage(event){
    const button = event.currentTarget //Identifica o alvo atual para o evento 

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    const image = button.children[0]

    const imageContainer = document.querySelector(".orphanage-details > img") //seleciona ele pega imagem maior que é o container seleciona ela procurando pela classe css dela

    imageContainer.src = image.src; 

    button.classList.add("active")
}
  

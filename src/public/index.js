


let counter  = 3 



let dragList= []
let positions = []
let mainContainer = document.getElementById("main-container")
let button = document.getElementById("add-button")
button.onclick = ()=> {
    
    mainContainer.innerHTML += "<div  class=\"draggable center-txt \" > <p>" +(counter) + " </p></div>"     
    counter ++


 };



interact('.draggable' ).draggable({
    modifiers: [
        interact.modifiers.restrict({
          restriction: 'parent',
          endOnly: true
        })
      ],

    onmove:(event)=>{

        const target = event.target
        const datax = target.getAttribute("data-x")
        const datay = target.getAttribute("data-y")
        const initx = parseFloat(datax)|| 0
        const inity = parseFloat(datay)|| 0
        const nx = initx + event.dx
        const ny = inity + event.dy


        target.style.transform = `translate(${nx}px, ${ny}px)`

        target.setAttribute("data-x", nx)
        target.setAttribute("data-y", ny)

    }
  })    

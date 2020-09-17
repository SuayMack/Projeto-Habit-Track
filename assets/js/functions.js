addEventListenerAll(element, events, fn){
  events.split(' ').forEach(event => {
    element.addEventListener(event, fn, false)
  })
}



function myFunction(){   
  let buttons = document.querySelectorAll("#buttons > button")
    //percorre cada botão
    buttons.forEach((btn, index)=>{
      this.addEventListenerAll(btn, "click drag mouseover", e=>{
        console.log(btn.id)
      })
  })

  
  
}
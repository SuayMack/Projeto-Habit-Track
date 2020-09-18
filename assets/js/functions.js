function addEventListenerAll(element, events, fn){
  events.split(' ').forEach(event => {
    element.addEventListener(event, fn, false)

  })
}


function myFunction(){   
  let buttons = document.querySelectorAll("#buttons > span")
  //percorre cada botão
  buttons.forEach((btn, index)=>{
    this.addEventListenerAll( btn, "click drag", e => {
      var textbtn = (btn.id)
      

      document.getElementById("select_color").style.color = textbtn
      document.getElementById("select_color").style.textTransform = "capitalize"
      document.getElementById("select_color").style.fontWeight = "500"

      document.getElementById("select_color").innerHTML = textbtn
      
    })

    this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{
      btn.style.cursor="pointer"
    })
    

  })

  
  
}
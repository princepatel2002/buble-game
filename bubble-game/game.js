 var clutter =''
 var timer =30;
 var rn = 0;
  var scoregame= 0;
 

 function makeBubble(){
   var clutter=''
    for(let i =0; i<168;i++){
         rn = Math.floor(Math.random()*10)
        clutter +=`<div class="bubble">${rn}</div>`
        
    
     }

    

     document.querySelector('.pBtm').innerHTML=clutter
 }


 function hitVal(){
   rn = Math.floor(Math.random()*10)
   document.querySelector('#hitgame').innerHTML=rn
   console.log(rn)

 }




 function timeint(){
    setInterval(function(){
        if(timer>0){
            timer--
        document.querySelector('#gametime').innerHTML=timer
 }
 else{
    clearInterval()
    document.querySelector('.pBtm').innerHTML=` <h1>GAME OVER</h1>`
   
 }  
    },1000)
    
 }



function score(){
   scoregame +=10
   document.querySelector('#scoregame').innerHTML=scoregame
   
}


function gameLogic(){

   document.querySelector('.pBtm').addEventListener('click', function(details){
      var num =details.target.textContent
      if(num==rn){
         makeBubble()
         score()
         hitVal()
      }

   })
  
    
}








 makeBubble()
 timeint()

gameLogic()
hitVal()
 
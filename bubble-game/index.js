 
 var r= 0;
 var timer =60
 var score = 0;

 
 function makeBubble(){
    var clutter= '';
 
 for(var i=1;i<=168;i++){
     r= Math.floor(Math.random()*10)

    clutter+=`<div class="bubble">${r}</div>`

    
}
document.querySelector('.pBtm').innerHTML=clutter

 }

 function timeval(){
    setInterval(function(){

    if(timer>=0){
            document.querySelector('#gametime').innerHTML=timer
            timer--;
        }
        else{
            clearInterval(timer)
            document.querySelector('.pBtm').innerHTML='   <h1>GAME OVER</h1>'
         }
        },1000)
   
 } 

function hitVal(){
    r =Math.floor(Math.random()*10)
    document.querySelector('#hitgame').textContent=r
}

function scoreBox(){
    score += 10
    document.querySelector('#scoregame').innerHTML=score
}


function hitscore(){
    document.querySelector('.pBtm').addEventListener('click',function(details){
        var clickbtn = Number(details.target.textContent)
        // console.log(clickbtn)
        if(clickbtn=r){
                scoreBox()
                makeBubble()
                hitVal()
        }
    })
    
}



//  timeval()
// scoreBox()
 hitVal()
 makeBubble()
 hitscore()


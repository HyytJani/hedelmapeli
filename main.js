var face0=new Image()
face0.src="img/omena.png"
var face1=new Image()
face1.src="img/kirsikat.jpg"
var face2=new Image()
face2.src="img/päärynä.jpg"
var face3=new Image()
face3.src="img/seiska.png"
var face4=new Image()
face4.src="img/vesimeloni.png"



function pelaa(){
var arpa1=Math.round(Math.random()*4)
document.images["ruutu1"].src=eval("face"+arpa1+".src") 
var arpa2=Math.round(Math.random()*4)
 document.images["ruutu2"].src=eval("face"+arpa2+".src") 
 var arpa3=Math.round(Math.random()*4)
 document.images["ruutu3"].src=eval("face"+arpa3+".src") 
 var arpa4=Math.round(Math.random()*4)
 document.images["ruutu4"].src=eval("face"+arpa4+".src")   
    //document.querySelector('#pisteet').innerHTML='';    
   // let pisteet=document.createElement('p');
    //let uusipisteet=document.createTextNode(yhteensa);
    //pisteet.appendChild(uusipisteet);
   // pisteet.className=('nimilista'); 
   // document.querySelector('#pisteet').appendChild(pisteet); 
} 
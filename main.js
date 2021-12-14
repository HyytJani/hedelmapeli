var face0=new Image()
face0.src="img/omena.png"
var face1=new Image()
face1.src="img/kirsikat.jpg"
var face2=new Image()
face2.src="img/päärynä.jpg"
var face3=new Image()
face3.src="img/vesimeloni.png"
var face4=new Image()
face4.src="img/seiska.png"

var ekalukko=false;
var tokalukko=false;
var kolmaslukko=false;
var neljaslukko=false;
var eiSaaLukita=false;
var rahaa=50;
var panos=1;
var arpa1;
var arpa2;
var arpa3;
var arpa4;

function pelaa(){


    if(ekalukko==false){
arpa1=Math.round(Math.random()*4)
document.images["ruutu1"].src=eval("face"+arpa1+".src")}
if(tokalukko==false){ 
arpa2=Math.round(Math.random()*4)
 document.images["ruutu2"].src=eval("face"+arpa2+".src")}
 if(kolmaslukko==false){ 
arpa3=Math.round(Math.random()*4)
 document.images["ruutu3"].src=eval("face"+arpa3+".src") }
 if(neljaslukko==false){
arpa4=Math.round(Math.random()*4)
 document.images["ruutu4"].src=eval("face"+arpa4+".src")}  

laskeVoitot();
if(ekalukko==false&&tokalukko==false&&kolmaslukko==false&&neljaslukko==false){
    eiSaaLukita=false;
}
nollaaLukitukset();

}

function lukitse1(){
    if(ekalukko==false&&eiSaaLukita==false){
    document.querySelector('#lukitus1').innerHTML="LUKITTU";
    ekalukko=true
    }else{
        document.querySelector('#lukitus1').innerHTML="    ";
        ekalukko=false;

    }}
function lukitse2(){
    if(tokalukko==false&&eiSaaLukita==false){
    document.querySelector('#lukitus2').innerHTML="LUKITTU";
    tokalukko=true
    }else{
    document.querySelector('#lukitus2').innerHTML="    ";
    tokalukko=false;
    
        }}
function lukitse3(){
    if(kolmaslukko==false&&eiSaaLukita==false){
    document.querySelector('#lukitus3').innerHTML="LUKITTU";
    kolmaslukko=true
    }else{
    document.querySelector('#lukitus3').innerHTML="    ";
    kolmaslukko=false;
        
            }}
function lukitse4(){
        if(neljaslukko==false&&eiSaaLukita==false){
        document.querySelector('#lukitus4').innerHTML="LUKITTU";
        neljaslukko=true
        }else{
        document.querySelector('#lukitus4').innerHTML="    ";
        neljaslukko=false;
            
                }
            }
function nollaaLukitukset(){
    if(ekalukko==true||tokalukko==true||kolmaslukko==true||neljaslukko==true){
        eiSaaLukita=true;
    }
    ekalukko=false;
    tokalukko=false;
    kolmaslukko=false;
    neljaslukko=false;
    document.querySelector('#lukitus1').innerHTML="    ";
    document.querySelector('#lukitus2').innerHTML="    ";
    document.querySelector('#lukitus3').innerHTML="    ";
    document.querySelector('#lukitus4').innerHTML="    ";

}
function onkoRahaa(){
    if(rahaa>=panos){
        rahaa=rahaa-panos
        document.querySelector('#raha').innerHTML="RAHAA "+rahaa;
        pelaa();
     }else{
        document.querySelector('#voitto').innerHTML="RAHAA EI OLE! päivitä sivu!";
        
     }
}
function laskeVoitot(){
    document.querySelector('#voitto').innerHTML="*************************";
    if(arpa1==0&&arpa2==0&&arpa3==0&&arpa4==0){
        rahaa=rahaa+panos*6;
        document.querySelector('#raha').innerHTML="RAHAA "+rahaa;
        document.querySelector('#voitto').innerHTML="VOITIT "+panos*6;
    }
    if(arpa1==1&&arpa2==1&&arpa3==1&&arpa4==1){
        rahaa=rahaa+panos*3;
        document.querySelector('#raha').innerHTML="RAHAA "+rahaa;
        document.querySelector('#voitto').innerHTML="VOITIT "+panos*3;
    }
    if(arpa1==2&&arpa2==2&&arpa3==2&&arpa4==2){
        rahaa=rahaa+panos*4;
        document.querySelector('#raha').innerHTML="RAHAA "+rahaa;
        document.querySelector('#voitto').innerHTML="VOITIT "+panos*4;}

    if(arpa1==3&&arpa2==3&&arpa3==3&&arpa4==3){
        rahaa=rahaa+panos*5;
        document.querySelector('#raha').innerHTML="RAHAA "+rahaa;
        document.querySelector('#voitto').innerHTML="VOITIT "+panos*5;
    }
    if(arpa1==4&&arpa2==4&&arpa3==4&&arpa4==4){
        rahaa=rahaa+panos*10;
        document.querySelector('#raha').innerHTML="RAHAA "+rahaa;
        document.querySelector('#voitto').innerHTML="VOITIT "+panos*10;
    }
    if(arpa1==4&&arpa2==4&&arpa3==4&&arpa4<4||arpa1==4&&arpa2==4&&arpa3<4&&arpa4==4||arpa1==4&&arpa2<4&&arpa3==4&&arpa4==4||arpa1<4&&arpa2==4&&arpa3==4&&arpa4==4){
        rahaa=rahaa+panos*5;
        document.querySelector('#raha').innerHTML="RAHAA "+rahaa;
        document.querySelector('#voitto').innerHTML="VOITIT "+panos*5;}


    }
function panosMiinus(){
    if(panos>1){
    panos--
    document.querySelector('#panos').innerHTML="PANOS "+panos;}
}
function panosPlus(){
    panos++
    document.querySelector('#panos').innerHTML="PANOS "+panos;
}
        

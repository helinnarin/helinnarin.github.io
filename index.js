function hesapla(){
    var deger1= document.getElementById('degerone').value;
    var deger2= document.getElementById('degertwo').value;
    var sonuc=parseInt(deger1)+parseInt(deger2);
    document.getElementById('sonuc').innerHTML=sonuc;
}

function hesapla2(){
    var deger3= document.getElementById('degerthree').value;
    var deger4= document.getElementById('degerfour').value;
    var sonuc2=parseInt(deger3)-parseInt(deger4);
    document.getElementById('sonuc2').innerHTML=sonuc2;
}

function hesapla3(){
    var deger5= document.getElementById('degerfive').value;
    var deger6= document.getElementById('degersix').value;
    var sonuc3=parseInt(deger5)*parseInt(deger6);
    document.getElementById('sonuc3').innerHTML=sonuc3;
}

function hesapla4(){
    var deger7= document.getElementById('degerseven').value;
    var deger8= document.getElementById('degereight').value;
    var sonuc4=parseInt(deger7)/parseInt(deger8);
    document.getElementById('sonuc4').innerHTML=sonuc4;
}
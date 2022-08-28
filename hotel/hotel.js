
function reg() {
   
    let result=1000
    if(document.getElementById('tv').checked==true){
        result+=50
    }
    if(document.getElementById('lap').checked==true){
        result+=250
    }
    if(document.getElementById('wifi').checked==true){
        result+=100
    }

    if(document.getElementById('rad1').checked==true){
        result+=500
    }
    result=result*document.getElementById('days').value;


    document.getElementById('result').value=result
    document.getElementById('result').style.backgroundColor="rgb(178, 255, 178)"
    document.getElementById('result').style.color="deeppink"
    document.getElementById('result').style.fontSize="15px"
}

function erase(){
    document.getElementById('num1').value=''
    document.getElementById('num2').value=''
    document.getElementById('num3').value=''
    document.getElementById('result').value=''
    document.getElementById('result').style.backgroundColor="white"


}





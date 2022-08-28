
function emi() {
    let num1 = (document.getElementById('num1').value)
    let num2 = (document.getElementById('num2').value)
    let num3= (document.getElementById('num3').value)

    let p =eval(num1)
    let r =eval(num2)/1200
    let t =eval(num3)*12
    let result = p*r*((1+r)**t)/((1+r)**t-1);
    document.getElementById('result').value= Math.round(result)
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





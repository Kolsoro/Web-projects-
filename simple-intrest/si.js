
function avg() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let num3 = document.getElementById('num3').value

    let result = eval(num1)*eval(num2)*eval(num3)
    result/=100;
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





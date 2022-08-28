
function sum() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let result = eval(num1) + eval(num2)
    // document.getElementById('result').value = result
    document.getElementById('result').value=result
}

function erase(){
    document.getElementById('num1').value=''
    document.getElementById('num2').value=''
    document.getElementById('result').value=''


}





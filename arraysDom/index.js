let fruits=[]


function show(){
 let ul =document.getElementById("ul1")
 let result="";
 for(let i=0;i<fruits.length;i++){
    result+="<li>"+fruits[i]+"</li>";
 }
 ul.innerHTML=result
}


function add(){
    let val=document.getElementById("t1").value
    // fruits.push(val);
    fruits.unshift(val);
    show()

}


function remove(){
    fruits.shift(); 
    show();
}

// search bar ======================================

function searchFruit(){
    let val =document.getElementById("t2").value;
    let flag=false;
    let response="";
    for(let i=0;i<fruits.length;i++){
        if(fruits[i].includes(val)){
            response += fruits[i] + "<br>";            
        }
    }
    document.getElementById("d1").innerHTML=response
    
    // if(!flag){
    //     document.getElementById("d1").innerHTML="<i>No such element found</i>"
    // }
}

// delete a fruit =================================

function removeFruit(){
    let fruitToBeDeleted = document.getElementById("t3");
    let flag=false;
    for(let i=0;i<fruits.length;i++){
        if(fruits[i]==fruitToBeDeleted){
            flag==true;
            fruits.splice(i,i);
            break;
        }
    }
    console.log(fruits)
    if(flag){

        let record=""
        for(let i=0;i<fruits.length;i++){
            record+=fruits[i]+"<br>"
        }
        document.getElementById("d3").innerHTML=record
    }
    if(!flag){
      document.getElementById("d3").innerHTML="no such element found"
    }
}




let passengerCount=document.getElementById("count-el");
let count=0;
let finalCount=document.getElementById("finalCount-el");
let countFinal=0;

function increament(){
    count++;
    passengerCount.innerText=count;
    console.log(count);
}

function saveIt(){
    countFinal=count;
    finalCount.innerText+=" "+countFinal +" 👥 ";
    console.log(finalCount);
    count=0;
    passengerCount.innerText=count;
}

function reset(){
    finalCount.innerText="";
    count=0;
    countFinal=count;
    passengerCount.innerText=count;

}
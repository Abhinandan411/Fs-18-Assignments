
const deleteBtn = document.querySelector(".btn");
const increment = document.querySelector(".plus");
const decrement = document.querySelector(".minus");

const dashboard = document.querySelector(".dashboard");

const formData = document.querySelector(".form");
const btn = document.querySelector("#btn");

let scores =[
    {
        "firstName" : "Rohit",
        "lastName"  : "Sharma",
         "country"  : "India",
         "score" : 90
    },
    {
        "firstName" : "Virat",
        "lastName"  : "Kholi",
         "country"  : "India",
         "score" : 75
    },
    {
        "firstName" : "Sikhar",
        "lastName"  : "Dhawan",
         "country"  : "India",
         "score" : 70
    }
]

function myComparator(a,b){
    return b.score - a.score;
}

function displayScore(data){

    // remove pervious scores
    dashboard.innerHTML = "";

    // sort 
    data.sort(myComparator);

    // display
    data.forEach((item,index)=>{
        let person = document.createElement("div");
        person.classList.add("person");
    
        let fullName = document.createElement("span");
        fullName.innerText = item.firstName + " " + item.lastName;
    
        let country = document.createElement("span");
        country.innerText = item.country;
    
        let score = document.createElement("span");
        score.innerText = item.score;
    
        let deleteIcon = document.createElement("span");
        deleteIcon.classList.add("btn");
        deleteIcon.innerText ="delete";
        deleteIcon.addEventListener("click",()=>{deleteScore(index)})
    
        let plus5 = document.createElement("span");
        plus5.classList.add("plus");
        plus5.innerText = "+5";
        plus5.addEventListener("click",()=>{increment5(index)})
    
        let minus5 = document.createElement("span");
        minus5.classList.add("minus");
        minus5.innerText = "-5";
        minus5.addEventListener("click",()=>{decrement5(index)})
    
    
        person.append(fullName);
        person.append(country);
        person.append(score);
        person.append(deleteIcon);
        person.append(plus5);
        person.append(minus5);
    
    
        dashboard.append(person);
    })

}

function deleteScore(index){
    let ch = confirm("Are you sure you wann to delete the player");
    if(ch === true){
        scores.splice(index,1);
        displayScore(scores);
    }
 
}

function increment5(index){
    if(scores[index].score < 500){
        scores[index].score += 5;
        displayScore(scores);
    }

}

function decrement5(index){
    if(scores[index].score > 5){
        scores[index].score -= 5;
        displayScore(scores);
    }

}

function addData(fname,lname,country,score){
    if(score < 0){
        alert("score must be in positive ");
        return;
    }
    if(fname === "" || lname === "" || country === "" || score === 0){
        alert("Enter player detail");
        return;
    }
    let obj ={
        "firstName" : fname,
        "lastName" : lname,
        country,
        score
    }
    scores.push(obj);
    displayScore(scores);
}

window.addEventListener("load",()=>{
    displayScore(scores);

    btn.addEventListener("click",(event)=>{
        event.preventDefault();

        let fn = document.querySelector("#fname").value;
        let ln = document.querySelector("#lname").value;
        let c = document.querySelector("#country").value;
        let s = parseInt(document.querySelector("#score").value);


        addData(fn,ln,c,s);
       
    })


})

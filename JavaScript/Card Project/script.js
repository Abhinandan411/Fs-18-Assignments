const btn = document.querySelector("button");
const form = document.querySelector(".container");
const dataContainer = document.querySelector(".display-container")
const reset = document.querySelector(".reset-container");
const resetBtn = document.querySelector("#resetBtn");

window.addEventListener("load",()=>{
    if(localStorage.getItem("formDetail")){
        displayDetail();
    }
})

function saveToLocalStorage(){
   let information = getDetails();
   console.log(information)
   localStorage.setItem("userInformation",JSON.stringify(information))
}
function getDetails(){
    let fname = document.querySelector("#firstName").value;
    let lname = document.querySelector("#lastName").value;
    let country = document.querySelector("#country").value;

    let number = parseInt(document.querySelector("#phoneNumber").value);
    let state = document.querySelector("#state").value;
    let city = document.querySelector("#city").value;
    let village = document.querySelector("#city").value;

    let obj = {
        "FirstName" : fname,
        "LastName" : lname,
        "Country" : country,
        "Number" : number,
        "State" : state,
        "City" : city,
        "Village" : village
    }
    return obj;
}

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    saveToLocalStorage();
    loadFromLocalStorage();
})


function loadFromLocalStorage(){
  
    let data = JSON.parse(localStorage.getItem("userInformation"));
    console.log(typeof data.Number)
    if(data.FirstName === '' || data.LastName === '' || data.Country === '' || data.Number === NaN || data.State === '' || 
           data.City === '' || data.Village === '') {
         alert("All Field Required to FIll !! ");
         return;
    }
    form.style.display = "none";
    dataContainer.style.display = "flex";
    reset.style.display = "flex";

    displayFormData(data);    
}
function displayFormData(data){
  
  document.querySelector("#f-name").innerText = data.FirstName;
  document.querySelector("#l-name").innerText = data.LastName;
  document.querySelector("#cnt").innerText = data.Country;
  document.querySelector("#num").innerText = data.Number;
  document.querySelector("#st").innerText = data.State;
  document.querySelector("#ci").innerText = data.City;
  document.querySelector("#vl").innerText = data.Village;


}
resetBtn.addEventListener("click",()=>{
     window.location.reload();
     localStorage.clear();
})

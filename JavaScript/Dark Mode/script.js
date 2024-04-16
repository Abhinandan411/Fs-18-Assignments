const toggleBtn = document.querySelector("#checkbox");


toggleBtn.addEventListener('change' , ()=>{
    if(toggleBtn.checked){
        // console.log("checked");
        document.body.style.backgroundColor = "#111";
        document.getElementById("toggle-lable").style.backgroundColor = "#808080";
        document.getElementById("heading").style.color = "#fff";
        document.getElementById("heading").innerHTML = "🎉 Yohooo You are on Dark Mode <br> Now click to change into light mode :)";
    }
    else{
        // console.log("unchecked");
        document.body.style.backgroundColor = "#ffff";
        document.getElementById("toggle-lable").style.backgroundColor = "#111";
        document.getElementById("heading").style.color = "#111";
        document.getElementById("heading").innerHTML = "🔥Click to Change into Dark Mode 😎";


    }
})

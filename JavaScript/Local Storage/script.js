document.getElementById("textarea").addEventListener( ('input' , (e)=>{
    let value = e.currentTarget.value;
    localStorage.setItem("text-value" , value);
}))

window.addEventListener("load" , ()=>{
    if(localStorage.getItem("text-value")){
        document.getElementById("textarea").value = localStorage.getItem("text-value")
    }
})

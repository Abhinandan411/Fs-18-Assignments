const resultDiv = document.querySelector(".result");


window.addEventListener("load" , createList);  // adding window with loding bcs all the fuction will work after all the elements will lode

function createList(){

       emojiList.forEach((emoji)=>{

        const parent = document.createElement("div");  // <div></div>
    
        // all emojies
        const em = document.createElement("span");  // <span></span>
        em.innerText = emoji.emoji;
        parent.append(em);
        parent.classList.add("parent");
    
        // all aliases
        const  alias = document.createElement("span");
        const newAlias = emoji.aliases.map(alias => alias.replaceAll("_" , " ")); // removing all underscores with space using map and storing it into another varable because map return val in new array 
        alias.innerText = newAlias.join();
        parent.append(alias);
    
        // all descriptions
        const  desc= document.createElement("span");
        desc.innerText = emoji.description;
        parent.append(desc);
    
        // appending all the emojies aliases and descriptions 

        resultDiv.append(parent);
    
    
    });


    // function that give all emoji
    attachListner();
    
}


function attachListner(){
    const input = document.querySelector("input");
    input.addEventListener("keyup" , filterEmojis);
}

function filterEmojis(e){
 const keyword = e.target.value;

 const filterData = emojiList.filter((emoji) =>{
     if(emoji.description.includes(keyword))
     return emoji;
 });

 resultDiv.innerText = "";

 filterData.forEach((emoji)=>{

    const parent = document.createElement("div");

    // all emojies
    const em = document.createElement("span");
    em.innerText = emoji.emoji;
    parent.append(em);
    parent.classList.add("parent");

    // all aliases
    const  alias= document.createElement("span");
    const newAlias = emoji.aliases.map(alias => alias.replaceAll("_" , " ")); // removing all underscores with space using map and storing it into another varable because map return val in new array 
    alias.innerText = newAlias.join();
    parent.append(alias)

    // all descriptions
    const  desc= document.createElement("span");
    desc.innerText = emoji.description;
    parent.append(desc);

    // appending all the emojies aliases and descriptions 
    resultDiv.append(parent);


});



}

// console.log("hii")
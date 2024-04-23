const resultDiv = document.querySelector(".result");


window.addEventListener("load" , ()=>{
    createList(emojiList);
    attachListner();
});  // adding window with loding bcs all the fuction will work after all the elements will lode

function createList(inputList){

    inputList.forEach((emoji)=>{

        const parent = document.createElement("div");  // <div></div>
    
        // all emojies
        const em = document.createElement("span");  // <span></span>
        em.classList.add("emoji");
        em.innerText = emoji.emoji;
        parent.append(em);
        parent.classList.add("parent");
    
        // all aliases
        const  alias = document.createElement("span");
        alias.classList.add("alias");
        const newAlias = emoji.aliases.map(alias => alias.replaceAll("_" , " ")); // removing all underscores with space using map and storing it into another varable because map return val in new array 
        alias.innerText = newAlias.join();
        parent.append(alias);
    
        // all descriptions
        const  desc= document.createElement("span");
        desc.classList.add("description");
        desc.innerText = emoji.description;
        parent.append(desc);
    
        // appending all the emojies aliases and descriptions 

        resultDiv.append(parent);
    
    
    });


    // function that give all emoji
    
    
}

// function for taking input and according to input calling back the filterd fuction 
function attachListner(){
    const input = document.querySelector("input");
    input.addEventListener("keyup" , filterEmojis);
}

//function for filtering emoji
function filterEmojis(e){
 const keyword = e.target.value;

 const filterData = emojiList.filter((emoji) =>{
     if(emoji.description.includes(keyword))
     return emoji;
    else if(emoji.category.includes(keyword))
    return emoji;
    else if(emoji.aliases.includes(keyword))
    return emoji;
    else if(emoji.tags.includes(keyword))
    return emoji;
 });

 // removeing previous emoji for displaying filtered emoji
 resultDiv.innerText = "";

 //calling  createList function and passing the argument filter data
 createList(filterData);


}

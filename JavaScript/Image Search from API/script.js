// API : https://api.unsplash.com/

// pagination 
var total_pages = 1;
var current_page = 1;
var userInput = "";

const resultsImages = document.querySelector("#results")


async function getDataFromAPI(text) {
    loadingprogress() ;

    // userInput = text;
    const response = await fetch(`https://api.unsplash.com/search/photos?client_id=23ZwDmFYhvnHklZi0Y4jEHyqUlxOo3U5CrJC_iqmqak&query=${text}&page=${current_page}`);
    result = await response.json();
    console.log(result.results);

    //pagination
    total_pages = result.total_pages
    // show total pages and current pages on frontend 
    document.getElementById("tp").innerText = total_pages
    document.getElementById("cp").innerText = current_page;


    show(result.results);
  }

document.getElementById("searchbtn").addEventListener( ('click') , ()=>{

    const input = document.getElementById("inputbox");
    userInput = input.value;
    getDataFromAPI(input.value);
})

// function for loading 
function loadingprogress() {
    resultsImages.innerHTML = "";
    resultsImages.innerHTML = `  <div class="loading">
        <p>Loading</p>
        <img src="./loading.svg" alt="">
    
        </div>`;
}

// function to show data
function show(data) {
    resultsImages.innerHTML = ""
    data.forEach(element => {
       const div = document.createElement("div");
       div.classList.add("Images");

       // ----------------------------- Image ----------------------------------------
       const image = document.createElement("img");
       image.src = element.urls.full;
       image.classList.add("Searched-image");
       div.append(image);
    //    resultsImages.append(div)


       // ----------------------------- paragraph ----------------------------------------
       const para = document.createElement("p");
       para.innerText = element.alt_description;
       div.append(para);

       resultsImages.append(div)
   });
}


document.getElementById("next").addEventListener( ('click') ,next);
document.getElementById("prev").addEventListener( ('click') , prev);


function next(){
    if(current_page < total_pages){
        current_page += 1;
        getDataFromAPI(userInput);
    }
   
}
function prev(){
    if(current_page > 1){
        current_page -= 1;
        getDataFromAPI(userInput);
    }
    
}

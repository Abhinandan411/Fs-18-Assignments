let container = document.querySelector(".container");
let carddata = document.querySelector("#carddata");
let typed = document.querySelector(".typed");
let select = document.querySelector("select");
let input = document.querySelector("input");
let mons = [];
async function check() {
    for (let i = 1; i <= 151; i++) {
        let response = await fetch(`
        https://pokeapi.co/api/v2/pokemon/${i}`);
        let data = await response.json();
        // console.log(data);
        mons.push(data);
    }
    form_card(mons);

}
function form_card(mon){
    // console.log(mon);
    mon.forEach((ele) => {
        let ability="";
        ele.abilities.forEach((elem)=>{
            // console.log(elem.ability.name);
            ability+=`${elem.ability.name} `;
        })
        let card = document.createElement("div");
        card.classList.add("cardnumber")
        // let front=document.createElement("div");
        let semi=document.createElement("div");
        card.innerHTML += `<div class="front"><div>${ele.id}</div><img src=${ele.sprites.front_default}><div class="name">${ele.name}</div>
        <div>${ele.types[0].type.name}</div></div><div class="back">
        <div>${ele.id}</div>
        <img src=${ele.sprites.back_default}>
        <div class="name">${ele.name}</div>
        <div>${ability}</div>
        </div>`;
        card.style.width="15%";
        card.setAttribute("class","cards");
        if(ele.types[0].type.name==='grass')
        {
            card.style.background="linear-gradient(180deg,#A0CF59,white,#A0CF59)";
        }
        else if(ele.types[0].type.name==='fire')
        {
            card.style.background="linear-gradient(180deg,#FD842F,white,#FD842F)";
        }
        else if(ele.types[0].type.name==='water')
        {
            card.style.background="linear-gradient(180deg,#4F98C7,white,#4F98C7)";
        }
        else if(ele.types[0].type.name==='bug')
        {
            card.style.background="linear-gradient(180deg,#79A449,white,#79A449)";
        }
        else if(ele.types[0].type.name==='normal')
        {
            card.style.background="linear-gradient(180deg,#A9B0B3,white,#A9B0B3)";
        }
        else if(ele.types[0].type.name==='poison')
        {
            card.style.background="linear-gradient(180deg,#BD86CC,white,#BD86CC)";
        }
        else if(ele.types[0].type.name==='electric')
        {
            card.style.background="linear-gradient(180deg,#EFD73F,white,#EFD73F)";
        }
        else if(ele.types[0].type.name==='ground')
        {
            card.style.background="linear-gradient(180deg,#A9B0B3,white,#A9B0B3)";
        }
        else if(ele.types[0].type.name==='fairy')
        {
            card.style.background="linear-gradient(180deg,#FDBDEA,white,#FDBDEA)";
        }
        else if(ele.types[0].type.name==='fighting')
        {
            card.style.background="linear-gradient(180deg,#D76F2E,white,#D76F2E)";
        }
        else if(ele.types[0].type.name==='psychic')
        {
            card.style.background="linear-gradient(180deg,#F46EBD,white,#F46EBD)";
        }
        else if(ele.types[0].type.name==='rock')
        {
            card.style.background="linear-gradient(180deg,#A8922C,white,#A8922C)";
        }
        else if(ele.types[0].type.name==='ghost')
        {
            card.style.background="linear-gradient(180deg,#826AA8,white,#826AA8)";
        }
        else if(ele.types[0].type.name==='ice')
        {
            card.style.background="linear-gradient(180deg,#5AC7E8,white,#5AC7E8)";
        }
        else if(ele.types[0].type.name==='dragon')
        {
            card.style.background="linear-gradient(180deg,#DCAA2B,white,#DCAA2B)";
        }
        card.style.textAlign="center";
        container.appendChild(card);
        // console.log(ele.name);
    })
}
check();
typed.addEventListener('click',(()=>{
    container.innerHTML="";
    console.log(select.value);
    if(select.value==="type")
    {
        form_card(mons);
    }
    else
    {
        let type_selected=mons.filter((ele)=>{
            if(ele.types[0].type.name===select.value)
            {
                console.log(ele);
            return ele;
            }
            });
    

console.log(type_selected);
form_card(type_selected);
console.log("end");
select.value="type";
        }
}));
input.addEventListener('keyup',(()=>{
    container.innerHTML="";
    console.log("start");
let type_selected=mons.filter((ele)=>{
if((ele.types[0].type.name).startsWith(input.value))
{
    console.log(ele);
return ele;
}
});
console.log(type_selected);
form_card(type_selected);
console.log("end");
}))
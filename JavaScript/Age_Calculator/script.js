const inputBtn = document.querySelector("#inputbtn");
const calculateBtn = document.querySelector("#calculatebtn");
const ageResult = document.querySelector("#ageresult");
const yearBox = document.querySelector("#year");
const monthBox = document.querySelector("#month");
const dayBox = document.querySelector("#days");

calculateBtn.addEventListener("click" , ()=>{
      if(inputBtn.value == ""){
        alert("Please Enter Your DOB");
      }
      else{

        // new date formate
        const dob = new Date(inputBtn.value );
        // getting year
        const dobYear = dob.getFullYear();  // ex : 09-11-1998 , it gives 1998
        // getting current year
        const currentYear = new Date();   // it gives todays date like 14/04/2024
        const nowYear = currentYear.getFullYear();  // it gives full year from curret=nt year ex : 2024
        const ageYear = nowYear - dobYear; //n ex: 2024 - 1998 = 26
        const calculatedYear = document.createElement("span");
        calculatedYear.classList.add("calculated-year");
        calculatedYear.innerText = ageYear;
      
        yearBox.append(calculatedYear);
        yearBox.replaceChildren(calculatedYear);



        // getting month
        const dobMonth = dob.getMonth();
        // getting current month
        const currentMonth = new Date();
        const nowMonth = currentMonth.getMonth();
        const finalMonth = Math.abs(nowMonth - dobMonth);
        const calculatedMonth = document.createElement("span");
        calculatedMonth.classList.add("calculated-Month");
        calculatedMonth.innerText = finalMonth;
        monthBox.append(calculatedMonth);

        //removing the mont once it completed
        monthBox.replaceChildren(calculatedMonth);



        // getting day
        const dobDay = dob.getDate();
        const currentDay = currentYear.getDate();
        const finalDay = Math.abs(currentDay - dobDay);

        const calculatedDay = document.createElement("span");
        calculatedDay.classList.add("calculated-day");
        calculatedDay.innerText =finalDay;
        dayBox.append(calculatedDay);

         //removing the mont once it completed
         dayBox.replaceChildren(calculatedDay);

      }
})
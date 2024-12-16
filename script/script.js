 const ageForm = document.getElementById("ageForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    // Not necceassary
    // if(isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day >31 || month < 1 || month > 12 || year < 1990) {
    //     alert("Please enter a valid input");
    //     return;
    // } 

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    if(birthDate > today){
        alert("Your birthday cannot be in future");
        return;
    }

    let ageYear = today.getFullYear() - birthDate.getFullYear();
    let ageMonth = today.getMonth() - birthDate.getMonth();
    let ageDay = today.getDate() - birthDate.getDate();

    if(ageDay < 0) {
        ageMonth--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDay += prevMonth.getDate();
    }
    
    if(ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
    }

    document.querySelector(".yearDisplay").textContent = `${ageYear}`;
    document.querySelector(".monthDisplay").textContent = `${ageMonth}`;
    document.querySelector(".dayDisplay").textContent = `${ageDay}`;


 });
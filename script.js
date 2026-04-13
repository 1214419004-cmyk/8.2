console.log("script started")

function processForm(event){
    console.log("clciked");
    event.preventDefault();

    let fNameInput = document.getElementById("firstname");

    let dateInput = document.getElementById("birthdate");
    let birthdate = dateInput.value;

}
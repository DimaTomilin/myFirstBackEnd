const getInformation = (element) => {
    const data = element.value
    if (data === ""){
        alert("Invalid data")
        return;
    }
    return data;
}

const sendInformation = async () => {
    const name = getInformation(nameInput)
    const age = getInformation(ageInput)
    const abilities = getInformation(abilitiesTextarea)
    cleanForm();
    response = await 
}

const cleanForm = () => {
    nameInput.value = "";
    ageInput.value = "";
    abilitiesTextarea.value = "";
    document.getElementById("email").value = "";
}

const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", sendInformation)

const nameInput = document.getElementById("name")
const ageInput = document.getElementById("age")
const abilitiesTextarea = document.getElementById("abilities")



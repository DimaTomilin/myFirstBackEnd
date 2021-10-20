const getInformation = (element) => {
    const data = element.value
    if (data === ""){
        alert("Invalid data")
        return;
    }
    return data;
}

const newMessage = (boolean) => {
    if(boolean){
        alert("Our congratulations. You fit to start learn in your course. Good job!")
    } else {
        alert("Sorry but I need to tell you, you were not accepted for the course. But don`t worry you can try again.")
    }
}

const formationObject = () => {
    const name = getInformation(nameInput)
    const age = getInformation(ageInput)
    const abilities = getInformation(abilitiesTextarea)
    return {name, age, abilities}
}

const sendRequest = async (object)=> {
    const response = await axios.post("http://localhost:3000/", object,{
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'content-type': 'application/json',
        }
    });
    return response;
}


const submitInformation = async (e) => {
    const objectInformation = formationObject()
    cleanForm();
    const response = await sendRequest(objectInformation)
    alert("We need some time to check results");
    newMessage(response.data);
}

const cleanForm = () => {
    nameInput.value = "";
    ageInput.value = "";
    abilitiesTextarea.value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = ""
}

const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", submitInformation)

const nameInput = document.getElementById("name")
const ageInput = document.getElementById("age")
const abilitiesTextarea = document.getElementById("abilities")




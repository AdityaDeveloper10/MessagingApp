const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click", updateDB);

//Set database object here

let db = firebase.database().ref();
/**
 * Updates the database with the username and message.
 */
function updateDB(event) {
    event.preventDefault();
    const username = usernameElement.value;
    const message = messageElement.value;

    usernameElement.value = "";
    messageElement.value = "";

    console.log(username + " : " + message);

    //Update database here
    let value = {
        NAME: username,
        Message: message
    };

    db.push(value);

}

// Set database "child_added" event listener here

db.on('child_added', addMessage);

function addMessage(rowData) {

    let row = rowData.val();

    let name = row.NAME;
    let sentence = row.Message;

    let div = document.querySelector(".allMessages");
    let p = document.createElement('p');
    p.innerText = name + ': ' + sentence;
    div.appendChild(p);
}
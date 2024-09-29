const socket = io("/chattings");

const getElementById = (id) => document.getElementById(id) || null;

const currentUserElement = getElementById("current_user");
const currentUsernameElement = getElementById("current_username");
const chattingBoxElement = getElementById("chatting_box");
const formElement = getElementById("chat_form");

socket.on("user_connected", (username) => {
    console.log(`${username} connected!`);
})

const drawCurrentUsername = (username) => {
    currentUsernameElement.innerText = `Hello, ${username}. Have a nice day! :)`;
}

function helloUser(){
    const username = prompt("What is your name?");
    socket.emit("new_user", username, (data) => {
        drawCurrentUsername(data);
    });
}

function init(){
    helloUser();
}

init();
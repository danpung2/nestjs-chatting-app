const socket = io("/chattings");

const getElementById = (id) => document.getElementById(id) || null;

const helloStrangerElement = getElementById("hello_stranger");
const chattingBoxElement = getElementById("chatting_box");
const formElement = getElementById("chat_form");

function helloUser(){
    const username = prompt("What is your name?");
    socket.emit("new_user", username);
}

function init(){
    helloUser();
}

init();
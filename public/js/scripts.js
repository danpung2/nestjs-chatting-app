const socket = io('/chattings');

const getElementById = (id) => document.getElementById(id) || null;

const currentUserElement = getElementById('current_user');
const currentUsernameElement = getElementById('current_username');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');

socket.on('user_connected', (username) => {
  drawNewChat(`${username} connected!`);
});

socket.on('new_chat', (data) => {
  const { chat, username } = data;
  drawNewChat(`${username}: ${chat}`);
});

const handleSubmit = (event) => {
  event.preventDefault();
  const inputValue = event.target.elements[0].value;

  if (inputValue !== '') {
    socket.emit('submit_chat', inputValue);
    drawNewChat(`me: ${inputValue}`);
    event.target.elements[0].value = '';
  }
};

const drawNewChat = (message) => {
  const wrapperChatBox = document.createElement('div');
  const chatBox = `
        <div>
            ${message}
        </div>
    `;
  wrapperChatBox.innerHTML = chatBox;
  chattingBoxElement.append(wrapperChatBox);
};

const drawCurrentUsername = (username) => {
  currentUsernameElement.innerText = `Hello, ${username}. Have a nice day! :)`;
};

function helloUser() {
  const username = prompt('What is your name?');
  socket.emit('new_user', username, (data) => {
    drawCurrentUsername(data);
  });
}

function init() {
  helloUser();
  formElement.addEventListener('submit', handleSubmit);
}

init();

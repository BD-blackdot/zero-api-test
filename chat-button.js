// chat-button.js

// CSS 스타일을 추가하는 함수
function addChatButtonStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        #chat-button {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border-radius: 30px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            z-index: 1000;
        }
        #chat-button:hover {
            background-color: #0056b3;
        }
    `;
    document.head.appendChild(style);
}

// 채팅 버튼을 추가하는 함수
function addChatButton() {
    const button = document.createElement('div');
    button.id = 'chat-button';
    button.innerText = '💬 Chat with us';
    button.onclick = function() {
        openChat();
    };
    document.body.appendChild(button);
}

// 채팅 창을 여는 함수
function openChat() {
    alert('Chat window will open here.');
}

// DOM이 로드되었을 때 버튼과 스타일을 추가합니다
document.addEventListener('DOMContentLoaded', function() {
    addChatButtonStyles();
    addChatButton();
});

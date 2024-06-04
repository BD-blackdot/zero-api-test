// chat-button.js

// CSS 스타일을 추가하는 함수
function addChatButtonStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
        }

        #chat-button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 820px;
            height: 60px;
            background-color: white;
            border: 1px solid #E75B7F;
            border-radius: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            padding: 0 20px;
            cursor: pointer;
            z-index: 1000;
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
        }

        #chat-button img {
            width: 96px; /* 너비 설정 */
            height: 25.9px; /* 높이 설정 */
        }

        #chat-button span {
            flex-grow: 1;
            text-align: right;
            color: #8B8B8D;
            font-size: 16px;
        }
    `;
    document.head.appendChild(style);
}

// 채팅 버튼을 추가하는 함수
function addChatButton() {
    const button = document.createElement('div');
    button.id = 'chat-button';
    
    const logo = document.createElement('img');
    logo.src = 'https://bd-blackdot.github.io/zero-api-test/logo.png'; // 이미지 URL을 실제 URL로 대체하세요
    logo.alt = 'Logo';

    const text = document.createElement('span');
    text.innerText = '메시지를 입력해주세요.';

    button.appendChild(logo);
    button.appendChild(text);
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
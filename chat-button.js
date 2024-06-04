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

        #wait-button {
            width: 60px;
            height: 60px;
            background-color: #E75B7F;
            border-radius: 50%;
            position: fixed;
            bottom: 20px;
            right: 80px;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.5s ease-in-out;
        }

        #chat-button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 0px;
            height: 60px;
            background-color: white;
            border: 1px solid #E75B7F;
            border-radius: 20px;
            box-shadow: 5px 5px 50px 10px #c7c7c7;
            padding: 0 20px;
            cursor: pointer;
            z-index: 1000;
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            overflow: hidden;
            opacity: 0;
            transition: all 0.5s ease-in-out;
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

// 대기 버튼을 추가하는 함수
function addWaitButton() {
    const button = document.createElement('div');
    button.id = 'wait-button';
    button.onclick = function() {
        expandButton();
    };
    document.body.appendChild(button);
}

// 대기 버튼을 클릭했을 때 채팅 버튼으로 변환하는 함수
function expandButton() {
    const waitButton = document.getElementById('wait-button');
    const chatButton = document.getElementById('chat-button');

    // 대기 버튼 애니메이션
    waitButton.style.transform = 'translateX(-50%)';
    waitButton.style.left = '50%';
    waitButton.style.right = 'initial';
    waitButton.style.width = '820px';
    waitButton.style.borderRadius = '20px';

    // 대기 버튼이 중앙으로 이동한 후 채팅 버튼으로 변환
    setTimeout(() => {
        waitButton.style.display = 'none';
        chatButton.style.opacity = '1';
        chatButton.style.width = '820px';

        const chatImage = chatButton.querySelector('img');
        const chatText = chatButton.querySelector('span');

        // 이미지와 텍스트를 나중에 나타나게 함
        setTimeout(() => {
            chatImage.style.opacity = '1';
            chatText.style.opacity = '1';
        }, 500);
    }, 500);
}

// 채팅 버튼을 추가하는 함수
function addChatButton() {
    const button = document.createElement('div');
    button.id = 'chat-button';
    
    const logo = document.createElement('img');
    logo.src = 'https://bd-blackdot.github.io/zero-api-test/logo.png';
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
    addWaitButton();
    addChatButton();
});
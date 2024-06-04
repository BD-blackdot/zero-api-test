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

        #chat-container {
            display: none; /* 초기에는 숨김 */
            position: fixed;
            bottom: 100px; /* chat-button 위에 위치 */
            left: 50%;
            transform: translateX(-50%);
            width: 500px;
            height: 400px;
            background-color: white;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            padding: 20px;
            z-index: 1000;
            overflow-y: auto;
        }

        #chat-messages {
            height: calc(100% - 60px); /* 텍스트 입력 창을 위한 공간 확보 */
            overflow-y: auto;
        }

        #chat-input-container {
            display: flex;
            align-items: center;
            border-top: 1px solid #ddd;
            padding-top: 10px;
        }

        #chat-input {
            flex-grow: 1;
            border: none;
            padding: 10px;
            border-radius: 20px;
            background-color: #f0f0f0;
            margin-right: 10px;
        }

        #chat-input:focus {
            outline: none;
        }

        #send-button {
            background-color: #E75B7F;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 20px;
            cursor: pointer;
        }

        .chat-message {
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 10px;
            background-color: #f0f0f0;
        }

        .chat-message.user {
            background-color: #E75B7F;
            color: white;
            text-align: right;
        }

        .chat-message.bot {
            background-color: #eee;
            color: #333;
            text-align: left;
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
        toggleChatContainer();
    };
    document.body.appendChild(button);
}

// 채팅 창을 토글하는 함수
function toggleChatContainer() {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer.style.display === 'none') {
        chatContainer.style.display = 'block';
    } else {
        chatContainer.style.display = 'none';
    }
}

// 채팅 창을 추가하는 함수
function addChatContainer() {
    const container = document.createElement('div');
    container.id = 'chat-container';

    const messages = document.createElement('div');
    messages.id = 'chat-messages';

    const inputContainer = document.createElement('div');
    inputContainer.id = 'chat-input-container';

    const input = document.createElement('input');
    input.id = 'chat-input';
    input.type = 'text';
    input.placeholder = '메시지를 입력해주세요.';

    const sendButton = document.createElement('button');
    sendButton.id = 'send-button';
    sendButton.innerText = '전송';
    sendButton.onclick = function() {
        sendMessage();
    };

    inputContainer.appendChild(input);
    inputContainer.appendChild(sendButton);

    container.appendChild(messages);
    container.appendChild(inputContainer);

    document.body.appendChild(container);
}

// 메시지를 전송하는 함수
function sendMessage() {
    const input = document.getElementById('chat-input');
    const messageText = input.value;
    if (messageText.trim() !== '') {
        const messages = document.getElementById('chat-messages');

        // 사용자 메시지 추가
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message user';
        userMessage.innerText = messageText;
        messages.appendChild(userMessage);

        // 입력 필드 비우기
        input.value = '';

        // 봇 응답 추가 (여기서는 간단히 응답을 추가하지만 실제로는 서버와 통신 필요)
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot';
        botMessage.innerText = '봇 응답: ' + messageText;
        messages.appendChild(botMessage);

        // 스크롤을 최신 메시지로 이동
        messages.scrollTop = messages.scrollHeight;
    }
}

// DOM이 로드되었을 때 버튼과 스타일을 추가합니다
document.addEventListener('DOMContentLoaded', function() {
    addChatButtonStyles();
    addWaitButton();
    addChatButton();
    addChatContainer();
});
// document.addEventListener('DOMContentLoaded', function() {
//     const chatbotPopup = document.getElementById('chatbot');
//     const openChatbotButton = document.getElementById('openChatbot');
//     const closeChatbotButton = document.getElementById('closeChatbot');
//     const chatbotMessages = document.getElementById('chatbot-messages');
//     const chatbotInput = document.getElementById('chatbot-input');
//     const sendChatbotMessageButton = document.getElementById('send-chatbot-message'); // Get the Send button

//     function toggleChatbot() {
//         const chatbotButton = document.getElementById('openChatbot');
//         const isChatbotClosed = chatbotPopup.style.display === 'none' || chatbotPopup.style.display === '';

//         chatbotPopup.style.display = isChatbotClosed? 'flex' : 'none';
//         chatbotButton.style.display = isChatbotClosed? 'none' : 'flex';
//     }

//     function sendChatbotMessage() {
//         const message = chatbotInput.value.trim();
//         if (message!== "") {
//             const userMessage = createChatMessage('user-message', message);
//             chatbotMessages.appendChild(userMessage);

//             const botMessage = createChatMessage('bot-message', 'Thank you for your message How can I assist you further?');
//             chatbotMessages.appendChild(botMessage);

//             chatbotInput.value = '';
//             chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
//         }
//     }

//     function createChatMessage(className, text) {
//         const message = document.createElement('div');
//         message.className = `chatbot-message ${className}`;
//         message.textContent = text;
//         return message;
//     }

//     openChatbotButton.addEventListener('click', toggleChatbot);
//     closeChatbotButton.addEventListener('click', toggleChatbot);

//     // Attach event listener to the Send button
//     sendChatbotMessageButton.addEventListener('click', sendChatbotMessage);

//     // Optionally, keep the keypress event listener for Enter key if you still want to allow sending messages with Enter
//     chatbotInput.addEventListener('keypress', function(event) {
//         if (event.key === 'Enter') {
//             event.preventDefault(); // Prevent form submission if applicable
//             sendChatbotMessage();
//         }
//     });
// });


function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'none' ? 'block' : 'none';
}

function sendChatbotMessage() {
    const input = document.getElementById('chatbot-input');
    const messages = document.getElementById('chatbot-messages');
    const message = input.value.trim();

    if (message) {
        const messageElem = document.createElement('div');
        messageElem.className = 'mb-2 p-2 bg-blue-100 rounded';
        messageElem.textContent = message;
        messages.appendChild(messageElem);
        input.value = '';
        messages.scrollTop = messages.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('chatbot').style.display = 'none';
});


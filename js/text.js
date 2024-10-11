function typeText(element, text, delay) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, delay);
        } else {
            setTimeout(() => {
                element.textContent = ''; 
                index = 0; 
                type(); 
            }, 400); 
        }
    }

    type();
}

const textToType = "Welcome to my portofolio Website👋🏻";
const typingElement = document.getElementById("typing-effect");
typeText(typingElement, textToType, 100);
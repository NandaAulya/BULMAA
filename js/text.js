function typeText(element, text, delay) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, delay);
        } else {
            // Setelah selesai, hapus teks dan mulai lagi
            setTimeout(() => {
                element.textContent = ''; // Kosongkan teks
                index = 0; // Reset index
                type(); // Mulai lagi
            }, 400); // Waktu tunggu sebelum mulai lagi (dalam ms)
        }
    }

    type();
}

// Memanggil fungsi dengan teks yang diinginkan
const textToType = "Welcome to my portofolio Website👋🏻";
const typingElement = document.getElementById("typing-effect");
typeText(typingElement, textToType, 100); // 100 ms delay
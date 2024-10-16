function typeText(element, text, delay) {
    let index = 0;

    function type() {
        // Jika index lebih kecil dari panjang teks dikurangi 2, cetak satu per satu karakter
        if (index < text.length - 4) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, delay);
        // Tampilkan dua karakter terakhir sekaligus
        } else if (index == text.length - 4) {
            element.textContent += text.slice(index, index + 4);
            index += 4;
            setTimeout(type, delay);
        // Setelah semua karakter tampil, reset teks untuk memulai ulang
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
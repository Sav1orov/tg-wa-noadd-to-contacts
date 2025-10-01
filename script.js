// Получаем элементы один раз
const telegramNumber = document.querySelector(".telegram-number");
const whatsappNumber = document.querySelector(".whatsapp-number");
const telegramBtn = document.querySelector(".telegram-button");
const whatsappBtn = document.querySelector(".whatsapp-button");

// Общая функция разрешения ввода только цифр
function allowOnlyDigits(e) {
    if (!/\d/.test(e.key)) {
        e.preventDefault();
    }
}

// Привязываем к обоим input
telegramNumber.addEventListener("keypress", allowOnlyDigits);
whatsappNumber.addEventListener("keypress", allowOnlyDigits);

// Функция редиректа на Telegram
function redirectToTelegram() {
    const telNum = "https://t.me/+" + telegramNumber.value;
    window.open(telNum, "_blank");
}

// Функция редиректа на WhatsApp
function redirectToWhatsApp() {
    const telNum = "https://wa.me/+" + whatsappNumber.value;
    window.open(telNum, "_blank");
}

// Обработчики кнопок
telegramBtn.addEventListener("click", redirectToTelegram);
whatsappBtn.addEventListener("click", redirectToWhatsApp);
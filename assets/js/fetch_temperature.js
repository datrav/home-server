async function fetchTemperature() {
    try {
        const response = await fetch('/temperature.txt'); // Путь к файлу с температурой
        const data = await response.text();
        document.getElementById('temperature').innerText = `Температура системы: ${data.trim()} °C`;
    } catch (err) {
        document.getElementById('temperature').innerText = `Ошибка загрузки температуры: ${err}`;
    }
}

// Обновление температуры каждые 5 секунд
setInterval(fetchTemperature, 5000);
fetchTemperature(); // Первый вызов сразу
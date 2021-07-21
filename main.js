let currentTime = new Date().getHours();

const horaSuperValle = [0, 1, 2, 3, 4, 5, 6, 7]
const horaValle = [8, 9, 14, 15, 16, 17, 22, 23]
const horaPunta = [10, 11, 12, 13, 18, 19, 20, 21]

let data = fetch("data.json")
    .then(response => response.json())
    .then(json => {

        document.getElementById('price').innerText = json[currentTime % 24].price
        document.getElementById('next_price').innerText = json[(currentTime + 1) % 24].price

        if (horaSuperValle.includes(currentTime)) {
            document.getElementById('flag').innerText = "🟢 Hora super-valle 🟢"
        }
        else if (horaValle.includes(currentTime)) {
            document.getElementById('flag').innerText = "🟢 Hora valle 🟢"
        }
        else {
            document.getElementById('flag').innerText = "🔴 Hora punta 🔴"
        }

        if (horaSuperValle.includes(currentTime + 1)) {
            document.getElementById('next_flag').innerText = "🟢 Hora super-valle 🟢"
        }
        else if (horaValle.includes(currentTime + 1)) {
            document.getElementById('flag').innerText = "🟢 Hora valle 🟢"
        }
        else {
            document.getElementById('flag').innerText = "🔴 Hora punta 🔴"
        }
        console.log(currentTime, currentTime + 1)
    })
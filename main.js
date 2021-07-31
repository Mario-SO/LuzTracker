let currentTime = new Date().getHours();
let today = new Date().getDay();

const horaSuperValle = [0, 1, 2, 3, 4, 5, 6, 7]
const horaValle = [8, 9, 14, 15, 16, 17, 22, 23]
const horaPunta = [10, 11, 12, 13, 18, 19, 20, 21]

let data = fetch("data.json")
    .then(response => response.json())
    .then(json => {

        document.getElementById('price').innerText = json[currentTime % 24].price
        document.getElementById('next_price').innerText = json[(currentTime + 1) % 24].price

        if (today == 6 | today == 7) {
            document.getElementById('flag').innerText = "🟡 Hora llana 🟡"
            document.getElementById('next_flag').innerText = "🟡 Hora llana 🟡"
        } else {
            if (horaSuperValle.includes(currentTime)) {
                document.getElementById('flag').innerText = "🟢 Hora valle 🟢"
            }
            else if (horaValle.includes(currentTime)) {
                document.getElementById('flag').innerText = "🟡 Hora llana 🟡"
            }
            else {
                document.getElementById('flag').innerText = "🔴 Hora punta 🔴"
            }

            if (horaSuperValle.includes((currentTime + 1) % 24)) {
                document.getElementById('next_flag').innerText = "🟢 Hora valle 🟢"
            }
            else if (horaValle.includes((currentTime + 1) % 24)) {
                document.getElementById('next_flag').innerText = "🟡 Hora llana 🟡"
            }
            else if (horaPunta.includes((currentTime + 1) % 24)) {
                document.getElementById('next_flag').innerText = "🔴 Hora punta 🔴"
            }
        }
    })
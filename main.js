let currentTime = new Date().getHours();

let data = fetch("data.json")
    .then(response => response.json())
    .then(json => {
        if (currentTime >= 0 & currentTime < 1) {
            document.getElementById('price').innerText = json[0].price
            document.getElementById('next_price').innerText = json[1].price
            document.getElementById('flag').innerText = "🟢 Hora super-valle 🟢"
            document.getElementById('next_flag').innerText = "🟢 Hora super-valle 🟢"
        }
        else if (currentTime >= 1 & currentTime < 2) {
            document.getElementById('price').innerText = json[1].price
            document.getElementById('next_price').innerText = json[2].price
            document.getElementById('flag').innerText = "🟢 Hora super-valle 🟢"
            document.getElementById('next_flag').innerText = "🟢 Hora super-valle 🟢"
        }
        else if (currentTime >= 2 & currentTime < 3) {
            document.getElementById('price').innerText = json[2].price
            document.getElementById('next_price').innerText = json[3].price
            document.getElementById('flag').innerText = "🟢 Hora super-valle 🟢"
            document.getElementById('next_flag').innerText = "🟢 Hora super-valle 🟢"
        }
        else if (currentTime >= 3 & currentTime < 4) {
            document.getElementById('price').innerText = json[3].price
            document.getElementById('next_price').innerText = json[4].price
            document.getElementById('flag').innerText = "🟢 Hora super-valle 🟢"
            document.getElementById('next_flag').innerText = "🟢 Hora super-valle 🟢"
        }
        else if (currentTime >= 4 & currentTime < 5) {
            document.getElementById('price').innerText = json[4].price
            document.getElementById('next_price').innerText = json[5].price
            document.getElementById('flag').innerText = "🟢 Hora super-valle 🟢"
            document.getElementById('next_flag').innerText = "🟢 Hora super-valle 🟢"
        }
        else if (currentTime >= 5 & currentTime < 6) {
            document.getElementById('price').innerText = json[5].price
            document.getElementById('next_price').innerText = json[6].price
            document.getElementById('flag').innerText = "🟢 Hora super-valle 🟢"
            document.getElementById('next_flag').innerText = "🟢 Hora super-valle 🟢"
        }
        else if (currentTime >= 6 & currentTime < 7) {
            document.getElementById('price').innerText = json[6].price
            document.getElementById('next_price').innerText = json[7].price
            document.getElementById('flag').innerText = "🟢 Hora super-valle 🟢"
            document.getElementById('next_flag').innerText = "🟢 Hora super-valle 🟢"
        }
        else if (currentTime >= 7 & currentTime < 8) {
            document.getElementById('price').innerText = json[7].price
            document.getElementById('next_price').innerText = json[8].price
            document.getElementById('flag').innerText = "🟢 Hora super-valle 🟢"
            document.getElementById('next_flag').innerText = "🟢 Hora valle 🟢"
        }
        else if (currentTime >= 8 & currentTime < 9) {
            document.getElementById('price').innerText = json[8].price
            document.getElementById('next_price').innerText = json[9].price
            document.getElementById('flag').innerText = "🟢 Hora valle 🟢"
            document.getElementById('next_flag').innerText = "🟢 Hora valle 🟢"
        }
        else if (currentTime >= 9 & currentTime < 10) {
            document.getElementById('price').innerText = json[9].price
            document.getElementById('next_price').innerText = json[10].price
            document.getElementById('flag').innerText = "🟢 Hora valle 🟢"
            document.getElementById('next_flag').innerText = "🔴 Hora punta 🔴"
        }
        else if (currentTime >= 10 & currentTime < 11) {
            document.getElementById('price').innerText = json[10].price
            document.getElementById('next_price').innerText = json[11].price
            document.getElementById('flag').innerText = "🔴 Hora punta 🔴"
            document.getElementById('next_flag').innerText = "🔴 Hora punta 🔴"
        }
        else if (currentTime >= 11 & currentTime < 12) {
            document.getElementById('price').innerText = json[11].price
            document.getElementById('next_price').innerText = json[12].price
            document.getElementById('flag').innerText = "🔴 Hora punta 🔴"
            document.getElementById('next_flag').innerText = "🔴 Hora punta 🔴"
        }
        else if (currentTime >= 12 & currentTime < 13) {
            document.getElementById('price').innerText = json[12].price
            document.getElementById('next_price').innerText = json[13].price
            document.getElementById('flag').innerText = "🔴 Hora punta 🔴"
            document.getElementById('next_flag').innerText = "🔴 Hora punta 🔴"
        }
        else if (currentTime >= 13 & currentTime < 14) {
            document.getElementById('price').innerText = json[13].price
            document.getElementById('next_price').innerText = json[14].price
            document.getElementById('flag').innerText = "🔴 Hora punta 🔴"
            document.getElementById('next_flag').innerText = "🟢 Hora valle 🟢"
        }
        else if (currentTime >= 14 & currentTime < 15) {
            document.getElementById('price').innerText = json[14].price
            document.getElementById('next_price').innerText = json[15].price
            document.getElementById('flag').innerText = "🟢 Hora valle 🟢"
            document.getElementById('next_flag').innerText = "🟢 Hora valle 🟢"
        }
        else if (currentTime >= 15 & currentTime < 16) {
            document.getElementById('price').innerText = json[15].price
            document.getElementById('next_price').innerText = json[16].price
            document.getElementById('flag').innerText = "🟢 Hora valle 🟢"
            document.getElementById('next_flag').innerText = "🟢 Hora valle 🟢"
        }
        else if (currentTime >= 16 & currentTime < 17) {
            document.getElementById('price').innerText = json[16].price
            document.getElementById('next_price').innerText = json[17].price
            document.getElementById('flag').innerText = "🟢 Hora valle 🟢"
            document.getElementById('next_flag').innerText = "🟢 Hora valle 🟢"
        }
        else if (currentTime >= 17 & currentTime < 18) {
            document.getElementById('price').innerText = json[17].price
            document.getElementById('next_price').innerText = json[18].price
            document.getElementById('flag').innerText = "🟢 Hora valle 🟢"
            document.getElementById('next_flag').innerText = "🔴 Hora punta 🔴"
        }
        else if (currentTime >= 18 & currentTime < 19) {
            document.getElementById('price').innerText = json[18].price
            document.getElementById('next_price').innerText = json[19].price
            document.getElementById('flag').innerText = "🔴 Hora punta 🔴"
            document.getElementById('next_flag').innerText = "🔴 Hora punta 🔴"
        }
        else if (currentTime >= 19 & currentTime < 20) {
            document.getElementById('price').innerText = json[19].price
            document.getElementById('next_price').innerText = json[20].price
            document.getElementById('flag').innerText = "🔴 Hora punta 🔴"
            document.getElementById('next_flag').innerText = "🔴 Hora punta 🔴"
        }
        else if (currentTime >= 20 & currentTime < 21) {
            document.getElementById('price').innerText = json[20].price
            document.getElementById('next_price').innerText = json[21].price
            document.getElementById('flag').innerText = "🔴 Hora punta 🔴"
            document.getElementById('next_flag').innerText = "🔴 Hora punta 🔴"
        }
        else if (currentTime >= 21 & currentTime < 22) {
            document.getElementById('price').innerText = json[21].price
            document.getElementById('next_price').innerText = json[22].price
            document.getElementById('flag').innerText = "🔴 Hora punta 🔴"
            document.getElementById('next_flag').innerText = "🟢 Hora valle 🟢"
        }
        else if (currentTime >= 22 & currentTime < 23) {
            document.getElementById('price').innerText = json[22].price
            document.getElementById('next_price').innerText = json[23].price
            document.getElementById('flag').innerText = "🟢 Hora valle 🟢"
            document.getElementById('next_flag').innerText = "🟢 Hora valle 🟢"
        }
        else if (currentTime >= 23 & currentTime < 24) {
            document.getElementById('price').innerText = json[23].price
            document.getElementById('next_price').innerText = json[24].price
            document.getElementById('flag').innerText = "🟢 Hora valle 🟢"
            document.getElementById('next_flag').innerText = "🟢 Hora super-valle 🟢"
        }
    })
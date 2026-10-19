const btn = document.querySelector("#btn")
const status = document.querySelector("#status")

const confirmarAcao = () => {
    status.textContent = "Ação confirmada";
}

btn.addEventListener("click", confirmarAcao);
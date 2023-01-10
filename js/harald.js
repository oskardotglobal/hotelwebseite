function harald() {
    const harald = document.getElementById("harald")
    const hidden_harald = document.getElementById("harald-hidden")
    if (harald && hidden_harald) {
        if (harald.getAttribute("style") === "display:none;") {
            harald.setAttribute("style", "")
            hidden_harald.setAttribute("style", "display:none;")
        } else {
            harald.setAttribute("style", "display:none;")
            hidden_harald.setAttribute("style", "")
        }
    }
}

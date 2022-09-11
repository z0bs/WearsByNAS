const toggle = () => {
    let toggle = document.body
    toggle.classList.toggle("dark-mode")

    let toggleBtn = document.getElementById("toggle")
    toggleBtn.classList.toggle("toggled")

    let logo = document.getElementById("logo");
    logo.classList.toggle("dark-mode-logo")

    let wears = document.getElementById("wears")
    wears.classList.toggle("wbn-dark")

    let footer = document.getElementById("footer")
    footer.classList.toggle("reserved")
}

let toggleBtn = document.getElementById("toggle").addEventListener("click", toggle)
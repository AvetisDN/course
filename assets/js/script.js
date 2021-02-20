const burger = document.getElementById('burger')
const leftSidebar = document.querySelector('.wrapper>.left')
burger.onclick = function(e) {
    this.classList.toggle('open')
    leftSidebar.classList.toggle('open')
}


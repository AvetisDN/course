const burger = document.getElementById('burger')
const leftSidebar = document.querySelector('.wrapper>.left')
burger.onclick = function(e) {
    this.classList.toggle('open')
    leftSidebar.classList.toggle('open')
}

const progBars = document.querySelectorAll('.progress-item__bar>span')
progBars.forEach((bar, index) => {
    bar.style.width = bar.getAttribute('data-progress')
})
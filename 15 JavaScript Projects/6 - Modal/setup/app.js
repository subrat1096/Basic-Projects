const btn = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-btn')
const modal = document.querySelector('.modal-overlay')

btn.addEventListener('click', function () {
    modal.classList.add("open-modal")
})

closeBtn.addEventListener('click',function () {
    modal.classList.remove("open-modal")
})
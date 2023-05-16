// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const sideToggle = document.querySelector('.sidebar-toggle')
const closebtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')


sideToggle.addEventListener('click', function () {
    sidebar.classList.add('show-sidebar')
    //we can aslo use toggle function in place of add
})

closebtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar')
})
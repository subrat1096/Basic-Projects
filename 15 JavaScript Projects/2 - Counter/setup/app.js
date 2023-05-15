//set initial count value
let count = 0;

//select value
const value = document.querySelector('#value')

//select buttons
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")){
            count++;
        }else{
            count = 0
        }
        if(count > 0){
            value.style.color = "green"
        }
        if(count < 0){
            value.style.color ="red"
        }
        if(count === 0){
            value.style.color = "#000"
        }
        value.textContent = count;
    })
})
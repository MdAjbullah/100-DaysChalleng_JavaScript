const counter = document.querySelector('.counterh');
const btns = document.querySelectorAll('.btn');
let count = 0;
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('Decrease')){
            count--;
        }
        else if(styles.contains('Increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            counter.style.color = 'green';
        }
        if(count < 0){
            counter.style.color = 'red';
        }
        if(count === 0){
            counter.style.color = '#333';
        }
        counter.textContent = count;
    });
});
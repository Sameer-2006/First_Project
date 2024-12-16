const yesbt= document.getElementById('yes')
const nobt= document.getElementById('no')
const ct=document.querySelector('.button')
const body=document.querySelector('body')

nobt.addEventListener('mouseover',function(){
    nobt.style.top = `${Math.random() * 500}px`;
    nobt.style.left = `${Math.random() * 500}px`;
})

nobt.addEventListener('click',function(){
    nobt.style.backgroundColor='rgb(51, 202, 51)';
    nobt.style.borderColor='rgb(51, 202, 51)';
    nobt.innerHTML='YES';
    window.location.assign('https://www.instagram.com/sameer_parwal_/');
})

yesbt.addEventListener('click',function(){
    window.location.assign('https://www.instagram.com/sameer_parwal_/');
    
})
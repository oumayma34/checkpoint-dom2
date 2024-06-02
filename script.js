const body =document.querySelector('body');
const button =document.querySelector('button');
const colors=['grey','red', 'black,'green','brown'];

body.style.backgroundColor='violet';
button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];

})

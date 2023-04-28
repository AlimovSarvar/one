var elTrue = document.querySelector('.textForm')
var elForm = document.querySelector('.form')
var elLogin = document.querySelector('.inpLogin')
var elParol = document.querySelector('.inpParol')
var elBtn = document.querySelector('.Btn')
elForm.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(elLogin.value);
    console.log(elParol.value);
    
      
   if(elLogin.value == 0 || elParol.value == 0){
        alert('xato PAROL kriting')
    }else if(elLogin.value >= 0 || elParol.value == 0){
        alert('xato  LOGIN kriting ')
    }else{
    
        
    }
    if(elForm.value == 1){
        elTrue.textContent = "Alimov Sarvarbek Azizbekovich saytiga kabul boldiz javob 1 kundan song chikadi"
    }else{
        alert('koydalarga amal kiling')
      
    }

})



elForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(elLogin.value.length);
    console.log(elParol.value.length);
    if(elLogin.value.toLowerCase() ==  elLogin.value){
        elLogin.style.background = "red"
    
    }else{
        elLogin.style.background = "green"
    
    }
    if(elParol.value.length >= 8){
        elParol.style.background = "green"
    
    }else{
        elParol.style.background = "red"
        
    }
})








elParol.addEventListener('keydown', function(){
    if(elParol.value.length >= 8){
        elParol.style.backgroundColor = "green"
    }else if(elParol.value.length == 0){
        elParol.style.backgroundColor = "#fff"
    }else{
        elParol.style.backgroundColor = "red"
    }

})







elLogin.addEventListener('keydown', function(){
    if(elLogin.value.toLowerCase() ==  elLogin.value){
        elLogin.style.background = "red"
        
    }else{
        elLogin.style.background = "green"
    }
})


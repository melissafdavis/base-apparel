const button = document.querySelector('.submit_btn');
const emailInput = document.querySelector('.email-input')

console.log(button);
console.log(emailInput);


button.addEventListener('click', validateForm);

function validateForm(){
    //must have a value
    if (emailInput.value){
      console.log(emailInput.value);
    }else{
      alert('alert'); //create an element instead of doing an alert
    }
    }



  

const button = document.querySelector('.submit_btn');


button.addEventListener('click', validateEntry);
button.addEventListener('click', validateEmail);

function validateEntry(){
    //must have a value
    const email = document.querySelector('.email-input')
    if (email.value){
      return true;
    }else{
      alert('alert'); //create an element instead of doing an alert
    }
    }

    function validateEmail() {
      const email = document.querySelector('.email-input');
      const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
      if(!re.test(email.value)){
        console.log("invalid email")
      } else {
        console.log("valid email");
      }
    }



  

const button = document.querySelector('.submit_btn');
const emailDiv = document.querySelector('.email');


button.addEventListener('click', validateEntry);


    function validateEntry() {
      const email = document.querySelector('.email-input');

      const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
      if(!email.value || !re.test(email.value)){
        errorMessage();
      } else {
        console.log("valid email");
        //send to php?
      }
    }

    function errorMessage(){
      var node= document.createElement('div');
      node.className = "errorMessage";
      var errorMessage = document.createTextNode("Please enter a valid email address");
      node.appendChild(errorMessage);
      var parent = emailDiv;
      parent.appendChild(node);
  
    }

    



  

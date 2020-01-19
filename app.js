const button = document.querySelector('.submit_btn');
const emailDiv = document.querySelector('.email');


button.addEventListener('click', validateEntry);
button.addEventListener('click', validateEmail);

function validateEntry(){
    //must have a value
    const email = document.querySelector('.email-input')
    if (email.value){
      return true;
    }else{
      //alert('alert'); //create an element instead of doing an alert
      var node= document.createElement('div');
      node.className = "noEntryMessage"
      var noEntryMessage = document.createTextNode("Please enter a valid email address")
      node.appendChild(noEntryMessage);
      //entryMessage.innerHTML = "Please enter a valid email"
      var parent = emailDiv;
      parent.appendChild(node);
      
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



  

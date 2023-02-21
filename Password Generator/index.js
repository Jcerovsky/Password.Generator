const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById('password-left');
let password2El = document.getElementById('password-right');

let genPassword = document.getElementById('generate-password-btn');



genPassword.addEventListener('click', generatePassword);




function generatePassword() {
    let numOfChars = prompt('How many characters long would you like your password to be?');
    
    
    if (numOfChars > 20) {
        alert(`You can't have a password that's longer than 20 characters`);
        numOfChars = 0;
        generatePassword();
    }
    else {
        
        let password1 = '';
        let password2 = '';
        for (let i=0; i < numOfChars; i++) {
            let randomNum1 = Math.floor(Math.random() * characters.length);
            let randomNum2 = Math.floor(Math.random() * characters.length);

            password1 += characters[randomNum1];
            password2 += characters[randomNum2];
                
            }
 
            password1El.textContent = password1;
            password2El.textContent = password2;
    }
        
    return;
}




password1El.onclick = function() {
  document.execCommand("copy");
}

password1El.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", password1El.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});

password2El.onclick = function() {
  document.execCommand("copy");
}

password2El.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", password1El.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});
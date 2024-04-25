/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})

function signIn() {
    var Username = document.getElementById('Username').value;
    var Password = document.getElementById('Password').value;
    
    // Example: Validate username and password
    if (Username === 'user' && Password === 'password') {
      alert('Login successful!');
      // Redirect or perform other actions upon successful login
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
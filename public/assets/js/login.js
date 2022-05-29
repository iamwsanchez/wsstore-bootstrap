function formSubmit(event) {
    event.preventDefault();
    if(document.getElementById('username').value!==''){
        location.href="customers.html"
    }
}
  
const form = document.getElementById('loginForm');
form.addEventListener('submit', formSubmit);
  
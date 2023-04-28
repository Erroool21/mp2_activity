


window.onload = ()=>{
  this.sessionStorage.setItem('username', 'admin');
  this.sessionStorage.setItem('password', 'admin');
}

var input = document.getElementsByClassName('inputField');
var login = document.getElementById('log-in');
var form = document.querySelector('#login');
form.onsubmit = ()=>{return false;}

login.onclick = ()=>{

  if ((input[0].value != "") && (input[1].value != ""))
   {
     if ((input[0].value == sessionStorage.getItem('username')) && (input[1].value == sessionStorage.getItem('password')))
      {
        form.onsubmit = ()=>{return 1;}
        document.cookie = "username="+input[0].value;
        document.cookie = "password="+input[1].value;
      }
      else
      {
        if ((input[0].value != sessionStorage.getItem('username')) )
        {
          input[0].nextElementSibling.innerHTML = `<p class="text-danger">Username or Password is incorrect</p>`;
        setTimeout(()=>{
          input[0].nextElementSibling.textContent = "";
        }, 2000);

        }
        if ((input[1].value != sessionStorage.getItem('password')) )
        {
          input[1].nextElementSibling.innerHTML = `<p class="text-danger">Username or Password is incorrect</p>`;
        setTimeout(()=>{
          input[1].nextElementSibling.textContent = "";
        }, 2000);

        }

      }

   }
  else
   {
    if (input[0].value == "")
    {
      input[0].nextElementSibling.innerHTML = `<p class="text-danger">Username is empty</p>`;
      setTimeout(()=>{
        input[0].nextElementSibling.textContent = "";
      }, 2000);
    }
    if (input[1].value == "")
    {
      input[1].nextElementSibling.innerHTML = `<p class="text-danger">Pasword is empty</p>`;
      setTimeout(()=>{
        input[1].nextElementSibling.textContent = "";
      }, 2000);
    }
   }
}
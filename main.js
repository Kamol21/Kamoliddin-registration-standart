let elForm = document.querySelector(".s2_form");

let kod = document.querySelector(".input-password");
let kod2 = document.querySelector(".input-conpassword");

let user1 = {};


elForm.addEventListener("submit", function (evt) {
  evt.preventDefault()
  kod=kod.value
  kod2=kod2.value
  if (kod == kod2) {
    obg()
    alert("muvafaqiyatli yakunlandi console ga qarang")
  } else {
    alert("kod ikkixil yozildi")
  }
})


function obg() {
  user1 = {
    first_name: document.querySelector(".input-surname").value,
    last_name: document.querySelector(".input-name").value,
    user_email: document.querySelector(".input-email").value,
    user_tel: document.querySelector(".input-tel").value,
    user_password: document.querySelector(".input-password").value,
    user_gender: document.querySelector(".gender").value

  }
  
  console.log(`familiya; ${user1['first_name']}`);
  console.log(`ism; ${user1['last_name']}`);
  console.log(`email; ${user1['user_email']}`);
  console.log(`tel; ${user1['user_tel']}`);
  console.log(`password; ${user1['user_password']}`);
  console.log(`jinsi; ${user1['user_gender']}`);

}

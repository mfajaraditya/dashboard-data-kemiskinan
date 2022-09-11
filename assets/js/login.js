masuk.onclick = function () {
  if (email.value == "") {
    email.style.borderColor = "#EA2027";
    p_email.style.display = "block";
    p_email.innerHTML = "Email Masih Kosong";
    var cek_email = false;
  } else {
    email.style.borderColor = "#e2e2e2";
    p_email.style.display = "none";
    p_email.innerHTML = "";
    var cek_email = true;
  }
  if (password.value == "") {
    password.style.borderColor = "#EA2027";
    p_password.style.display = "block";
    p_password.innerHTML = "Password Masih Kosong";
    var cek_password = false;
  } else {
    password.style.borderColor = "#e2e2e2";
    p_password.style.display = "none";
    p_password.innerHTML = "";
    var cek_password = true;
  }
};

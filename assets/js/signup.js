daftar.onclick = function(){
     var format_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     var format_nomor = /^[0-9]+$/;
     var format_password = /^[A-Za-z]\w{7,14}$/;
     if (nama_lengkap.value == "") {
         nama_lengkap.style.borderColor = '#EA2027';
         p_nama_lengkap.style.display = 'block';
         p_nama_lengkap.innerHTML = 'Nama Lengkap Masih Kosong';
         var cek_nama_lengkap = false;
     } else {
         nama_lengkap.style.borderColor = '#e2e2e2';
         p_nama_lengkap.style.display = 'none';
         p_nama_lengkap.innerHTML = '';
         var cek_nama_lengkap = true;
     }
     if (email.value == "") {
         email.style.borderColor = '#EA2027';
         p_email.style.display = 'block';
         p_email.innerHTML = 'Email Masih Kosong';
         var cek_email = false;
     } else if (!format_email.test(email.value)) {
         email.style.borderColor = '#EA2027';
         p_email.style.display = 'block';
         p_email.innerHTML = 'Pastikan Format Email Benar';
         var cek_email = false;
     } else {
         email.style.borderColor = '#e2e2e2';
         p_email.style.display = 'none';
         p_email.innerHTML = '';
         var cek_email = true;
     }
     if (no_whatsapp.value == "") {
         no_whatsapp.style.borderColor = '#EA2027';
         p_no_whatsapp.style.display = 'block';
         p_no_whatsapp.innerHTML = 'Nomor Whatsapp Masih Kosong';
         var cek_no_whatsapp = false;
     } else if (!format_nomor.test(no_whatsapp.value)) {
         no_whatsapp.style.borderColor = '#EA2027';
         p_no_whatsapp.style.display = 'block';
         p_no_whatsapp.innerHTML = 'Pastikan Format Nomor Whatsapp Benar';
         var cek_no_whatsapp = false;
     } else {
         no_whatsapp.style.borderColor = '#e2e2e2';
         p_no_whatsapp.style.display = 'none';
         p_no_whatsapp.innerHTML = '';
         var cek_no_whatsapp = true;
     }
     if (password.value == "") {
         password.style.borderColor = '#EA2027';
         p_password.style.display = 'block';
         p_password.innerHTML = 'Password Masih Kosong';
         var cek_password = false;
     } else if (password.value.length < 6) {
         password.style.borderColor = '#EA2027';
         p_password.style.display = 'block';
         p_password.innerHTML = 'Password Terlalu Pendek';
         var cek_password = false;
     } else {
         password.style.borderColor = '#e2e2e2';
         p_password.style.display = 'none';
         p_password.innerHTML = '';
         var cek_password = true;
     }
}
<?php
include './config.php';
?>
<header>
<div class="sidebar">
               <div class="logo-content">
                    <img src="<?php echo $url; ?>/logo.png">
               </div>
               <div class="sidebar-menu">
                    <div class="pilih-menu">
                         <div class="select-active-dashboard" id="dashboard">
                         <!-- <i class='bx bx-grid-alt'></i> -->
                         <p>Dashboard</p>
                         </div>
                         <div class="select-active" id="table">
                              <a></a>
                              <p>Tabel</p>
                              <!-- <i class='bx bx-table'></i> -->
                         </div>
                         <div class="select-active" id="admin">
                              <p>Admin</p>
                              <!-- <i class='bx bx-table'></i> -->
                         </div>
                         <div class="select-active" id="login">
                              <a href="<?php echo $url; ?>daftar-masuk/login">Login</a>
                              <!-- <i class='bx bx-table'></i> -->
                         </div>
                    </div>
               </div>
          </div>
</header>
<script src="./sidebar.js"></script>
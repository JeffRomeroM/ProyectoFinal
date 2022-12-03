<template>
  <footer class="footer">
    <hr>
    <div class="footer--copy">
      <p>&copy; 2022 Calzado Angelita, Inc</p>
    </div>
    <div class="footer--contact">
      <p>Siganos</p>
      <a href="https://www.facebook.com/profile.php?id=100035389823339" target="_blank">
        <i class="fa-brands fa-square-facebook"></i>
      </a>

      <p>Contactanos</p>
      <a href="wa.me/+50576263543" target="_blank">
        <i class="fa-brands fa-square-whatsapp"></i>
      </a>
    </div>

  </footer>
</template>
<style>
.footer{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.footer hr{
  width: 95%;
  margin: auto;
}
.footer--copy, .footer--contact{
  width: 100%;
  text-align: center;
}
.footer--copy p, .footer--contact p{
  font-size: 20px;
  padding-top: 10px;
}
.footer--contact p{
  margin-top: 20px;
  margin-bottom: 10px;
}
.footer--contact {
  margin-bottom: 20px;
}
.footer--contact a{
  text-decoration: none;
  color: black;
  font-size: 48px;
}
.footer--contact a img{
  width: 50px;
}
.footer--contact a:hover{
  text-decoration: none;
  color: white;
}
</style>
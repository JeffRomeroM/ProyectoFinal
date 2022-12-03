<template>
  <section class="contactos">
    <div class="contactos--item">
      <p>Puedes seguirnos en facebook</p>
      <i class="fa-brands fa-square-facebook"></i>
    </div>
    <div class="contactos--item">
      <p>Puedes contactarnos en whatsapp</p>
      <i class="fa-brands fa-square-whatsapp"></i>
    </div>
  </section>
</template>
<style>
.contactos{
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto;
  border-radius: 5px;
  margin-top: 10%;
  margin-bottom: 10%;
}
.contactos--item{
  width: 30%;
  background-color: aliceblue;
  margin: 10px auto;
  padding: 40px 0px;
  border-radius: 10px;
}
.contactos--item p{
  text-align: center;
  font-size: 20px;
  padding: 10px;

}
.contactos--item .fa-square-facebook{
  font-size: 90px;
  width: 30%;
  margin-left: 35%;
  margin-top: 10px;
  cursor: pointer;
  color: blue;
}

.contactos--item .fa-square-whatsapp{
  font-size: 90px;
  width: 30%;
  margin-left: 35%;
  margin-top: 10px;
  cursor: pointer;
  color: green;
}

.contactos--item:hover{
  background-color:  #95b8f6;
  box-shadow: 0 0 16px white;
}
@media only screen and (max-width: 800px){
  .contactos--item{
    width: 40%;
  }
  

}
@media only screen and (max-width: 520px){
  .contactos--item{
    width: 90%;
  }
}
 
</style>
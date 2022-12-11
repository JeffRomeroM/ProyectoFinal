<script>
  
  export default {
  data() {
    return {
      menu:'menu--close',
      prod:'fa-solid fa-bars'
    }

  },
  methods: {
    
    alternarMenu() {
      // this.color = this.color === 'red' ? 'green' : 'red'
      this.menu = this.menu === 'menu--open' ? 'menu--close' : 'menu--open'

      this.prod = this.prod === 'fa-solid fa-close' ? 'fa-solid fa-bars' : 'fa-solid fa-close'
    }
  }
}
</script>

<template>
   <header class="header">

      <div id="icono-menu"  @click="alternarMenu">
   
         <i  :class="prod"></i>
      </div>

      <p class="title">Calzado Angelita</p>

      <div class="logo">
         <router-link to="/">
         <img src="../assets/IMG-20221125-WA0010.jpg" alt="">
      </router-link>
      </div>

      <nav id="navegation" :class="menu">
         <ul>
            
            <li>
               <i class="fa-solid fa-shoe-prints">
                  
               <router-link to="/calzados"  @click="alternarMenu" >Calzado</router-link>
               </i>
            </li>
            <li>
               <i class="fa-solid fa-bag-shopping"></i>
               <router-link to="/carteras" @click="alternarMenu">Carteras</router-link>
            </li>
            <li>
               <i class="fa-brands fa-product-hunt"></i>
               <router-link to="/productosNuevos" @click="alternarMenu">Lo nuevo</router-link>
            </li>
            <li>
               <i class="fa-solid fa-location-dot"></i>
               <router-link to="/mapa" @click="alternarMenu">Ubicacion</router-link>
            </li>
            <li>
               <i class="fa-solid fa-address-book"></i>
               <router-link to="/contactos" @click="alternarMenu">Contactos</router-link>
            </li>
            <li >
               <i class="fa-solid fa-user"></i>
               <router-link to="/login" @click="alternarMenu">Login</router-link>
            </li>
         </ul>

         <img src="../assets/IMG-20221125-WA0010.jpg" alt="angelita" class="nav--angelita">
  
      </nav>

   </header>
</template>
<style>


.header{
  width: 100%;
  position: sticky;
  top: 0;
  background-color:#4fa8fb;
  display: flex;
  justify-content: space-between;
  z-index: 1;
}


#icono-menu{
   display: none;
}
.title{
   display: none;
}
/* desaparecer el nombre de la tienda para mostrarlo solo cuando aparezca el menu hamburqguesa*/
.nav--angelita{
   display: none;
}
.logo{
   width: 4%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 1%;
   padding: 5px 0px;
}
.logo img{
   width: 45px;
   height: 45px;
   border-radius: 50%;
}
#navegation{
   display: flex;
   width: 75%;
   margin-top: 1%;
}
#navegation ul{
   display: flex;
   width: 100%;
   justify-content: space-around;

}

#navegation ul li{
   list-style: none;
}
#navegation ul li i{
   font-size: 25px;
   margin-right: 5px;
}
#navegation ul li a{
   text-decoration: none;
   color: white;
   font-size: 22px;
   padding-left: 4px;
   font-weight: 600;
}

#navegation ul li a:hover{
   text-decoration: none;
   color: #f86f61;
}
/* modo responsive para mitad de pantalla de pc y movil, ahi aparece el menu hamburguesa*/
@media only screen and (max-width: 900px){
  
   #icono-menu{
      display: flex;
      cursor: pointer;
      z-index: 10;
      width: 7%;
      margin-left: 1%;
      justify-content: center;
      align-items: center;
      transition: all .5s ease;
   }
   #icono-menu i{
      font-size: 35px;
   }
  .title{
   color: white;
   display: block;
   margin-top: 2%;
   font-weight: 600;
   font-size: 25px;
   width: 80%;
   text-align: center;
  }
  .logo{
   width: 7%;
   margin-right: 3%;
  }
   .menu--close{
      margin-left: -990px;
   }

   .menu--open{
      background-color:#4fa8fb;
      display: flex;
      width: 100px;
      position: absolute;
      left: 0;
      top: 6vh;
      transition: all .5s ease;
   }

   #navegation{
      display: flex;
      flex-wrap: wrap;
      position: absolute;
      width: 35%;
      overflow-x:auto;
   }  

   .menu--open ul{
      display:flex;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 6px;
   }
   .menu--open ul li{
      width: 100%;
      padding-top: 15%;
      padding-left: 5%;

   }
   .menu--open ul li a{
      width: 100%;
   }
   .menu--open ul li:hover{
      color: #f86f61;
   }
   
   .nav--angelita{
      display: block;
      width: 85%;
      margin:15% auto 5%;
      height: 20vh;
      border-radius: 10px;
   }

  

}
@media only screen and (max-width: 520px){
  

   #navegation{
      display: flex;
      flex-wrap: wrap;
      position: absolute;
      width: 50%;
      overflow-x:auto;
   }  
}

</style>
  



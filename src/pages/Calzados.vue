<template>
    <div class="productos">
 
      <div class="productos--buscar">
 
       
        <h1>Los mejores calzados </h1> 
         
        <input type="text" v-model="buscar"
        class="productos--buscar-input" placeholder="Buscar calzado"/>

      </div>
 
      <div class="productos--contenedor">
 
        <div class="productos--contenedor-detalle" v-for="item in items" v-bind:key="item.id">
        
 
          <div>
            <img :src="item.img" v-bind:alt="item.name">

            
           
            <h2 class="name">{{ item.name }}</h2>
            
            <p>
              <strong>Descripcion:</strong> {{ item.description }} 
            </p>

            <p>
              <strong>Promocion:</strong> {{ item.promocion }} 
            </p>

            <p>
              <strong>Marca:</strong> {{ item.marca }} 
            </p>

            <div class="comprar">
              <router-link to="/contactos" >Comprar
              </router-link>
            </div>
          
        </div>
 
        </div>
 
      </div>
 
    </div>
 </template>
 
 <script>
//  importamos el archivo .json de productos
 import datos from "../assets/json/zapatos.json";
 
 export default {
 
  
   data() {
     return {
       buscar: ''
     }
   },
  //buscamos productos por el nombre 
   computed: {
     items() {
       return datos.filter(item => {
         return item.name.toLowerCase().includes(this.buscar.toLowerCase());
       });
     },
 
   }
   
 }
 
 </script>
 

 <style>
 /* estilos para el contenedor de productos*/
.productos{
  width: 90%;
  margin: auto;
  margin-top: 20px;
}
/* estilos para el buscador*/
.productos--buscar{
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.productos--buscar h1{
  width: 100%;
  text-align: center;
}
.productos--buscar-input{
  width: 50%;
  text-align: center;
  border-radius: 8px;
  padding: 10px 0px;
  margin-top: 10px;
  border: none;
  outline: none;
  font-size: 20px;
}
/*estilos para cuando se le da click al input*/
.productos--buscar-input:focus{
  outline: 3px solid #f9a59a;
}

.productos--contenedor{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
/* estilos para cada producto*/
.productos--contenedor-detalle{
  width: 30%;
  margin: 10px auto;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
}
.productos--contenedor-detalle:hover{
  box-shadow: 0 0 15px 10px  #fff;
  background-color: #add5fa;
  margin-top: 2px;
}
.productos--contenedor-detalle .name{
  width: 100%;
  text-align: center;
  padding-top: 10px;
}
.productos--contenedor-detalle p{
  padding-top: 20px;
  text-align: center;
  font-size: 20px;
}

.productos--contenedor-detalle img{
  width: 80%;
  margin-left: 10%;
  height: 30vh;
  border-radius: 10px;
}
.productos--contenedor-detalle .comprar{
  width: 100%;
  display: flex;
  background-color: #f9a59a;
  padding: 20px 0px;
  border-radius: 10px;
  justify-content: center;
  margin-top: 10px;

}
.productos--contenedor-detalle .comprar a{
  padding: 5px 10px;
  background-color: white;
  border-radius: 5px;
  text-decoration: none;
  color: #4fa8fb;
  font-weight: 700;
}
.productos--contenedor-detalle .comprar a:hover{
  color: #4fa8fb;
  background-color: #4fa8fb;
  outline: 3px solid white;
  color: white;
}
/* modo responsive para mitad de pantalla de pc*/
@media only screen and (max-width: 800px){
  .productos--buscar-input{
    width: 70%;
  
  }
  .productos--contenedor-detalle{
    width: 45%;
    margin: 10px auto;
  }
}
/* modo responsive para movil*/
@media only screen and (max-width: 520px){
  .productos--buscar-input{
    width: 90%;
  }
  .productos--contenedor-detalle{
    width: 90%;
  }
}
</style>
 
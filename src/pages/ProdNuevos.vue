<template>
   <section class="loNuevo">

      <h3>Calzado Angelita siempre innova con sus productos, por eso te presentamos los zapatos Tommy</h3>
      <div class="loNuevo--product">
        
         <img src="https://scontent.fmga3-2.fna.fbcdn.net/v/t1.6435-9/117594221_1073364439724278_7392172295582791226_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_Wzrt5Q989MAX806FKz&_nc_ht=scontent.fmga3-2.fna&oh=00_AfDiLM8U-mJy5X4FWdH4YmI291ZavBUPScAs-E3VhEpZzA&oe=63AB642E" alt="tommy">
         <h3>Tennis Tommy</h3>
         <button @click="abrirProd">Detalles</button>

         <div :class="prod">
            <p>
              <strong>Marca:</strong> Nike 
            </p>
            <p>
              <strong>Descripcion:</strong>Color gris, talla 39 
            </p>

            <div class="comprar">
              <router-link to="/contactos" >Comprar
              </router-link>
            </div>
         </div>
         

      </div>
   </section>
</template>
<style>
.loNuevo{
   width: 90%;
   margin: 10px auto;
   display: flex;
   flex-wrap: wrap;

}
.loNuevo h3{
   width: 100%;
   margin: 10px auto;
   text-align: center;


}
.loNuevo--product{
   width: 40%;
   margin: 10% auto;
   background-color: aqua;
   border-radius: 10px;
}
.loNuevo--product img{
   width: 80%;
   margin-left: 10%;
   margin-top: 10px;
   border-radius: 10px;
   height: 20vh;
}
.loNuevo--product button{
   width: 30%;
   margin: 30px 35%;
   padding: 5px 15px;
   background-color: #f86f61;
   border: none;
   color: white;
   font-size: 15px;
   border-radius: 6px;
   margin-bottom: 10px;
   cursor: pointer;
}



.prod--close{
      display: none;
   }

.prod--open{
   display: flex;
   width: 100%;
   flex-wrap: wrap;
   text-align: center;
   transition: all .5s ease;
}
.prod--open p{
   text-align: left;
   padding: 10px;
   width: 100%;
}
.prod--open .comprar{
   width: 100%;
   margin: 20px;
}
.prod--open a:hover{
   text-align: center;
   padding: 10px;
   width: 40%;
   border-radius: 10px;
   text-decoration: none;
   color: white;
   background-color: #f86f61;
}
.prod--open a{
   text-align: center;
   padding: 10px;
   width: 40%;
   border-radius: 10px;
   text-decoration: none;
   color: #f86f61;
   background-color: #fff;
   outline: 4px solid #f86f61;
}
@media only screen and (max-width: 520px){
   .loNuevo--product{
      width: 90%;
      margin: 10% auto;
      background-color: aqua;
      border-radius: 10px;
   }
}


</style>
<script>
  import datos from "../assets/json/nuevos.json";

  export default {
  data() {
    return {
      prod:'prod--close'
    }

  },
  methods: {
    
    abrirProd() {
      // this.color = this.color === 'red' ? 'green' : 'red'
      this.prod = this.prod === 'prod--open' ? 'prod--close' : 'prod--open'
    }
  }
}
</script>